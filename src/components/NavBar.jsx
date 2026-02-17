import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpeg";

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  /* ================= SCROLL EFFECT ================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50">

      {/* ================= TOP WHITE STRIP ================= */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-200">
              <img
                src={logo}
                alt="Fiscal Initiative"
                className="w-10 h-10 object-contain"
              />
            </div>

            <div>
              <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
                Fiscal Initiative
              </h1>
              <p className="text-sm text-green-700 font-medium tracking-wide">
                Advancing Transparent Fiscal Governance
              </p>
            </div>
          </Link>

          {/* Utilities */}
          <div className="flex items-center gap-5">

            <select className="text-sm border border-gray-300 px-2 py-1 rounded focus:outline-none">
              <option>EN</option>
              <option>AR</option>
              <option>SO</option>
            </select>

            <button className="text-gray-600 hover:text-green-700 text-lg">
              🔍
            </button>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-2xl text-gray-700"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Gold Institutional Divider */}
        <div className="h-[3px] bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400" />
      </div>

      {/* ================= MAIN NAVIGATION ================= */}
      <nav
        className={`hidden md:block transition-all duration-300 ${
          scrolled
            ? "bg-green-900 shadow-lg"
            : "bg-green-800"
        }`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-center gap-12 h-14 items-center text-white text-sm font-medium tracking-wide">

          <NavItem label="WHO WE ARE" onHover={() => setActiveMenu("who")} />
          <NavItem label="WHAT WE DO" onHover={() => setActiveMenu("what")} />
          <NavItem label="FINANCIAL REPORTS" onHover={() => setActiveMenu("reports")} />
          <NavItem label="WHERE WE WORK" onHover={() => setActiveMenu("where")} />
          <NavItem label="WORK WITH US" onHover={() => setActiveMenu("work")} />

        </div>

        {/* ================= MEGA MENU ================= */}
        {activeMenu && (
          <div className="absolute left-0 w-full bg-green-900 text-white shadow-2xl border-t border-green-700">
            <div className="max-w-7xl mx-auto px-16 py-12 grid grid-cols-4 gap-10">

              {activeMenu === "who" && (
                <>
                  <MegaSection
                    title="Leadership"
                    items={[
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
                      { label: "Contact Us", to: "/contact" },
                    ]}
                  />
                </>
              )}

              {activeMenu === "what" && (
                <>
                  <MegaSection
                    title="Research Areas"
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

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div className="md:hidden bg-green-900 text-white px-6 py-6 space-y-5">
          <MobileLink to="/" label="Home" setMobileOpen={setMobileOpen} />
          <MobileLink to="/about" label="About" setMobileOpen={setMobileOpen} />
          <MobileLink to="/team" label="Leadership" setMobileOpen={setMobileOpen} />
          <MobileLink to="/research" label="Research" setMobileOpen={setMobileOpen} />
          <MobileLink to="/capacity" label="Capacity Development" setMobileOpen={setMobileOpen} />
          <MobileLink to="/publications" label="Publications" setMobileOpen={setMobileOpen} />
          <MobileLink to="/media" label="Media" setMobileOpen={setMobileOpen} />
          <MobileLink to="/contact" label="Contact" setMobileOpen={setMobileOpen} />
        </div>
      )}
    </header>
  );
}

/* ================= DESKTOP NAV ITEM ================= */
function NavItem({ label, onHover }) {
  return (
    <button
      onMouseEnter={onHover}
      className="hover:text-yellow-400 transition duration-200"
    >
      {label} ▾
    </button>
  );
}

/* ================= MEGA SECTION ================= */
function MegaSection({ title, items }) {
  return (
    <div>
      <h4 className="text-yellow-400 font-semibold mb-5 uppercase text-xs tracking-wider">
        {title}
      </h4>
      <ul className="space-y-3 text-sm">
        {items.map((item, index) => (
          <li key={index}>
            <Link to={item.to} className="hover:text-yellow-300 transition">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ================= MOBILE LINK ================= */
function MobileLink({ to, label, setMobileOpen }) {
  return (
    <Link
      to={to}
      onClick={() => setMobileOpen(false)}
      className="block text-base hover:text-yellow-400"
    >
      {label}
    </Link>
  );
}
