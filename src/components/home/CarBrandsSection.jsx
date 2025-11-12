import React, { useEffect, useState } from 'react';


export default function CarBrandsSection() {
    const [shuffledBrands, setShuffledBrands] = useState([]);

  const brands = [
    { name: 'PORSCHE', logo: '/images/1.webp'},
    { name: 'NISSAN', logo: '/images/2.webp' },
    { name: 'MITSUBISHI', logo: '/images/3.webp' },
    { name: 'MINI', logo: '/images/4.webp' },
    { name: 'MERCEDES', logo: '/images/5.webp' },
    { name: 'LAND ROVER', logo: '/images/6.webp' },
    { name: 'KIA', logo: '/images/7.webp' },
    { name: 'HYUNDAI', logo: '/images/8.webp' },
    { name: 'GEO', logo: '/images/9.webp' },
    { name: 'DATSUN', logo: '/images/10.webp' },
    { name: 'DAIHATSU', logo: '/images/11.webp' },
    { name: 'AUDI', logo: '/images/12.webp' },
    { name: 'BMW', logo: '/images/13.webp' },
    { name: 'ALFA ROMEO', logo: '/images/14.webp' },
    { name: 'ACURA', logo: '/images/15.webp' },
    { name: 'HONDA', logo: '/images/16.webp' },
    { name: 'JAGUAR', logo: '/images/17.webp' },
    { name: 'INFINITI', logo: '/images/18.webp' },
    { name: 'DAEWOO', logo: '/images/19.webp' },
    { name: 'LEXUS', logo: '/images/20.webp' },
    { name: 'MAZDA', logo: '/images/21.webp' },
    { name: 'VOLVO', logo: '/images/22.webp' },
    { name: 'TOYOTA', logo: '/images/23.webp' },
    { name: 'SUZUKI', logo: '/images/24.webp' },
    { name: 'SUBARU', logo: '/images/25.webp' },
    { name: 'SCION', logo: '/images/26.webp' },
    { name: 'SATURN', logo: '/images/27.webp' },
    { name: 'SAAB', logo: '/images/28.webp' },
    { name: 'VOLKSWAGEN', logo: '/images/29.webp' }
  ];
  // Shuffle logic
  const shuffleArray = (array) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  // Shuffle on component mount
  useEffect(() => {
    setShuffledBrands(shuffleArray(brands));
  }, []);
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Authentic, low-mileage parts available for all makes and models.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-4xl mx-auto leading-relaxed">
          We offer a wide range of quality auto parts for all major brands, from engines to transmissions, ensuring your vehicle performs at its best with reliable, long-lasting components you can trust </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6">
          {shuffledBrands.map((brand, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-3 sm:p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-400 hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              {/* Logo Container */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 mb-2 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                <img
                  src={brand.logo}
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