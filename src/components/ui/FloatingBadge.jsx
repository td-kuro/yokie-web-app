/** Small icon label that floats over the corner of a photo card (hidden on phones). */
export default function FloatingBadge({ icon, iconColorClass, title, subtitle, className }) {
  return (
    <div
      className={`absolute backdrop-blur-md p-4 rounded-2xl shadow-lg z-30 hidden sm:flex items-center gap-3 border border-white ${className}`}
    >
      <div className={`w-10 h-10 rounded-full bg-white flex items-center justify-center ${iconColorClass}`}>
        <i className={`fa-solid ${icon}`} aria-hidden="true" />
      </div>
      <div>
        <p className="text-xs font-bold text-slate-800">{title}</p>
        <p className="text-[10px] text-slate-600">{subtitle}</p>
      </div>
    </div>
  );
}
