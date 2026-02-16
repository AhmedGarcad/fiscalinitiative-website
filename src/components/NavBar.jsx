import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpeg";

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navRef = useRef();

  /* SCROLL TRANSITION */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* OUTSIDE CLICK CLOSE */
  useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header ref={navRef} className="fixed top-0 w-full z-50">

      {/* ================= TOP WHITE STRIP ================= */}
      <div className={`transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-4">
            <img src={logo} className="w-12 h-12 object-contain" />
            <div>
              <h1 className="text-lg font-semibold text-gray-900">
                Fiscal Initiative
              </h1>
              <p className="text-xs text-red-600 tracking-wide">
                Your Development Partner
              </p>
            </div>
          </Link>

          {/* Utilities */}
          <div className="hidden md:flex items-center gap-6">

            <select className="text-sm border px-2 py-1 rounded">
              <option>EN</option>
              <option>SO</option>
              <option>AR</option>
            </select>

            <button
              onClick={() => setSearchOpen(true)}
              className="text-gray-700 hover:text-green-800 transition"
            >
              🔍
            </button>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-2xl text-gray-800"
          >
            ☰
          </button>
        </div>

        {/* Gold divider */}
        <div className="h-[2px] bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400" />
      </div>

      {/* ================= MAIN NAV ================= */}
      <nav
        className={`hidden md:block transition-all duration-500 ${
          scrolled
            ? "bg-[#0E3B2E]/95 backdrop-blur-md shadow-xl"
            : "bg-[#0E3B2E]"
        }`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="max-w-7xl mx-auto h-16 flex justify-center items-center gap-14 text-white text-sm font-medium tracking-wide">

          <NavItem label="WHO WE ARE" onHover={() => setActiveMenu("who")} />
          <NavItem label="WHAT WE DO" onHover={() => setActiveMenu("what")} />
          <NavItem label="FINANCIAL REPORTS" />
          <NavItem label="WHERE WE WORK" />
          <NavItem label="WORK WITH US" />

        </div>

        {/* ================= MEGA PANEL ================= */}
        {activeMenu && (
          <div className="absolute left-0 w-full bg-[#145A42] text-white shadow-2xl border-t border-green-700 animate-fadeIn">
            <div className="max-w-7xl mx-auto px-16 py-16 grid grid-cols-4 gap-12">

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
                    title="Engagement"
                    items={[
                      { label: "Careers", to: "/about" },
                      { label: "Contact", to: "/contact" },
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
                    ]}
                  />
                  <MegaSection
                    title="Programs"
                    items={[
                      { label: "Capacity Development", to: "/capacity" },
                      { label: "Policy Dialogues", to: "/forums" },
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
                    ]}
                  />
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* ================= MOBILE PANEL ================= */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setMobileOpen(false)}
          />

          <div className="fixed top-0 left-0 h-full w-80 bg-[#0E3B2E] text-white p-8 z-50 animate-slideLeft shadow-2xl">

            <div className="flex justify-end mb-10">
              <button
                onClick={() => setMobileOpen(false)}
                className="text-3xl"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col gap-8 text-lg font-medium">
              <MobileLink to="/" label="Home" close={setMobileOpen} />
              <MobileLink to="/about" label="About" close={setMobileOpen} />
              <MobileLink to="/research" label="Research" close={setMobileOpen} />
              <MobileLink to="/capacity" label="Capacity" close={setMobileOpen} />
              <MobileLink to="/forums" label="Forums" close={setMobileOpen} />
              <MobileLink to="/media" label="Media" close={setMobileOpen} />
              <MobileLink to="/contact" label="Contact" close={setMobileOpen} />
            </div>
          </div>
        </>
      )}

      {/* ================= SEARCH MODAL ================= */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white w-2/3 p-8 rounded-xl shadow-2xl">
            <input
              placeholder="Search Fiscal Initiative..."
              className="w-full border-b-2 border-green-800 text-xl py-3 focus:outline-none"
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

/* ================= SUB COMPONENTS ================= */

function NavItem({ label, onHover }) {
  return (
    <button onMouseEnter={onHover} className="hover:text-green-300 transition">
      {label} ▾
    </button>
  );
}

function MegaSection({ title, items }) {
  return (
    <div>
      <h4 className="text-green-200 uppercase text-xs font-semibold mb-6 tracking-wider">
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

function MobileLink({ to, label, close }) {
  return (
    <Link
      to={to}
      onClick={() => close(false)}
      className="border-b border-green-700 pb-4 hover:text-green-300"
    >
      {label}
    </Link>
  );
}
