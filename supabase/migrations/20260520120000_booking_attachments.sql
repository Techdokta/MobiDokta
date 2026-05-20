-- Booking attachments: private storage bucket + paths column on bookings
-- Customer uploads damage photos through the booking wizard; admin views them in the dashboard modal.
-- POPIA: photos are personal information. Retention should match bookings (2 years) — enforce via scheduled job.

-- 1. Bookings table: array of storage object paths for this booking's attachments
ALTER TABLE public.bookings
  ADD COLUMN IF NOT EXISTS attachment_paths text[] DEFAULT ARRAY[]::text[];

-- 2. Private bucket with 5 MB per-file cap and image-only mime allowlist
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'booking-attachments',
  'booking-attachments',
  false,
  5242880,
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif']
)
ON CONFLICT (id) DO UPDATE
SET file_size_limit = EXCLUDED.file_size_limit,
    allowed_mime_types = EXCLUDED.allowed_mime_types,
    public = false;

-- 3. RLS policies on storage.objects scoped to this bucket
--    anon + authenticated can INSERT (upload during booking)
--    only authenticated (admin) can SELECT (view in dashboard)
--    only authenticated (admin) can DELETE (cleanup / retention)
--    no UPDATE policy — attachments are immutable once uploaded

DROP POLICY IF EXISTS "booking_attachments_insert" ON storage.objects;
CREATE POLICY "booking_attachments_insert"
  ON storage.objects FOR INSERT
  TO anon, authenticated
  WITH CHECK (bucket_id = 'booking-attachments');

DROP POLICY IF EXISTS "booking_attachments_select" ON storage.objects;
CREATE POLICY "booking_attachments_select"
  ON storage.objects FOR SELECT
  TO authenticated
  USING (bucket_id = 'booking-attachments');

DROP POLICY IF EXISTS "booking_attachments_delete" ON storage.objects;
CREATE POLICY "booking_attachments_delete"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'booking-attachments');
