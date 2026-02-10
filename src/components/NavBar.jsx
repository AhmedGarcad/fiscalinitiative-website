export default function NavBar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0d8ecf]">
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 text-white">

        {/* LOGO */}
        <div className="font-bold text-lg">
          Fiscal Initiative
        </div>

        {/* MENU */}
        <ul className="flex space-x-6 items-center text-sm font-medium">

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
      </nav>
    </header>
  );
}
