import { Link } from "react-router-dom";
import { organization, researchAreas } from "../content/siteContent";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0A2540] to-[#071427] text-blue-100 pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-24 text-center">
          <h4 className="text-xs tracking-[0.25em] uppercase text-blue-300 mb-10">
            Strategic Work Areas
          </h4>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center">
            {["Policy", "Research", "Capacity", "Dialogue", "Innovation"].map(
              (item) => (
                <div
                  key={item}
                  className="h-14 bg-white/5 hover:bg-white/10 border border-white/10 transition rounded-lg flex items-center justify-center text-xs tracking-wide"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>

        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-sky-500 to-transparent mb-24" />

        <div className="grid md:grid-cols-4 gap-16">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              {organization.shortName}
            </h3>

            <p className="text-blue-200 text-sm leading-relaxed mb-10">
              {organization.description}
            </p>

            <button className="px-8 py-3 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-black text-sm font-semibold rounded-full transition shadow-lg">
              Company Profile
            </button>
          </div>

          <FooterList
            title="About"
            items={[
              { label: "About Us", to: "/about" },
              { label: "FI Team", to: "/team" },
              { label: "Our Funding", to: "/funding" },
              { label: "Work With Us", to: "/work-with-us" },
            ]}
          />

          <FooterList
            title="Research Focus"
            items={researchAreas
              .slice(0, 4)
              .map((area) => ({ label: area.title, to: "/research" }))}
          />

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contact</h4>

            <ul className="space-y-4 text-sm text-blue-200 mb-8">
              <li>{organization.email}</li>
              <li>{organization.location}</li>
              <li>{organization.tagline}</li>
            </ul>

            <div className="px-5 py-4 bg-white/5 border border-white/10 rounded-lg text-xs text-blue-200">
              Evidence-based fiscal policy, institutional capacity, and
              inclusive dialogue.
            </div>
          </div>
        </div>

        <div className="mt-28 border-t border-blue-800 pt-8 text-center text-xs tracking-[0.2em] uppercase text-blue-400">
          Building Trust | Strengthening Institutions | Advancing Fiscal Reform
        </div>

        <div className="mt-4 text-center text-xs text-blue-500">
          Copyright {new Date().getFullYear()} Fiscal Initiative. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterList({ title, items }) {
  return (
    <div>
      <h4 className="text-white font-semibold text-lg mb-6">{title}</h4>

      <ul className="space-y-4 text-sm text-blue-200">
        {items.map((item) => (
          <li key={item.label}>
            <Link to={item.to} className="hover:text-sky-400 transition">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
