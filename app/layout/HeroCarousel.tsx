"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";


export default function HeroCarousel() {
    return (
        <div className="relative w-full h-screen" id="inicio">
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop
                slidesPerView={1}
                className="w-full h-full"
            >
                <SwiperSlide
                    className="bg-cover bg-center"
                    style={{ backgroundImage: "url('/postres/tarta-frutillas.png')" }}
                />
                <SwiperSlide
                    className="bg-cover bg-center"
                    style={{ backgroundImage: "url('/postres/lemon-pie.png')" }}
                />
                <SwiperSlide
                    className="bg-cover bg-center"
                    style={{ backgroundImage: "url('/postres/tarta-brownie.png')" }}
                />
            </Swiper>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10" />

            {/* Contenido fijo */}
            <div className="absolute inset-0 z-20 flex items-center justify-center text-white text-center px-4">
                <div>
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold lg:w-2/4 mx-auto">
                        Productos Artesanales:
                        Catering, panificados, postres y más.
                    </h1>
                    <p className="mt-4 text-lg">
                        Ideal para cada momento y para tus eventos.
                    </p>
                </div>
            </div>
        </div>
    );
}

