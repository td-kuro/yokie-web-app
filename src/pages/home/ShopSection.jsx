import ProductCard from '../../components/shop/ProductCard';
import LoadErrorMessage from '../../components/ui/LoadErrorMessage';
import { useProducts } from '../../hooks/useCatalog';

export default function ShopSection() {
  const { data: products, status } = useProducts();

  return (
    <section id="shop" className="py-20 bg-white">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="eyebrow">Worldwide Express Shipping</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-brand-900 mt-1">At-Home DIY Craft Kits</h2>
          </div>
          <p className="text-xs text-brand-700 mt-2 md:mt-0 max-w-xs">
            Craft your own bespoke home scents anywhere in the world. Pre-measured & spill-proof.
          </p>
        </div>

        <LoadErrorMessage status={status}>
          We couldn&apos;t load our DIY kits right now. Please refresh the page or try again shortly.
        </LoadErrorMessage>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" aria-busy={status === 'loading'}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
