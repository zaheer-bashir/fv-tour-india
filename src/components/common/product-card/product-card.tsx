import React from "react";
import Image from "next/image";

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductAttributes {
  name: string;
}

interface SKU {
  price: number;
}

interface ProductCardProps {
  images: string[];
  attributes: ProductAttributes;
  skus: SKU[];
  isHotDeal?: boolean;
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  images,
  attributes,
  skus,
  isHotDeal = false,
  onClick,
}) => {
  return (
    <Card
      className="shadow-lg hover:shadow-2xl transition duration-300 bg-white dark:bg-gray-800 rounded-xl overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <CardHeader className="relative p-0 h-[300px]">
        <Image
          src={images[0]}
          alt={attributes.name}
          height={60}
          width={60}
          className="w-full h-full object-cover rounded-t-xl"
          style={{ objectPosition: "top" }}
        />
        {isHotDeal && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
            Hot Deal
          </span>
        )}
      </CardHeader>

      <CardContent className="p-5">
        <CardTitle className="text-lg font-semibold mb-2 text-gray-900 dark:text-white line-clamp-2">
          {attributes.name}
        </CardTitle>

        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-yellow-600">
            ${skus[0].price.toFixed(2)}
          </span>
        </div>

        <div className="mt-4">
          <Button className="w-full bg-yellow-500 text-white hover:bg-yellow-600 transition duration-300">
            View Product
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export { ProductCard };
