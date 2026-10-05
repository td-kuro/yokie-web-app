import { getCalendarParts } from '../../utils/dates';

const TAG_TONE_CLASSES = {
  green: 'text-emerald-700 bg-emerald-100',
  brand: 'text-brand-700 bg-brand-100',
  rose: 'text-rose-700 bg-rose-100',
};

export default function PopUpEventCard({ event }) {
  const { monthLabel, dayLabel } = getCalendarParts(event.date);
  const toneClass = TAG_TONE_CLASSES[event.tagTone] ?? TAG_TONE_CLASSES.brand;

  return (
    <li className="p-4 bg-white rounded-2xl border border-brand-200 flex items-center gap-4">
      <time
        dateTime={event.date}
        className="w-14 h-14 shrink-0 rounded-xl bg-brand-100 flex flex-col items-center justify-center text-brand-900"
      >
        <span className="text-[10px] uppercase font-bold text-brand-600">{monthLabel}</span>
        <span className="font-serif text-xl font-bold">{dayLabel}</span>
      </time>
      <div>
        <h4 className="font-medium text-sm text-brand-900">{event.title}</h4>
        <p className="text-xs text-brand-600">
          {event.location} • {event.timeRange}
        </p>
        {event.tag && (
          <span className={`inline-block mt-1 text-[10px] px-2 py-0.5 rounded ${toneClass}`}>{event.tag}</span>
        )}
      </div>
    </li>
  );
}
