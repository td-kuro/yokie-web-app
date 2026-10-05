import { useCart } from '../../hooks/useCart';
import { formatAud } from '../../utils/formatters';

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <article className="bg-brand-50 rounded-2xl p-5 border border-brand-100 hover:shadow-md transition-all group">
      <div className="aspect-square rounded-xl bg-white mb-4 overflow-hidden relative">
        <img
          src={product.imageUrl}
          alt={product.imageAlt}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-brand-800 text-white text-[10px] uppercase font-bold px-2 py-1 rounded">
            {product.badge}
          </span>
        )}
      </div>
      <div className="flex items-center justify-between gap-3 mb-2">
        <h3 className="font-serif text-base font-semibold text-brand-900">{product.title}</h3>
        <span className="font-bold text-brand-900 text-sm whitespace-nowrap">{formatAud(product.price)}</span>
      </div>
      <p className="text-xs text-brand-700 mb-4 leading-relaxed">{product.description}</p>
      <button
        type="button"
        onClick={() => addItem(product)}
        className="w-full py-2.5 rounded-xl bg-white border border-brand-300 text-brand-900 text-xs font-medium hover:bg-brand-800 hover:text-white transition-all flex items-center justify-center gap-2"
      >
        <i className="fa-solid fa-cart-plus" aria-hidden="true" /> Add to Cart
      </button>
    </article>
  );
}
