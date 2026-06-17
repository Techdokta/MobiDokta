(function () {
  var toasts = [
    { name: 'Thabo M.', city: 'Pretoria CBD', service: 'Samsung Galaxy S23 screen repair' },
    { name: 'Liezel van Wyk', city: 'Centurion', service: 'iPhone 14 Pro battery replacement' },
    { name: 'Sipho N.', city: 'Danville, Pretoria', service: 'MacBook Pro thermal treatment' },
    { name: 'Priya Naidoo', city: 'Hatfield', service: 'Samsung Z Fold screen repair' },
    { name: 'Francois du Plessis', city: 'Pretoria West', service: 'PS5 HDMI port surgery' },
    { name: 'Zanele Dlamini', city: 'Sunnyside', service: 'iPhone 13 screen replacement' },
    { name: 'Riaan Botha', city: 'Lyttelton', service: 'Samsung A54 charging port repair' },
    { name: 'Nomsa Khumalo', city: 'Atteridgeville', service: 'Huawei P30 battery replacement' },
    { name: 'Ahmed Moosa', city: 'Mamelodi', service: 'iPhone 12 back glass repair' },
    { name: 'Petra Venter', city: 'Menlyn', service: 'MacBook screen replacement' },
    { name: 'Lerato Sithole', city: 'Silverton', service: 'Samsung Galaxy A34 screen repair' },
    { name: 'Wynand Grobler', city: 'Erasmia', service: 'Laptop thermal paste service' },
    { name: 'Fatima Essop', city: 'Laudium', service: 'iPad screen repair' },
    { name: 'Sizwe Mthembu', city: 'Cosmo City', service: 'Samsung S22 Ultra screen repair' },
    { name: 'Anine Steyn', city: 'Garsfontein', service: 'iPhone 15 battery replacement' },
  ];

  var container = null;
  var idx = Math.floor(Math.random() * toasts.length);

  function createContainer() {
    container = document.createElement('div');
    container.id = 'md-toast-container';
    container.setAttribute('aria-live', 'polite');
    container.setAttribute('aria-atomic', 'false');
    container.style.cssText = [
      'position:fixed',
      'bottom:100px',
      'left:20px',
      'z-index:9998',
      'display:flex',
      'flex-direction:column',
      'gap:10px',
      'pointer-events:none',
    ].join(';');
    document.body.appendChild(container);
  }

  function showToast() {
    if (!container) createContainer();

    var entry = toasts[idx % toasts.length];
    idx++;

    var toast = document.createElement('div');
    toast.setAttribute('role', 'status');
    toast.style.cssText = [
      'background:rgba(15,15,25,0.92)',
      'border:1px solid rgba(100,220,120,0.25)',
      'border-radius:12px',
      'padding:12px 16px',
      'max-width:300px',
      'display:flex',
      'align-items:flex-start',
      'gap:12px',
      'box-shadow:0 4px 24px rgba(0,0,0,0.4)',
      'pointer-events:auto',
      'opacity:0',
      'transform:translateX(-20px)',
      'transition:opacity 0.4s ease,transform 0.4s ease',
      'backdrop-filter:blur(8px)',
    ].join(';');

    var icon = document.createElement('div');
    icon.style.cssText = 'width:36px;height:36px;border-radius:50%;background:rgba(100,220,120,0.15);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px;';
    icon.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64dc78" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.5 19.79 19.79 0 01.22 4.14 2 2 0 012.2 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.4a16 16 0 006.69 6.69l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>';

    var text = document.createElement('div');
    text.style.cssText = 'flex:1;min-width:0;';

    var name = document.createElement('div');
    name.style.cssText = 'font-size:13px;font-weight:600;color:#e8eaf0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;';
    name.textContent = entry.name + ' • ' + entry.city;

    var svc = document.createElement('div');
    svc.style.cssText = 'font-size:12px;color:#9a9db0;margin-top:2px;';
    svc.textContent = 'Just booked: ' + entry.service;

    var time = document.createElement('div');
    time.style.cssText = 'font-size:11px;color:#64dc78;margin-top:4px;';
    time.textContent = 'moments ago';

    text.appendChild(name);
    text.appendChild(svc);
    text.appendChild(time);
    toast.appendChild(icon);
    toast.appendChild(text);
    container.appendChild(toast);

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(0)';
      });
    });

    setTimeout(function () {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-20px)';
      setTimeout(function () {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 400);
    }, 5000);
  }

  function scheduleNext() {
    var delay = 58000 + Math.floor(Math.random() * 32000);
    setTimeout(function () {
      showToast();
      scheduleNext();
    }, delay);
  }

  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
      showToast();
      scheduleNext();
    }, 3000);
  });
})();
