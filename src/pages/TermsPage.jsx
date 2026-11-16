import { Fragment } from 'react';
import { legalDocuments } from '../data/terms';
import { siteHref } from '../utils/links';

const LINK_CLASS = 'font-medium text-brand-900 underline underline-offset-4 hover:text-brand-600';

/** Plain text with any email addresses turned into mailto links. */
function LinkedText({ text }) {
  const parts = text.split(/([\w.+-]+@[\w-]+(?:\.[\w-]+)+)/);
  return parts.map((part, index) =>
    index % 2 ? (
      <a key={index} href={`mailto:${part}`} className={LINK_CLASS}>
        {part}
      </a>
    ) : (
      <Fragment key={index}>{part}</Fragment>
    ),
  );
}

function Block({ block, indent }) {
  if (block.type === 'list') {
    const labelled = typeof block.items[0] === 'object';
    return (
      <ul className={labelled ? 'space-y-2 pl-12' : 'list-disc space-y-1.5 pl-16 marker:text-brand-400'}>
        {block.items.map((item) => {
          const { label, text } = typeof item === 'object' ? item : { text: item };
          return (
            <li key={text} className={label ? 'flex gap-3' : undefined}>
              {label && <span className="shrink-0 text-brand-500">{label}</span>}
              <span>
                <LinkedText text={text} />
              </span>
            </li>
          );
        })}
      </ul>
    );
  }

  if (block.type === 'table') {
    return (
      <div className="overflow-hidden rounded-2xl border border-brand-100">
        <table className="w-full text-left text-sm">
          <thead className="bg-brand-50 text-brand-900">
            <tr>
              {block.head.map((cell) => (
                <th key={cell} scope="col" className="px-4 py-3 font-medium">
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-100">
            {block.rows.map(([circumstance, outcome]) => (
              <tr key={circumstance} className="align-top">
                <th scope="row" className="w-2/5 px-4 py-3 font-normal text-brand-900">
                  {circumstance}
                </th>
                <td className="px-4 py-3">{outcome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <p className={block.clause ? 'flex gap-3' : indent ? 'pl-12' : undefined}>
      {block.clause && <span className="w-9 shrink-0 tabular-nums text-brand-500">{block.clause}</span>}
      <span>
        {block.lead && <strong className="font-medium text-brand-900">{block.lead} </strong>}
        <LinkedText text={block.text} />
      </span>
    </p>
  );
}

function LegalDocument({ document }) {
  return (
    <article id={document.id} aria-labelledby={`${document.id}-title`} className="scroll-mt-28">
      <header className="mb-10 border-b border-brand-100 pb-6">
        <h2 id={`${document.id}-title`} className="font-serif text-3xl sm:text-4xl font-normal leading-tight text-brand-900">
          {document.title}
        </h2>
        <p className="mt-3 text-xs text-brand-500">Last updated {document.lastUpdated}</p>
        {document.intro && <p className="mt-5 text-sm text-brand-700 font-light leading-relaxed">{document.intro}</p>}
      </header>

      <ol className="space-y-10">
        {document.sections.map((section, index) => (
          <li key={section.heading} id={`${document.id}-${index + 1}`} className="scroll-mt-28">
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-brand-900 mb-4">
              <span className="text-brand-400 mr-2">{index + 1}.</span>
              {section.heading}
            </h3>
            <div className="space-y-3 text-sm text-brand-700 font-light leading-relaxed">
              {section.blocks.map((block, blockIndex) => (
                // Unnumbered text in a numbered section lines up with the clause text.
                <Block key={blockIndex} block={block} indent={section.blocks.some((b) => b.clause)} />
              ))}
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
}

export default function TermsPage() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="section-container max-w-3xl">
        <a href={siteHref('#')} className="inline-flex items-center gap-2 text-xs font-medium text-brand-600 hover:text-brand-900">
          <i className="fa-solid fa-arrow-left" aria-hidden="true" />
          Back to home
        </a>

        <header className="mt-8 mb-12">
          <span className="eyebrow mb-3">Bookings &amp; workshops</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal leading-tight text-brand-900">
            Terms <span className="italic text-brand-600">&amp; Conditions</span>
          </h1>
          <p className="mt-4 text-sm text-brand-700 font-light leading-relaxed">
            Please read these before you book. Your booking is covered by both documents below.
          </p>

          <nav aria-label="Documents on this page" className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {legalDocuments.map((document) => (
              <a
                key={document.id}
                href={`#${document.id}`}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-brand-100 bg-brand-50 px-5 py-4 text-sm font-medium text-brand-900 hover:border-brand-300"
              >
                {document.title}
                <i className="fa-solid fa-arrow-down text-brand-400 group-hover:text-brand-600" aria-hidden="true" />
              </a>
            ))}
          </nav>
        </header>

        <div className="space-y-20">
          {legalDocuments.map((document) => (
            <LegalDocument key={document.id} document={document} />
          ))}
        </div>
      </div>
    </section>
  );
}
