# MobiDokta — Business Sustainability & Adaptation Strategy

**Written:** 28 July 2026
**Scope:** MobiDokta (repair) · Appl3City (device sales) · ASI Imperium Technologies (B2B ICT)
**Review cadence:** quarterly, with a hard re-base of the price list every 6 months (see §2)

---

## 0. The thesis in one paragraph

MobiDokta does not sell screen replacements. It sells **certainty about a device** — is it fixable, is it
genuine, is it stolen, is my data still there, is this damage what the client says it is, what is it worth.
Parts are a delivery mechanism for that certainty, and parts are the part of the business most exposed to
things outside your control (manufacturers, the rand, import channels). Every strategic move in this document
pushes revenue away from *parts you resell* and toward *judgements only you can make*. That is what makes it
survivable.

The insurance assessment line added on 28 July 2026 is the first pure expression of that thesis: no part is
sold, no stock is carried, the deliverable is a signed technical judgement, and the price is set by the value
of the decision it unlocks — not by the cost of a component.

---

## 1. The five forces that decide whether this business exists in 2031

Ranked by how much damage they can do, not by how likely they feel today.

### 1.1 Parts pairing and component serialisation — **the existential one**

**What's coming.** Manufacturers increasingly serial-lock components to the logic board. A genuine screen
fitted by an independent throws "unknown part" warnings, loses True Tone or Face ID, or degrades
functionality. Apple has softened this under regulatory pressure and via Self Service Repair; the direction of
travel is genuinely uncertain, and it varies by model, region and part.

**What it does to you.** It attacks the highest-volume, most predictable revenue line — screens and batteries.
A business that is 70% screen-and-battery is one firmware update away from a bad year.

**What already hedges it.**
- Board-level micro-soldering (REWA standards) — cannot be serialised away. If the board is the patient, no
  pairing regime helps the manufacturer.
- Diagnostics, data recovery, IMEI verification, insurance assessment — information services, zero parts
  exposure.
- Appl3City — you trade whole devices, where pairing is irrelevant.
- Glass-only replacement (OCA) — reuses the *original paired* OLED, which sidesteps pairing entirely and is
  already priced on the site at R399.

**What to do.** Track the share of gross profit that comes from parts-dependent work. Do not let it exceed
55%. Every quarter, ask one question: *if pairing tightened hard next month, what percentage of this quarter's
profit disappears?* Write the number down. Push it down over time.

### 1.2 The rand and the import channel — **the margin killer**

**What's coming.** Parts are priced in USD/CNY. A published "from R599" price list is a fixed-rand promise
against a floating-cost input. Rand weakness does not reduce your revenue; it silently eats the margin on
every job while the website keeps quoting yesterday's price.

**What it does to you.** Death by a thousand cuts. The business looks busy and feels poor. This is the most
common way a repair shop fails while turnover is growing.

**What already hedges it.** "From R" pricing everywhere on the site gives headroom. Labour-only and service
revenue (assessment R650, data recovery from R799, diagnostics, consultation) is rand-denominated and
completely immune to import cost.

**What to do.**
1. **Re-base the price list on a schedule, not on a feeling.** Every 6 months, recompute landed part cost at
   the current rate and reset the floor prices. Put the review date in the calendar; a price list that has not
   been touched in a year is a loss-making price list.
2. Hold a **rand buffer in the margin**: price parts at landed cost + a stated percentage, not at a
   remembered rand figure.
3. Buy parts in larger batches when the rate is favourable *only* for high-turn SKUs (common screens,
   batteries, the R399 chargers). Slow-moving stock bought on a good rate is still dead capital.
4. Grow the service lines deliberately, because they carry no currency risk at all. **This is the strongest
   available hedge and it costs nothing to build.**

### 1.3 Device longevity and lengthening upgrade cycles — **the volume squeeze**

**What's coming.** Phones last longer, get more OS updates, and are built somewhat more repairably under
right-to-repair pressure. People keep devices 4–5 years instead of 2–3.

**What it does to you.** Cuts both ways, and the net is *good* if you position for it:
- Fewer devices in circulation breaking per year per person → downward pressure on job volume.
- But older devices in service for longer → **more** repairs per device over its life, higher-value repairs
  (batteries, board work, ports, refurbishing), and a much larger certified pre-owned market.

**What to do.** Position as the business that *keeps a device alive for five years*, not the one that patches
it once. Concretely: refurbishing (already live, from R800), battery health as a recurring touchpoint,
condition grading, and trade-in feeding Appl3City. The customer relationship should be measured in years and
repeat visits, not in single tickets.

