import PageBanner from "./PageBanner";
import SectionHeading from "./SectionHeading";
import IconBadge from "./IconBadge";
import {
  approach,
  mission,
  organization,
  pillars,
  vision,
} from "../content/siteContent";
import { profileAssets } from "../content/profileAssets";

const purposeVisionMission = [
  { icon: "target", title: "Purpose", text: organization.description },
  { icon: "binoculars", title: "Vision", text: vision },
  { icon: "compass", title: "Mission", text: mission },
];

const objectives = [
  "Deliver cutting-edge fiscal analysis and policy innovation.",
  "Strengthen fiscal data systems, tax policy, and macro-fiscal forecasting.",
  "Support public financial management and fiscal federalism reforms.",
  "Convene national and state-level fiscal governance dialogues.",
  "Advance citizen engagement, fiscal equity, and sustainable development.",
];

export default function AboutPage() {
  return (
    <div>
      <PageBanner
        title="About Fiscal Initiative"
        subtitle="Advancing fiscal governance, transparency, and evidence-based policy in Somalia."
        background={profileAssets.cover}
      />

      <section className="py-24 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <SectionHeading title="About Fiscal Initiative" />

          <h3 className="text-xl font-bold text-gray-900 mb-4">
            {organization.name} (FI)
          </h3>

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-16">
            is an independent, non-partisan fiscal policy research institute
            dedicated to strengthening Somalia's fiscal governance through
            applied research, capacity building, and inclusive policy
            dialogue.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {purposeVisionMission.map((item) => (
              <div key={item.title}>
                <IconBadge icon={item.icon} />
                <h4 className="text-lg font-bold text-gray-900 mt-5 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="Objectives"
            title="Practical priorities for better fiscal governance."
          />

          <div className="grid md:grid-cols-2 gap-5">
            {objectives.map((item) => (
              <div
                key={item}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-gray-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="Operating Model"
            title="Three mutually reinforcing pillars."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <div key={pillar.title} className="bg-[#00564F] text-white p-8 rounded-xl">
                <span className="text-white/75 font-black">0{index + 1}</span>
                <h3 className="text-xl font-bold mt-4 mb-3">{pillar.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionHeading
            eyebrow="Our Approach"
            title="Co-creation, capacity building, and rigorous evidence."
          />
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            {approach}
          </p>
          <p className="text-gray-500 text-sm">
            {organization.email} | {organization.location}
          </p>
        </div>
      </section>
    </div>
  );
}
