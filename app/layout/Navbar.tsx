'use client';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    const [menuOpen, setMenuOpen] = useState(false);

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
                        <Image src="/logo-olivas.png" alt="Logo" width={80} height={50} className="scale-125 origin-left" />
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

                    <div className="md:flex hidden space-x-4">
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

                    {/* Botón hamburguesa */}
                    <button
                        className="md:hidden relative text-white text-2xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Abrir menú"
                    >
                        <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
                    </button>
                    {/* Menú móvil */}

                    <div
                        className={`md:hidden absolute top-20 left-0 w-full bg-primary/95 backdrop-blur transition-all duration-300 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
                            }`}
                    >
                        <ul className="flex flex-col gap-6 px-6 py-8 text-white font-secondary">
                            {[
                                ['Inicio', '#'],
                                ['Productos', '#productos'],
                                ['Categorías', '#categorias'],
                                ['Nosotros', '#nosotros'],
                                ['Contacto', '#contacto'],
                                ['Preguntas frecuentes', '#preguntas'],
                            ].map(([label, link]) => (
                                <li key={label}>
                                    <a
                                        href={link}
                                        onClick={() => setMenuOpen(false)}
                                        className="block border-b border-white/20 pb-3 text-lg"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="space-x-4 px-6 pb-6 flex justify-center">
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
                </div>
            </nav>
        </header>
    );
}
