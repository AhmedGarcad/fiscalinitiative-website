import aboutImage from "../assets/images/about-hero.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="
        py-20            /* ✅ UPDATED: better spacing on mobile */
        md:py-24         /* existing spacing preserved on desktop */
        bg-white
      "
    >
      <div
        className="
          max-w-7xl 
          mx-auto 
          px-4            /* ✅ NEW: mobile padding */
          md:px-6         /* existing desktop padding */
          grid 
          grid-cols-1     /* ✅ NEW: stack on mobile */
          md:grid-cols-2  /* existing desktop layout */
          gap-10          /* ✅ NEW: smoother gap on mobile */
          md:gap-12       /* existing desktop gap */
          items-center
        "
      >

        {/* IMAGE */}
        <img
          src={aboutImage}
          alt="About Fiscal Initiative"
          className="
            w-full              /* ✅ NEW: prevent overflow */
            h-auto              /* ✅ NEW */
            rounded-lg 
            shadow
            object-cover        /* ✅ NEW: safe scaling */
          "
        />

        {/* TEXT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mb-4 md:mb-6">
            About Us
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">
            The Fiscal Initiative (TFI) is a non-partisan policy research and
            capacity-building institute dedicated to advancing prudent fiscal
            governance and strengthening citizen participation in Somalia’s
            economic decision-making.
          </p>

          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Established in 2025, TFI bridges the gap between fiscal policy goals
            and lived realities through evidence-based analysis, capacity
            development, and inclusive dialogue.
          </p>
        </div>

      </div>
    </section>
  );
}
