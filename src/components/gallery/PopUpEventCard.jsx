import { getCalendarParts } from '../../utils/dates';

const TAG_TONE_CLASSES = {
  green: 'text-emerald-700 bg-emerald-100',
  brand: 'text-brand-700 bg-brand-100',
  rose: 'text-rose-700 bg-rose-100',
};

const DATE_BOX_CLASSES =
  'w-14 h-14 shrink-0 rounded-xl bg-brand-100 flex flex-col items-center justify-center text-brand-900';

/** "Location • time" with whatever is confirmed; "coming soon" stands in for the rest. */
function eventDetails({ location, timeRange }) {
  if (!location && !timeRange) return 'Location & time coming soon';
  return [location ?? 'Location coming soon', timeRange ?? 'Time coming soon'];
}

export default function PopUpEventCard({ event }) {
  const toneClass = TAG_TONE_CLASSES[event.tagTone] ?? TAG_TONE_CLASSES.brand;
  const details = eventDetails(event);
  const calendar = event.date ? getCalendarParts(event.date) : null;

  return (
    <li className="p-4 bg-white rounded-2xl border border-brand-200 flex items-center gap-4">
      {calendar ? (
        <time dateTime={event.date} className={DATE_BOX_CLASSES}>
          <span className="text-[10px] uppercase font-bold text-brand-600">{calendar.monthLabel}</span>
          <span className="font-serif text-xl font-bold">{calendar.dayLabel}</span>
        </time>
      ) : (
        <div className={DATE_BOX_CLASSES} aria-label="Date to be confirmed">
          <span className="text-[10px] uppercase font-bold text-brand-600">Date</span>
          <span className="font-serif text-lg font-bold">TBC</span>
        </div>
      )}
      <div>
        <h4 className="font-medium text-sm text-brand-900">{event.title}</h4>
        <p className="text-xs text-brand-600">
          {Array.isArray(details) ? (
            <>
              {details[0]} • <span className="whitespace-nowrap">{details[1]}</span>
            </>
          ) : (
            details
          )}
        </p>
        {event.tag && (
          <span className={`inline-block mt-1 text-[10px] px-2 py-0.5 rounded ${toneClass}`}>{event.tag}</span>
        )}
      </div>
    </li>
  );
}
