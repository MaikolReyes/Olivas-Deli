import Image from "next/image";

export default function AboutUs() {
    return (
        <section className="py-16 px-6" id="nosotros">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* Texto */}
                <div>
                    <span className="text-sm font-semibold text-primary font-secondary uppercase">
                        Sobre nosotros
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">
                        Pastelería artesanal hecha con amor
                    </h2>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                        Somos un emprendimiento dedicado a la elaboración de productos
                        artesanales, cuidando cada detalle desde la selección de los
                        ingredientes hasta la presentación final.
                    </p>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Creemos que cada pedido es único, por eso trabajamos con recetas
                        propias, materias primas de calidad y una atención personalizada
                        para que cada experiencia sea especial.
                    </p>

                    {/* Valores */}
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-gray-700">Ingredientes de primera calidad</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-gray-700">Producción artesanal</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-gray-700">Compromiso y dedicación</span>
                        </li>
                    </ul>
                </div>

                {/* Imagen */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-full h-full rounded-2xl bg-primary/30" />
                    <Image
                        src="/hero/lemon-pie.webp"
                        alt="Pastelería artesanal"
                        width={600}
                        height={600}
                        className="relative rounded-2xl shadow-lg object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
