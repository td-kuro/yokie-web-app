import { useCart } from '../../hooks/useCart';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import { useSubmitAction } from '../../hooks/useSubmitAction';
import { startCheckout } from '../../services/checkoutService';
import { formatAud } from '../../utils/formatters';
import CartLineItem from './CartLineItem';

export default function CartDrawer() {
  const { items, subtotal, isOpen, closeCart, removeItem } = useCart();
  useEscapeKey(closeCart, isOpen);

  const { submit: checkout, isSubmitting } = useSubmitAction(startCheckout, {
    successMessage: 'Checkout process initiated!',
  });

  return (
    <aside
      id="cart-drawer"
      aria-label="Shopping bag"
      // `invisible` (after the slide-out transition) keeps the closed drawer out of the tab order.
      className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl transform transition-all duration-300 flex flex-col ${
        isOpen ? 'translate-x-0 visible' : 'translate-x-full invisible'
      }`}
    >
      <div className="p-6 border-b border-brand-100 flex items-center justify-between">
        <h3 className="font-serif text-lg font-bold text-brand-900">Your Shopping Bag</h3>
        <button
          type="button"
          onClick={closeCart}
          aria-label="Close shopping bag"
          className="text-brand-400 hover:text-brand-900"
        >
          <i className="fa-solid fa-xmark text-xl" aria-hidden="true" />
        </button>
      </div>

      <div className="p-6 flex-1 overflow-y-auto">
        {items.length === 0 ? (
          <p className="text-xs text-brand-500 text-center py-8">Your bag is currently empty.</p>
        ) : (
          <ul className="space-y-4">
            {items.map((item) => (
              <CartLineItem key={item.id} item={item} onRemove={removeItem} />
            ))}
          </ul>
        )}
      </div>

      <div className="p-6 border-t border-brand-100 space-y-4">
        <div className="flex justify-between text-sm font-bold text-brand-900">
          <span>Subtotal</span>
          <span>{formatAud(subtotal)}</span>
        </div>
        <button
          type="button"
          onClick={() => checkout(items)}
          disabled={items.length === 0 || isSubmitting}
          className="w-full py-3 rounded-xl btn-dark text-xs"
        >
          {isSubmitting ? 'Starting Checkout…' : 'Proceed to Worldwide Checkout'}
        </button>
      </div>
    </aside>
  );
}
