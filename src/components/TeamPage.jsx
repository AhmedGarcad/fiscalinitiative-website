import { useState } from "react";
import PageBanner from "./PageBanner";
import SectionHeading from "./SectionHeading";
import TeamMemberGrid from "./TeamMemberGrid";
import { teamGroups } from "../content/siteContent";
import { profileAssets } from "../content/profileAssets";

const groupContentType = {
  board: "board_member",
  management: "management_member",
  advisors: "advisor",
};

const operatingValues = [
  "Non-partisan evidence",
  "Local ownership",
  "Institutional trust",
  "Practical policy innovation",
];

export default function TeamPage() {
  const [active, setActive] = useState(teamGroups[0].id);
  const activeGroup = teamGroups.find((group) => group.id === active);

  return (
    <div>
      <PageBanner
        title="FI Team"
        subtitle="Fiscal policy, public finance, research, and convening expertise supporting Somalia's fiscal governance ecosystem."
        background={profileAssets.pillars}
      />

      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="FI Team" title={activeGroup.title} />

          <div className="flex flex-wrap justify-center gap-3 -mt-6 mb-12">
            {teamGroups.map((group) => (
              <button
                key={group.id}
                onClick={() => setActive(group.id)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition ${
                  active === group.id
                    ? "bg-[#00564F] text-white"
                    : "bg-white text-gray-700 border border-slate-200 hover:border-emerald-300"
                }`}
              >
                {group.title}
              </button>
            ))}
          </div>

          <p className="max-w-2xl mx-auto text-center text-gray-600 leading-relaxed mb-16">
            {activeGroup.description}
          </p>

          <TeamMemberGrid
            contentType={groupContentType[active]}
            fallback={
              <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center">
                <h3 className="text-xl font-bold text-emerald-900 mb-3">
                  {activeGroup.title} profiles coming soon
                </h3>
                <p className="text-gray-600 max-w-xl mx-auto">
                  Profiles for FI's {activeGroup.title.toLowerCase()} will
                  appear here as they are added.
                </p>
              </div>
            }
          />
        </div>
      </section>

      <section className="py-20 bg-[#00564F] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            How FI Works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {operatingValues.map((value) => (
              <div
                key={value}
                className="border border-white/15 bg-white/5 rounded-lg p-4 text-sm text-white/90 text-center"
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