### 1.4 Revenue concentration — walk-in dependency

**What's coming.** Nothing external. This is a structural weakness you already carry: one shop, in Danville,
dependent on foot traffic, weather, local economy, and a location that gets confused with the neighbouring IT
shop in the same complex.

**What it does to you.** Caps the business at the size of the catchment area and makes revenue volatile
week to week for reasons you cannot influence.

**What already hedges it.** The courier operation (R199 nationwide insured, return free over R1,500) already
converts a local shop into a national service at zero additional capex. Campus channel. Enterprise/Emetech
B2B. And now the assessment line, which is *inherently* location-independent — a broker in Cape Town does not
care where the bench is.

**What to do.** Shift the revenue mix toward **contracted and recurring** work (§5). The target: no single
channel above 40% of gross profit, and contracted B2B above 30% within 18 months.

### 1.5 Discovery moving from search to AI answers

**What's coming.** A growing share of "where do I fix my iPhone in Pretoria" never reaches a search results
page — it gets answered inside an AI assistant.

**What it does to you.** If the assistant does not know your prices, hours, guarantees and location, you are
invisible in the channel that is growing fastest, regardless of your Google ranking.

**What already hedges it.** `llms.txt` is already built, structured, priced and explicitly welcoming AI
crawlers in `robots.txt`. Schema.org markup across service pages. This is genuinely ahead of nearly every
competitor in the market.

**What to do.** Treat `llms.txt` as a **living price list** with the same discipline as the website — when a
price changes, it changes in both places in the same commit. It has just been updated with the full assessment
service. Keep the Q&A block growing: every question a customer actually asks on WhatsApp is a question an
assistant will be asked.

---

## 2. The counter-cyclical position — read this before worrying about the economy

Repair and certified pre-owned are **counter-cyclical**. When money is tight:

- Fewer people buy new devices → more people repair the one they have.
- More people buy pre-owned instead of new → Appl3City demand rises.
- More people insure devices and *claim* on them rather than absorb the loss → assessment demand rises.
- Businesses defer fleet replacement and repair instead → B2B repair demand rises.

South Africa's economic conditions are a **tailwind for this business model**, not a headwind. That is not
optimism, it is structure: you sell the substitute good. The risk in a weak economy is not demand
disappearing — it is customers becoming more price-sensitive and slower to pay, which is a pricing and terms
problem, not an existential one.

**The implication for pricing.** Do not respond to a weak economy by cutting prices across the board. Respond
by **widening the ladder** — keep a genuinely cheap entry option (aftermarket eco screens, glass-only at R399)
so nobody is priced out, while holding premium pricing for OEM and for judgement work where the value is
obvious. The site already does this with tiered screen options. Extend the same logic everywhere.

---

## 3. Consumer logic and emotion — the filter for choosing what to build next

People do not buy repairs. They buy their way out of a feeling. Every high-margin line in this business maps
to an emotion, and the strength of the emotion sets the price ceiling — not the labour hours.

| Emotion | What they actually want | Existing service | Pricing power |
|---|---|---|---|
| **Panic** — "my data is gone" | Reassurance, speed, any chance | Data recovery (from R799), water damage | Very high |
| **Panic** — "my phone was stolen" | Someone on my side, action now | MobiShield, IMEI blacklist | High (trust-building, low direct margin) |
| **Suspicion** — "is this used phone dodgy?" | Permission to hand over money | IMEI check, CheckForYou, condition grading | High, near-zero cost |
| **Helplessness** — "the insurer wants a report I don't understand" | Someone who speaks their language | **Insurance assessment (new)** | Very high |
| **Distrust** — "the last shop lied to me" | Transparency, being shown the part | Tiered pricing, disclosed battery health, honest AASP disclosure | Converts, doesn't price |
| **Embarrassment** — "I cracked it again" | No judgement, fast, discreet | Studio drop-off, courier | Moderate |
| **Time pressure** — student deadline, work device | Speed above all | Same-day, fast-track tiers | High — people pay for hours |
| **Boredom / dread of waiting** | Not sitting in a plastic chair | TRi gaming lounge | Indirect: wins the choice |

**The rule for adding any new service:** name the emotion first. If you cannot name an unserved emotion, it is
a feature, not a service, and it will not command a price. The assessment line was worth building precisely
because *helplessness in front of an insurer* was completely unserved and is a strong feeling.

