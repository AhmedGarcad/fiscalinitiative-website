import { useState } from "react";
import PageBanner from "./PageBanner";
import {
  approach,
  mission,
  organization,
  pillars,
  vision,
} from "../content/siteContent";
import { profileAssets } from "../content/profileAssets";

export default function AboutPage() {
  const [active, setActive] = useState("about");

  const sections = [
    {
      id: "about",
      title: "About FI",
      content: (
        <PanelContent
          eyebrow="Who We Are"
          title="An independent fiscal policy research institute for Somalia."
          text={[
            "The Fiscal Initiative (FI) is an independent, non-partisan fiscal policy research institute dedicated to strengthening Somalia's fiscal governance through applied research, capacity building, and inclusive policy dialogue.",
            "FI connects policymakers, academia, civil society, citizens, and development actors around practical fiscal solutions that support inclusive growth, fiscal equity, and sustainable development.",
          ]}
        />
      ),
    },
    {
      id: "mission",
      title: "Mission",
      content: (
        <PanelContent eyebrow="Our Mission" title="Building institutional capacity through evidence." text={[mission]} />
      ),
    },
    {
      id: "vision",
      title: "Vision",
      content: (
        <PanelContent eyebrow="Our Vision" title="Somalia's trusted fiscal policy partner." text={[vision]} />
      ),
    },
    {
      id: "objectives",
      title: "Objectives",
      content: (
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-green-700 mb-4">
            Objectives
          </p>
          <h2 className="text-3xl font-black text-gray-950 mb-8">
            Practical priorities for better fiscal governance.
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Deliver cutting-edge fiscal analysis and policy innovation.",
              "Strengthen fiscal data systems, tax policy, and macro-fiscal forecasting.",
              "Support public financial management and fiscal federalism reforms.",
              "Convene national and state-level fiscal governance dialogues.",
              "Advance citizen engagement, fiscal equity, and sustainable development.",
            ].map((item) => (
              <div key={item} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                {item}
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "pillars",
      title: "Pillars",
      content: (
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-green-700 mb-4">
            Operating Model
          </p>
          <h2 className="text-3xl font-black text-gray-950 mb-8">
            Three mutually reinforcing pillars.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <div key={pillar.title} className="bg-[#0B2E25] text-white p-6 rounded-xl">
                <span className="text-yellow-300 font-black">0{index + 1}</span>
                <h3 className="text-xl font-bold mt-4 mb-3">{pillar.title}</h3>
                <p className="text-green-50 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "approach",
      title: "Approach",
      content: (
        <PanelContent
          eyebrow="Our Approach"
          title="Co-creation, capacity building, and rigorous evidence."
          text={[approach, `${organization.email} | ${organization.location}`]}
        />
      ),
    },
  ];

  return (
    <div>
      <PageBanner
        title="About Fiscal Initiative"
        subtitle="Advancing fiscal governance, transparency, and evidence-based policy in Somalia."
        background={profileAssets.cover}
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[320px_1fr] gap-10">
            <aside className="space-y-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActive(section.id)}
                  className={`w-full p-5 rounded-xl shadow-md transition text-left font-semibold ${
                    active === section.id
                      ? "bg-green-900 text-white"
                      : "bg-white hover:shadow-xl"
                  }`}
                >
                  {section.title}
                </button>
              ))}

              <img
                src={profileAssets.pillars}
                alt=""
                className="hidden lg:block rounded-xl shadow-xl aspect-[4/5] object-cover object-top"
              />
            </aside>

            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl min-h-[480px]">
              {sections.find((section) => section.id === active).content}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function PanelContent({ eyebrow, title, text }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.25em] text-green-700 mb-4">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-5xl font-black text-gray-950 leading-tight mb-8">
        {title}
      </h2>
      <div className="space-y-5">
        {text.map((paragraph) => (
          <p key={paragraph} className="text-gray-700 leading-relaxed text-lg">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
