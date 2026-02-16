import heroImage from "../assets/images/home-hero.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B2E25]/85 via-[#0B2E25]/75 to-[#0B2E25]/90" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 text-center text-white">

        <p className="text-xs tracking-[4px] uppercase text-green-300 mb-6">
          Institute for Fiscal Governance
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">
          Strengthening Fiscal Institutions <br />
          for Sustainable Development
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed mb-10">
          Independent research. Evidence-based policy engagement. 
          Institutional capacity strengthening.
        </p>

        <Link
          to="/research"
          className="inline-block bg-yellow-500 hover:bg-yellow-400 
                     text-black font-semibold px-8 py-3 rounded-md 
                     transition duration-300"
        >
          Explore Research
        </Link>

      </div>
    </section>
  );
}
