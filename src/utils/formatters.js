/** Formats a whole-dollar amount the way the studio displays prices, e.g. "$1,375 AUD". */
export function formatAud(amount) {
  return `$${amount.toLocaleString('en-AU')} AUD`;
}
