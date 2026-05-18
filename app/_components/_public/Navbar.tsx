"use client";
import Image from "next/image";
import { useRef, useCallback } from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  // Detects clicks outside and close dropdown
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  }, []);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside as EventListener);
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside as EventListener,
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
    <div className="py-5.75 backdrop-blur-[53px] px-8 flex items-center justify-center bg-nav-gradient xl:px-0 top-0 left-0 fixed w-full">
      <div
        className={`
        container flex flex-row mx-auto justify-between items-center text-white xll:px-8 2xl:px-0
        `}
      >
        {/* Logo section */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="nav logo"
            width={130}
            height={100}
            // className="max-w-[60%] 2xl:max-w-[80%]"
          />
        </Link>

        {/* Navition links */}
        <div className="hidden lg:flex flex-row gap-16 lg:gap-8.5">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`font-inter text-sm lg:text-base 2xl:text-xl font-normal text-center hover:underline ${
                pathname === link.path ? "text-purple-500" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Login and Sign up buttons */}
        <div className="hidden font-inter gap-3.25 lg:flex">
          <Link href="/auth/login">
            <button
              className={`py-0.75 px-11.75 lg:px-7.5 border rounded-full border-white font-semibold text-base 2xl:text-base text-center text-white`}
            >
              Login
            </button>
          </Link>
          <Link href="/auth/signup">
            <button className="py-0.75 px-11.75 lg:px-7.5 border rounded-full border-purple font-semibold text-base  2xl:text-base text-center text-white bg-purple">
              Sign up
            </button>
          </Link>
        </div>

        {/* Mobile & Tablet Menu */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="lg:hidden fixed top-0 right-0 z-9999 h-screen w-60 bg-white shadow-lg transition-transform duration-300"
          >
            <div className="flex flex-col mt-16 space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className="block px-6 py-3 text-gray-800 hover:bg-purple"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-auto flex flex-col space-y-4 px-6 mb-6">
              <Link href="/auth/login" onClick={() => setIsMenuOpen(false)}>
                <button
                  className={`w-full py-3 text-left text-gray-800 hover:bg-purple`}
                >
                  Login
                </button>
              </Link>
              <Link href="/auth/signup" onClick={() => setIsMenuOpen(false)}>
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
