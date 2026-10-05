import { useId } from 'react';

export default function TimeSlotPicker({ label, slots, selectedSlot, onSelect }) {
  const labelId = useId();

  return (
    <div>
      <span id={labelId} className="form-label">
        {label}
      </span>
      <div role="group" aria-labelledby={labelId} className="grid grid-cols-3 gap-2">
        {slots.map((slot) => {
          const isSelected = slot === selectedSlot;
          return (
            <button
              key={slot}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onSelect(slot)}
              className={`py-2 text-xs rounded-xl border border-brand-200 transition-colors ${
                isSelected ? 'bg-brand-800 text-white' : 'text-brand-800 hover:bg-brand-100'
              }`}
            >
              {slot}
            </button>
          );
        })}
      </div>
    </div>
  );
}
