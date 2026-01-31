import { notFound } from "next/navigation";
import ProductCard from "@/app/components/ProductCard";
import { supabase } from "@/app/lib/supabase-client";
interface Props {
    params: Promise<{
        slug: string;
    }>;
}

/* =======================
METADATA
======================= */
export async function generateMetadata({ params }: Props) {
    const { slug } = await params;

    const title = slug.replace(/-/g, " ");

    return {
        title: `${title} | Oliva's Deli`,
        description: `Descubrí nuestros productos de ${title} en Oliva's Deli.`,
    };
}

/* =======================
PAGE
======================= */
export default async function CategoryPage({ params }: Props) {
    const { slug } = await params;

    const { data: category } = await supabase
        .from("categories")
        .select("id, title")
        .eq("slug", slug)
        .eq("is_active", true)
        .single();

    if (!category) {
        return notFound();
    }

    const { data: products } = await supabase
        .from("products")
        .select("*")
        .eq("category_id", category.id)
        .eq("is_active", true)
        .order("id");

    return (
        <section className="max-w-7xl mx-auto px-4 py-16 mt-14">
            <h1 className="text-4xl font-light text-primary mb-10 text-center">
                {category.title}
            </h1>

            {!products || products.length === 0 ? (
                <p className="text-center text-gray-500">
                    No hay productos en esta categoría.
                </p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            showBestSellerBadge={false}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
