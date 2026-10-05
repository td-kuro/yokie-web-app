import CorporateQuoteForm from '../../components/corporate/CorporateQuoteForm';

const FEATURES = [
  {
    icon: 'fa-wand-magic-sparkles',
    title: 'Zero-Mess Setup',
    description: 'No heating or heavy cleanup required for liquid & keychain bars.',
  },
  {
    icon: 'fa-tags',
    title: 'Custom Branding',
    description: 'Add your company logo to diffuser labels and gift boxes.',
  },
];

const BENEFITS = [
  'Capacity for 10 to 200+ guests simultaneously',
  'Includes dedicated master perfumer & facilitators',
];

export default function CorporateSection() {
  return (
    <section id="corporate" className="py-20 bg-brand-100/60 border-y border-brand-200/60">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="eyebrow text-brand-600">B2B & Private Events</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-brand-900">
              Elevate Team Events with Interactive Scent Bars
            </h2>
            <p className="text-sm text-brand-800 leading-relaxed font-light">
              Designed specifically for HR teams, brand pop-ups, and studio collaborations. We bring our mobile sensory
              bar directly to your venue or office with zero mess and complete custom branding options.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {FEATURES.map((feature) => (
                <div key={feature.title} className="bg-white p-4 rounded-xl border border-brand-200/80">
                  <i className={`fa-solid ${feature.icon} text-brand-500 mb-2 text-lg`} aria-hidden="true" />
                  <h4 className="font-medium text-xs text-brand-900">{feature.title}</h4>
                  <p className="text-[11px] text-brand-600 mt-1">{feature.description}</p>
                </div>
              ))}
            </div>

            <ul className="space-y-3 text-xs text-brand-800 pt-2">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <div className="w-5 h-5 shrink-0 rounded-full bg-brand-300 text-white flex items-center justify-center text-[10px]">
                    <i className="fa-solid fa-check" aria-hidden="true" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <CorporateQuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
