import React, { useState, useRef, useEffect } from 'react';
import { Package, Truck, RotateCcw, Headphones, Play, X } from 'lucide-react';

export default function EnginesShowcase() {
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRef = useRef(null);

  const features = [
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Original Products',
      description: 'Auto parts from trusted brands',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Fast Delivery',
      description: 'Free Shipping over $499',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: '30 Days Returns',
      description: '30 days open purchase',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Dedicated Support',
      description: 'Quick response to your queries',
      color: 'from-green-500 to-green-600'
    }
  ];

  const videos = [
    {
      id: 1,
      title: 'Engine Inspection Process',
      videoUrl: 'public/v1.mp4', // Replace with your server video path
      thumbnail: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800',
      duration: '0:11',
      category: 'Quality Check'
    },
    {
      id: 2,
      title: 'Transmission Assembly',
      videoUrl: 'public/v1.mp4', // Replace with your server video path
      thumbnail: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800',
      duration: '0:45',
      category: 'Assembly'
    },
    {
      id: 3,
      title: 'Chevy Transmission',
      videoUrl: 'public/v1.mp4', // Replace with your server video path
      thumbnail: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800',
      duration: '0:30',
      label: 'Chevy Transmission',
      category: 'Featured'
    },
    {
      id: 4,
      title: 'Engines For Days',
      videoUrl: 'public/v1.mp4', // Replace with your server video path
      thumbnail: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800',
      duration: '1:15',
      label: 'Engines For Days',
      category: 'Inventory'
    }
  ];

  // Auto-play video when modal opens
  useEffect(() => {
    if (playingVideo && videoRef.current) {
      videoRef.current.play();
    }
  }, [playingVideo]);

  const handleCloseModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setPlayingVideo(null);
  };

  const currentVideo = videos.find(v => v.id === playingVideo);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-8 sm:py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Features Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center text-white mb-3 sm:mb-4 shadow-lg`}>
                <div className="w-6 h-6 sm:w-8 sm:h-8">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Main Content Section */}
        <div className="mb-8 sm:mb-12 px-2 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 text-center leading-tight px-2">
            Used Engines & Transmissions – Guaranteed Performance
          </h2>
          <p className="text-gray-600 text-center max-w-4xl mx-auto text-sm sm:text-base md:text-lg px-4">
            Eco Drive Auto mein, hum aapko top-quality used engines & transmissions provide karte hain — har part professionally inspected, low mileage, aur ready-to-install hota hai.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => setPlayingVideo(video.id)}
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-[9/16] overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-all transform group-hover:scale-110 shadow-2xl">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" fill="white" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/80 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  {video.duration}
                </div>

                {/* Category Badge */}
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-red-600 text-white px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase">
                  {video.category}
                </div>

                {/* Label (if exists) */}
                {video.label && (
                  <div className="absolute bottom-12 sm:bottom-14 left-2 sm:left-4 bg-blue-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-bold shadow-lg">
                    {video.label}
                  </div>
                )}

                {/* Video Info */}
                <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 left-2 sm:left-4">
                  <h3 className="text-white font-bold text-sm sm:text-base lg:text-lg drop-shadow-lg line-clamp-2">
                    {video.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal with HTML5 Video Player */}
        {playingVideo && currentVideo && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={handleCloseModal}
          >
            <div 
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute -top-12 right-0 bg-red-600 hover:bg-red-700 text-white w-10 h-10 rounded-full flex items-center justify-center z-10 shadow-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Video Player */}
              <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
                <video
                  ref={videoRef}
                  className="w-full h-auto max-h-[80vh]"
                  controls
                  autoPlay
                  controlsList="nodownload"
                >
                  <source src={currentVideo.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Video Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-bold text-lg">{currentVideo.title}</h3>
                  <p className="text-gray-300 text-sm">{currentVideo.category}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}