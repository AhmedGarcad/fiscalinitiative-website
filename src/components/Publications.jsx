import SupabaseContentGrid from "./SupabaseContentGrid";
import { publicationGroups } from "../content/siteContent";
import { profileAssets } from "../content/profileAssets";

const allContentTypes = publicationGroups.flatMap((group) =>
  group.types.map((type) => type.contentType)
);

export default function Publications() {
  return (
    <section id="publications" className="pt-40 md:pt-48 bg-white">
      <div className="relative min-h-[420px] overflow-hidden">
        <img
          src={profileAssets.strategy}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071427]/95 via-[#0B6FA6]/80 to-black/20" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-white">
          <p className="text-xs uppercase tracking-[0.28em] text-sky-300 mb-5">
            Evidence Library
          </p>
          <h1 className="text-5xl md:text-7xl font-black leading-none mb-6">
            Publications
          </h1>
          <p className="max-w-2xl text-blue-50 text-lg leading-relaxed">
            Accessible, policy-relevant analysis for decision-makers,
            institutions, researchers, and citizens.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <SupabaseContentGrid
          contentTypes={allContentTypes}
          fallback={
            <div className="space-y-20">
              {publicationGroups.map((group) => (
                <div key={group.id} id={group.id} className="scroll-mt-40">
                  <div className="max-w-3xl mb-10">
                    <p className="text-xs uppercase tracking-[0.28em] text-blue-700 font-semibold mb-4">
                      {group.title}
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {group.description}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {group.types.map((type, index) => (
                      <PublicationCard
                        key={type.title}
                        item={type}
                        index={index + 1}
                      />
                    ))}
                  </div>
                </div>
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
      <p className="text-xs font-black text-sky-600 mb-6">
        {String(index).padStart(2, "0")}
      </p>
      <h4 className="text-2xl font-bold text-blue-900 mb-4">{item.title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}
