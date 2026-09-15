import { profileAssets } from "../content/profileAssets";

export default function HomeStats() {
  return (
    <section className="relative text-white py-24 overflow-hidden">
      <img
        src={profileAssets.approach}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#052f2a]/90" />

      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <Stat number="3" label="Mutually Reinforcing Pillars" />
        <Stat number="2x" label="Fiscal Dialogues Each Year" />
        <Stat number="12" label="Research Priority Areas" />
        <Stat number="1" label="Whole-of-Somalia Approach" />
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div className="bg-white/10 border border-white/15 backdrop-blur rounded-xl p-6">
      <h3 className="text-4xl font-black text-yellow-300 mb-2">{number}</h3>
      <p className="text-xs tracking-widest uppercase text-green-50">{label}</p>
    </div>
  );
}
