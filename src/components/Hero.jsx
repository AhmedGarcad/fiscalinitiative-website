import heroImage from "../assets/images/home-hero.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative 
        h-[85vh] 
        md:h-screen              /* full height on desktop */
        w-full 
        mt-16
        overflow-hidden           /* ensure background doesn't spill */
      "
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="
          absolute 
          inset-0 
          bg-cover 
          bg-center 
          z-0
        "
        style={{
          backgroundImage: `url(${heroImage})`,
          minHeight: "100%",         // ensures full height on iPhone
        }}
      />

      {/* LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-white/60 z-10" />

      {/* TEXT CONTENT */}
      <div
        className="
          relative 
          z-20 
          h-full 
          flex 
          items-center 
          justify-center 
          text-center 
          px-4 
          md:px-6
        "
      >
        <div className="max-w-3xl">

          {/* WELCOME TEXT */}
          <p className="text-sm uppercase tracking-wide text-gray-700 mb-3">
            Welcome to Fiscal Initiative
          </p>

          {/* HERO TITLE */}
          <h1
            className="
              text-2xl 
              sm:text-3xl 
              md:text-5xl 
              font-bold 
              text-gray-900 
              mb-4
            "
          >
            To Build a Stronger and More Transparent Fiscal Future
          </h1>

          {/* HERO SUBTEXT */}
          <p
            className="
              text-base 
              md:text-xl 
              italic 
              text-gray-800
            "
          >
            Building trust through evidence-based fiscal governance
          </p>

        </div>
      </div>
    </section>
  );
}
