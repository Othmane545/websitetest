import React from 'react';

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  description: string;
}

export function ProductCard({ name, price, image, description }: ProductCardProps) {
  return (
    <div className="bg-green-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-[#B13BFF]">
      <img 
        src={image} 
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-[#B13BFF]">{price}</span>
          <button className="bg-gradient-to-r from-[#471396] to-[#B13BFF] text-white px-4 py-2 rounded-lg hover:from-[#B13BFF] hover:to-[#471396] transition-all duration-300">
            أضيفي للسلة
          </button>
        </div>
      </div>
    </div>
  );
}