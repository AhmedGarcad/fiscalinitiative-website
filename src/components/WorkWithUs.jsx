import { Link } from "react-router-dom";
import { workWithUs } from "../content/siteContent";

export default function WorkWithUs() {
  return (
    <section className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Work With Us</h1>

        <p className="text-gray-700 leading-relaxed mb-12 text-lg max-w-3xl">
          {workWithUs.intro}
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {workWithUs.tracks.map((track) => (
            <div
              key={track.title}
              className="bg-gray-50 border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition"
            >
              <h2 className="text-lg font-bold text-blue-900 mb-4">
                {track.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {track.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 p-8 rounded-xl">
          <h2 className="text-xl font-semibold text-blue-700 mb-3">
            Get in touch
          </h2>
          <p className="text-gray-700 mb-5">
            Send us your CV, consultancy proposal, or partnership idea and our
            team will follow up.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
