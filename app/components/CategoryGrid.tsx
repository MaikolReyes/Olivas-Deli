import Image from "next/image";
import { categories } from "../utils/Categories";


export default function CategoriesGrid() {

    return (
        <section className="max-w-7xl mx-auto px-4 py-16" id="categorias">
            <h2 className="text-center text-4xl font-light mb-10 text-primary">
                Categorías
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((cat) => (
                    <div
                        key={cat.id}
                        className="group relative h-80 overflow-hidden cursor-pointer"
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
                            className={`absolute inset-0 ${cat.overlayColor} group-hover:opacity-100 transition-opacity duration-300 opacity-80 md:opacity-0 md:group-hover:opacity-100
`}
                        />
                        {/* Texto */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                        >
                            <h3 className="text-2xl font-semibold text-center px-2">
                                {cat.title}
                            </h3>
                            {/* <p className="text-sm tracking-wide mt-1">
                                {cat.count} PRODUCTOS
                            </p> */}
                        </div>
                    </div>

                ))}
            </div>
        </section>
    );
}
