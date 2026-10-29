import { Link } from "react-router-dom";
import PageBanner from "./PageBanner";
import SupabaseContentGrid from "./SupabaseContentGrid";
import IconBadge from "./IconBadge";
import { researchAreas, researchNote } from "../content/siteContent";
import { profileAssets } from "../content/profileAssets";
import { slugify } from "../lib/slugify";

export default function ResearchFocus() {
  return (
    <div>
      <PageBanner
        title="Our Research"
        subtitle="Rigorous fiscal analysis designed to strengthen decisions, institutions, and public accountability."
        background={profileAssets.guiding}
      />

      <section id="research" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
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

          <ol className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-12">
            {researchAreas.map((area) => (
              <li key={area.title}>
                <Link
                  to={`/research/${slugify(area.title)}`}
                  className="group flex flex-col items-center text-center"
                >
                  <span className="rounded-full transition duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl">
                    <IconBadge icon={area.icon} size={100} />
                  </span>
                  <span className="icon-label mt-5 text-lg font-bold leading-snug text-gray-800 group-hover:text-emerald-700 transition">
                    {area.title}
                  </span>
                  <span className="mt-2 text-sm font-semibold text-emerald-700 opacity-0 group-hover:opacity-100 transition">
                    Read more →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
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
