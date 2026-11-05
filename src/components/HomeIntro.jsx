import { mission, pillars, vision } from "../content/siteContent";

export default function HomeIntro() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <IntroPanel title="Our Mission" text={mission} />
          <IntroPanel title="Our Vision" text={vision} />
        </div>

        <h2 className="text-3xl md:text-4xl font-black text-gray-950 text-center mb-10">
          What We Do
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="bg-slate-50 border border-slate-200 p-7 rounded-xl">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IntroPanel({ title, text }) {
  return (
    <div className="bg-[#00564F] text-white p-8 md:p-10 rounded-xl">
      <h2 className="text-xs uppercase tracking-[0.25em] text-white/75 mb-4">
        {title}
      </h2>
      <p className="text-base md:text-lg leading-relaxed text-white/90">
        {text}
      </p>
    </div>
  );
}
