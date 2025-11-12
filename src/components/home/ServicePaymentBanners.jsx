import React from 'react';
import { Award, Shield, CreditCard, DollarSign } from 'lucide-react';
import bbbLogo from '../../assets/images/aap-logo-2.png'
import explogo from '../../assets/images/aap-logo-1.png'
import payPal from '../../assets/images/paypal-credit.webp'
export default function ServicePaymentBanners() {
  return (
    <div className="w-full">
      
      {/* Section 1: Service Banner */}
      <section className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 py-4 sm:py-6 md:py-8 px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 max-w-[80%] m-auto">
            
            {/* Left Side - Text Content */}
            <div className="flex-1 text-center lg:text-left ">
              <h2 className="text-xl sm:text-3xl md:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-4 leading-tight">
                PROVIDING FAST AND<br />
                FRIENDLY SERVICE 
              </h2>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto lg:mx-0">
                “Renowned by thousands of satisfied customers for delivering high-quality engines and transmissions.”
              </p>
            </div>

            {/* Right Side - Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
              
              {/* BBB A+ Rating Badge */}
              <div className="max-w-40">
                <img src={bbbLogo} alt="" />
              </div>
              <div className="max-w-40">
                <img src={explogo} alt="" className='' />
              </div>

              
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Payment & Financing Banner */}
      <section className="bg-white py-6 sm:py-8 md:py-4 px-4 border-t border-b border-gray-200">
        <div className="align-center">
                <img src={payPal} alt="" className='m-auto' />
              </div>
      </section>

    
    </div>
  );
}