import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpeg";

export default function NavBar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  /* SCROLL SHRINK EFFECT */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* LOCK BODY SCROLL WHEN MOBILE MENU OPEN */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-500">

      {/* ================= TOP WHITE STRIP ================= */}
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-4">
            <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
            <div>
              <h1 className="text-lg font-semibold text-gray-900">
                Fiscal Initiative
              </h1>
              <p className="text-xs text-red-600 tracking-wide">
                Your Development Partner
              </p>
            </div>
          </Link>

          {/* UTILITIES */}
          <div className="hidden md:flex items-center gap-6">

            <select className="text-sm border border-gray-300 px-3 py-1 rounded">
              <option>EN</option>
              <option>AR</option>
              <option>SO</option>
            </select>

            <button
              onClick={() => setSearchOpen(true)}
              className="text-gray-700 hover:text-green-700 transition"
            >
              🔍
            </button>

          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden text-2xl text-gray-800"
            onClick={() => setMobileOpen(true)}
          >
            ☰
          </button>
        </div>

        {/* GOLD DIVIDER */}
        <div className="h-[2px] bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400" />
      </div>

      {/* ================= MAIN NAVIGATION ================= */}
      <nav
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-[#0E3B2E]/95 backdrop-blur-md shadow-xl"
            : "bg-[#0E3B2E]"
        }`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="hidden md:flex max-w-7xl mx-auto px-8 items-center justify-center h-16 gap-12 text-sm font-medium tracking-wide text-white">

          <NavItem label="WHO WE ARE" onHover={() => setActiveMenu("who")} />
          <NavItem label="WHAT WE DO" onHover={() => setActiveMenu("what")} />
          <NavItem label="FINANCIAL REPORTS" onHover={() => setActiveMenu("financial")} />
          <NavItem label="WHERE WE WORK" onHover={() => setActiveMenu("where")} />
          <NavItem label="WORK WITH US" onHover={() => setActiveMenu("work")} />

        </div>

        {/* ================= DESKTOP MEGA PANEL ================= */}
        {activeMenu && (
          <div className="hidden md:block absolute left-0 w-full bg-[#145A42] text-white shadow-2xl border-t border-green-700 animate-fadeIn">

            <div className="max-w-7xl mx-auto px-16 py-14 grid grid-cols-4 gap-12 max-h-[500px] overflow-y-auto">

              {activeMenu === "who" && (
                <>
                  <MegaSection
                    title="Leadership"
                    items={[
                      { label: "President", to: "/team" },
                      { label: "Board of Directors", to: "/team" },
                      { label: "Executive Management", to: "/team" },
                    ]}
                  />

                  <MegaSection
                    title="Institution"
                    items={[
                      { label: "Mission & Vision", to: "/about" },
                      { label: "Governance Framework", to: "/about" },
                      { label: "Strategic Plan", to: "/about" },
                    ]}
                  />

                  <MegaSection
                    title="Accountability"
                    items={[
                      { label: "Annual Reports", to: "/publications" },
                      { label: "Financial Statements", to: "/publications" },
                    ]}
                  />

                  <MegaSection
                    title="Engage"
                    items={[
                      { label: "Careers", to: "/about" },
                      { label: "Contact Us", to: "/contact" },
                    ]}
                  />
                </>
              )}

              {activeMenu === "what" && (
                <>
                  <MegaSection
                    title="Research"
                    items={[
                      { label: "Taxation", to: "/research" },
                      { label: "Budget Policy", to: "/research" },
                      { label: "Debt Management", to: "/research" },
                      { label: "Fiscal Federalism", to: "/research" },
                    ]}
                  />

                  <MegaSection
                    title="Programs"
                    items={[
                      { label: "Capacity Development", to: "/capacity" },
                      { label: "Policy Dialogues", to: "/forums" },
                      { label: "Economic Forums", to: "/forums" },
                    ]}
                  />

                  <MegaSection
                    title="Publications"
                    items={[
                      { label: "Policy Reports", to: "/publications" },
                      { label: "Research Briefs", to: "/publications" },
                    ]}
                  />

                  <MegaSection
                    title="Media"
                    items={[
                      { label: "Press Releases", to: "/media" },
                      { label: "Videos & Photos", to: "/media" },
                    ]}
                  />
                </>
              )}

            </div>
          </div>
        )}

      </nav>

      {/* ================= MOBILE SLIDE PANEL ================= */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/50 z-50">

          <div className="absolute right-0 top-0 w-72 h-full bg-[#0E3B2E] text-white p-8 shadow-2xl animate-slideIn">

            <button
              onClick={() => setMobileOpen(false)}
              className="text-white text-xl mb-8"
            >
              ✕
            </button>

            <div className="space-y-6 text-sm font-medium">
              <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
              <Link to="/about" onClick={() => setMobileOpen(false)}>About</Link>
              <Link to="/team" onClick={() => setMobileOpen(false)}>Leadership</Link>
              <Link to="/research" onClick={() => setMobileOpen(false)}>Research</Link>
              <Link to="/capacity" onClick={() => setMobileOpen(false)}>Capacity</Link>
              <Link to="/forums" onClick={() => setMobileOpen(false)}>Forums</Link>
              <Link to="/publications" onClick={() => setMobileOpen(false)}>Publications</Link>
              <Link to="/media" onClick={() => setMobileOpen(false)}>Media</Link>
              <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
            </div>

          </div>
        </div>
      )}

      {/* ================= SEARCH OVERLAY ================= */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white w-11/12 md:w-2/3 p-8 rounded-xl shadow-2xl">
            <input
              type="text"
              placeholder="Search Fiscal Initiative..."
              className="w-full border-b-2 border-green-700 focus:outline-none text-xl py-3"
            />
            <button
              onClick={() => setSearchOpen(false)}
              className="mt-6 text-green-800 font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </header>
  );
}

/* NAV ITEM */
function NavItem({ label, onHover }) {
  return (
    <button
      onMouseEnter={onHover}
      className="hover:text-green-300 transition"
    >
      {label} ▾
    </button>
  );
}

/* MEGA SECTION */
function MegaSection({ title, items }) {
  return (
    <div>
      <h4 className="text-green-200 font-semibold mb-6 uppercase tracking-wider text-xs">
        {title}
      </h4>
      <ul className="space-y-4 text-sm">
        {items.map((item, i) => (
          <li key={i}>
            <Link to={item.to} className="hover:text-green-300 transition">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
