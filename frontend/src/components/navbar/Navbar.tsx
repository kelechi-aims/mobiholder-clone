import { useRef } from "react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  // Detects clicks outside and close dropdown
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside as EventListener);
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside as EventListener
      );
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
    <div className="py-[23px] backdrop-blur-[53px] px-8 flex items-center justify-center bg-nav-gradient xl:px-0 top-0 left-0 fixed w-full">
      <div
        className={`
        container flex flex-row mx-auto justify-between items-center text-white xll:px-8 2xl:px-0
        `}
      >
        {/* Logo section */}
        <Link to="/">
          <img
            src="/images/logo.png"
            alt="nav logo"
            className="max-w-[60%] 2xl:max-w-[80%]"
          />
        </Link>

        {/* Navition links */}
        <div className="hidden lg:flex flex-row gap-[64px] lg:gap-[34px]">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`font-inter text-sm lg:text-base 2xl:text-xl font-normal text-center hover:underline ${
                location.pathname === link.path ? "text-purple-500" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Login and Sign up buttons */}
        <div className="hidden font-inter gap-[13px] lg:flex">
          <Link to="/login">
            <button
              className={`py-[3px] px-[47px] lg:px-[30px] border rounded-full border-white font-semibold text-base 2xl:text-base text-center text-white`}
            >
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="py-[3px] px-[47px] lg:px-[30px] border rounded-full border-purple font-semibold text-base  2xl:text-base text-center text-white bg-purple">
              Sign up
            </button>
          </Link>
        </div>

        {/* Mobile & Tablet Menu */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="lg:hidden fixed top-0 right-0 z-[9999] h-screen w-60 bg-white shadow-lg transition-transform duration-300"
          >
            <div className="flex flex-col mt-16 space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="block px-6 py-3 text-gray-800 hover:bg-purple"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-auto flex flex-col space-y-4 px-6 mb-6">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <button
                  className={`w-full py-3 text-left text-gray-800 hover:bg-purple`}
                >
                  Login
                </button>
              </Link>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full py-3 text-left text-gray-800 hover:bg-purple">
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        )}

        {/* Hamburger Menu for Small Screens */}
        <div className="lg:hidden relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none text-xl"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
