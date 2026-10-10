import { mission, pillars, vision } from "../content/siteContent";
import { profileAssets } from "../content/profileAssets";

export default function HomeIntro() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center mb-20">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-emerald-700 font-semibold mb-4">
              Company Profile
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-950 leading-tight mb-6">
              A national platform for fiscal evidence, capacity, and dialogue.
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Fiscal Initiative works where evidence, institutions, and citizens
              meet. The model is practical: build trust, strengthen systems, and
              make fiscal policy easier to understand, debate, and improve.
            </p>
          </div>

          <div className="relative min-h-[420px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={profileAssets.mission}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#004D47]/90 via-[#004D47]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <p className="text-sm uppercase tracking-[0.25em] text-white/80 mb-3">
                Building Trust
              </p>
              <p className="text-2xl font-semibold">Building Growth</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <IntroPanel title="Our Mission" text={mission} />
          <IntroPanel title="Our Vision" text={vision} />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="group bg-slate-50 border border-slate-200 p-7 rounded-xl hover:bg-[#00564F] hover:text-white transition duration-300"
            >
              <span className="text-5xl font-black text-emerald-100 group-hover:text-white/10">
                0{index + 1}
              </span>
              <h3 className="text-xl font-bold text-emerald-900 group-hover:text-white mb-3 mt-4">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 group-hover:text-white/90">
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
    <div className="bg-[#00564F] text-white p-8 md:p-10 rounded-xl relative overflow-hidden">
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-white/10" />
      <p className="text-xs uppercase tracking-[0.25em] text-white/75 mb-4">
        {title}
      </p>
      <p className="text-base md:text-lg leading-relaxed text-white/90">
        {text}
      </p>
    </div>
  );
}
