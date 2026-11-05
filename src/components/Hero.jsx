import { Link } from "react-router-dom";
import { organization } from "../content/siteContent";

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-r from-[#003D39] via-[#00635B] to-[#00796F] pt-36 pb-20 md:pt-[252px] md:pb-28">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-white/80 uppercase tracking-[0.28em] text-xs mb-5 font-semibold">
          Independent Fiscal Policy Research Institute
        </p>

        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
          Evidence for Somalia’s Fiscal Governance.
        </h1>

        <p className="mt-7 text-white/90 text-base md:text-xl leading-relaxed max-w-3xl mx-auto">
          {organization.description}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <Link
            to="/research"
            className="bg-white text-[#00564F] hover:bg-emerald-50 px-8 py-4 rounded-md text-sm font-bold transition text-center"
          >
            Explore Our Research
          </Link>

          <Link
            to="/about"
            className="border border-white/60 text-white hover:bg-white/10 px-8 py-4 rounded-md text-sm font-bold transition text-center"
          >
            About Fiscal Initiative
          </Link>
        </div>
      </div>
    </section>
  );
}
