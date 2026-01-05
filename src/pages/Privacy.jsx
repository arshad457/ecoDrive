import React from 'react'
import { Shield, Mail, Phone, MapPin, Clock } from 'lucide-react';
const Privacy = () => {
  return (
    <>
     <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">


      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-10">
          {/* Title Section */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Privacy Policy</h2>
            <div className="flex items-center justify-center text-gray-600 text-sm md:text-base">
              <Clock className="w-4 h-4 mr-2" />
              <span>Last Updated: November 2024</span>
            </div>
          </div>

          {/* Introduction */}
          <section className="mb-8">
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              At <span className="font-semibold">ECODRIVE AUTO PARTS LLC</span>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="w-2 h-8 bg-green-600 mr-3"></span>
              Information We Collect
            </h3>
            <div className="space-y-4 ml-0 md:ml-5">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">Personal Information</h4>
                <p className="text-gray-700 text-sm md:text-base">We may collect personal information that you voluntarily provide to us, including:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 ml-4 text-sm md:text-base">
                  <li>Name and contact information</li>
                  <li>Email address and phone number</li>
                  <li>Billing and shipping addresses</li>
                  <li>Vehicle information (make, model, year)</li>
                  <li>Payment information</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">Automatically Collected Information</h4>
                <p className="text-gray-700 text-sm md:text-base">When you visit our website, we automatically collect:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 ml-4 text-sm md:text-base">
                  <li>IP address and browser information</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website addresses</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="w-2 h-8 bg-green-600 mr-3"></span>
              How We Use Your Information
            </h3>
            <div className="ml-0 md:ml-5 space-y-3">
              <p className="text-gray-700 text-sm md:text-base">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 text-sm md:text-base">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about products and services</li>
                <li>Improve our website and customer experience</li>
                <li>Send promotional materials (with your consent)</li>
                <li>Prevent fraud and enhance security</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </section>

          {/* Information Sharing */}
          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="w-2 h-8 bg-green-600 mr-3"></span>
              Information Sharing and Disclosure
            </h3>
            <div className="ml-0 md:ml-5 space-y-3">
              <p className="text-gray-700 text-sm md:text-base">We do not sell your personal information. We may share your information with:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 text-sm md:text-base">
                <li>Service providers who assist in our operations</li>
                <li>Shipping and payment processing partners</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your explicit consent</li>
              </ul>
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="w-2 h-8 bg-green-600 mr-3"></span>
              Data Security
            </h3>
            <div className="ml-0 md:ml-5">
              <p className="text-gray-700 text-sm md:text-base">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="w-2 h-8 bg-green-600 mr-3"></span>
              Your Rights
            </h3>
            <div className="ml-0 md:ml-5 space-y-3">
              <p className="text-gray-700 text-sm md:text-base">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 text-sm md:text-base">
                <li>Access and receive a copy of your personal data</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="w-2 h-8 bg-green-600 mr-3"></span>
              Cookies and Tracking Technologies
            </h3>
            <div className="ml-0 md:ml-5">
              <p className="text-gray-700 text-sm md:text-base">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. You can control cookie settings through your browser preferences.
              </p>
            </div>
          </section>

          {/* Children's Privacy */}
          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="w-2 h-8 bg-green-600 mr-3"></span>
              Children's Privacy
            </h3>
            <div className="ml-0 md:ml-5">
              <p className="text-gray-700 text-sm md:text-base">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete such information.
              </p>
            </div>
          </section>

          {/* Changes to Policy */}
          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="w-2 h-8 bg-green-600 mr-3"></span>
              Changes to This Privacy Policy
            </h3>
            <div className="ml-0 md:ml-5">
              <p className="text-gray-700 text-sm md:text-base">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
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

          {/* Acceptance */}
          <div className="border-t pt-6 mt-8">
            <p className="text-gray-600 text-center text-sm md:text-base italic">
              By using our website and services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
            </p>
          </div>
        </div>
      </main>

    
    </div>
    </>
  )
}

export default Privacy