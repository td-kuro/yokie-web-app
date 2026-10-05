// Cloud Storage helpers. Not used by the public site yet; ready for admin image
// uploads (see storage.rules — uploads go under `public/`).
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { getFirebaseApp } from './firebase';

function getFileRef(path) {
  return ref(getStorage(getFirebaseApp()), path);
}

/** Uploads a File/Blob to `path` and returns its public download URL. */
export async function uploadFile(path, file, metadata) {
  const fileRef = getFileRef(path);
  await uploadBytes(fileRef, file, metadata);
  return getDownloadURL(fileRef);
}

export function getFileUrl(path) {
  return getDownloadURL(getFileRef(path));
}
