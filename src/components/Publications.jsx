import SupabaseContentGrid from "./SupabaseContentGrid";
import { profileAssets } from "../content/profileAssets";

const publicationGroups = [
  {
    title: "Policy Briefs",
    text: "Short, actionable analysis for decision-makers and fiscal reform partners.",
  },
  {
    title: "Policy Reports",
    text: "Deeper research on revenue, expenditure, fiscal federalism, and public finance systems.",
  },
  {
    title: "Fiscal Outlook Notes",
    text: "Accessible updates on Somalia's fiscal performance and macro-fiscal trends.",
  },
  {
    title: "Applied Research Papers",
    text: "Evidence-driven work on taxation, debt sustainability, informal economy, and climate finance.",
  },
  {
    title: "Citizen Budget Explainers",
    text: "Plain-language materials that make public finance easier for citizens to understand.",
  },
  {
    title: "Young Economist Voices",
    text: "Emerging Somali economists contributing analysis, commentary, and policy ideas.",
  },
];

export default function Publications() {
  return (
    <section id="publications" className="pt-40 md:pt-48 bg-white">
      <div className="relative min-h-[420px] overflow-hidden">
        <img
          src={profileAssets.strategy}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#041f1d]/95 via-[#075a52]/80 to-black/20" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-white">
          <p className="text-xs uppercase tracking-[0.28em] text-yellow-300 mb-5">
            Evidence Library
          </p>
          <h1 className="text-5xl md:text-7xl font-black leading-none mb-6">
            Publications
          </h1>
          <p className="max-w-2xl text-green-50 text-lg leading-relaxed">
            Accessible, policy-relevant analysis for decision-makers,
            institutions, researchers, and citizens.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <SupabaseContentGrid
          contentTypes={[
            "publication",
            "policy_brief",
            "report",
            "research_paper",
            "fiscal_outlook",
            "citizen_explainer",
          ]}
          fallback={
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {publicationGroups.map((item, index) => (
                <PublicationCard key={item.title} item={item} index={index + 1} />
              ))}
            </div>
          }
        />
      </div>
    </section>
  );
}

function PublicationCard({ item, index }) {
  return (
    <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition border border-slate-100">
      <p className="text-xs font-black text-yellow-600 mb-6">
        {String(index).padStart(2, "0")}
      </p>
      <h4 className="text-2xl font-bold text-green-900 mb-4">{item.title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
      <button className="mt-6 text-green-700 font-bold hover:underline">
        View Publications
      </button>
    </div>
  );
}
