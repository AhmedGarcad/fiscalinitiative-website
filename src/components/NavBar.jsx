import { useState } from "react"; // ✅ NEW: needed for mobile toggle

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false); // ✅ NEW

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0d8ecf]">
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 text-white">

        {/* LOGO */}
        <div className="font-bold text-lg">
          Fiscal Initiative
        </div>

        {/* ================= DESKTOP MENU (UNCHANGED) ================= */}
        <ul className="hidden md:flex space-x-6 items-center text-sm font-medium">

          <li><a href="#home">Home</a></li>

          {/* ABOUT */}
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

          {/* RESEARCH */}
          <li><a href="#research">Research</a></li>

          {/* EVENTS */}
          <li className="relative group">
            <span className="cursor-pointer">Events ▾</span>
            <ul className="absolute hidden group-hover:block bg-white text-gray-800 mt-2 w-48 shadow">
              <li className="px-4 py-2 hover:bg-gray-100">Events</li>
              <li className="px-4 py-2 hover:bg-gray-100">Previous Events</li>
            </ul>
          </li>

          {/* MEDIA */}
          <li className="relative group">
            <span className="cursor-pointer">For Media ▾</span>
            <ul className="absolute hidden group-hover:block bg-white text-gray-800 mt-2 w-48 shadow">
              <li className="px-4 py-2 hover:bg-gray-100">Media Statements</li>
              <li className="px-4 py-2 hover:bg-gray-100">Commentary</li>
            </ul>
          </li>

          {/* PUBLICATIONS */}
          <li className="relative group">
            <span className="cursor-pointer">Publications ▾</span>
          </li>

        </ul>
        {/* ================= END DESKTOP MENU ================= */}


        {/* ================= MOBILE BUTTON (NEW) ================= */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        {/* ================= END MOBILE BUTTON ================= */}

      </nav>

      {/* ================= MOBILE MENU (NEW) ================= */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0d8ecf] text-white px-6 py-4 space-y-4">

          <a href="#home" onClick={() => setMobileOpen(false)}>Home</a>

          <div>
            <p className="font-semibold">About Us</p>
            <div className="ml-4 space-y-2 text-sm">
              <a href="#about" onClick={() => setMobileOpen(false)}>About Us</a>
              <p>Our Team</p>
              <p>Our Funding</p>
              <p>Work With Us</p>
              <p>Contact Us</p>
            </div>
          </div>

          <a href="#research" onClick={() => setMobileOpen(false)}>Research</a>

          <div>
            <p className="font-semibold">Events</p>
            <div className="ml-4 space-y-2 text-sm">
              <p>Events</p>
              <p>Previous Events</p>
            </div>
          </div>

          <div>
            <p className="font-semibold">For Media</p>
            <div className="ml-4 space-y-2 text-sm">
              <p>Media Statements</p>
              <p>Commentary</p>
            </div>
          </div>

          <p>Publications</p>
        </div>
      )}
      {/* ================= END MOBILE MENU ================= */}

    </header>
  );
}
