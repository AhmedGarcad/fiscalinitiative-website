export default function Research() {
  const researchAreas = [
    {
      title: "Public Finance",
      description:
        "Promoting transparency, accountability, and efficient management of public resources to strengthen fiscal governance.",
    },
    {
      title: "Democracy & Governance",
      description:
        "Strengthening democratic institutions, accountability mechanisms, and citizen participation in decision-making.",
    },
    {
      title: "Economic Policy",
      description:
        "Supporting inclusive economic growth through evidence-based research on taxation, trade, and development.",
    },
    {
      title: "Anti-Corruption",
      description:
        "Advancing reforms to prevent corruption and improve integrity across public institutions.",
    },
    {
      title: "Institutional Capacity",
      description:
        "Enhancing the ability of government institutions to design and implement effective fiscal policies.",
    },
    {
      title: "Inclusive Development",
      description:
        "Ensuring economic policies benefit all citizens, especially vulnerable and marginalized communities.",
    },
  ];

  return (
    <section
      id="research"
      className="
        bg-gray-50 
        py-16            /* ✅ NEW: better mobile spacing */
        md:py-20         /* existing desktop spacing */
      "
    >
      <div
        className="
          max-w-7xl 
          mx-auto 
          px-4            /* ✅ NEW: mobile padding */
          md:px-6         /* existing desktop padding */
        "
      >
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-teal-800">
            Research
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm md:text-base">
            Fiscal Initiative conducts rigorous, policy-relevant research to
            support transparent governance, sustainable development, and
            evidence-based decision-making.
          </p>
        </div>

        {/* Research Cards */}
        <div
          className="
            grid 
            grid-cols-1        /* ✅ NEW: single column on small phones */
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-6              /* ✅ NEW: tighter gap on mobile */
            md:gap-8           /* existing spacing on desktop */
          "
        >
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="
                bg-white 
                rounded-xl 
                shadow-md 
                p-6 
                hover:shadow-lg 
                transition
                h-full           /* ✅ NEW: equal card height */
                flex 
                flex-col
              "
            >
              <h3 className="text-lg md:text-xl font-semibold text-teal-700 mb-3">
                {area.title}
              </h3>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-grow">
                {area.description}
              </p>

              <button className="mt-4 text-teal-700 font-medium hover:underline">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
