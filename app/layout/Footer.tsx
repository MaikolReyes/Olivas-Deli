import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer className="bg-[#f5eef4] text-gray-700 mt-16">
            <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-2">

                {/* Marca */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        Olivas Deli
                    </h3>
                    <p className="text-sm leading-relaxed w-2/4 font-secondary">
                        Pastelería artesanal y productos caseros elaborados con ingredientes
                        de primera calidad. Cada detalle hecho con amor.
                    </p>
                </div>


                {/* Contacto */}
                <div>
                    <h4 className="font-semibold text-gray-800 mb-3">
                        Contacto
                    </h4>
                    <ul className="space-y-2 text-sm font-secondary">
                        <li>📍 San Martin, Buenos Aires</li>
                        <li>📞 +54 11 2396-3021</li>
                        <li>✉️ camilaceciliapellegrini@gmail.com</li>
                    </ul>

                    {/* Redes */}
                    <div className="flex gap-4 mt-4">
                        <a href="https://www.instagram.com/olivas.deli/" target="_blank" rel="noopener noreferrer"
                            aria-label="Perfil de Instagram" className="hover:underline">
                            <FontAwesomeIcon icon={faInstagram} className="text-primary text-2xl hover:text-gray-400 transition" />
                        </a>
                        <a href="https://api.whatsapp.com/message/SQJNXUCOW5BSJ1?autoload=1&app_absent=0&utm_source=ig" target="_blank" rel="noopener noreferrer"
                            aria-label="Perfil de WhatsApp" className="hover:underline">
                            <FontAwesomeIcon icon={faWhatsapp} className="text-primary text-2xl hover:text-gray-400 transition" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-300/50 py-4 text-center text-sm text-gray-600">
                © {new Date().getFullYear()} Olivas Deli · Todos los derechos reservados
            </div>
        </footer>
    );
}
