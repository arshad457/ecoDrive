import React, { useState } from 'react';
import { Phone, Clock, Tag, X, Lock } from 'lucide-react';
import prductImage1 from '../../assets/images/Transmission-Image-6-1.png'
export default function NewArrivalEngines() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setFormData({ name: '', mobile: '', email: '' });
    setSubmitStatus('');
    document.body.style.overflow = 'unset'; // Restore scroll
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = async () => {
    setIsSubmitting(true);
    setSubmitStatus('');

    // Validate form
    if (!formData.name || !formData.mobile) {
      setSubmitStatus('error');
      alert('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    try {
      // EmailJS Configuration
      // Sign up at https://www.emailjs.com/ and replace these values
     
       const serviceID = 'service_dcx6xug';
      const templateID = 'template_wtpuleq';
      const publicKey = 'VMJq2h4guP5mag8sP';

      const emailData = {
        to_email: 'ankitchandel858790@gmail.com',
        from_name: formData.name,
        mobile: formData.mobile,
        product_name: selectedProduct?.name || 'General Inquiry',
        product_price: selectedProduct?.offerPrice || 'N/A',
        message: `New Product Inquiry:\n\nName: ${formData.name}\nMobile: ${formData.mobile}\nProduct: ${selectedProduct?.name || 'General Inquiry'}\nPrice: ${selectedProduct?.offerPrice || 'N/A'}`
      };

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceID,
          template_id: templateID,
          user_id: publicKey,
          template_params: emailData
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        alert('✅ Your inquiry has been sent successfully! We will contact you soon.');
        setTimeout(() => {
          handleCloseModal();
        }, 2000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      alert('❌ Failed to send inquiry. Please call us directly at +1 804-800-6985');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = () => {
    sendEmail();
  };
  const products = [
    {
      id: 1,
      name: '2014 Ford F-150 Engine (3.5L EcoBoost, VIN T)',
      image: 'images/2014_Ford_Engine.jpg',
      miles: '78,000',
      price: 4800,
      offerPrice: 2999
    },
    {
      id: 2,
      name: '2016 Honda Accord Engine (2.4L, VIN K, 8th digit)',
      image: 'images/linting2.jpg',
      miles: '62,000',
      price: 3700,
      offerPrice: 2250
    },
    {
      id: 3,
      name: '2012 Toyota Tacoma Transmission (Automatic, 4WD)',
      image: 'images/toyota3.jpg',
      miles: '60000',
      price: 3700,
      offerPrice: 1650
    },
    {
      id: 4,
      name: '2015 Nissan Altima Engine (2.5L, VIN A)',
      image: 'images/Nissan_QR25DE_Engine.jpg',
      miles: '68,000',
      price: 2900,
      offerPrice: 1950
    },
    {
      id: 5,
      name: '2017 Chevy Silverado 1500 Transmission (6-Speed, 4x4)',
      image: 'images/Chevy_Silverado.jpg',
      miles: '72000',
      price: 4250,
      offerPrice: 2500
    },
    {
      id: 6,
      name: '2018 Jeep Grand Cherokee Engine (3.6L V6)',
      image: 'images/jeep-grand.jpg',
      miles: '65000',
      price: 4800,
      offerPrice: 2799
    }
  ];

  return (
    <div className="bg-gray-100 py-8 sm:py-12 md:py-16 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Title */}
        <h2 className="text-2xl sm:text-2xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-12">
          New Arrival Used Engines & Transmissions
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 ">
          
          

          {/* Left Side - Product Grid */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 ">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Product Image */}
                  <div className="relative overflow-hidden bg-gray-200">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-[90%] max-h-[215px] m-auto object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Discount Badge */}
                    <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      SAVE ${product.price - product.offerPrice}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4 sm:p-5">
                    {/* Product Name */}
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-3 line-clamp-2 min-h-[40px] sm:min-h-[48px]">
                      {product.name}
                    </h3>

                    {/* Miles */}
                    <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm mb-3">
                      <Clock className="w-4 h-4" />
                      <span>Miles: {parseInt(product.miles).toLocaleString()}</span>
                    </div>

                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-gray-500 text-xs sm:text-sm">Price:</span>
                        <span className="text-gray-400 line-through text-xs sm:text-sm">
                          ${product.price.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500 text-xs sm:text-sm">Offer Price:</span>
                        <span className="text-green-600 font-bold text-lg sm:text-xl">
                          ${product.offerPrice.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Button */}
                    <button 
                      onClick={() => handleOpenModal(product)}
                      className="w-full bg-gray-900 hover:bg-black text-white font-bold py-2.5 sm:py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                    >
                      SEND US QUERY
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right  Sidebar - Promotional Banners */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* 50% OFF Banner */}
            {/* <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="w-5 h-5" />
                  <span className="text-sm font-semibold uppercase tracking-wide">Mega Sale Countdown</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  50% HURRY UP!!<br />LIMITED TIME OFFER!
                </h3>
                
                <div className="my-6">
                  <div className="text-5xl sm:text-6xl md:text-7xl font-black mb-2">
                    50% OFF
                  </div>
                  <p className="text-sm opacity-90">
                    on all our quality used engines and transmission parts!
                  </p>
                </div>

       
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 aspect-square flex items-center justify-center">
                    <div className="text-4xl">🔧</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 aspect-square flex items-center justify-center">
                    <div className="text-4xl">⚙️</div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Contact Banner */}
            {/* <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 sm:p-8 text-white shadow-2xl">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  Can't find what you're looking for?
                </h3>
                <p className="text-gray-300 mb-6 text-sm sm:text-base">
                  Call us now on
                </p>
                <a 
                  href="tel:+18048006985"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  +1 000-000-0000
                </a>
              </div>
            </div> */}
          </div>
        </div>

      

        {/* Modal Popup */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
            <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full relative transform animate-slideUp overflow-hidden">
              
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 bg-gray-900 hover:bg-black text-white w-10 h-10 rounded-full flex items-center justify-center z-20 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header with Brand Logos Background */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 px-6 pt-4 pb-3 relative overflow-hidden">
                {/* Brand Logo Pattern Background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-4 gap-4 p-4">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="aspect-square bg-white/20 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                        🚗
                      </div>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <div className="relative z-10 text-center text-white">
                  <h3 className="text-xl font-bold mb-2">
                    Free Shipping on<br />Engine/Transmission in Delhi
                  </h3>
                  <a href="tel:+18048006985" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-bold text-xl transition-colors">
                    <Phone className="w-5 h-5" />
                    804-800-6985
                  </a>
                </div>
              </div>

              {/* Form */}
              <div className="p-6 space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gray-900 focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
                  required
                />

                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gray-900 focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
                  required
                />

               

                {/* Selected Product Info */}
                {selectedProduct && (
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <p className="text-xs text-gray-500 mb-1">Selected Product:</p>
                    <p className="text-sm font-semibold text-gray-900 line-clamp-2">{selectedProduct.name}</p>
                    <p className="text-green-600 font-bold mt-1">${selectedProduct.offerPrice.toLocaleString()}</p>
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-2 rounded-lg transition-all transform hover:scale-105 shadow-lg ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'SENDING...' : 'Send Enquery'}
                </button>

                <button
                  onClick={handleCloseModal}
                  className="w-full bg-gray-900 hover:bg-black text-white font-bold py-2 rounded-lg transition-all"
                >
                  CALL NOW FOR FREE QUOTE
                </button>

                

                {/* Security Note */}
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                  <Lock className="w-4 h-4" />
                  <span>Your information will be secured with end-to-end party</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}