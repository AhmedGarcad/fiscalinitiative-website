import PageBanner from "./PageBanner";
import SupabaseContentGrid from "./SupabaseContentGrid";
import { forums } from "../content/siteContent";
import { profileAssets } from "../content/profileAssets";
import { slugify } from "../lib/slugify";

export default function Forums() {
  return (
    <div>
      <PageBanner
        title="Forums"
        subtitle="National convenings that bring policymakers, institutions, and citizens together around Somalia's fiscal priorities."
        background={profileAssets.approach}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.28em] text-blue-700 font-semibold mb-4">
            Fiscal Initiative Forums
          </p>
          <h2 className="text-4xl font-black text-gray-950 leading-tight mb-12 max-w-3xl">
            Platforms for structured fiscal policy dialogue.
          </h2>

          <SupabaseContentGrid
            contentType="forum"
            fallback={
              <div className="grid gap-6 md:grid-cols-2">
                {forums.map((forum, index) => (
                  <div
                    key={forum.title}
                    id={slugify(forum.title)}
                    className="bg-gray-50 border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition scroll-mt-40"
                  >
                    <p className="text-xs font-black text-sky-600 mb-4">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">
                      {forum.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {forum.description}
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
