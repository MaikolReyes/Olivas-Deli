import Image from "next/image";
import Link from "next/link";
import { Category } from "@/types/category";
import { createSupabaseServer } from "../lib/supabase-server";

export default async function CategoriesGrid() {

    const supabase = createSupabaseServer();
    const { data: categories } = await supabase
        .from("categories_with_count")
        .select("*")
        .order("id");

    if (!categories || categories.length === 0) return null;

    function hexToRgba(hex: string, alpha: number) {
        const sanitized = hex.replace('#', '');
        const bigint = parseInt(sanitized, 16);

        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;

        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }


    return (
        <section className="max-w-7xl mx-auto px-4 py-16" id="categorias">
            <h2 className="text-center text-4xl font-light mb-10 text-primary">
                Categorías
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((cat: Category) => (
                    <Link
                        key={cat.id}
                        href={`/categorias/${cat.slug}`}
                        className="group relative h-80 overflow-hidden cursor-pointer block"
                    >
                        {/* Imagen */}
                        <Image
                            src={cat.image}
                            alt={cat.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Overlay */}
                        <div
                            className="absolute inset-0 transition-opacity duration-300 opacity-80 md:opacity-0 md:group-hover:opacity-100"
                            style={{
                                backgroundColor: hexToRgba(cat.overlay_color, 0.8),
                            }}
                        />



                        {/* Texto */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-2xl font-semibold text-center px-2">
                                {cat.title}
                            </h3>

                            <p className="text-sm tracking-wide mt-1">
                                {cat.product_count} PRODUCTOS
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
