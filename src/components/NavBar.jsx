import React from 'react'
import logo from '../assets/images/logoED.png';
import { Phone, Mail } from 'lucide-react';
import { Link } from 'react-router';
const NavBar = () => {
  return (
    <div>
       <div className="bg-gray-950 text-white py-3 px-4">
              <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
                <div className="flex flex-wrap gap-4 text-sm ml-auto">
                  <a href="tel:+12012011781" className="flex items-center gap-2 hover:text-amber-400 transition">
                    <Phone size={16} />
                    <span>Toll Free:  +1 (201) 201-1781</span>
                  </a>
                  <a href="mailto:info@ecodriveautoparts.store" className="flex items-center gap-2 hover:text-amber-400 transition">
                    <Mail size={16} />
                    <span>info@ecodriveautoparts.store</span>
                  </a>
                </div>
                {/* <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-md text-sm font-semibold transition">
                  Send Us Query
                </button> */}
              </div>
            </div>
        {/* Navigation */}
              <nav className="bg-white shadow-md py-1` px-4">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Link to="/"><img src={logo} alt="" className='max-w-[200px]' /> </Link>
                  </div>
                  <div className="flex gap-6 text-sm font-semibold">
                    <Link to="/" className="text-gray-700 hover:text-amber-500 transition">HOME</Link>
                    <Link to="#" className="text-gray-700 hover:text-amber-500 transition">AUTO PARTS</Link>
                    <Link to="#" className="text-gray-700 hover:text-amber-500 transition">BRANDS</Link>
                    <Link to="#" className="text-gray-700 hover:text-amber-500 transition">CONTACT</Link>
                  </div>
                </div>
              </nav>
    </div>
  )
}

export default NavBar