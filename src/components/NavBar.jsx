import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpeg";

export default function NavBar() {

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  /* Scroll Effect */

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);


  /* Language Change */

  const changeLanguage = (lang) => {

    if (lang === "AR") {
      alert("Arabic version coming soon");
    }

    if (lang === "SO") {
      alert("Somali version coming soon");
    }

  };


  return (
    <header className="fixed top-0 w-full z-50">

      {/* TOP HEADER */}

      <div className="bg-white shadow-sm">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}

          <Link to="/" className="flex items-center gap-4">

            <img
              src={logo}
              alt="Fiscal Initiative"
              className="w-16 md:w-20 object-contain"
            />

            <div>

              <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
                Fiscal Initiative
              </h1>

              <p className="text-xs md:text-sm text-green-700">
                Advancing Transparent Fiscal Governance in Somalia
              </p>

            </div>

          </Link>


          {/* RIGHT SIDE */}

          <div className="flex items-center gap-5">

            {/* LANGUAGE */}

            <select
              className="text-sm border border-gray-300 px-2 py-1 rounded"
              onChange={(e) => changeLanguage(e.target.value)}
            >
              <option value="EN">EN</option>
              <option value="AR">AR</option>
              <option value="SO">SO</option>
            </select>


            {/* SEARCH BUTTON */}

            <button
              onClick={() => setSearchOpen(true)}
              className="text-gray-600 hover:text-green-700 text-lg"
            >
              🔍
            </button>


            {/* MOBILE MENU */}

            <button
              className="md:hidden text-2xl"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              ☰
            </button>

          </div>

        </div>

        {/* GOLD LINE */}

        <div className="h-[3px] bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400" />

      </div>



      {/* MAIN NAVIGATION */}

      <nav
        className={`${scrolled ? "bg-green-900" : "bg-green-800"} hidden md:block`}
        onMouseLeave={() => setActiveMenu(null)}
      >

        <div className="max-w-7xl mx-auto flex justify-center gap-12 h-14 items-center text-white text-sm">

          <NavItem label="WHO WE ARE" onHover={() => setActiveMenu("who")} />
          <NavItem label="WHAT WE DO" onHover={() => setActiveMenu("what")} />
          <NavItem label="FINANCIAL REPORTS" onHover={() => setActiveMenu("reports")} />
          <NavItem label="WHERE WE WORK" onHover={() => setActiveMenu("where")} />
          <NavItem label="WORK WITH US" onHover={() => setActiveMenu("work")} />

        </div>


        {/* MEGA MENU */}

        {activeMenu && (

          <div className="absolute left-0 w-full bg-green-900 text-white shadow-xl">

            <div className="max-w-7xl mx-auto px-16 py-12 grid grid-cols-4 gap-10">

              {activeMenu === "who" && (
                <MegaSection
                  title="Institution"
                  items={[
                    { label: "About Fiscal Initiative", to: "/about" },
                    { label: "Leadership", to: "/team" },
                    { label: "Contact", to: "/contact" }
                  ]}
                />
              )}

              {activeMenu === "what" && (
                <MegaSection
                  title="Programs"
                  items={[
                    { label: "Research", to: "/research" },
                    { label: "Capacity Development", to: "/capacity" },
                    { label: "Forums", to: "/forums" }
                  ]}
                />
              )}

              {activeMenu === "reports" && (
                <MegaSection
                  title="Publications"
                  items={[
                    { label: "Annual Reports", to: "/publications" },
                    { label: "Policy Reports", to: "/publications" }
                  ]}
                />
              )}

              {activeMenu === "where" && (
                <MegaSection
                  title="Focus Areas"
                  items={[
                    { label: "Fiscal Governance", to: "/research" },
                    { label: "Public Finance Reform", to: "/research" }
                  ]}
                />
              )}

              {activeMenu === "work" && (
                <MegaSection
                  title="Careers"
                  items={[
                    { label: "Internships", to: "/about" },
                    { label: "Partnerships", to: "/contact" }
                  ]}
                />
              )}

            </div>

          </div>

        )}

      </nav>


      {/* MOBILE MENU */}

      {mobileOpen && (

        <div className="md:hidden bg-green-900 text-white px-6 py-6 space-y-4">

          <MobileLink to="/" label="Home" setMobileOpen={setMobileOpen} />
          <MobileLink to="/about" label="About" setMobileOpen={setMobileOpen} />
          <MobileLink to="/team" label="Leadership" setMobileOpen={setMobileOpen} />
          <MobileLink to="/research" label="Research" setMobileOpen={setMobileOpen} />
          <MobileLink to="/capacity" label="Capacity Development" setMobileOpen={setMobileOpen} />
          <MobileLink to="/forums" label="Forums" setMobileOpen={setMobileOpen} />
          <MobileLink to="/publications" label="Publications" setMobileOpen={setMobileOpen} />
          <MobileLink to="/media" label="Media" setMobileOpen={setMobileOpen} />
          <MobileLink to="/contact" label="Contact" setMobileOpen={setMobileOpen} />

        </div>

      )}



      {/* SEARCH OVERLAY */}

      {searchOpen && (

        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="bg-white w-[90%] md:w-[600px] p-8 rounded-xl shadow-xl">

            <div className="flex justify-between items-center mb-6">

              <h3 className="text-lg font-semibold">
                Search Fiscal Initiative
              </h3>

              <button
                onClick={() => setSearchOpen(false)}
                className="text-gray-500 text-xl"
              >
                ✕
              </button>

            </div>


            <input
              type="text"
              placeholder="Search pages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg"
            />


            <div className="mt-6 space-y-3 text-sm">

              <a href="/about" className="block hover:text-green-700">
                About Fiscal Initiative
              </a>

              <a href="/research" className="block hover:text-green-700">
                Research Programs
              </a>

              <a href="/forums" className="block hover:text-green-700">
                Policy Forums
              </a>

              <a href="/publications" className="block hover:text-green-700">
                Publications
              </a>

              <a href="/media" className="block hover:text-green-700">
                Media
              </a>

            </div>

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
      className="hover:text-yellow-400"
    >
      {label} ▾
    </button>
  );
}


/* MEGA SECTION */

function MegaSection({ title, items }) {
  return (
    <div>

      <h4 className="text-yellow-400 text-xs uppercase mb-4">
        {title}
      </h4>

      <ul className="space-y-2 text-sm">

        {items.map((item, i) => (

          <li key={i}>
            <Link to={item.to} className="hover:text-yellow-300">
              {item.label}
            </Link>
          </li>

        ))}

      </ul>

    </div>
  );
}


/* MOBILE LINKS */

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