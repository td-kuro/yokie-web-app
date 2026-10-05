import { COLLECTIONS, saveSubmission } from './dataStore';

export function subscribeToNewsletter(email) {
  return saveSubmission(COLLECTIONS.newsletterSubscribers, { email: email.trim().toLowerCase() });
}
