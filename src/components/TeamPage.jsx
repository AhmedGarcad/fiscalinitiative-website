const leadershipAreas = [
  {
    title: "Strategic Leadership",
    description:
      "Guides FI's institutional direction, partnerships, governance standards, and long-term fiscal reform contribution.",
  },
  {
    title: "Research & Policy Analysis",
    description:
      "Leads applied research on revenue mobilization, public financial management, fiscal federalism, and macro-fiscal policy.",
  },
  {
    title: "Capacity & Dialogue Programs",
    description:
      "Coordinates workshops, convenings, and learning platforms that connect Somali institutions, experts, and citizens.",
  },
];

const operatingValues = [
  "Non-partisan evidence",
  "Local ownership",
  "Institutional trust",
  "Practical policy innovation",
];

export default function TeamPage() {
  return (
    <section className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            Leadership & Expertise
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Fiscal Initiative brings together fiscal policy, public finance,
            research, and convening expertise to support Somalia's fiscal
            governance ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {leadershipAreas.map((area) => (
            <div
              key={area.title}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold text-gray-800">{area.title}</h3>
              <div className="w-10 h-1 bg-green-700 my-4" />
              <p className="text-gray-600 text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[#0B2E25] rounded-xl p-8 md:p-10 text-white">
          <h2 className="text-2xl font-semibold mb-6">How FI Works</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {operatingValues.map((value) => (
              <div
                key={value}
                className="border border-white/15 bg-white/5 rounded-lg p-4 text-sm text-green-50"
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
