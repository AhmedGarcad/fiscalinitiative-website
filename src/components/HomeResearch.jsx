import { Link } from "react-router-dom";
import IconLinkGrid from "./IconLinkGrid";
import { researchAreas } from "../content/siteContent";
import { slugify } from "../lib/slugify";

export default function HomeResearch() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-gray-950 text-center mb-12">
          Our Research
        </h2>

        <IconLinkGrid
          items={researchAreas}
          hrefFor={(area) => `/research/${slugify(area.title)}`}
        />

        <div className="mt-12 text-center">
          <Link
            to="/research"
            className="inline-block bg-[#00564F] text-white px-8 py-4 rounded-md hover:bg-[#006B63] transition font-semibold"
          >
            View All Research
          </Link>
        </div>
      </div>
    </section>
  );
}
