import PageBanner from "./PageBanner";
import IconLinkGrid from "./IconLinkGrid";
import { eventGroups } from "../content/siteContent";
import { profileAssets } from "../content/profileAssets";
import { slugify } from "../lib/slugify";

export default function EventsPage() {
  return (
    <div>
      <PageBanner
        title="Events"
        subtitle="Forums, capacity development programs, and special projects that bring Somalia's fiscal stakeholders together."
        background={profileAssets.approach}
      />

      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          {eventGroups.map((group) => (
            <div key={group.title}>
              <div className="text-center mb-12">
                <p className="text-xs uppercase tracking-[0.28em] text-emerald-700 font-semibold mb-3">
                  Events
                </p>
                <h2 className="text-3xl md:text-4xl font-black text-gray-950">
                  {group.title}
                </h2>
              </div>
              <IconLinkGrid
                items={group.items}
                hrefFor={(item) => `/events/${slugify(item.title)}`}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
