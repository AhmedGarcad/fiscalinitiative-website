import PageBanner from "./PageBanner";
import SupabaseContentGrid from "./SupabaseContentGrid";
import { forums } from "../content/siteContent";

export default function Forums() {
  return (
    <div>
      <PageBanner title="Policy Forums" />

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-10">
          Fiscal Initiative Forums
        </h2>

        <SupabaseContentGrid
          contentType="forum"
          fallback={
            <div className="space-y-8">
              {forums.map((forum, index) => (
                <div
                  key={forum.title}
                  className={index === forums.length - 1 ? "" : "border-b pb-6"}
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {forum.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{forum.description}</p>
                </div>
              ))}
            </div>
          }
        />
      </section>
    </div>
  );
}
