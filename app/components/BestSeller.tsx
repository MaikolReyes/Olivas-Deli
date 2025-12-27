'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ProductSellers } from '../utils/ProductSellers';
import ProductCard from "./ProductCard"
import 'swiper/css/navigation';
import 'swiper/css';



export const BestSeller = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-center text-4xl font-light mb-8 text-primary">
                Lo más vendido
            </h2>

            <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                spaceBetween={24}
                slidesPerView={4}
                slidesPerGroup={4}
                loop
                breakpoints={{
                    0: { slidesPerView: 1, slidesPerGroup: 1 },
                    640: { slidesPerView: 2, slidesPerGroup: 2 },
                    1024: { slidesPerView: 4, slidesPerGroup: 4 },
                }}
            >
                {ProductSellers.map((productSeller) => (
                    <SwiperSlide key={productSeller.id}>
                        <ProductCard product={productSeller} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
}