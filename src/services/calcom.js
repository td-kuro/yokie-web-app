// Cal.com's embed script, loaded on demand the first time someone opens a Cal.com scheduler.
const EMBED_SCRIPT_URL = 'https://app.cal.com/embed/embed.js';
export const CAL_ORIGIN = 'https://app.cal.com';

let embedPromise;

/**
 * Resolves with `window.Cal`, adding the embed script to the page on first use.
 * Sets up the same command queue as Cal.com's copy-paste snippet, so calls made before the
 * script finishes loading are replayed once it arrives.
 */
export function loadCalEmbed() {
  embedPromise ??= new Promise((resolve, reject) => {
    if (!window.Cal) installCalQueue();
    const script = document.createElement('script');
    script.src = EMBED_SCRIPT_URL;
    script.async = true;
    script.onload = () => resolve(window.Cal);
    script.onerror = () => {
      // Allow a retry next time instead of caching the failure.
      embedPromise = undefined;
      script.remove();
      reject(new Error('Could not load the Cal.com scheduler.'));
    };
    document.head.appendChild(script);
  });
  return embedPromise;
}

/** Cal.com's snippet, minus the script tag (added above so a failed load can be reported). */
function installCalQueue() {
  const push = (target, args) => target.q.push(args);
  const Cal = function (...args) {
    if (args[0] === 'init') {
      const namespace = args[1];
      if (typeof namespace === 'string') {
        const api = function (...apiArgs) {
          push(api, apiArgs);
        };
        api.q = [];
        Cal.ns[namespace] ??= api;
        push(Cal.ns[namespace], args);
        push(Cal, ['initNamespace', namespace]);
      } else {
        push(Cal, args);
      }
      return;
    }
    push(Cal, args);
  };
  Cal.ns = {};
  Cal.q = [];
  Cal.loaded = true;
  window.Cal = Cal;
}

/** `https://cal.com/yokie-htovur/xmas-tealight` → `yokie-htovur/xmas-tealight`. */
export function toCalLink(url) {
  return new URL(url).pathname.replace(/^\/+|\/+$/g, '');
}

/** True for a public Cal.com booking link (cal.com or app.cal.com). */
export function isCalUrl(url) {
  try {
    return /^(app\.)?cal\.com$/.test(new URL(url).hostname);
  } catch {
    return false;
  }
}
