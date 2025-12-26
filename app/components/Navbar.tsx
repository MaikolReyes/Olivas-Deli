'use client';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
            <nav
                className={`${scrolled
                    ? 'bg-primary/95 backdrop-blur shadow'
                    : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-white">

                    <a id='inicio'>
                        <Image src="/logo-olivas.png" alt="Logo" width={80} height={50} className="scale-125 origin-left"/>
                    </a>

                    <ul className="hidden md:flex gap-8 text-sm font-secondary">
                        <li>
                            <a className="relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full" href="#">Inicio</a>
                        </li>
                        <li>
                            <a className="relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full" href="#productos">Productos</a>
                        </li>
                        <li>
                            <a className="relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full" href="#categorias">Categorías</a>
                        </li>
                        <li>
                            <a className="relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full" href="#nosotros">Nosotros</a>
                        </li>
                        <li>
                            <a className="relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full" href="#contacto">Contacto</a>
                        </li>
                        <li>
                            <a className="relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full" href="#preguntas">Preguntas frecuentes</a>
                        </li>
                    </ul>
                    <div className="flex space-x-4">
                        <a href="https://www.instagram.com/olivas.deli/" target="_blank" rel="noopener noreferrer"
                            aria-label="Perfil de Instagram" className="hover:underline">
                            <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl hover:text-gray-200 transition" />
                        </a>
                        <a href="https://www.facebook.com/olivasdeli/" target="_blank" rel="noopener noreferrer"
                            aria-label="Perfil de Facebook" className="hover:underline">
                            <FontAwesomeIcon icon={faFacebook} className="text-white text-2xl hover:text-gray-200 transition" />
                        </a>
                        <a href="https://api.whatsapp.com/message/SQJNXUCOW5BSJ1?autoload=1&app_absent=0&utm_source=ig" target="_blank" rel="noopener noreferrer"
                            aria-label="Perfil de WhatsApp" className="hover:underline">
                            <FontAwesomeIcon icon={faWhatsapp} className="text-white text-2xl hover:text-gray-200 transition" />
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}
