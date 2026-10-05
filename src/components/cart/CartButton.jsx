import { useCart } from '../../hooks/useCart';

const SIZE_CLASSES = {
  regular: {
    button: 'p-2.5 hover:bg-brand-100 transition-colors',
    icon: 'text-base',
    badge: 'text-xs w-5 h-5',
  },
  compact: {
    button: 'p-2',
    icon: 'text-sm',
    badge: 'text-[10px] w-4 h-4',
  },
};

/** Shopping-bag button with item count; `compact` is the smaller mobile header version. */
export default function CartButton({ compact = false }) {
  const { itemCount, isOpen, toggleCart } = useCart();
  const size = SIZE_CLASSES[compact ? 'compact' : 'regular'];

  return (
    <button
      type="button"
      onClick={toggleCart}
      aria-expanded={isOpen}
      aria-controls="cart-drawer"
      aria-label={`Shopping bag, ${itemCount} ${itemCount === 1 ? 'item' : 'items'}`}
      className={`relative rounded-full bg-white border border-brand-200 text-brand-800 ${size.button}`}
    >
      <i className={`fa-solid fa-bag-shopping ${size.icon}`} aria-hidden="true" />
      <span
        className={`absolute -top-1 -right-1 bg-brand-500 text-white rounded-full flex items-center justify-center font-bold ${size.badge}`}
      >
        {itemCount}
      </span>
    </button>
  );
}
