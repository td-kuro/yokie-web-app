import { useCallback, useMemo, useState } from 'react';
import { BookingContext } from './BookingContext';

/** Tracks which workshop (if any) the booking modal is open for. */
export function BookingProvider({ children }) {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  /** @param {{ id: string, title: string, price: number }} workshop */
  const openBooking = useCallback((workshop) => setSelectedWorkshop(workshop), []);
  const closeBooking = useCallback(() => setSelectedWorkshop(null), []);

  const value = useMemo(
    () => ({ selectedWorkshop, openBooking, closeBooking }),
    [selectedWorkshop, openBooking, closeBooking],
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}
