import PageBanner from "./PageBanner";
import SupabaseContentGrid from "./SupabaseContentGrid";
import { programs } from "../content/siteContent";
import { profileAssets } from "../content/profileAssets";
import { slugify } from "../lib/slugify";

export default function CapacityDevelopment() {
  return (
    <div>
      <PageBanner
        title="Capacity Development"
        subtitle="Technical training, mentorship, and institutional support for stronger fiscal policy leadership."
        background={profileAssets.priorities}
      />

      <section id="capacity" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[380px_1fr] gap-10">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-emerald-700 font-semibold mb-4">
                Learning Platforms
              </p>
              <h2 className="text-4xl font-black text-gray-950 leading-tight mb-6">
                Building practical fiscal capability.
              </h2>
              <p className="text-gray-600 leading-relaxed">
                FI supports public institutions and emerging experts with tools
                for fiscal modelling, tax simulations, expenditure tracking, and
                debt sustainability analysis.
              </p>
            </div>

            <SupabaseContentGrid
              contentType="program"
              fallback={
                <div className="space-y-6">
                  {programs.map((program, index) => (
                    <div
                      key={program.title}
                      id={slugify(program.title)}
                      className="bg-gray-50 border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition scroll-mt-40"
                    >
                      <p className="text-xs font-black text-teal-600 mb-4">
                        Program {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="text-2xl font-bold text-emerald-900 mb-4">
                        {program.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {program.description}
                      </p>
                    </div>
                  ))}
                </div>
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
}
