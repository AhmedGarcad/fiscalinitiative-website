import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpeg";
import { organization } from "../content/siteContent";
import { profileAssets } from "../content/profileAssets";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-44 md:pt-48">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${profileAssets.cover})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#031f1d]/95 via-[#075f57]/80 to-[#041a18]/50" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-center">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-4 bg-white/10 border border-white/20 backdrop-blur px-5 py-3 rounded-full mb-8">
              <img src={logo} alt="" className="h-10 w-10 rounded-full object-cover" />
              <span className="text-sm text-green-50">{organization.tagline}</span>
            </div>

            <p className="text-yellow-300 uppercase tracking-[0.28em] text-xs mb-5 font-semibold">
              Independent Fiscal Policy Research Institute
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.98] max-w-4xl">
              Strengthening Somalia's Fiscal Governance Through Evidence
            </h1>

            <p className="mt-7 text-green-50/90 text-base md:text-xl leading-relaxed max-w-2xl">
              {organization.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-9">
              <Link
                to="/research"
                className="bg-yellow-400 hover:bg-yellow-300 text-[#06312b] px-8 py-4 rounded-md text-sm font-bold transition text-center"
              >
                Explore Research
              </Link>

              <Link
                to="/about"
                className="border border-white/50 text-white hover:bg-white/10 px-8 py-4 rounded-md text-sm font-bold transition text-center"
              >
                Read Profile
              </Link>
            </div>
          </div>

          <div className="hidden lg:block bg-white/12 border border-white/20 backdrop-blur-md p-6 rounded-2xl shadow-2xl">
            <img
              src={profileAssets.city}
              alt=""
              className="aspect-[4/5] w-full object-cover object-center rounded-xl"
            />
            <div className="grid grid-cols-3 gap-3 mt-4 text-center">
              {["Policy", "Research", "Dialogue"].map((item) => (
                <div key={item} className="bg-white/10 rounded-lg p-3 text-xs text-white">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
