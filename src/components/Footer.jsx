export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#062E25] to-[#041F19] text-green-100 pt-36 pb-20 overflow-hidden">

      {/* Subtle Overlay Texture */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* PARTNERS SECTION */}
        <div className="mb-24 text-center">
          <h4 className="text-xs tracking-[0.25em] uppercase text-green-300 mb-10">
            Institutional & Strategic Partners
          </h4>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center">
            {["Partner 1", "Partner 2", "Partner 3", "Partner 4", "Partner 5"].map((p, i) => (
              <div
                key={i}
                className="h-14 bg-white/5 hover:bg-white/10 border border-white/10 transition rounded-lg flex items-center justify-center text-xs tracking-wide"
              >
                {p}
              </div>
            ))}
          </div>
        </div>

        {/* GOLD DIVIDER */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent mb-24"></div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-4 gap-16">

          {/* Institution */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Fiscal Initiative
            </h3>

            <p className="text-green-200 text-sm leading-relaxed mb-10">
              An independent, non-partisan policy research institute
              advancing fiscal governance, institutional transparency,
              and sustainable economic reform in Somalia.
            </p>

            <button className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black text-sm font-semibold rounded-full transition shadow-lg">
              Download Annual Report 2024
            </button>
          </div>

          {/* About */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">
              About
            </h4>

            <ul className="space-y-4 text-sm text-green-200">
              <li className="hover:text-yellow-400 transition cursor-pointer">Mission & Vision</li>
              <li className="hover:text-yellow-400 transition cursor-pointer">Leadership</li>
              <li className="hover:text-yellow-400 transition cursor-pointer">Governance Structure</li>
              <li className="hover:text-yellow-400 transition cursor-pointer">Careers</li>
            </ul>
          </div>

          {/* Research */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">
              Research Focus
            </h4>

            <ul className="space-y-4 text-sm text-green-200">
              <li className="hover:text-yellow-400 transition cursor-pointer">Taxation & Revenue</li>
              <li className="hover:text-yellow-400 transition cursor-pointer">Budget Policy</li>
              <li className="hover:text-yellow-400 transition cursor-pointer">Debt Management</li>
              <li className="hover:text-yellow-400 transition cursor-pointer">Fiscal Federalism</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">
              Contact
            </h4>

            <ul className="space-y-4 text-sm text-green-200 mb-8">
              <li>info@fiscalinitiative.org</li>
              <li>Mogadishu, Somalia</li>
              <li>+252 XXX XXX XXX</li>
            </ul>

            <div className="px-5 py-4 bg-white/5 border border-white/10 rounded-lg text-xs text-green-200">
              ESG Compliant <br />
              Governance & Transparency Framework
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-28 border-t border-green-800 pt-8 text-center text-xs tracking-[0.2em] uppercase text-green-400">
          Building Trust • Strengthening Institutions • Advancing Fiscal Reform
        </div>

        <div className="mt-4 text-center text-xs text-green-500">
          © {new Date().getFullYear()} Fiscal Initiative. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
