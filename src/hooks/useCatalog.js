import { getGalleryImages, getPopUpEvents, getProducts, getWorkshops } from '../services/catalogService';
import { useAsyncData } from './useAsyncData';

export const useWorkshops = () => useAsyncData(getWorkshops);

export const useProducts = () => useAsyncData(getProducts);

export const usePopUpEvents = () => useAsyncData(getPopUpEvents);

export const useGalleryImages = () => useAsyncData(getGalleryImages);
