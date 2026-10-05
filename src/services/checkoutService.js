import { simulateLatency } from './dataStore';

/**
 * Placeholder checkout — the prototype had no payment flow.
 *
 * To take real payments, create the checkout session on the server (for example a
 * Cloud Function, or the "Run Payments with Stripe" Firebase extension) using prices
 * looked up server-side from product ids. Never trust prices sent from the browser
 * and never put payment secret keys in this app.
 */
export async function startCheckout(cartItems) {
  if (cartItems.length === 0) {
    throw new Error('Cannot check out an empty bag.');
  }
  await simulateLatency();
  return { status: 'not-implemented', productIds: cartItems.map((item) => item.productId) };
}
