import heroImage from "../assets/images/home-hero.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative 
        w-full 
        mt-16
        overflow-hidden
      "
      style={{
        // Set height to image aspect ratio
        height: "calc(100vw * 1.0)", // since your image is almost square (1080x1071 ~ 1:1)
      }}
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "contain",     // show full image
          backgroundPosition: "center",  // center it
          backgroundRepeat: "no-repeat",
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