**The corollary, and it matters:** the honest disclosures on this site — not being an Apple Authorised Service
Provider, stating that third-party repair affects manufacturer warranty, telling assessment clients to check
their policy *before* paying you — are not compliance overhead. They are the product. In a market where
customers arrive pre-burned by someone who lied to them, verifiable honesty is the differentiator that
competitors cannot copy without changing who they are.

---

## 4. Technology change — where to lean in, where to ignore the noise

**Lean in:**
- **Board-level and micro-soldering depth.** The harder the work, the less substitutable you are, and the
  less exposed to parts politics. This is the single best technical investment.
- **Diagnostics as a product.** You already own the bench skill. The assessment line proves it can be sold
  as information. The parent company (ASI Imperium) is a software and AI business — the natural next step is
  productising the assessment: a structured intake, a standardised report engine, a searchable claim history.
  The report template built today (`admin/assessment-report.html`) is deliberately the first step toward that.
- **New device categories as they enter insurance schedules.** Wearables, drones, e-bikes and scooters, smart
  home, EV accessories. Whatever gets insured needs assessing, and being early in a category is how you become
  the default assessor for it.
- **AI-assisted discovery** (§1.5) — already ahead, keep it fed.

**Ignore, or at least do not chase:**
- Any tool or certification that only makes sense at 10x current volume.
- Chasing every new device launch with stock. Let demand pull.
- Crypto/Web3-adjacent anything. No emotion, no market here.

---

## 5. Revenue architecture — the target shape

Four layers, in increasing order of how much they protect you:

| Layer | Examples | Character | Target share of gross profit |
|---|---|---|---|
| **1. Transactional** | Walk-in screens, batteries, accessories | Volatile, parts-exposed, currency-exposed | ≤ 40% |
| **2. Repeat / relationship** | Refurbishing, trade-in, returning customers, campus | Predictable-ish, builds equity | ~20% |
| **3. Contracted / recurring** | Broker & insurer panels, corporate fleet SLAs, Emetech, managed IT, assessment retainers | **Bankable, forecastable, location-independent** | ≥ 30% |
| **4. Asset / spread** | Appl3City device sales, salvage buy-back, refurbished stock | Capital-hungry but high-margin | ~10% |

Today the business is heavily layer 1. **The whole point of the assessment line is that it is the cheapest
available door into layer 3** — no stock, no capex, uses the bench and courier network you already have, and
one broker relationship produces recurring volume rather than one ticket.

**The compounding loop, which is the real reason this line matters:**

```
Assessment (layer 3)
   ├─ claim approved  → repair revenue          → feeds layer 1/2
   ├─ written off     → certified erasure + disposal certificate → recurring compliance fee
   │                  → salvage buy-back        → feeds Appl3City (layer 4)
   │                  → replacement sourcing    → feeds Appl3City (layer 4)
   ├─ broker relationship → more assessments    → deepens layer 3
   └─ corporate fleet     → managed IT / ASI    → layer 3 at higher value
```

Every branch of that tree lands on capability you already have. No branch requires new capex. That is what a
genuine multiplier looks like, as opposed to a new business dressed up as a service line.

---

## 6. Where the money is moving — South Africa and globally

Directional, and each worth verifying with current data before you commit real money:

1. **Device and gadget insurance is growing in South Africa.** More devices, higher device values, more
   cover sold at point of sale and through banks. Every policy written is a future assessment. This is the
   flow the new line plugs into.
2. **Certified pre-owned is a global growth market**, and structurally stronger in emerging markets where new
   flagship pricing has outrun incomes. Appl3City sits directly in this. The credible differentiator is the
   grading report — the same engine as the assessment.
3. **E-waste compliance is becoming a legal obligation**, not a courtesy. Corporates and insurers will
   increasingly *need* certified disposal and data destruction paperwork. Almost nobody in this market offers
   it cleanly bundled. It is a small fee attached to work you are already doing, and it is recurring.
4. **POPIA-driven data destruction demand** is the same shape: compliance obligations create recurring
   documented services with very little competition.
5. **Cross-border, later.** Neighbouring SADC markets have thinner authorised-repair coverage than SA. Only
   worth looking at once the courier-based national model is running smoothly and profitably — not before.

**The honest constraint:** every one of these is a B2B relationship business, and B2B moves slowly. Budget
6–12 months from first broker conversation to steady volume. Do not build cost against revenue that has not
arrived yet.

---

## 7. Sequence — what to do, in order

