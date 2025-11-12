import React from 'react'
import logo from '../assets/images/logoED.png';

const NavBar = () => {
  return (
    <div>
        {/* Navigation */}
              <nav className="bg-white shadow-md py-1` px-4">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
                  <div className="flex items-center gap-2">
                    <img src={logo} alt="" className='max-w-[200px]' />
                  </div>
                  <div className="flex gap-6 text-sm font-semibold">
                    <a href="#" className="text-gray-700 hover:text-amber-500 transition">HOME</a>
                    <a href="#" className="text-gray-700 hover:text-amber-500 transition">AUTO PARTS</a>
                    <a href="#" className="text-gray-700 hover:text-amber-500 transition">BRANDS</a>
                    <a href="#" className="text-gray-700 hover:text-amber-500 transition">CONTACT</a>
                  </div>
                </div>
              </nav>
    </div>
  )
}

export default NavBar