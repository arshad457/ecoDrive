import React from 'react'
import { Mail, MapPin, Phone, CheckCircle, AlertCircle, Clock } from 'lucide-react';

const TermAndCondition = () => {
  return (
    <>
        <main className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-10">
          {/* Title Section */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Terms & Conditions</h2>
            <div className="flex items-center justify-center text-gray-600 text-sm md:text-base mb-4">
              <Clock className="w-4 h-4 mr-2" />
              <span>Last Updated: November 2024</span>
            </div>
            <p className="text-gray-700 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
              Welcome to <span className="font-semibold">ECODRIVE AUTO PARTS LLC</span>. By contacting us, purchasing products, or using our services, you agree to the following Terms & Conditions.
            </p>
          </div>

          {/* Notice Box */}
          <div className="bg-green-50 border-l-4 border-green-600 p-4 md:p-6 mb-8 rounded-r-lg">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">Important Notice</h3>
                <p className="text-gray-700 text-sm md:text-base">
                  Please read these terms carefully before using our services. By accessing our website or making a purchase, you acknowledge that you have read, understood, and agree to be bound by these terms.
                </p>
              </div>
            </div>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {/* 1. General Use */}
            <section>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-2 h-8 bg-green-600 mr-3"></span>
                1. General Use
              </h3>
              <div className="ml-0 md:ml-5">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  Our services are provided for the purpose of purchasing automotive parts and receiving customer support. Customers must provide accurate information when placing orders or requesting assistance.
                </p>
              </div>
            </section>

            {/* 2. Orders and Payments */}
            <section>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-2 h-8 bg-green-600 mr-3"></span>
                2. Orders and Payments
              </h3>
              <div className="ml-0 md:ml-5 space-y-3">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  All orders are subject to availability and confirmation. Prices and availability may change. Payments must be completed before order processing.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Orders are subject to product availability</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Prices may change without prior notice</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span>Payment must be completed before processing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. Shipping and Delivery */}
            <section>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-2 h-8 bg-green-600 mr-3"></span>
                3. Shipping and Delivery
              </h3>
              <div className="ml-0 md:ml-5">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  We process and ship orders as quickly as possible. Delivery times may vary depending on location and carrier delays. Customers will be notified of shipping updates.
                </p>
              </div>
            </section>

            {/* 4. Returns and Refunds */}
            <section>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-2 h-8 bg-green-600 mr-3"></span>
                4. Returns and Refunds
              </h3>
              <div className="ml-0 md:ml-5 space-y-3">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  Eligible items may be returned according to our return policy. Products must not be used or damaged. Refunds are processed once items are received and inspected.
                </p>
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-3 text-sm md:text-base">Return Requirements:</p>
                  <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 font-bold">✓</span>
                      <span>Products must be unused and undamaged</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 font-bold">✓</span>
                      <span>Items must meet eligibility criteria</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 font-bold">✓</span>
                      <span>Refunds processed after inspection</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 5. Customer Communication */}
            <section>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-2 h-8 bg-green-600 mr-3"></span>
                5. Customer Communication
              </h3>
              <div className="ml-0 md:ml-5">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  By providing your mobile phone number through our website or during phone communication, you consent to receive conversational SMS messages from EcoDrive Auto Parts LLC related to your inquiry, including quotes, product availability, order confirmations, shipping updates, and customer support responses.
                </p>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-3">
                  Message frequency may vary. Message and data rates may apply. You may opt out of receiving SMS messages at any time by replying STOP or request assistance by replying HELP. Consent to receive SMS messages is not a condition of purchase.
                </p>
              </div>
            </section>

            {/* 6. Privacy */}
            <section>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-2 h-8 bg-green-600 mr-3"></span>
                6. Privacy
              </h3>
              <div className="ml-0 md:ml-5 space-y-3">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  We do not sell, share, or distribute personal information, including mobile phone numbers, to third parties for marketing purposes. Customer information is used only for order fulfillment, customer support, and service-related communication. Our Privacy Policy explains how your information is collected and used and is available at https://ecodriveautoparts.store/privacy.

                </p>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                  <p className="text-gray-700 text-sm md:text-base">
                    <span className="font-semibold">Your data is protected:</span> We prioritize your privacy and handle your information with the utmost care and security.
                  </p>
                </div>
              </div>
            </section>

            {/* 7. Limitation of Liability */}
            <section>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-2 h-8 bg-green-600 mr-3"></span>
                7. Limitation of Liability
              </h3>
              <div className="ml-0 md:ml-5">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  ECODRIVE AUTO PARTS LLC is not responsible for indirect or consequential damages arising from product use, delivery delays, or service interruptions.
                </p>
              </div> 
            </section>

           {/* Contact Information */} 
          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="w-2 h-8 bg-green-600 mr-3"></span>
              Contact Us
            </h3>
            <div className="ml-0 md:ml-5">
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-green-50 p-4 md:p-6 rounded-lg space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800 text-sm md:text-base">ECODRIVE AUTO PARTS LLC</p>
                    <p className="text-gray-700 text-sm md:text-base"> 30 N GOULD ST STE R
SHERIDAN, WY 82801</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <a href="mailto:info@ecodriveautoparts.store" className="text-green-600 hover:text-green-700 text-sm md:text-base">
                    info@ecodriveautoparts.store
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <a href="tel: +12012011781" className="text-green-600 hover:text-green-700 text-sm md:text-base">
                    +1 (201) 201-1781
                  </a>
                </div>
              </div>
            </div>
          </section>
          </div>

          {/* Agreement Footer */}
          <div className="border-t pt-6 mt-8">
            <p className="text-gray-600 text-center text-sm md:text-base italic">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default TermAndCondition