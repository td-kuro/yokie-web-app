// Which page is showing: set by <div id="root" data-page="…"> in each HTML file (index.html, terms/index.html).
export const currentPage = document.getElementById('root')?.dataset.page ?? 'home';

// Sub-pages live one folder down (/terms/), so links back to the homepage need "../".
const toSiteRoot = currentPage === 'home' ? '' : '../';

/**
 * Turns a link written from the homepage ('#workshops', 'terms/') into one that works on the
 * current page. On the homepage it's unchanged; on /terms/ '#workshops' becomes '../#workshops'.
 */
export function siteHref(href) {
  if (href === '#') return toSiteRoot || '#';
  if (/^(https?:|mailto:|tel:)/.test(href)) return href;
  return toSiteRoot + href;
}

export const TERMS_HREF = 'terms/';
