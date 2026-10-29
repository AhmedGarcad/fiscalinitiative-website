import { Link, Navigate, useParams } from "react-router-dom";
import PageBanner from "./PageBanner";
import IconBadge from "./IconBadge";
import { researchAreas, researchTopicIcons } from "../content/siteContent";
import { profileAssets } from "../content/profileAssets";
import { slugify } from "../lib/slugify";

export default function ResearchAreaPage() {
  const { slug } = useParams();
  const index = researchAreas.findIndex((area) => slugify(area.title) === slug);

  if (index === -1) return <Navigate to="/research" replace />;

  const area = researchAreas[index];
  const previous = researchAreas[index - 1];
  const next = researchAreas[index + 1];

  return (
    <div>
      <PageBanner
        title={area.title}
        subtitle={`Research area ${index + 1} of ${researchAreas.length}`}
        background={profileAssets.guiding}
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            to="/research"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-900 mb-8"
          >
            ← All research areas
          </Link>

          <article className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden">
            <div className="px-8 md:px-12 pt-10 md:pt-12 flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="shrink-0">
                <IconBadge icon={area.icon} size={88} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-emerald-700 font-semibold mb-2">
                  {String(index + 1).padStart(2, "0")} / {String(researchAreas.length).padStart(2, "0")}
                </p>
                <h2 className="text-3xl md:text-4xl font-black text-gray-950 leading-tight">
                  {area.title}
                </h2>
              </div>
            </div>

            <div className="px-8 md:px-12 py-10">
              <p className="text-gray-700 text-lg leading-relaxed">
                {area.description}
              </p>

              {area.topics && (
                <div className="mt-12 pt-10 border-t border-slate-100">
                  <h3 className="icon-label text-xl font-bold text-gray-800 text-center mb-8">
                    Research Topics
                  </h3>
                  <ul className="flex flex-wrap justify-center gap-x-6 gap-y-8">
                    {area.topics.map((topic) => (
                      <li key={topic} className="w-36 flex flex-col items-center text-center">
                        <IconBadge icon={researchTopicIcons[topic]} size={84} />
                        <span className="icon-label mt-4 text-base font-bold leading-snug text-gray-800">
                          {topic}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </article>

          <nav className="grid sm:grid-cols-2 gap-4 mt-8" aria-label="Research areas">
            {previous ? (
              <AreaLink area={previous} direction="Previous" />
            ) : (
              <span />
            )}
            {next && <AreaLink area={next} direction="Next" alignRight />}
          </nav>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {researchAreas.map((item, itemIndex) => (
              <Link
                key={item.title}
                to={`/research/${slugify(item.title)}`}
                title={item.title}
                aria-label={item.title}
                aria-current={itemIndex === index ? "page" : undefined}
                className={`rounded-full transition hover:-translate-y-1 ${
                  itemIndex === index ? "ring-4 ring-emerald-200 ring-offset-2" : "opacity-60 hover:opacity-100"
                }`}
              >
                <IconBadge icon={item.icon} size={48} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function AreaLink({ area, direction, alignRight = false }) {
  return (
    <Link
      to={`/research/${slugify(area.title)}`}
      className={`group bg-white rounded-xl border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition p-5 flex items-center gap-4 ${
        alignRight ? "sm:flex-row-reverse sm:text-right" : ""
      }`}
    >
      <IconBadge icon={area.icon} size={52} />
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">
          {direction === "Previous" ? "← Previous" : "Next →"}
        </p>
        <p className="icon-label mt-1 font-bold text-gray-900 group-hover:text-emerald-700">
          {area.title}
        </p>
      </div>
    </Link>
  );
}
