import { useCallback, useMemo, useState } from 'react';
import { createLocalId } from '../utils/ids';
import { calculateSubtotal } from '../utils/pricing';
import { CartContext } from './CartContext';

/** Shopping bag state. Each "Add to Cart" click adds one line, as in the prototype. */
export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((product) => {
    const cartItem = { id: createLocalId('cart'), productId: product.id, title: product.title, price: product.price };
    setItems((current) => [...current, cartItem]);
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((cartItemId) => {
    setItems((current) => current.filter((item) => item.id !== cartItemId));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((current) => !current), []);

  const value = useMemo(
    () => ({
      items,
      itemCount: items.length,
      subtotal: calculateSubtotal(items),
      isOpen,
      addItem,
      removeItem,
      clearCart,
      closeCart,
      toggleCart,
    }),
    [items, isOpen, addItem, removeItem, clearCart, closeCart, toggleCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
