import heroImage from "../assets/images/home-hero.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: "85% center",
        }}
      />

      {/* LEFT FADE */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full pt-52 md:pt-60">
        <div className="max-w-lg">

          <p className="text-green-700 uppercase tracking-[0.25em] text-[11px] mb-5 font-medium">
            Institute for Fiscal Governance
          </p>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-snug mb-5">
            Strengthening Fiscal Institutions
            <br />
            for Sustainable Development
          </h1>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-7">
            Independent research. Evidence-based policy engagement.
            Institutional capacity strengthening.
          </p>

          <Link
            to="/research"
            className="inline-block bg-green-800 hover:bg-green-700 text-white px-7 py-3 rounded-md text-sm font-medium transition"
          >
            Explore Research
          </Link>

        </div>
      </div>

    </section>
  );
}
