import { useState } from "react";
import logo from "../assets/images/logo.jpeg";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0d8ecf] shadow-md">
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 text-white">

        {/* LOGO */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Fiscal Initiative Logo"
            className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-full border-2 border-white"
          />
          <span className="font-bold text-lg md:text-xl tracking-wide">
            Fiscal Initiative
          </span>
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex space-x-6 items-center text-sm md:text-base font-medium">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li className="relative group">
            <span className="cursor-pointer hover:underline">About Us ▾</span>
            <ul className="absolute hidden group-hover:block bg-white text-gray-800 mt-2 w-48 shadow-lg rounded-md overflow-hidden">
              <li className="px-4 py-2 hover:bg-gray-100"><a href="#about">About Us</a></li>
              <li className="px-4 py-2 hover:bg-gray-100">Our Team</li>
              <li className="px-4 py-2 hover:bg-gray-100">Our Funding</li>
              <li className="px-4 py-2 hover:bg-gray-100">Work With Us</li>
              <li className="px-4 py-2 hover:bg-gray-100">Contact Us</li>
            </ul>
          </li>
          <li><a href="#research" className="hover:underline">Research</a></li>
          <li className="relative group">
            <span className="cursor-pointer hover:underline">Events ▾</span>
            <ul className="absolute hidden group-hover:block bg-white text-gray-800 mt-2 w-48 shadow-lg rounded-md overflow-hidden">
              <li className="px-4 py-2 hover:bg-gray-100">Events</li>
              <li className="px-4 py-2 hover:bg-gray-100">Previous Events</li>
            </ul>
          </li>
          <li className="relative group">
            <span className="cursor-pointer hover:underline">For Media ▾</span>
            <ul className="absolute hidden group-hover:block bg-white text-gray-800 mt-2 w-48 shadow-lg rounded-md overflow-hidden">
              <li className="px-4 py-2 hover:bg-gray-100">Media Statements</li>
              <li className="px-4 py-2 hover:bg-gray-100">Commentary</li>
            </ul>
          </li>
          <li><a href="#publications" className="hover:underline">Publications</a></li>
        </ul>

        {/* HAMBURGER */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#0d8ecf] text-white px-6 pb-6">
          <ul className="space-y-4 text-sm font-medium">
            <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setOpen(false)}>About Us</a></li>
            <li><a href="#research" onClick={() => setOpen(false)}>Research</a></li>
            <li><a href="#strategy" onClick={() => setOpen(false)}>Our Strategy</a></li>
            <li><a href="#publications" onClick={() => setOpen(false)}>Publications</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
