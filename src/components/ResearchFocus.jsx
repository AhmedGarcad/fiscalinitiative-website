export default function ResearchFocus() {
  const researchAreas = [
    "Taxation",
    "Government Budget",
    "Debt Management",
    "Public Financial Management",
    "Public Procurement",
    "Federal-State Fiscal Relations",
    "Combating Corruption",
    "Business Regulation",
    "International Trade",
  ];

  return (
    <section id="research" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-900 mb-4">
            Research Focus
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Fiscal Initiative conducts rigorous, policy-driven research to
            strengthen Somalia’s fiscal governance, transparency, and
            sustainable economic development.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                {area}
              </h3>

              <div className="w-10 h-1 bg-green-700 mb-4"></div>

              <p className="text-gray-600 text-sm leading-relaxed">
                Policy analysis, institutional reform recommendations, and
                evidence-based advisory work focused on strengthening fiscal
                systems and public accountability.
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
