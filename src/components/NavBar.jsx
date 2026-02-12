import { useState } from "react";
import logo from "../assets/images/logo.jpeg";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0a6ba8] shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-24 md:h-28 text-white">

        {/* LOGO */}
        <a
          href="#home"
          className="flex items-center gap-4 md:gap-6"
        >
          {/* Logo Circle */}
          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-xl flex items-center justify-center bg-gradient-to-tr from-blue-400 to-teal-400">
            <img
              src={logo}
              alt="Fiscal Initiative Logo"
              className="w-14 h-14 md:w-16 md:h-16 object-contain"
            />
          </div>

          {/* Logo Text */}
          <div className="flex flex-col md:flex-row md:items-center md:gap-2">
            <span className="font-extrabold text-xl md:text-3xl tracking-tight text-white">
              Fiscal
            </span>
            <span className="font-bold text-lg md:text-2xl tracking-tight text-gray-100">
              Initiative
            </span>
          </div>
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex space-x-8 items-center text-base font-semibold">
          <li><a href="#home" className="hover:underline">Home</a></li>

          {/* About Us Dropdown */}
          <li className="relative group">
            <a
              href="#about"
              className="cursor-pointer hover:underline flex items-center gap-1"
            >
              About Us ▾
            </a>
            <ul className="absolute hidden group-hover:block bg-white text-gray-800 mt-2 w-52 shadow-lg rounded-md overflow-hidden">
              <li className="px-4 py-2 hover:bg-gray-100"><a href="#about">About Us</a></li>
              <li className="px-4 py-2 hover:bg-gray-100"><a href="#team">Our Team</a></li>
              <li className="px-4 py-2 hover:bg-gray-100"><a href="#funding">Our Funding</a></li>
              <li className="px-4 py-2 hover:bg-gray-100"><a href="#work-with-us">Work With Us</a></li>
              <li className="px-4 py-2 hover:bg-gray-100"><a href="#contact">Contact Us</a></li>
            </ul>
          </li>

          <li><a href="#research" className="hover:underline">Research</a></li>

          {/* Events Dropdown */}
          <li className="relative group">
            <span className="cursor-pointer hover:underline">Events ▾</span>
            <ul className="absolute hidden group-hover:block bg-white text-gray-800 mt-2 w-52 shadow-lg rounded-md overflow-hidden">
              <li className="px-4 py-2 hover:bg-gray-100"><a href="#events">Events</a></li>
              <li className="px-4 py-2 hover:bg-gray-100"><a href="#previous-events">Previous Events</a></li>
            </ul>
          </li>

          {/* For Media Dropdown */}
          <li className="relative group">
            <span className="cursor-pointer hover:underline">For Media ▾</span>
            <ul className="absolute hidden group-hover:block bg-white text-gray-800 mt-2 w-52 shadow-lg rounded-md overflow-hidden">
              <li className="px-4 py-2 hover:bg-gray-100"><a href="#media-statements">Media Statements</a></li>
              <li className="px-4 py-2 hover:bg-gray-100"><a href="#commentary">Commentary</a></li>
            </ul>
          </li>

          <li><a href="#publications" className="hover:underline">Publications</a></li>
        </ul>

        {/* HAMBURGER */}
        <button
          className="md:hidden text-4xl focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#0a6ba8] text-white px-6 pb-6">
          <ul className="space-y-4 text-base font-medium">
            <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setOpen(false)}>About Us</a></li>
            <li><a href="#team" onClick={() => setOpen(false)}>Our Team</a></li>
            <li><a href="#funding" onClick={() => setOpen(false)}>Our Funding</a></li>
            <li><a href="#work-with-us" onClick={() => setOpen(false)}>Work With Us</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)}>Contact Us</a></li>
            <li><a href="#research" onClick={() => setOpen(false)}>Research</a></li>
            <li><a href="#events" onClick={() => setOpen(false)}>Events</a></li>
            <li><a href="#previous-events" onClick={() => setOpen(false)}>Previous Events</a></li>
            <li><a href="#media-statements" onClick={() => setOpen(false)}>Media Statements</a></li>
            <li><a href="#commentary" onClick={() => setOpen(false)}>Commentary</a></li>
            <li><a href="#publications" onClick={() => setOpen(false)}>Publications</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
