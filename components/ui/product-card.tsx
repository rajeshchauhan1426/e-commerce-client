"use client";
import Image from "next/image";
import { Product } from "@/types";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        {data?.imageUrl ? (
          <Image 
            src={data.imageUrl}
            fill
            alt={data.name}
            className="object-cover rounded-xl"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            No Image Available
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
