'use client';

import ProductCard from "./ProductCard";
import { Products } from '../utils/Products';
import { SwiperSlide } from 'swiper/react';

export default function ProductsGrid() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12">

            <h2 className="text-center text-4xl font-light mb-8 text-primary">
                Productos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                {Products.map((product) => (
                    <SwiperSlide key={product.id} className='bg-primary'>
                        <ProductCard product={product} />
                    </SwiperSlide>
                ))}
            </div>
        </section>
    );
}
