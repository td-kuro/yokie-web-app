import PopUpEventCard from '../../components/gallery/PopUpEventCard';
import LoadErrorMessage from '../../components/ui/LoadErrorMessage';
import { siteConfig } from '../../data/siteConfig';
import { useGalleryImages, usePopUpEvents } from '../../hooks/useCatalog';

function InstagramTile() {
  const className =
    'aspect-square rounded-2xl overflow-hidden bg-brand-300 flex flex-col items-center justify-center text-white p-4 text-center';
  const content = (
    <>
      <i className="fa-brands fa-instagram text-2xl mb-1" aria-hidden="true" />
      <span className="text-xs font-semibold">{siteConfig.instagramHandle}</span>
      <span className="text-[10px] text-brand-100">Follow on Socials</span>
    </>
  );

  if (!siteConfig.instagramUrl) {
    return <div className={className}>{content}</div>;
  }
  return (
    <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className={`${className} hover:bg-brand-400 transition-colors`}>
      {content}
    </a>
  );
}

export default function GallerySection() {
  const { data: events, status: eventsStatus } = usePopUpEvents();
  const { data: images, status: imagesStatus } = useGalleryImages();

  return (
    <section id="gallery" className="py-20 bg-brand-50">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="eyebrow">Find Us In Person</span>
              <h2 className="font-serif text-3xl font-normal text-brand-900 mt-1">Pop-Up Market Calendar</h2>
            </div>

            <LoadErrorMessage status={eventsStatus}>
              We couldn&apos;t load upcoming pop-ups right now. Please check back soon.
            </LoadErrorMessage>

            <ul className="space-y-4" aria-busy={eventsStatus === 'loading'}>
              {events.map((event) => (
                <PopUpEventCard key={event.id} event={event} />
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <span className="eyebrow mb-2">#YokieScentStudio</span>
            <h2 className="font-serif text-3xl font-normal text-brand-900 mb-6">Workshop Moments</h2>

            <LoadErrorMessage status={imagesStatus}>
              We couldn&apos;t load the gallery right now.
            </LoadErrorMessage>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {images.map((image) => (
                <div key={image.id} className="aspect-square rounded-2xl overflow-hidden bg-brand-200">
                  <img
                    src={image.imageUrl}
                    alt={image.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
              <InstagramTile />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
