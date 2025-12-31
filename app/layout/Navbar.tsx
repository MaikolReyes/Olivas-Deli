'use client';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from "next/navigation";


export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";


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
                className={`
    transition-all duration-300
    ${isHome && !scrolled ? "bg-transparent" : "bg-primary/95 backdrop-blur shadow"}`}>

                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-white">


                    <Link href="/">
                        <Image src="/logo-olivas.png" alt="Logo" width={80} height={50} className="scale-125 origin-left" />
                    </Link>

                    <ul className="hidden md:flex gap-8 text-sm font-secondary">
                        <li>
                            <Link className="relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full" href="/">Inicio</Link>
                        </li>
                        <li className="relative group">
                            <span
                                className="cursor-pointer relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full"
                            >
                                Categorías
                            </span>

                            {/* Dropdown */}
                            <ul className="absolute left-0 top-full mt-3 w-48 bg-white text-[#3a1d35] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <li>
                                    <Link
                                        href="/categorias/panificados"
                                        className="block px-4 py-2 hover:bg-primary/10 rounded-t-lg"
                                    >
                                        Panificados
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/categorias/postres"
                                        className="block px-4 py-2 hover:bg-primary/10"
                                    >
                                        Postres
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/categorias/box-especiales"
                                        className="block px-4 py-2 hover:bg-primary/10"
                                    >
                                        Box especiales
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/categorias/catering"
                                        className="block px-4 py-2 hover:bg-primary/10 rounded-b-lg"
                                    >
                                        Catering
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link className="relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full" href="/#productos">Productos</Link>
                        </li>
                        <li>
                            <Link className="relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full" href="/#nosotros">Nosotros</Link>
                        </li>
                        <li>
                            <Link className="relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full" href="/#contacto">Contacto</Link>
                        </li>
                        <li>
                            <Link className="relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full" href="/#preguntas">Preguntas frecuentes</Link>
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
                            <li>
                                <Link href="/" onClick={() => setMenuOpen(false)}>
                                    Inicio
                                </Link>
                            </li>

                            <li>
                                <Link href="/#categorias" onClick={() => setMenuOpen(false)}>
                                    Categorías
                                </Link>
                            </li>

                            <li>
                                <Link href="/#productos" onClick={() => setMenuOpen(false)}>
                                    Productos
                                </Link>
                            </li>

                            <li>
                                <Link href="/#nosotros" onClick={() => setMenuOpen(false)}>
                                    Nosotros
                                </Link>
                            </li>

                            <li>
                                <Link href="/#contacto" onClick={() => setMenuOpen(false)}>
                                    Contacto
                                </Link>
                            </li>

                            <li>
                                <Link href="/#preguntas" onClick={() => setMenuOpen(false)}>
                                    Preguntas frecuentes
                                </Link>
                            </li>
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
        </header >
    );
}
