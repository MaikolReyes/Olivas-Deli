'use client';

import Image from 'next/image';


type Product = {
  id: number;
  category: string;
  title: string;
  price: string;
  image: string;
  badge?: string;
};

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="bg-white border border-primary rounded-lg h-full overflow-hidden" id='productos'>
      {/* Imagen */}
      <div className="relative">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={300} // 72 * 4
          className="object-cover h-64"
        />

        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#f3a6a6] text-white text-xs px-3 py-1 rounded">
            {product.badge}
          </span>
        )}
      </div>

      {/* Contenido */}
      <div className="p-4 text-center">
        <p className="text-sm text-gray-500">{product.category}</p>

        <h3 className="font-medium mt-1 leading-tight">
          {product.title}
        </h3>

        <p className="text-sm mt-2 font-semibold">{product.price}</p>

        <a
          href="https://api.whatsapp.com/message/SQJNXUCOW5BSJ1?autoload=1&app_absent=0&utm_source=ig"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-1 border border-primary text-primary rounded-full text-sm hover:bg-primary hover:text-white transition"
        >
          Pedir por WhatsApp
        </a>
      </div>
    </div>
  );
}