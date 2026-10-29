import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpeg";
import IconBadge from "./IconBadge";
import { organization, researchAreas, programs, forums, publicationGroups, eventGroups } from "../content/siteContent";
import { slugify } from "../lib/slugify";
import { useAdminSession } from "../lib/useAdminSession";

const searchItems = [
  { label: "About Fiscal Initiative", to: "/about" },
  { label: "FI Team", to: "/team" },
  { label: "Work With Us", to: "/work-with-us" },
  { label: "Our Funding", to: "/funding" },
  { label: "Contact Us", to: "/contact" },
  { label: "Our Research", to: "/research" },
  ...researchAreas.map((area) => ({
    label: area.title,
    to: `/research/${slugify(area.title)}`,
  })),
  { label: "Capacity Development", to: "/capacity" },
  ...programs.map((program) => ({
    label: program.title,
    to: `/capacity#${slugify(program.title)}`,
  })),
  { label: "Events", to: "/events" },
  { label: "Forums", to: "/forums" },
  ...forums.map((forum) => ({
    label: forum.title,
    to: `/forums#${slugify(forum.title)}`,
  })),
  { label: "Publications", to: "/publications" },
  { label: "Media", to: "/media" },
];

const menus = [
  {
    id: "home",
    label: "Home",
    to: "/",
  },
  {
    id: "about",
    label: "About Us",
    columns: [
      {
        items: [
          { label: "About Fiscal Initiative", to: "/about" },
          { label: "FI Team", to: "/team" },
          { label: "Our Funding", to: "/funding" },
        ],
      },
      {
        items: [
          { label: "Work With Us", to: "/work-with-us" },
          { label: "Contact Us", to: "/contact" },
        ],
      },
    ],
  },
  {
    id: "research",
    label: "Our Research",
    to: "/research",
  },
  {
    id: "forums",
    label: "Events",
    columns: eventGroups.map((group) => ({
      title: group.title,
      items: group.items.map((item) => ({
        label: item.title,
        to: `/events/${slugify(item.title)}`,
        icon: item.icon,
      })),
    })),
  },
  {
    id: "publications",
    label: "Publications",
    columns: publicationGroups.map((group) => ({
      title: group.title,
      items: group.types.map((type) => ({
        label: type.title,
        to: `/publications#${group.id}`,
      })),
    })),
  },
  {
    id: "media",
    label: "Media & Commentary",
    items: [
      { label: "Videos", to: "/media#videos" },
      { label: "Photos", to: "/media#photos" },
    ],
  },
];

