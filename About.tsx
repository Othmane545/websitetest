import React from 'react';
import { Leaf, Heart, Award } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: <Leaf className="text-[#B13BFF]" size={24} />,
      title: "مكونات طبيعية",
      description: "جميع المنتجات مصنوعة من مكونات عضوية ومستدامة المصدر"
    },
    {
      icon: <Heart className="text-[#FFCC00]" size={24} />,
      title: "خالية من القسوة",
      description: "لم يتم اختبارها على الحيوانات، معتمدة كخالية من القسوة من منظمات رائدة"
    },
    {
      icon: <Award className="text-[#471396]" size={24} />,
      title: "مختبرة من أطباء الجلدية",
      description: "مختبرة سريرياً ومعتمدة من أطباء الجلدية المعتمدين"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-r from-[#090040] to-[#471396]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            لماذا تختارين زهرة الجمال؟
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            نحن ملتزمون بتوفير منتجات تجميل عالية الجودة لا تعزز جمالك فحسب، بل تعتني أيضاً ببشرتك والبيئة.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-green-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-[#FFCC00]">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}