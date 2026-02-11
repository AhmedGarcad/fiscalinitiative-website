import heroImage from "../assets/images/home-hero.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative 
        h-[85vh] 
        md:h-screen              /* ✅ NEW: full height on desktop */
        w-full 
        mt-16
        bg-fixed                 /* ✅ NEW: background stays on scroll (desktop) */
      "
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-white/60" />

      {/* TEXT */}
      <div
        className="
          relative 
          z-10 
          h-full 
          flex 
          items-center 
          justify-center 
          text-center 
          px-4                   /* ✅ UPDATED: better on mobile */
          md:px-6                /* ✅ NEW: spacing on larger screens */
        "
      >
        <div className="max-w-3xl">

          <p className="text-sm uppercase tracking-wide text-gray-700 mb-3">
            Welcome to Fiscal Initiative
          </p>

          <h1
            className="
              text-2xl            /* ✅ NEW: smaller phones */
              sm:text-3xl         /* ✅ NEW */
              md:text-5xl         /* existing size kept */
              font-bold 
              text-gray-900 
              mb-4
            "
          >
            To Build a Stronger and More Transparent Fiscal Future
          </h1>

          <p
            className="
              text-base           /* ✅ NEW: mobile size */
              md:text-xl          /* existing behavior */
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
