import PageBanner from "./PageBanner";
import SupabaseContentGrid from "./SupabaseContentGrid";
import IconBadge from "./IconBadge";
import { researchAreas, researchNote, researchTopicIcons } from "../content/siteContent";
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

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm px-6 py-12 mb-12">
            <h3 className="icon-label text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
              Our Areas of Research
            </h3>
            <ol className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10">
              {researchAreas.map((area) => (
                <li key={area.title}>
                  <a
                    href={`#${slugify(area.title)}`}
                    className="group flex flex-col items-center text-center"
                  >
                    <span className="transition duration-300 group-hover:-translate-y-1.5 group-hover:drop-shadow-lg">
                      <IconBadge icon={area.icon} size={100} />
                    </span>
                    <span className="icon-label mt-5 text-lg font-bold leading-snug text-gray-800 group-hover:text-emerald-700 transition">
                      {area.title}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-8">
            {researchAreas.map((area) => (
              <article
                key={area.title}
                id={slugify(area.title)}
                className="bg-white p-8 md:p-12 rounded-2xl shadow-md border border-slate-100 scroll-mt-40"
              >
                <div className="flex items-center gap-5 mb-6">
                  <div className="shrink-0">
                    <IconBadge icon={area.icon} size={64} />
                  </div>
                  <h3 className="icon-label text-2xl md:text-3xl font-bold text-emerald-900">
                    {area.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  {area.description}
                </p>
                {area.topics && (
                  <div className="mt-10 pt-10 border-t border-slate-100">
                    <h4 className="icon-label text-xl font-bold text-gray-800 text-center mb-8">
                      Research Topics
                    </h4>
                    <ul className="flex flex-wrap justify-center gap-x-6 gap-y-8">
                      {area.topics.map((topic) => (
                        <li
                          key={topic}
                          className="group w-36 flex flex-col items-center text-center"
                        >
                          <span className="transition duration-300 group-hover:-translate-y-1">
                            <IconBadge icon={researchTopicIcons[topic]} size={84} />
                          </span>
                          <span className="icon-label mt-4 text-base font-bold leading-snug text-gray-800">
                            {topic}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
