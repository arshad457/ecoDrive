import React from 'react';

export default function CarBrandsSection() {
  const brands = [
    { name: 'PORSCHE', logo: '/images'},
    { name: 'NISSAN', logo: '/images' },
    { name: 'MITSUBISHI', logo: '/images' },
    { name: 'MINI', logo: '/images' },
    { name: 'MERCEDES', logo: '/images' },
    { name: 'LAND ROVER', logo: '/images' },
    { name: 'KIA', logo: '/images' },
    { name: 'HYUNDAI', logo: '/images' },
    { name: 'GEO', logo: '/images' },
    { name: 'DATSUN', logo: '/images' },
    { name: 'DAIHATSU', logo: '/images' },
    { name: 'AUDI', logo: '/images' },
    { name: 'BMW', logo: '/images' },
    { name: 'ALFA ROMEO', logo: '/images' },
    { name: 'ACURA', logo: '/images' },
    { name: 'HONDA', logo: '/images' },
    { name: 'JAGUAR', logo: '/images' },
    { name: 'INFINITI', logo: '/images' },
    { name: 'DAEWOO', logo: '/images' },
    { name: 'LEXUS', logo: '/images' },
    { name: 'MAZDA', logo: '/images' },
    { name: 'VOLVO', logo: '/images' },
    { name: 'TOYOTA', logo: '/images' },
    { name: 'SUZUKI', logo: '/images' },
    { name: 'SUBARU', logo: '/images' },
    { name: 'SCION', logo: '/images' },
    { name: 'SATURN', logo: '/images' },
    { name: 'SAAB', logo: '/images' },
    { name: 'VOLKSWAGEN', logo: '/images' }
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Genuine, low-mileage parts available for every make and model
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-4xl mx-auto leading-relaxed">
            We provide an expansive selection of auto parts for different popular brands. From essential parts like engines and transmissions, both new and old, we aim to be your comprehensive resource for your automotive needs. Whether we are partners for delivering your vehicle buy, quality auto parts to keep it performing optimally.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-3 sm:p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-400 hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              {/* Logo Container */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 mb-2 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                <img
                  src={`${brand.logo}/${index+1}.webp`}
                  alt={brand.name}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Brand Name */}
              <p className="text-xs sm:text-sm font-semibold text-gray-700 text-center uppercase tracking-tight">
                {brand.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}