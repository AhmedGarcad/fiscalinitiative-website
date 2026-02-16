export default function HomeStats() {
  return (
    <section className="bg-[#0B2E25] text-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">

        <Stat number="25+" label="Policy Publications" />
        <Stat number="40+" label="Policy Dialogues" />
        <Stat number="12" label="Research Programs" />
        <Stat number="5+" label="Strategic Partnerships" />

      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div>
      <h3 className="text-3xl font-semibold text-yellow-400 mb-2">
        {number}
      </h3>
      <p className="text-sm tracking-widest uppercase text-gray-300">
        {label}
      </p>
    </div>
  );
}