Deliberately conservative. Each step is cheap and validates the next.

1. **✅ Done (28 Jul 2026)** — Assessment service page live, report template built, broker one-pager drafted,
   `llms.txt` and search index updated.
2. **Next: get the price and process right on real work.** Take the next 3–5 insurance jobs that walk in.
   Use the template every time. Measure actual bench time and write-up time. If R650 does not cover the real
   hours, fix the price now, before a broker is watching.
3. **Build the sample pack.** Two anonymised completed reports. This is the single highest-value asset in the
   plan — it converts "we do assessments" into "here is what you get."
4. **Then approach 2–3 local brokers**, with the one-pager and the sample reports. Not before step 3. Walking
   in with a polished report is a completely different conversation to walking in with an idea.
5. **Prove the 24-hour SLA on real volume** before signing anything that commits you to it contractually.
   A missed SLA on a signed agreement costs more than the revenue it earns.
6. **Then add the write-off tail properly** — verified erasure procedure, a licensed e-waste partner, and
   printed certificates. Sell it into the relationships from step 4, where it is an easy yes.
7. **Then fleet/corporate**, using Emetech as the reference. Highest value per relationship, longest sales
   cycle, needs the credibility of steps 3–6 behind it.
8. **Only then** consider productising the assessment as software with ASI Imperium.

**What not to do:** approach insurers before brokers. Corporate procurement desks are slow, formal, and will
ask for a track record you do not yet have. Brokers are small, local, relationship-driven and can say yes in
one meeting.

---

## 8. The monthly dashboard — few enough to actually track

If you track twenty numbers you will track none. Track these eight:

| # | Metric | Why it matters | Watch for |
|---|---|---|---|
| 1 | Gross profit (not turnover) | Turnover flatters; margin tells the truth | Turnover up, GP flat = currency or pricing problem |
| 2 | % of GP from parts-dependent work | Exposure to pairing + rand (§1.1, §1.2) | Above 55% = concentrated risk |
| 3 | % of GP from contracted/recurring | Layer-3 progress (§5) | Below 15% after 12 months = the plan stalled |
| 4 | Average job value | Are you moving up the value ladder | Falling = drifting into commodity work |
| 5 | Repeat-customer rate | Whether you own relationships or transactions | The cheapest growth lever you have |
| 6 | Assessment turnaround, actual hours | The whole promise of the new line | Any breach of 24h on fast-track is a red alert |
| 7 | Report acceptance rate (first submission) | The real quality measure of the new line | Below 90% = the format needs work |
| 8 | Landed part cost vs. list price, top 10 SKUs | Early warning on rand erosion (§1.2) | Any SKU under target margin = re-base now |

Review monthly. Re-base prices every 6 months regardless of what the numbers say.

---

## 9. What would actually kill this business

Named plainly, because unnamed risks do not get managed.

1. **Margin erosion nobody noticed.** Busy shop, growing turnover, quietly unprofitable because the price
   list is 14 months old and the rand moved. **Most likely failure mode by a wide margin.** Mitigation: §8
   metric 1, 2 and 8, and the 6-month re-base discipline.
2. **A reputation event.** One report that an insurer decides was written to suit the client, one device lost
   in courier, one data breach. In a trust business the damage is not proportional to the incident.
   Mitigation: the independence declaration is in the report template and on the public page for exactly this
   reason. Never sign a report you would not defend. Insure the courier legs. POPIA discipline on every job.
3. **Overtrading on a big contract.** Signing a fleet or panel SLA you cannot physically service, then
   breaching it. Mitigation: step 5 above — prove the turnaround before committing to it in writing.
4. **Key-person dependency.** The technical skill and the client relationships currently sit in one person.
   This is the hardest one to fix and the most important. Mitigation: document procedures (the report template
   is a start), and train a second pair of hands on the standard work so the skilled hours go to the
   high-value work.
5. **Diversifying into things with no shared engine.** Every line in this document reuses the bench, the
   courier network, or the customer relationship. The moment a new idea requires none of those, it is a
   different business competing with this one for attention and cash.

---

## 10. The one sentence to hold onto

Sell judgement, not parts; move revenue from transactions to contracts; re-base prices every six months; and
never sign anything — a report or an SLA — you cannot defend. Everything else in this document is detail.

---

*Related: `insurance-assessments.html` (public service page) · `admin/assessment-report.html` (report
builder) · `admin/broker-partnership-offer.html` (partner one-pager) · `llms.txt` (AI-discovery price list)*
