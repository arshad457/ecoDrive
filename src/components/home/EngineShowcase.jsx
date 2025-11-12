import React from 'react';

export default function EngineShowcase() {
  const engines = [
    {
      id: 1,
      brand: 'BMW ENGINE',
      image: '/images/bmw.jpg'
    },
    {
      id: 2,
      brand: 'AUDI ENGINE',
      image: '/images/audi.jpg'
    },
    {
      id: 3,
      brand: 'CHEVROLET ENGINE',
      image: '/images/chevrolet.jpg'
    },
    {
      id: 4,
      brand: 'NISSAN ENGINE',
      image: '/images/nissan_engien.jpg'
    },
    {
      id: 5,
      brand: 'FORD ENGINE',
      image: '/images/ford.jpg'
    },
    {
      id: 6,
      brand: 'HONDA ENGINE',
      image: '/images/honda.jpg'
    }
  ];

  return (
    <section className="w-[90%] m-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Best Sellers In Engines
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {engines.map((engine) => (
            <div
              key={engine.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="h-56 bg-gray-100">
                <img
                  src={engine.image}
                  alt={engine.brand}
                  className="w-auto m-auto max-h-full object-cover"
                />
              </div>

              {/* Label */}
              <div className="bg-red-600 py-3 px-4">
                <h3 className="text-white font-bold text-center text-sm uppercase">
                  {engine.brand}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}