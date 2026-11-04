import { useEffect, useRef, useState } from 'react';
import { isCalendlyEvent, loadCalendlyWidget } from '../../services/calendly';

/**
 * Inline Calendly scheduler with the visitor's details already filled in.
 * `guestsAnswer` fills the event type's first custom question (Calendly's `a1`), so add a
 * "Number of guests" question as question 1 on each Calendly event type.
 * `onScheduled` receives Calendly's payload: `{ event: { uri }, invitee: { uri } }`.
 */
export default function CalendlyScheduler({ url, name, email, guestsAnswer, onScheduled }) {
  const containerRef = useRef(null);
  const onScheduledRef = useRef(onScheduled);
  const [loadFailed, setLoadFailed] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    onScheduledRef.current = onScheduled;
  });

  useEffect(() => {
    const container = containerRef.current;
    let cancelled = false;

    loadCalendlyWidget()
      .then((Calendly) => {
        if (cancelled) return;
        // Details go in the link rather than the widget's `prefill` option: Calendly keeps link
        // parameters when the visitor picks an event type on the main page, but drops `prefill`.
        // Encoded with encodeURIComponent (spaces as %20): Calendly's script would turn a `+` into
        // a literal plus sign.
        const details = { name, email, a1: guestsAnswer, hide_gdpr_banner: '1' };
        const query = Object.entries(details)
          .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
          .join('&');
        container.replaceChildren();
        Calendly.initInlineWidget({
          url: `${url}${url.includes('?') ? '&' : '?'}${query}`,
          parentElement: container,
        });
      })
      .catch((error) => {
        console.error(error);
        if (!cancelled) setLoadFailed(true);
      });

    return () => {
      cancelled = true;
      container.replaceChildren();
    };
  }, [url, name, email, guestsAnswer]);

  useEffect(() => {
    function handleMessage(event) {
      // Calendly reports a page view once the profile or event page has rendered.
      if (
        isCalendlyEvent(event, 'calendly.profile_page_viewed') ||
        isCalendlyEvent(event, 'calendly.event_type_viewed')
      ) {
        setIsLoaded(true);
      } else if (isCalendlyEvent(event, 'calendly.event_scheduled')) {
        onScheduledRef.current(event.data.payload);
      }
    }
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  if (loadFailed) {
    return (
      <p className="text-xs text-brand-700 leading-relaxed">
        The booking calendar couldn&apos;t load.{' '}
        <a href={url} target="_blank" rel="noopener noreferrer" className="underline font-medium">
          Open it in a new tab
        </a>{' '}
        to choose your time.
      </p>
    );
  }

  return (
    <div className="relative h-[660px] rounded-xl overflow-hidden border border-brand-100">
      {!isLoaded && (
        <p className="absolute inset-0 flex items-center justify-center text-xs text-brand-600" aria-hidden="true">
          Loading calendar…
        </p>
      )}
      {/* Calendly renders its iframe in here; React leaves this element's children alone. */}
      <div ref={containerRef} className="relative h-full" />
    </div>
  );
}
