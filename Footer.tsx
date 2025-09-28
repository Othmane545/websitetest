import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#090040] to-[#471396] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-[#FFCC00]">زهرة الجمال</h3>
            <p className="text-gray-300 mb-4">
              شريكتك الموثوقة في الجمال الطبيعي. نؤمن بأن كل امرأة تستحق أن تشعر بالثقة والجمال في بشرتها.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <div className="flex items-center">
                <Mail size={16} className="ml-2" />
                <span className="text-sm">hello@beautybloom.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FFCC00]">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-[#FFCC00] transition-colors">الرئيسية</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-[#FFCC00] transition-colors">المنتجات</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-[#FFCC00] transition-colors">من نحن</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-[#FFCC00] transition-colors">اتصل بنا</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FFCC00]">معلومات التواصل</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone size={16} className="ml-2" />
                <span className="text-sm">+966 50 123 4567</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="ml-2" />
                <span className="text-sm">الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#B13BFF] mt-8 pt-8 text-center">
          <p className="text-gray-300">&copy; ٢٠٢٤ زهرة الجمال. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}