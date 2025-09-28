import React from 'react';
import { ProductCard } from './ProductCard';

export function Products() {
  const products = [
    {
      name: "سيروم الإشراق المتألق",
      price: "٨٩.٩٩ ر.س",
      image: "https://images.pexels.com/photos/7755233/pexels-photo-7755233.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "سيروم مُعزز بفيتامين سي للحصول على بشرة متوهجة"
    },
    {
      name: "أحمر شفاه مخملي مطفي",
      price: "٢٤.٩٩ ر.س",
      image: "https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "لمسة نهائية مطفية طويلة الأمد بـ ١٢ درجة لونية"
    },
    {
      name: "كريم الوجه المرطب",
      price: "٦٥.٩٩ ر.س",
      image: "https://images.pexels.com/photos/7755228/pexels-photo-7755228.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "ترطيب لمدة ٢٤ ساعة بحمض الهيالورونيك"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-green-100 to-green-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#471396] to-[#B13BFF] bg-clip-text text-transparent mb-4">
            المنتجات المميزة
          </h2>
          <p className="text-xl text-gray-800 max-w-2xl mx-auto">
            منتجات مختارة بعناية تحقق نتائج استثنائية لجميع أنواع البشرة
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}