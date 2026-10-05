export default function WorkshopFilters({ categories, activeCategory, onChange }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mt-8" role="group" aria-label="Filter workshops">
      {categories.map((category) => {
        const isActive = category.id === activeCategory;
        return (
          <button
            key={category.id}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(category.id)}
            className={`px-5 py-2 rounded-full text-xs font-medium border border-brand-200 transition-all ${
              isActive ? 'bg-brand-800 text-white' : 'bg-white text-brand-800 hover:bg-brand-100'
            }`}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
