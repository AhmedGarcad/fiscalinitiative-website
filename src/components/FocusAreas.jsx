export default function FocusAreas() {
  const areas = [
    "Fiscal Policy & Governance",
    "Public Finance Management",
    "Applied Research & Innovation",
    "Capacity Building",
    "Fiscal Dialogue Platforms",
    "Transparency & Accountability",
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-teal-700 mb-12">
          Our Focus Areas
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg mb-2">{area}</h3>
              <p className="text-sm text-gray-600">
                Strategic initiatives supporting fiscal sustainability and
                inclusive development.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
