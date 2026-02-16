export default function Timeline() {
  const events = [
    { year: "2025", text: "Fiscal Initiative established." },
    { year: "2026", text: "Launched National Tax Policy Forum." },
    { year: "2027", text: "Published Somalia Fiscal Outlook Report." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-16">
          Institutional Milestones
        </h2>

        <div className="border-l-4 border-green-900 pl-8 space-y-12">
          {events.map((event, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold text-green-900">
                {event.year}
              </h3>
              <p className="text-gray-600 mt-2">{event.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
