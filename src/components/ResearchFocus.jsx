import PageBanner from "./PageBanner";
import SupabaseContentGrid from "./SupabaseContentGrid";
import { researchAreas, researchNote } from "../content/siteContent";
import { profileAssets } from "../content/profileAssets";
import { slugify } from "../lib/slugify";

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
              <p className="text-xs uppercase tracking-[0.28em] text-emerald-700 font-semibold mb-4">
                Our Research
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-950 leading-tight mb-6">
                Applied research for Somalia's fiscal governance priorities.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {researchNote}
              </p>
            </div>
            <img
              src={profileAssets.strategy}
              alt=""
              className="rounded-2xl shadow-xl aspect-[4/5] object-cover object-center"
            />
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-950 mb-5">
              Our areas of research:
            </h3>
            <ol className="grid gap-3 sm:grid-cols-2">
              {researchAreas.map((area, index) => (
                <li key={area.title}>
                  <a
                    href={`#${slugify(area.title)}`}
                    className="flex gap-3 text-emerald-900 font-semibold hover:text-emerald-700"
                  >
                    <span className="text-teal-600">{index + 1}.</span>
                    {area.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-8">
            {researchAreas.map((area, index) => (
              <article
                key={area.title}
                id={slugify(area.title)}
                className="bg-white p-8 md:p-10 rounded-2xl shadow-md border border-slate-100 scroll-mt-40"
              >
                <p className="text-xs font-black text-teal-600 mb-4">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-5">
                  {area.title}
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  {area.description}
                </p>
                {area.topics && (
                  <ul className="flex flex-wrap gap-2 mt-6">
                    {area.topics.map((topic) => (
                      <li
                        key={topic}
                        className="text-sm font-semibold text-emerald-800 bg-emerald-50 px-4 py-1.5 rounded-full"
                      >
                        {topic}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SupabaseContentGrid contentTypes={["research", "research_paper"]} />
        </div>
      </section>
    </div>
  );
}
