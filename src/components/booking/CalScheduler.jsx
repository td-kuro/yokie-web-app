import { useEffect, useRef, useState } from 'react';
import { CAL_ORIGIN, loadCalEmbed, toCalLink } from '../../services/calcom';

let namespaceCount = 0;

/**
 * Inline Cal.com scheduler with the visitor's name and email already filled in.
 * `onScheduled` receives Cal.com's `bookingSuccessfulV2` data: `{ uid, status, paymentRequired, ... }`,
 * where `status` is 'PENDING' for event types that require the host's confirmation.
 * For paid event types it fires once the booking is created, just before Cal.com shows its
 * payment form, so keep this scheduler on screen until the visitor has paid.
 * Render it with `key={url}` so a new link starts with a fresh loading state.
 */
export default function CalScheduler({ url, name, email, onScheduled }) {
  const containerRef = useRef(null);
  const onScheduledRef = useRef(onScheduled);
  const [loadFailed, setLoadFailed] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    onScheduledRef.current = onScheduled;
  });

  useEffect(() => {
    const container = containerRef.current;
    // A fresh namespace per render: Cal.com allows one inline calendar per namespace.
    const namespace = `yokie-booking-${(namespaceCount += 1)}`;
    let cancelled = false;

    const listeners = {
      linkReady: () => setIsLoaded(true),
      linkFailed: () => setLoadFailed(true),
      bookingSuccessfulV2: (event) => onScheduledRef.current(event.detail.data),
    };

    let cal;

    // Only create the calendar once the embed script has loaded, and only if this render is still
    // current. Queuing it earlier let a calendar from an already-closed render appear later with no
    // listeners, so its bookings never reached onScheduled.
    loadCalEmbed()
      .then((Cal) => {
        if (cancelled) return;
        Cal('init', namespace, { origin: CAL_ORIGIN });
        cal = Cal.ns[namespace];
        Object.entries(listeners).forEach(([action, callback]) => cal('on', { action, callback }));
        cal('inline', {
          calLink: toCalLink(url),
          elementOrSelector: container,
          config: { name, email, layout: 'month_view', theme: 'light' },
        });
      })
      .catch((error) => {
        console.error(error);
        if (!cancelled) setLoadFailed(true);
      });

    return () => {
      cancelled = true;
      if (cal) Object.entries(listeners).forEach(([action, callback]) => cal('off', { action, callback }));
      container.replaceChildren();
    };
  }, [url, name, email]);

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
    <div className="relative min-h-[560px] rounded-xl border border-brand-100">
      {!isLoaded && (
        <p className="absolute inset-0 flex items-center justify-center text-xs text-brand-600" aria-hidden="true">
          Loading calendar…
        </p>
      )}
      {/* Cal.com renders its iframe in here and sizes it to fit; React leaves this element's children alone. */}
      <div ref={containerRef} className="relative w-full" />
    </div>
  );
}
