import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0d8ecf]">
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 text-white">

        {/* LOGO */}
        <div className="font-bold text-lg">
          Fiscal Initiative
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex space-x-6 items-center text-sm font-medium">

          <li><a href="#home">Home</a></li>

          <li className="relative group">
            <span className="cursor-pointer">About Us ▾</span>
            <ul className="absolute hidden group-hover:block bg-white text-gray-800 mt-2 w-48 shadow">
              <li className="px-4 py-2 hover:bg-gray-100"><a href="#about">About Us</a></li>
              <li className="px-4 py-2 hover:bg-gray-100">Our Team</li>
              <li className="px-4 py-2 hover:bg-gray-100">Our Funding</li>
              <li className="px-4 py-2 hover:bg-gray-100">Work With Us</li>
              <li className="px-4 py-2 hover:bg-gray-100">Contact Us</li>
            </ul>
          </li>

          <li><a href="#research">Research</a></li>

          <li className="relative group">
            <span className="cursor-pointer">Events ▾</span>
            <ul className="absolute hidden group-hover:block bg-white text-gray-800 mt-2 w-48 shadow">
              <li className="px-4 py-2 hover:bg-gray-100">Events</li>
              <li className="px-4 py-2 hover:bg-gray-100">Previous Events</li>
            </ul>
          </li>

          <li className="relative group">
            <span className="cursor-pointer">For Media ▾</span>
            <ul className="absolute hidden group-hover:block bg-white text-gray-800 mt-2 w-48 shadow">
              <li className="px-4 py-2 hover:bg-gray-100">Media Statements</li>
              <li className="px-4 py-2 hover:bg-gray-100">Commentary</li>
            </ul>
          </li>

          <li>Publications</li>
        </ul>

        {/* HAMBURGER BUTTON (MOBILE) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#0d8ecf] text-white px-6 pb-6">
          <ul className="space-y-4 text-sm">

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
