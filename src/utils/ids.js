let counter = 0;

/**
 * Generates a client-side id that is unique for this page session.
 * (`crypto.randomUUID` is avoided because it is unavailable on plain-HTTP origins,
 * such as testing the dev server from a phone on the local network.)
 */
export function createLocalId(prefix) {
  counter += 1;
  return `${prefix}-${Date.now().toString(36)}-${counter}`;
}
