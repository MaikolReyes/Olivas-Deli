import BestSellerCarousel from './BestSellerCarousel';
import { Product } from '@/types/product';
import { createSupabaseServer } from "../lib/supabase-server";

export default async function BestSeller() {

    const supabase = createSupabaseServer();

    const { data: products } = await supabase
        .from('products')
        .select('*')
        .eq('is_best_seller', true)
        .eq('is_active', true);

    if (!products || products.length === 0) return null;

    return <BestSellerCarousel products={products as Product[]} />;
}
