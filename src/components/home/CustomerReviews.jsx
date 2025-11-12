import React from 'react';
import { Star, Quote, MoreVertical } from 'lucide-react';

export default function CustomerReviews() {
  
  const reviews = [
    {
      id: 1,
      name: 'Jessica Partices',
      role: '',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      rating: 5,
      text: '“I bought a used engine for my Honda Accord, and it arrived exactly as described—clean, low mileage, and ready to install. My mechanic was impressed with the condition. The car runs smoother than ever!”'
    },
    {
      id: 2,
      name: 'Adam Jonson',
      role: '',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      rating: 4.5,
      text: '“Received my used transmission within a week. It was professionally packaged and in excellent shape. Installed it with zero issues. Highly recommend these guys for dependable parts.”'
    },
    {
      id: 3,
      name: 'Maya Findish',
      role: '',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      rating: 4,
      text: 'The team helped me find the exact engine match for my vehicle. They explained everything clearly and made the process stress-free. The engine is performing flawlessly.'
    },
    {
      id: 4,
      name: 'John Smith',
      role: '',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      rating: 5,
      text: 'I was skeptical about buying a used engine online, but the quality exceeded my expectations. Low mileage, fully tested, and runs perfectly. Saved me thousands!'
    },
    {
      id: 5,
      name: 'Sarah Williams',
      role: '',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150',
      rating: 5,
      text: 'The engine worked great right out of the box. Minor delay in shipping, but customer service kept me updated. Would definitely buy again'
    },
    {
      id: 6,
      name: 'Michael Chen',
      role: '',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      rating: 4.5,
      text: 'I ordered a used engine for my Toyota Camry and was surprised by how clean and well-maintained it was. After installation, the engine started on the first try and runs like new. Definitely a trustworthy supplier.'
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`full-${i}`} className="w-5 h-5 sm:w-6 sm:h-6 fill-amber-500 text-amber-500" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-5 h-5 sm:w-6 sm:h-6 fill-blue-300 text-blue-300" />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-5 h-5 sm:w-6 sm:h-6 fill-blue-200 text-blue-200" />
      );
    }

    return stars;
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
           Check out reviews from our happy customers who have enjoyed our outstanding service.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 relative overflow-hidden group border border-gray-700 hover:border-blue-500"
            >
              {/* Background Gradient Overlay */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
              
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 sm:w-20 sm:h-20 text-blue-400" />
              </div>

              {/* Menu Dots */}
              <button className="absolute top-6 right-6 text-gray-500 hover:text-gray-300 transition-colors z-10">
                <MoreVertical className="w-5 h-5" />
              </button>

              {/* Review Text */}
              <div className="relative z-10 mb-6 sm:mb-8">
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed italic min-h-[100px] sm:min-h-[120px]">
                  "{review.text}"
                </p>
              </div>

              {/* Star Rating */}
              <div className="flex justify-center gap-1 mb-6 sm:mb-8 relative z-10">
                {renderStars(review.rating)}
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6"></div>

              {/* User Info */}
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-lg flex-shrink-0">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-white text-base sm:text-lg truncate">
                    {review.name}
                  </h4>
                  <p className="text-blue-400 text-sm sm:text-base font-medium truncate">
                    {review.role}
                  </p>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
}