import { supabase } from '../lib/supabase';
import BestSellerCarousel from './BestSellerCarousel';
import { Product } from '@/types/product';

export default async function BestSeller() {
    const { data: products } = await supabase
        .from('products')
        .select('*')
        .eq('is_best_seller', true)
        .eq('is_active', true);

    if (!products || products.length === 0) return null;

    return <BestSellerCarousel products={products as Product[]} />;
}
