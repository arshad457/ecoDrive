import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight, Award, Shield, Truck, CreditCard } from 'lucide-react';
import logo from '../../assets/images/logoED.png'
export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  const products = [
    'Used Engines',
    'Used Transmissions',
    'Transfer Cases',
    'Cylinder Heads',
    'Engine Parts',
    'Transmission Parts'
  ];

  const brands = [
    'Ford', 'Chevrolet', 'Toyota', 'Honda',
    'Nissan', 'BMW', 'Audi', 'Mercedes',
    'Dodge', 'Jeep', 'GMC', 'Volkswagen'
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      
     
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
               <img src={logo} alt="" className='max-w-[200px]' />
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Your trusted source for quality used engines and transmissions. With over 50 years of experience, we provide reliable auto parts nationwide.
            </p>
            
            {/* Social Media */}
            <div className="space-y-3 mb-6">
              <p className="text-sm font-semibold text-gray-300">Follow Us:</p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all transform hover:scale-110">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-all transform hover:scale-110">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all transform hover:scale-110">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all transform hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all transform hover:scale-110">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Our Products</h4>
            <ul className="space-y-2.5">
              {products.map((product, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors group">
                    <ArrowRight className="w-4 h-4 text-purple-500 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Call Us:</p>
                  <a href="tel:+18048006985" className="text-white font-bold hover:text-blue-400 transition-colors">
                    +1 999-999-9999
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Email Us:</p>
                  <a href="mailto:info@swizzauto.com" className="text-white font-bold hover:text-purple-400 transition-colors break-all">
                    info@ecodriveautoparts.store
                  </a>
                </div>
              </div>

            

            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-gray-400 text-sm text-center">
              © {currentYear} Eco Drive Auto parts. All rights reserved. | Trusted since 1958
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ArrowRight className="w-6 h-6 transform -rotate-90" />
      </button>
    </footer>
  );
}