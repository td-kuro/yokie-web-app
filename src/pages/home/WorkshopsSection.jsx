import { useState } from 'react';
import WorkshopCard from '../../components/workshops/WorkshopCard';
import WorkshopFilters from '../../components/workshops/WorkshopFilters';
import LoadErrorMessage from '../../components/ui/LoadErrorMessage';
import { workshopCategories } from '../../data/workshops';
import { useWorkshops } from '../../hooks/useCatalog';

const ALL_CATEGORIES = 'all';

export default function WorkshopsSection() {
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORIES);
  const { data: workshops, status } = useWorkshops();

  const visibleWorkshops =
    activeCategory === ALL_CATEGORIES
      ? workshops
      : workshops.filter((workshop) => workshop.category === activeCategory);

  return (
    <section id="workshops" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="eyebrow mb-2">Hands-On Experiences</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-brand-900">Our Signature Studio Workshops</h2>
          <p className="text-brand-700 mt-3 font-light">
            Select a session below to book individual tickets, group tables, or private celebrations.
          </p>

          <WorkshopFilters
            categories={workshopCategories}
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        <LoadErrorMessage status={status}>
          We couldn&apos;t load our workshops right now. Please refresh the page or try again shortly.
        </LoadErrorMessage>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" aria-busy={status === 'loading'}>
          {visibleWorkshops.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))}
        </div>
      </div>
    </section>
  );
}
