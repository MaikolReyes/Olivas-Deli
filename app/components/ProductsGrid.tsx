import { createSupabaseServer } from "../lib/supabase-server";
import ProductCard from './ProductCard';
import { Product } from '@/types/product';

export default async function ProductsGrid() {

    const supabase = createSupabaseServer();

    const { data: products } = await supabase
        .from('products')
        .select('*')
        .eq('is_active', true)
        .order('id');

    if (!products || products.length === 0) return null;

    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            <h2
                className="text-center text-4xl font-light mb-8 text-primary"
                id="productos"
            >
                Productos
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product: Product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        showBestSellerBadge={false}
                    />
                ))}
            </div>
        </section>
    );
}
