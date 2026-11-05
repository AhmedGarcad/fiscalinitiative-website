import SupabaseContentGrid from "./SupabaseContentGrid";
import { publicationGroups } from "../content/siteContent";
import PageBanner from "./PageBanner";

const allContentTypes = publicationGroups.flatMap((group) =>
  group.types.map((type) => type.contentType)
);

export default function Publications() {
  return (
    <section id="publications" className="bg-gray-50">
      <PageBanner
        title="Publications"
        subtitle="Accessible, policy-relevant analysis for decision-makers, institutions, researchers, and citizens."
      />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <SupabaseContentGrid
          contentTypes={allContentTypes}
          fallback={
            <div className="space-y-20">
              {publicationGroups.map((group) => (
                <div key={group.id} id={group.id} className="scroll-mt-40">
                  <div className="max-w-3xl mb-10">
                    <p className="text-xs uppercase tracking-[0.28em] text-emerald-700 font-semibold mb-4">
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
      <p className="text-xs font-black text-teal-600 mb-6">
        {String(index).padStart(2, "0")}
      </p>
      <h4 className="text-2xl font-bold text-emerald-900 mb-4">{item.title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}
