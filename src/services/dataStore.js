// The single switch between the bundled mock data and Cloud Firestore.
// Domain services (catalog, booking, newsletter) go through here, so moving to
// Firebase is a matter of setting VITE_DATA_SOURCE=firebase.
import { createLocalId } from '../utils/ids';

export const COLLECTIONS = {
  workshops: 'workshops',
  products: 'products',
  popUpEvents: 'popUpEvents',
  galleryImages: 'galleryImages',
  bookings: 'bookings',
  quoteRequests: 'quoteRequests',
  newsletterSubscribers: 'newsletterSubscribers',
};

export const DATA_SOURCE = import.meta.env.VITE_DATA_SOURCE === 'firebase' ? 'firebase' : 'local';

const isFirebaseDataSource = DATA_SOURCE === 'firebase';
const SIMULATED_LATENCY_MS = 400;

// Loaded on demand so the Firestore SDK is only downloaded when it is actually used.
const loadFirestoreService = () => import('./firestoreService');

export function simulateLatency() {
  return new Promise((resolve) => setTimeout(resolve, SIMULATED_LATENCY_MS));
}

const bySortOrder = (a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0);

/** Returns every record in a catalogue collection, or `localRecords` in local mode. */
export async function loadCollection(collectionName, localRecords) {
  if (!isFirebaseDataSource) {
    return localRecords;
  }
  const { listDocuments } = await loadFirestoreService();
  const records = await listDocuments(collectionName);
  return records.sort(bySortOrder);
}

/** Saves a form submission. In local mode it is only logged (in development) and given a fake id. */
export async function saveSubmission(collectionName, data) {
  if (isFirebaseDataSource) {
    const { addDocument } = await loadFirestoreService();
    return addDocument(collectionName, data);
  }

  await simulateLatency();
  if (import.meta.env.DEV) {
    console.info(`[local data] New "${collectionName}" submission`, data);
  }
  return { id: createLocalId(collectionName) };
}
