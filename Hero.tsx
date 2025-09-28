import React from 'react';

export function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-[#471396] to-[#B13BFF] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            الجمال الطبيعي،
            <span className="text-[#FFCC00]"> معاد التعريف</span>
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            اكتشفي مجموعتنا المختارة بعناية من منتجات التجميل الفاخرة التي تعزز جمالك الطبيعي بمكونات نظيفة ومستدامة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#FFCC00] text-[#090040] px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              تسوقي الآن
            </button>
            <button className="border-2 border-[#FFCC00] text-[#FFCC00] px-8 py-3 rounded-lg font-semibold hover:bg-[#FFCC00] hover:text-[#090040] transition-colors">
              اعرفي المزيد
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}