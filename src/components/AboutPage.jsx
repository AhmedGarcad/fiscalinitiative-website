import PageBanner from "./PageBanner";
import IconLinkGrid from "./IconLinkGrid";
import { aboutSections, organization } from "../content/siteContent";

export default function AboutPage() {
  return (
    <div>
      <PageBanner />

      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-xs uppercase tracking-[0.28em] text-emerald-700 font-semibold mb-4">
              About
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-950 leading-tight mb-6">
              {organization.name} (FI)
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              is an independent, non-partisan fiscal policy research institute
              dedicated to strengthening Somalia's fiscal governance through
              applied research, capacity building, and inclusive policy
              dialogue.
            </p>
          </div>

          <IconLinkGrid
            items={aboutSections}
            hrefFor={(section) => `/about/${section.id}`}
            itemWidth="w-full sm:w-72"
            showSummary
          />
        </div>
      </section>
    </div>
  );
}
