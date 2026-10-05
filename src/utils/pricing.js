/**
 * Parses a guest-count input value. Empty, invalid or non-positive values fall back
 * to `fallback` so live price estimates never show $0 or negative totals.
 */
export function parseGuestCount(value, fallback) {
  const count = Number.parseInt(value, 10);
  return count > 0 ? count : fallback;
}

export function calculateSubtotal(items) {
  return items.reduce((total, item) => total + item.price, 0);
}
