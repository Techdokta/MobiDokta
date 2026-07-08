/* Ensure every page starts at the top regardless of browser scroll restoration */
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.scrollTo(0, 0);
