import { useRef } from 'react';
import { useEffect, useState } from "react";
import { Link, useLocation } from  "react-router-dom";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  // Detects clicks outside and close dropdown
  const handleClickOutside = ((event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/use-cases", label: "Use Cases" },
    { path: "/pricing", label: "Pricing" },
    { path: "/fqas", label: "FAQs" },
    { path: "/contactus", label: "Contact Us" },
  ];

  return (
    <div className='py-[23px] backdrop-blur-[53px] px-8 flex items-center justify-center bg-nav-gradient xl:px-0'>
      <div className={`
        container flex flex-row mx-auto justify-between items-center text-white xll:px-8 2xl:px-0
        `}>

          {/* Logo section */}
        <div>
          <img 
            src="/images/logo.png" 
            alt="nav logo" 
            className="max-w-[60%] xl:max-w-[80%]"
          />
        </div>

        {/* Navition links */}
        <div className="hidden lg:flex flex-row gap-[64px] lg:gap-[34px]">
          {navLinks.map((link, index) => (
            <Link 
              key={index} 
              to={link.path} 
              className={`font-inter text-sm lg:text-base xl:text-xl font-normal text-center hover:underline ${
                location.pathname === link.path ? "text-purple-500" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Login and Sign up buttons */}
        <div className="hidden font-inter gap-[13px] lg:flex">
          <Link to='/dashboard'>
            <button className={`py-[3px] px-[47px] lg:px-[30px] border rounded-full border-white font-semibold text-lg lg:text-base text-center text-white`}>
              Login
            </button>
          </Link>
          <Link to='/dashboard'>
            <button className="py-[3px] px-[47px] lg:px-[30px] border rounded-full border-purple font-semibold text-lg  lg:text-base text-center text-white bg-purple">
              Sign up
            </button>
          </Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="lg:hidden relative" ref={menuRef}>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-white focus:outline-none"
            aria-label='Toggle menu'
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Mobile & Tablet Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-[18px] right-0 z-50">
          <div className="absolute top-0 right-0 mt-12 w-48 bg-white rounded-lg shadow-lg">
            <div className="py-2">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path} 
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="py-2">
              <Link to='/dashboard'>
                <button className={`block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200`}>
                  Login
                </button>
              </Link>
              <Link to='/dashboard'>
                <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        </div>)}

      
      </div>
    </div>
    
  )
}

export default Navbar;