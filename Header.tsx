import React from 'react';
import { ShoppingBag, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-[#090040] to-[#471396] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">زهرة الجمال</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-200 hover:text-[#FFCC00] transition-colors">الرئيسية</a>
            <a href="#products" className="text-gray-200 hover:text-[#FFCC00] transition-colors">المنتجات</a>
            <a href="#about" className="text-gray-200 hover:text-[#FFCC00] transition-colors">من نحن</a>
            <a href="#contact" className="text-gray-200 hover:text-[#FFCC00] transition-colors">اتصل بنا</a>
          </nav>
          
          <div className="flex items-center space-x-4 space-x-reverse">
            <button className="p-2 text-gray-200 hover:text-[#FFCC00] transition-colors">
              <ShoppingBag size={20} />
            </button>
            <button className="md:hidden p-2 text-gray-200">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}