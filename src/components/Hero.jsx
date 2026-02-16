import heroImage from "../assets/images/home-hero.jpg";

export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(11,31,42,0.75), rgba(11,31,42,0.75)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-4xl px-6 fade-in">

        <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
          Strengthening Fiscal Governance  
          <br />
          for Sustainable Development
        </h1>

        <div className="gold-divider mx-auto"></div>

        <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
          Fiscal Initiative is an independent policy research institution
          advancing transparency, fiscal stability, and economic reform.
        </p>

        <button className="mt-10 px-8 py-3 bg-[#C6A75E] text-[#0B1F2A] font-semibold rounded-md hover:opacity-90 transition">
          Explore Our Research
        </button>

      </div>
    </section>
  );
}