export default function NavBar() {
  const isAdmin = useAdminSession();
  const visibleMenus = isAdmin ? menus : menus.map(withoutTeamLink);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileSection, setMobileSection] = useState(null);
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

  const filteredItems = searchItems.filter((item) => (isAdmin || item.to !== "/team") &&
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="bg-[#006B63] text-white shadow-md">
        <div className="relative mx-auto flex min-h-[104px] items-center justify-center px-6 py-4 md:min-h-[116px]">
          <Link to="/" className="flex items-center gap-3 text-center" aria-label="Fiscal Initiative home">
            <img
              src={logo}
              alt="Fiscal Initiative"
              className="h-14 w-14 rounded-full bg-white object-contain shadow-sm md:h-16 md:w-16"
            />

            <div className="text-left">
              <h1 className="site-brand text-2xl font-bold leading-none md:text-3xl">
                {organization.shortName}
              </h1>

              <p className="site-tagline mt-1 text-[11px] text-white/90 md:text-sm">
                Grounded in Evidence, Built for Growth.
              </p>
            </div>
          </Link>

          <div className="absolute right-4 flex items-center gap-3 md:right-8">
            <select className="hidden rounded border border-white/35 bg-transparent px-2 py-1 text-xs text-white md:block">
              <option value="EN">EN</option>
            </select>

            <button
              className="text-sm font-semibold text-white md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
            >
              Menu
            </button>
          </div>
        </div>

      </div>

      <nav className={`${scrolled ? "bg-[#00564F]" : "bg-[#006B63]"} hidden border-t border-white/30 md:block`}>
        <div className="relative mx-auto flex h-14 max-w-7xl items-center justify-center gap-5 text-xs text-white lg:gap-8 lg:text-sm xl:gap-10">
          {visibleMenus.map((menu) => (
            <div
              key={menu.id}
              className="relative h-full flex items-center"
            >
              {menu.to ? (
                <Link
                  to={menu.to}
                  onClick={() => setActiveMenu(null)}
                  className="flex h-full items-center px-1 font-bold text-white/90 transition hover:text-white"
                >
                  {menu.label}
                </Link>
              ) : (
                <NavItem
                  label={menu.label}
                  active={activeMenu === menu.id}
                  onClick={() =>
                    setActiveMenu((current) =>
                      current === menu.id ? null : menu.id
                    )
                  }
                />
              )}

              {activeMenu === menu.id && (
                <div className="absolute left-1/2 top-full z-50 flex min-w-max -translate-x-1/2 gap-2 border-t-4 border-[#00978C] bg-white py-3 text-gray-900 shadow-xl">
                  {menu.columns
                    ? menu.columns.map((column, index) => (
                        <MegaSection
                          key={column.title || index}
                          title={column.title}
                          items={column.items}
                          onNavigate={() => setActiveMenu(null)}
                        />
                      ))
                    : (
                        <MegaSection
                          items={menu.items}
                          onNavigate={() => setActiveMenu(null)}
                        />
                      )}
                </div>
              )}
            </div>
          ))}

          <button
            onClick={() => setSearchOpen(true)}
            className="absolute right-4 text-xs font-bold text-white/90 transition hover:text-white lg:right-6 lg:text-sm"
            aria-label="Open search"
          >
            Search
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-[#00564F] text-white px-6 py-3 shadow-xl max-h-[75vh] overflow-y-auto divide-y divide-white/10">
          {visibleMenus.map((menu) => (
            <div key={menu.id}>
              {menu.to ? (
                <MobileLink
                  to={menu.to}
                  label={menu.label}
                  setMobileOpen={setMobileOpen}
                  className="block py-4 text-base font-semibold hover:text-white/75"
                />
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setMobileSection((current) => (current === menu.id ? null : menu.id))
                    }
                    aria-expanded={mobileSection === menu.id}
                    className="w-full flex items-center justify-between py-4 text-base font-semibold"
                  >
                    {menu.label}
                    <span
                      className={`text-white/70 transition-transform duration-200 ${
                        mobileSection === menu.id ? "rotate-180" : ""
                      }`}
                    >
                      ▾
                    </span>
                  </button>
                  {mobileSection === menu.id && (
                    <div className="space-y-3 pb-4 pl-3 border-l-2 border-white/20 ml-1">
                      {(menu.columns
                        ? menu.columns.flatMap((column) => column.items)
                        : menu.items
                      ).map((item) => (
                        <MobileLink
                          key={item.label}
                          to={item.to}
                          label={item.label}
                          setMobileOpen={setMobileOpen}
                        />
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
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
                className="text-gray-500 text-sm font-semibold hover:text-emerald-800"
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

            <div className="mt-6 space-y-3 text-sm max-h-[50vh] overflow-y-auto">
              {filteredItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setSearchOpen(false)}
                  className="block hover:text-emerald-700"
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

function NavItem({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={active}
      className={`h-full flex items-center gap-1 px-1 font-bold transition ${
        active ? "text-white" : "text-white/90 hover:text-white"
      }`}
    >
      {label}
      <span className={`text-[10px] transition ${active ? "rotate-180" : ""}`}>
        ▾
      </span>
    </button>
  );
}

function MegaSection({ title, items, onNavigate }) {
  return (
    <div className="min-w-[190px]">
      {title && (
        <h4 className="text-teal-600 text-xs uppercase font-semibold px-5 pb-2 mb-1 border-b border-slate-100">
          {title}
        </h4>
      )}

      <ul>
        {items.map((item) => (
          <li key={item.label}>
            <Link
              to={item.to}
              className="flex items-center gap-3 px-5 py-2.5 text-sm font-medium hover:bg-teal-50 hover:text-teal-700 transition whitespace-nowrap"
              onClick={onNavigate}
            >
              {item.icon && (
                <span className="shrink-0">
                  <IconBadge icon={item.icon} size={30} />
                </span>
              )}
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileLink({ to, label, setMobileOpen, className = "block text-white/90 hover:text-white" }) {
  return (
    <Link
      to={to}
      onClick={() => setMobileOpen(false)}
      className={className}
    >
      {label}
    </Link>
  );
}

// The team page is admin-only, so its menu link is hidden from visitors.
function withoutTeamLink(menu) {
  const keep = (item) => item.to !== "/team";
  if (menu.columns) {
    return { ...menu, columns: menu.columns.map((column) => ({ ...column, items: column.items.filter(keep) })) };
  }
  return menu.items ? { ...menu, items: menu.items.filter(keep) } : menu;
}
