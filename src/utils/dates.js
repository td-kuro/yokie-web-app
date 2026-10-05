const MONTH_ABBREVIATIONS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

/**
 * Splits a "YYYY-MM-DD" date into display parts without going through `Date`,
 * which would parse it as UTC and can shift the day in some time zones.
 */
export function getCalendarParts(isoDate) {
  const [, month, day] = isoDate.split('-');
  return { monthLabel: MONTH_ABBREVIATIONS[Number(month) - 1], dayLabel: day };
}

/** Today's date in the visitor's local time zone, as "YYYY-MM-DD" (for `<input type="date" min>`). */
export function getTodayIsoDate() {
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${today.getFullYear()}-${month}-${day}`;
}
