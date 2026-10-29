import { Navigate, useParams } from "react-router-dom";
import SequenceDetail from "./SequenceDetail";
import { aboutSections, objectives, principles } from "../content/siteContent";
import { profileAssets } from "../content/profileAssets";

export default function AboutSectionPage() {
  const { section: sectionId } = useParams();
  const index = aboutSections.findIndex((section) => section.id === sectionId);

  if (index === -1) return <Navigate to="/about" replace />;

  const section = aboutSections[index];

  return (
    <SequenceDetail
      items={aboutSections}
      index={index}
      hrefFor={(item) => `/about/${item.id}`}
      backTo="/about"
      backLabel="About Fiscal Initiative"
      eyebrow="About Fiscal Initiative"
      background={profileAssets.cover}
    >
      {section.id === "objectives" && <Objectives mission={section.summary} />}
      {section.id === "vision" && <Statement text={section.summary} />}
      {section.id === "principles" && <Principles intro={section.summary} />}
    </SequenceDetail>
  );
}

function Statement({ text }) {
  return (
    <blockquote className="border-l-4 border-[#1FA196] pl-6 md:pl-8">
      <p className="text-2xl md:text-3xl font-semibold text-emerald-900 leading-snug">
        {text}
      </p>
    </blockquote>
  );
}

function Objectives({ mission }) {
  return (
    <>
      <Statement text={mission} />

      <h3 className="icon-label text-xl font-bold text-gray-800 mt-12 mb-6">
        Our Objectives
      </h3>
      <ol className="space-y-4">
        {objectives.map((objective, index) => (
          <li
            key={objective}
            className="flex items-start gap-5 bg-slate-50 border border-slate-200 rounded-xl p-5"
          >
            <span className="site-brand shrink-0 w-11 h-11 rounded-full bg-[#00564F] text-white flex items-center justify-center text-lg font-bold">
              {index + 1}
            </span>
            <span className="text-gray-700 text-base md:text-lg leading-relaxed pt-1.5">
              {objective}
            </span>
          </li>
        ))}
      </ol>
    </>
  );
}

function Principles({ intro }) {
  return (
    <>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">{intro}</p>
      <div className="grid sm:grid-cols-2 gap-4">
        {principles.map((principle, index) => (
          <div
            key={principle}
            className="bg-[#1FA196] text-white flex items-center gap-6 px-7 py-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition"
          >
            <span className="site-brand text-6xl md:text-7xl font-bold leading-none tracking-tight">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-base md:text-lg font-semibold leading-snug">
              {principle}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
