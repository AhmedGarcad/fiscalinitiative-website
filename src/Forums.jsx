export default function Forums() {
  const forums = [
    {
      title: "Somalia Tax Policy Forum",
      description:
        "A national platform for discussing tax reform, revenue mobilization, and fiscal policy improvements in Somalia.",
    },
    {
      title: "Annual Budget Engagement Roundtable",
      description:
        "A yearly dialogue bringing together government officials, economists, and civil society to discuss Somalia's national budget priorities.",
    },
    {
      title: "Ministerial Fiscal Federalism Dialogue",
      description:
        "High-level discussions between federal and state authorities focused on strengthening fiscal federalism and intergovernmental finance systems.",
    },
    {
      title: "Somalia Fiscal Outlook Conference",
      description:
        "An annual conference presenting fiscal trends, macroeconomic outlooks, and policy recommendations for Somalia's economic development.",
    },
    {
      title: "Annual Anniversary and Fundraising Dinner",
      description:
        "A special institutional gathering celebrating Fiscal Initiative milestones and strengthening partnerships with supporters and stakeholders.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Policy Forums & Dialogues
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fiscal Initiative convenes high-level policy dialogues,
            conferences, and stakeholder engagements to strengthen fiscal
            governance and economic policy in Somalia.
          </p>
        </div>

        {/* Forums Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {forums.map((forum, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition duration-300 border border-gray-100"
            >
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                {forum.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {forum.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}