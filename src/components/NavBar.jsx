import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpeg";
import { organization } from "../content/siteContent";

const searchItems = [
  { label: "About Fiscal Initiative", to: "/about" },
  { label: "Leadership", to: "/team" },
  { label: "Research Focus", to: "/research" },
  { label: "Capacity Development", to: "/capacity" },
  { label: "Policy Forums", to: "/forums" },
  { label: "Publications", to: "/publications" },
  { label: "Media", to: "/media" },
  { label: "Contact", to: "/contact" },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredItems = searchItems.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4">
            <img
              src={logo}
              alt="Fiscal Initiative"
              className="w-16 md:w-20 object-contain"
            />

            <div>
              <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
                {organization.shortName}
              </h1>

              <p className="text-xs md:text-sm text-green-700">
                Evidence for Somalia's Fiscal Future
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-5">
            <select className="text-sm border border-gray-300 px-2 py-1 rounded">
              <option value="EN">EN</option>
            </select>

            <button
              onClick={() => setSearchOpen(true)}
              className="text-gray-600 hover:text-green-700 text-sm font-semibold"
              aria-label="Open search"
            >
              Search
            </button>

            <button
              className="md:hidden text-sm font-semibold text-green-900"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
            >
              Menu
            </button>
          </div>
        </div>

        <div className="h-[3px] bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400" />
      </div>

      <nav
        className={`${scrolled ? "bg-green-900" : "bg-green-800"} hidden md:block`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="max-w-7xl mx-auto flex justify-center gap-12 h-14 items-center text-white text-sm">
          <NavItem label="WHO WE ARE" onHover={() => setActiveMenu("who")} />
          <NavItem label="WHAT WE DO" onHover={() => setActiveMenu("what")} />
          <NavItem label="PUBLICATIONS" onHover={() => setActiveMenu("reports")} />
          <NavItem label="WHERE WE WORK" onHover={() => setActiveMenu("where")} />
          <NavItem label="WORK WITH US" onHover={() => setActiveMenu("work")} />
        </div>

        {activeMenu && (
          <div className="absolute left-0 w-full bg-green-900 text-white shadow-xl">
            <div className="max-w-7xl mx-auto px-16 py-12 grid grid-cols-4 gap-10">
              {activeMenu === "who" && (
                <MegaSection
                  title="Institution"
                  items={[
                    { label: "About Fiscal Initiative", to: "/about" },
                    { label: "Leadership", to: "/team" },
                    { label: "Contact", to: "/contact" },
                  ]}
                />
              )}

              {activeMenu === "what" && (
                <MegaSection
                  title="Programs"
                  items={[
                    { label: "Research", to: "/research" },
                    { label: "Capacity Development", to: "/capacity" },
                    { label: "Policy Forums", to: "/forums" },
                  ]}
                />
              )}

              {activeMenu === "reports" && (
                <MegaSection
                  title="Publications"
                  items={[
                    { label: "Policy Briefs", to: "/publications" },
                    { label: "Reports", to: "/publications" },
                    { label: "Research Papers", to: "/publications" },
                  ]}
                />
              )}

              {activeMenu === "where" && (
                <MegaSection
                  title="Focus"
                  items={[
                    { label: "Somalia", to: "/research" },
                    { label: "Federal Institutions", to: "/capacity" },
                    { label: "State-Level Dialogues", to: "/forums" },
                  ]}
                />
              )}

              {activeMenu === "work" && (
                <MegaSection
                  title="Engage"
                  items={[
                    { label: "Young Economist Program", to: "/capacity" },
                    { label: "Partnerships", to: "/contact" },
                    { label: "Media", to: "/media" },
                  ]}
                />
              )}
            </div>
          </div>
        )}
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-green-900 text-white px-6 py-6 space-y-4 shadow-xl">
          {searchItems.map((item) => (
            <MobileLink
              key={item.to}
              to={item.to}
              label={item.label}
              setMobileOpen={setMobileOpen}
            />
          ))}
        </div>
      )}

      {searchOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] md:w-[600px] p-8 rounded-xl shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">
                Search Fiscal Initiative
              </h3>

              <button
                onClick={() => setSearchOpen(false)}
                className="text-gray-500 text-sm font-semibold hover:text-green-800"
              >
                Close
              </button>
            </div>

            <input
              type="text"
              placeholder="Search pages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg"
              autoFocus
            />

            <div className="mt-6 space-y-3 text-sm">
              {filteredItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setSearchOpen(false)}
                  className="block hover:text-green-700"
                >
                  {item.label}
                </Link>
              ))}

              {filteredItems.length === 0 && (
                <p className="text-gray-500">No matching pages found.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavItem({ label, onHover }) {
  return (
    <button onMouseEnter={onHover} className="hover:text-yellow-400">
      {label}
    </button>
  );
}

function MegaSection({ title, items }) {
  return (
    <div>
      <h4 className="text-yellow-400 text-xs uppercase mb-4">{title}</h4>

      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.to}>
            <Link to={item.to} className="hover:text-yellow-300">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileLink({ to, label, setMobileOpen }) {
  return (
    <Link
      to={to}
      onClick={() => setMobileOpen(false)}
      className="block hover:text-yellow-300"
    >
      {label}
    </Link>
  );
}
