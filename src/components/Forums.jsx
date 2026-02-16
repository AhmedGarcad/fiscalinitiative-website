export default function Forums() {
  const forums = [
    "Somalia Tax Policy Forum",
    "Annual Budget Engagement Roundtable",
    "Ministerial Fiscal Federalism Dialogue",
    "Somalia Fiscal Outlook Conference",
    "Annual Anniversary and Fundraising Dinner",
  ];

  return (
    <section id="forums" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-900 mb-4">
            Forums
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Fiscal Initiative convenes national-level forums that bring together
            policymakers, economists, civil society leaders, and development
            partners to shape Somalia’s fiscal future.
          </p>
        </div>

        {/* FORUM LIST */}
        <div className="grid md:grid-cols-2 gap-10">
          {forums.map((forum, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold text-green-800">
                {forum}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
