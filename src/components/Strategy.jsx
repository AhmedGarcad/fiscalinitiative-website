export default function Strategy() {
  return (
    <section
      id="strategy"
      className="
        py-16           /* ✅ NEW: better spacing on mobile */
        md:py-20        /* existing spacing preserved */
      "
    >
      <div
        className="
          max-w-7xl 
          mx-auto 
          px-4           /* ✅ NEW: mobile padding */
          md:px-6        /* existing desktop padding */
          text-center 
          text-white
        "
      >

        <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12">
          Our Strategy
        </h2>

        <div
          className="
            grid 
            grid-cols-1      /* ✅ NEW: stack on mobile */
            md:grid-cols-3   /* existing desktop layout */
            gap-6            /* ✅ NEW: tighter gap on mobile */
            md:gap-8         /* existing desktop gap */
          "
        >

          <div className="bg-white/90 text-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              Policy Partnerships
            </h3>
            <p className="text-sm md:text-base">
              Strengthening fiscal data systems and public financial management
              through collaboration with state institutions.
            </p>
          </div>

          <div className="bg-white/90 text-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              Applied Research & Innovation
            </h3>
            <p className="text-sm md:text-base">
              High-quality, policy-relevant research on domestic revenue,
              expenditure efficiency, and service delivery.
            </p>
          </div>

          <div className="bg-white/90 text-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              Fiscal Governance Dialogues
            </h3>
            <p className="text-sm md:text-base">
              Convening inclusive dialogues that bring together policymakers,
              civil society, and development partners.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
