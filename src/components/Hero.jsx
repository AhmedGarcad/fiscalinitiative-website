import heroImage from "../assets/images/home-hero.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[85vh] w-full mt-16"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-white/60" />

      {/* TEXT */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">

          <p className="text-sm uppercase tracking-wide text-gray-700 mb-3">
            Welcome to Fiscal Initiative
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            To Build a Stronger and More Transparent Fiscal Future
          </h1>

          <p className="text-xl italic text-gray-800">
            Building trust through evidence-based fiscal governance
          </p>

        </div>
      </div>
    </section>
  );
}
