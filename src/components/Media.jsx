import SupabaseContentGrid from "./SupabaseContentGrid";
import { profileAssets } from "../content/profileAssets";

const fallbackMedia = [
  {
    title: "Conference Highlights",
    image: profileAssets.mission,
    text: "Public engagements and convenings around Somalia's fiscal policy priorities.",
  },
  {
    title: "Policy Dialogue Sessions",
    image: profileAssets.approach,
    text: "Roundtables connecting government, parliament, civil society, academia, and partners.",
  },
  {
    title: "Workshop Presentations",
    image: profileAssets.guiding,
    text: "Capacity-building sessions on fiscal modelling, tax policy, and public finance reform.",
  },
];

export default function Media() {
  return (
    <section id="media" className="pt-40 md:pt-48 bg-gray-50">
      <div className="relative min-h-[420px] overflow-hidden">
        <img
          src={profileAssets.priorities}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#052f2a]/95 via-[#075a52]/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-white">
          <p className="text-xs uppercase tracking-[0.28em] text-yellow-300 mb-5">
            Media Archive
          </p>
          <h1 className="text-5xl md:text-7xl font-black leading-none mb-6">
            Media
          </h1>
          <p className="max-w-2xl text-green-50 text-lg leading-relaxed">
            Explore Fiscal Initiative's public engagements, conferences,
            workshops, and policy dialogues through video and photo stories.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <SupabaseContentGrid
          contentType="media"
          fallback={
            <div className="grid md:grid-cols-3 gap-8">
              {fallbackMedia.map((item) => (
                <MediaCard key={item.title} item={item} />
              ))}
            </div>
          }
        />
      </div>
    </section>
  );
}

function MediaCard({ item }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden">
      <img src={item.image} alt="" className="h-64 w-full object-cover object-top" />
      <div className="p-7">
        <h4 className="text-xl font-bold text-green-900 mb-3">{item.title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
        <button className="mt-5 text-green-700 font-bold hover:underline">
          Watch
        </button>
      </div>
    </div>
  );
}
