import { Link } from "react-router-dom";
import { researchAreas } from "../content/siteContent";
import { profileAssets } from "../content/profileAssets";

export default function HomeResearch() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[420px_1fr] gap-10 items-start">
          <div className="sticky top-44">
            <p className="text-xs uppercase tracking-[0.28em] text-blue-700 font-semibold mb-4">
              Research Focus
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-950 leading-tight mb-6">
              Research that turns fiscal complexity into public decisions.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              FI produces policy-relevant analysis on revenue, expenditure,
              subnational finance, climate finance, and the institutions that
              make fiscal reform work.
            </p>
            <img
              src={profileAssets.strategy}
              alt=""
              className="hidden lg:block rounded-2xl shadow-xl aspect-[4/3] object-cover object-center"
            />
          </div>

          <div>
            <div className="grid md:grid-cols-2 gap-5">
              {researchAreas.map((area, index) => (
                <Card key={area.title} title={area.title} index={index + 1} />
              ))}
            </div>

            <div className="mt-10">
              <Link
                to="/research"
                className="inline-block bg-[#0B2A4A] text-white px-8 py-4 rounded-md hover:bg-[#123A63] transition font-semibold"
              >
                View All Research
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ title, index }) {
  return (
    <div className="bg-white p-7 rounded-xl shadow-sm hover:shadow-xl transition border border-slate-100">
      <p className="text-xs font-bold text-sky-600 mb-5">
        {String(index).padStart(2, "0")}
      </p>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
    </div>
  );
}
