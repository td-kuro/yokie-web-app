import { useState } from 'react';
import WorkshopCard from '../../components/workshops/WorkshopCard';
import WorkshopFilters from '../../components/workshops/WorkshopFilters';
import LoadErrorMessage from '../../components/ui/LoadErrorMessage';
import { bookingPolicies } from '../../data/bookingPolicies';
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
            Choose a session below and book a table for 2–6 guests, from a catch-up with friends to a small private
            celebration.
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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6" aria-busy={status === 'loading'}>
          {visibleWorkshops.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))}
        </div>

        <div className="mt-16 bg-brand-50 rounded-3xl border border-brand-100 p-6 sm:p-10">
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-brand-900 text-center mb-8">
            Good to know <span className="italic text-brand-600">before you book</span>
          </h3>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            {bookingPolicies.map((policy) => (
              <div key={policy.title} className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-white border border-brand-200 flex items-center justify-center text-brand-500">
                  <i className={`fa-solid ${policy.icon}`} aria-hidden="true" />
                </div>
                <div>
                  <dt className="font-medium text-sm text-brand-900">{policy.title}</dt>
                  <dd className="text-sm text-brand-700 font-light leading-relaxed mt-1">{policy.text}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
