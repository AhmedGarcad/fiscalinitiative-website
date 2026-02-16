export default function StatsSection() {
  return (
    <section className="bg-[#0B1F2A] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center">

        <Stat number="25+" label="Policy Publications" />
        <Stat number="12" label="Research Programs" />
        <Stat number="40+" label="Policy Dialogues" />
        <Stat number="5" label="Institutional Partnerships" />

      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div>
      <h2 className="text-4xl font-semibold text-[#C6A75E]">{number}</h2>
      <p className="mt-3 text-sm uppercase tracking-widest text-gray-300">
        {label}
      </p>
    </div>
  );
}
