import { addDoc, collection, doc, getDoc, getDocs, getFirestore, serverTimestamp } from 'firebase/firestore';
import { getFirebaseApp } from './firebase';

function getDb() {
  return getFirestore(getFirebaseApp());
}

function toRecord(snapshot) {
  return { id: snapshot.id, ...snapshot.data() };
}

export async function listDocuments(collectionName) {
  const snapshot = await getDocs(collection(getDb(), collectionName));
  return snapshot.docs.map(toRecord);
}

export async function getDocument(collectionName, documentId) {
  const snapshot = await getDoc(doc(getDb(), collectionName, documentId));
  return snapshot.exists() ? toRecord(snapshot) : null;
}

/** Adds a document with a server-generated `createdAt` timestamp and returns its id. */
export async function addDocument(collectionName, data) {
  const reference = await addDoc(collection(getDb(), collectionName), {
    ...data,
    createdAt: serverTimestamp(),
  });
  return { id: reference.id };
}
