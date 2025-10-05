"use client";

import Image from "next/image";
import { X } from "lucide-react";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <li className="flex py-6 border-b">
      {/* Product Image */}
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images[0].url}
          alt={data.name}
          className="object-cover object-center"
        />
      </div>

      {/* Product Details */}
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        {/* Remove Button */}
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>

        {/* Name + Price */}
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <p className="text-lg font-semibold text-black">{data.name}</p>
          <Currency value={data.price} />
        </div>

        {/* Color + Size */}
        <div className="mt-1 flex text-sm">
          <p className="text-gray-500">{data.color.name}</p>
          <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
            {data.size.name}
          </p>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
