import PageBanner from "./PageBanner";
import SupabaseContentGrid from "./SupabaseContentGrid";
import { researchAreas } from "../content/siteContent";
import { profileAssets } from "../content/profileAssets";

export default function ResearchFocus() {
  return (
    <div>
      <PageBanner
        title="Research Focus"
        subtitle="Rigorous fiscal analysis designed to strengthen decisions, institutions, and public accountability."
        background={profileAssets.guiding}
      />

      <section id="research" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-start mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-green-700 font-semibold mb-4">
                Research Agenda
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-950 leading-tight mb-6">
                Applied research for Somalia's fiscal governance priorities.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                FI produces high-quality, policy-relevant research on domestic
                revenue mobilization, expenditure efficiency, subnational
                financing, informal economy taxation, climate finance, and
                public accountability.
              </p>
            </div>
            <img
              src={profileAssets.strategy}
              alt=""
              className="rounded-2xl shadow-xl aspect-[4/5] object-cover object-center"
            />
          </div>

          <SupabaseContentGrid
            contentTypes={["research", "research_paper"]}
            fallback={
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {researchAreas.map((area, index) => (
                  <div
                    key={area}
                    className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-slate-100"
                  >
                    <p className="text-xs font-black text-yellow-600 mb-6">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-xl font-bold text-green-900 mb-4">
                      {area}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Applied analysis, institutional reform advice, and
                      accessible evidence designed to support better decisions.
                    </p>
                  </div>
                ))}
              </div>
            }
          />
        </div>
      </section>
    </div>
  );
}
