import React from 'react';
import { User, Truck, ShieldCheck, Headphones } from 'lucide-react';

export default function WhyChooseSection() {
  const features = [
    {
      id: 1,
      icon: User,
      title: 'Customer Service',
      description: 'Our dedicated team prioritizes customer satisfaction, ensuring personalized assistance and quick response to queries.'
    },
    {
      id: 2,
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Understanding your need for speed, we ensure that you get the parts on time, helping you to get back on the road faster.'
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: 'Warranty',
      description: 'Eco Drive Auto Parts stands for product quality, offering a gold standard warranty, ensuring your parts are protected even after delivery.'
    },
    {
      id: 4,
      icon: Headphones,
      title: 'Interactive Support',
      description: 'Our interactive support platform provides real-time assistance for product selection, order placement, and answering all queries.'
    }
  ];

  return (
     <section className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 py-4 sm:py-6 md:py-8 px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
        </div>

      
      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Why Choose Eco Drive Auto
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-4xl mx-auto px-4">
            We are the leading supplier in the automotive industry, known as the foremost hub for auto parts like used engines and transmissions for sale, delivering comprehensive solutions fulfilling our customers' needs. Our inventory contains a wide range of high-quality auto parts meeting every specification need, as the best place to buy used engines near me. We have established a stable presence not in the local community but also across different locations, providing exceptional value to our clients. The experts properly inspect each of our auto parts to ensure superior performance, ensuring seamless integration with your vehicle, regardless of age or model.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12  max-w-5xl m-auto">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 relative overflow-hidden group border border-gray-700 hover:border-blue-500"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Text */}
        <div className="text-center">
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-5xl mx-auto px-4">
            When it comes to auto parts, we are your one-stop solution. We understand that these components are essential investments, and that's why all our products come with a comprehensive warranty, seeding confidence in every purchase. Our auto parts like used engines with warranty offer peace of mind, which reflects our commitment to reliability and customer satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
}