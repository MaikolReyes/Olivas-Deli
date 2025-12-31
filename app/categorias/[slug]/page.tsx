import { notFound } from "next/navigation";
import ProductCard from "@/app/components/ProductCard";
import { Products } from "@/app/utils/Products";
import { categoryMap } from "@/app/utils/CategoryMap";


interface Props {
    params: {
        slug: string;
    };
}


export async function generateMetadata({ params }: Props) {
    const { slug } = await params;

    const categoryName = categoryMap[slug];

    if (!categoryName) return {};

    return {
        title: `${categoryName} | Oliva's Deli`,
        description: `Descubrí nuestros productos de ${categoryName.toLowerCase()} en Oliva's Deli.`,
    };
}

export default async function CategoryPage({ params }: Props) {

    const { slug } = await params; // 👈 CLAVE

    const categoryName = categoryMap[slug];


    if (!categoryName) {
        return notFound();
    }

    const filteredProducts = Products.filter(
        (product) => product.category === categoryName
    );

    return (
        <section className="max-w-7xl mx-auto px-4 py-16 mt-14">
            <h1 className="text-4xl font-light text-primary mb-10 text-center">
                {categoryName}
            </h1>

            {filteredProducts.length === 0 ? (
                <p className="text-center text-gray-500">
                    No hay productos en esta categoría.
                </p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </section>
    );
}
