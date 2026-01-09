'use client';

import Image from 'next/image';
import { Product } from '@/types/product';

interface Props {
  product: Product;
  showBestSellerBadge?: boolean;
}

export default function ProductCard({
  product,
  showBestSellerBadge = false,
}: Props) {
  return (
    <div className="bg-white border border-primary rounded-lg h-full overflow-hidden">
      {/* Imagen */}
      <div className="relative">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={300}
          className="object-cover h-64"
        />

        {showBestSellerBadge && (
          <span className="absolute top-3 left-3 bg-[#f3a6a6] text-white text-xs px-3 py-1 rounded">
            Más vendido
          </span>
        )}
      </div>

      {/* Contenido */}
      <div className="p-4 text-center">
        <p className="text-sm text-gray-500 font-secondary">
          {product.category}
        </p>

        <h3 className="font-secondary font-medium mt-1 leading-tight">
          {product.title}
        </h3>

        <p className="text-sm mt-2 font-semibold font-secondary">
          ${product.price.toLocaleString('es-AR')}
        </p>

        <a
          href="https://api.whatsapp.com/message/SQJNXUCOW5BSJ1"
          target="_blank"
          rel="noopener noreferrer"
          className="font-secondary inline-block mt-4 px-4 py-1 border border-primary text-[#3a1d35] rounded-full text-sm hover:bg-primary hover:text-white transition"
        >
          Pedir por WhatsApp
        </a>
      </div>
    </div>
  );
}
