import { useState } from "react";
import { useLocation } from "react-router-dom";
import SupabaseContentGrid from "./SupabaseContentGrid";
import { profileAssets } from "../content/profileAssets";

const fallbackPhotos = [
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

const tabs = [
  { id: "videos", label: "Videos", contentType: "video" },
  { id: "photos", label: "Photos", contentType: "photo" },
];

export default function Media() {
  const { hash } = useLocation();
  const initialTab = hash === "#photos" ? "photos" : "videos";
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <section id="media" className="pt-40 md:pt-48 bg-gray-50">
      <div className="relative min-h-[420px] overflow-hidden">
        <img
          src={profileAssets.priorities}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/95 via-[#0B6FA6]/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-white">
          <p className="text-xs uppercase tracking-[0.28em] text-sky-300 mb-5">
            Media Archive
          </p>
          <h1 className="text-5xl md:text-7xl font-black leading-none mb-6">
            Media
          </h1>
          <p className="max-w-2xl text-blue-50 text-lg leading-relaxed">
            Explore Fiscal Initiative's public engagements, conferences,
            workshops, and policy dialogues through video and photo stories.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition ${
                activeTab === tab.id
                  ? "bg-[#0B2A4A] text-white"
                  : "bg-white text-gray-700 border border-slate-200 hover:border-blue-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "videos" && (
          <SupabaseContentGrid
            contentType="video"
            fallback={
              <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  No videos published yet
                </h3>
                <p className="text-gray-600 max-w-xl mx-auto">
                  Video coverage of FI's forums, workshops, and policy
                  dialogues will appear here as it is published.
                </p>
              </div>
            }
          />
        )}

        {activeTab === "photos" && (
          <SupabaseContentGrid
            contentType="photo"
            fallback={
              <div className="grid md:grid-cols-3 gap-8">
                {fallbackPhotos.map((item) => (
                  <PhotoCard key={item.title} item={item} />
                ))}
              </div>
            }
          />
        )}
      </div>
    </section>
  );
}

function PhotoCard({ item }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden">
      <img src={item.image} alt="" className="h-64 w-full object-cover object-top" />
      <div className="p-7">
        <h4 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
      </div>
    </div>
  );
}
