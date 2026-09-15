import { organization } from "../content/siteContent";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#062E25] to-[#041F19] text-green-100 pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-24 text-center">
          <h4 className="text-xs tracking-[0.25em] uppercase text-green-300 mb-10">
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

        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent mb-24" />

        <div className="grid md:grid-cols-4 gap-16">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              {organization.shortName}
            </h3>

            <p className="text-green-200 text-sm leading-relaxed mb-10">
              {organization.description}
            </p>

            <button className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black text-sm font-semibold rounded-full transition shadow-lg">
              Company Profile
            </button>
          </div>

          <FooterList
            title="About"
            items={["Mission & Vision", "Pillars", "Approach", "Contact"]}
          />

          <FooterList
            title="Research Focus"
            items={[
              "Tax Policy",
              "Fiscal Federalism",
              "Debt Sustainability",
              "Climate Finance",
            ]}
          />

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contact</h4>

            <ul className="space-y-4 text-sm text-green-200 mb-8">
              <li>{organization.email}</li>
              <li>{organization.location}</li>
              <li>{organization.tagline}</li>
            </ul>

            <div className="px-5 py-4 bg-white/5 border border-white/10 rounded-lg text-xs text-green-200">
              Evidence-based fiscal policy, institutional capacity, and
              inclusive dialogue.
            </div>
          </div>
        </div>

        <div className="mt-28 border-t border-green-800 pt-8 text-center text-xs tracking-[0.2em] uppercase text-green-400">
          Building Trust | Strengthening Institutions | Advancing Fiscal Reform
        </div>

        <div className="mt-4 text-center text-xs text-green-500">
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

      <ul className="space-y-4 text-sm text-green-200">
        {items.map((item) => (
          <li key={item} className="hover:text-yellow-400 transition">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
