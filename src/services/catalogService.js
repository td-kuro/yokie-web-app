import { galleryImages } from '../data/galleryImages';
import { popUpEvents } from '../data/popUpEvents';
import { products } from '../data/products';
import { workshops } from '../data/workshops';
import { COLLECTIONS, loadCollection } from './dataStore';

export const getWorkshops = () => loadCollection(COLLECTIONS.workshops, workshops);

export const getProducts = () => loadCollection(COLLECTIONS.products, products);

export const getPopUpEvents = () => loadCollection(COLLECTIONS.popUpEvents, popUpEvents);

export const getGalleryImages = () => loadCollection(COLLECTIONS.galleryImages, galleryImages);
