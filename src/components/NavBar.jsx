import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpeg";

export default function NavBar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  /* 🔥 SCROLL EFFECT */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-500">

      {/* 🔥 TOP WHITE STRIP */}
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-md"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

          {/* LEFT LOGO */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                Fiscal Initiative
              </h1>
              <p className="text-xs text-red-600 tracking-wide">
                Your Development Partner
              </p>
            </div>
          </div>

          {/* RIGHT UTILITIES */}
          <div className="flex items-center gap-6">

            {/* LANGUAGE SELECTOR */}
            <select className="text-sm border border-gray-300 px-3 py-1 rounded">
              <option>EN</option>
              <option>AR</option>
              <option>SO</option>
            </select>

            {/* SEARCH BUTTON */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-gray-700 hover:text-green-700 transition"
            >
              🔍
            </button>

          </div>
        </div>

        {/* 🔥 THIN GOLD DIVIDER */}
        <div className="h-[2px] bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400" />
      </div>

      {/* 🔥 MAIN NAVIGATION BAR */}
      <nav
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-[#0E3B2E]/95 backdrop-blur-md shadow-xl"
            : "bg-[#0E3B2E]"
        }`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-center h-16 gap-12 text-sm font-medium tracking-wide text-white">

          <NavItem label="WHO WE ARE" onHover={() => setActiveMenu("who")} />
          <NavItem label="WHAT WE DO" onHover={() => setActiveMenu("what")} />
          <NavItem label="FINANCIAL REPORTS" onHover={() => setActiveMenu("financial")} />
          <NavItem label="WHERE WE WORK" onHover={() => setActiveMenu("where")} />
          <NavItem label="WORK WITH US" onHover={() => setActiveMenu("work")} />

        </div>

        {/* 🔥 MEGA MENU PANEL */}
        {activeMenu && (
          <div className="absolute left-0 w-full bg-[#145A42] text-white shadow-2xl border-t border-green-700 animate-fadeIn">

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

      {/* 🔥 SEARCH OVERLAY */}
      {searchOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center animate-fadeIn">
          <div className="bg-white w-2/3 p-8 rounded-xl shadow-2xl">
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
