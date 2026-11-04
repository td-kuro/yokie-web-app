// Calendly's embed script, loaded on demand the first time someone opens the scheduler.
const WIDGET_SCRIPT_URL = 'https://assets.calendly.com/assets/external/widget.js';
const CALENDLY_ORIGIN = 'https://calendly.com';

let widgetPromise;

/** Resolves with `window.Calendly`, adding the embed script to the page on first use. */
export function loadCalendlyWidget() {
  widgetPromise ??= new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = WIDGET_SCRIPT_URL;
    script.async = true;
    script.onload = () => resolve(window.Calendly);
    script.onerror = () => {
      // Allow a retry next time instead of caching the failure.
      widgetPromise = undefined;
      script.remove();
      reject(new Error('Could not load the Calendly scheduler.'));
    };
    document.head.appendChild(script);
  });
  return widgetPromise;
}

/** True when a `message` event is the named notification from an embedded Calendly page. */
export function isCalendlyEvent(event, name) {
  return event.origin === CALENDLY_ORIGIN && event.data?.event === name;
}
