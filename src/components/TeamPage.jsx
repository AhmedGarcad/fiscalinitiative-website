import { useState } from "react";
import PageBanner from "./PageBanner";
import SectionHeading from "./SectionHeading";
import TeamMemberGrid from "./TeamMemberGrid";
import { teamGroups, teamMembers } from "../content/siteContent";
import { profileAssets } from "../content/profileAssets";
import { slugify } from "../lib/slugify";

// Drop a photo named after the person (e.g. sadia-osman.jpg) into src/assets/team.
const teamPhotos = Object.fromEntries(
  Object.entries(
    import.meta.glob("../assets/team/*.{jpg,jpeg,png,webp}", {
      eager: true,
      import: "default",
    })
  ).map(([path, url]) => [path.split("/").pop().replace(/\.\w+$/, ""), url])
);

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
  const [active, setActive] = useState("management");
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

          {active === "management" ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.email} member={member} />
              ))}
            </div>
          ) : (
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
          )}
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

function TeamMemberCard({ member }) {
  const photo = teamPhotos[slugify(member.name)];
  const initials = member.name
    .replace(/^Dr\.\s*/, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

  return (
    <article className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-slate-100 overflow-hidden text-center">
      <div className="h-24 bg-gradient-to-r from-[#00564F] to-teal-600" />
      <div className="-mt-16 px-6 pb-8">
        <div className="w-32 h-32 mx-auto rounded-full ring-4 ring-white shadow-lg overflow-hidden bg-[#00564F] flex items-center justify-center">
          {photo ? (
            <img
              src={photo}
              alt={member.name}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <span className="icon-label text-4xl font-bold text-white">
              {initials}
            </span>
          )}
        </div>

        <h3 className="icon-label mt-5 text-xl font-bold text-gray-900">
          {member.name}
        </h3>
        <p className="mt-1 text-sm font-semibold text-emerald-700">
          {member.title}
        </p>

        <div className="mt-6 pt-5 border-t border-slate-100 space-y-2 text-sm">
          <a
            href={`tel:${member.phone.replace(/\s/g, "")}`}
            className="flex items-center justify-center gap-2 text-gray-600 hover:text-emerald-700 transition"
          >
            <ContactIcon type="phone" />
            {member.phone}
          </a>
          <a
            href={`mailto:${member.email}`}
            className="flex items-center justify-center gap-2 text-gray-600 hover:text-emerald-700 transition break-all"
          >
            <ContactIcon type="email" />
            {member.email}
          </a>
        </div>
      </div>
    </article>
  );
}

function ContactIcon({ type }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 shrink-0 text-emerald-700"
    >
      {type === "phone" ? (
        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2" />
      ) : (
        <>
          <path d="M3 6h18v12H3z" />
          <path d="M3 7l9 6 9-6" />
        </>
      )}
    </svg>
  );
}
