import { useState } from "react";
import { useLocation } from "react-router-dom";
import SupabaseContentGrid from "./SupabaseContentGrid";
import PageBanner from "./PageBanner";

const tabs = [
  { id: "videos", label: "Videos", contentType: "video" },
  { id: "photos", label: "Photos", contentType: "photo" },
];

export default function Media() {
  const { hash } = useLocation();
  const initialTab = hash === "#photos" ? "photos" : "videos";
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <section id="media" className="bg-gray-50">
      <PageBanner
        title="Media"
        subtitle="Explore Fiscal Initiative's public engagements, conferences, workshops, and policy dialogues through video and photo stories."
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition ${
                activeTab === tab.id
                  ? "bg-[#00564F] text-white"
                  : "bg-white text-gray-700 border border-slate-200 hover:border-emerald-300"
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
                <h3 className="text-xl font-bold text-emerald-900 mb-3">
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
              <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center">
                <h3 className="text-xl font-bold text-emerald-900 mb-3">
                  No photos published yet
                </h3>
                <p className="text-gray-600 max-w-xl mx-auto">
                  Photos of FI's forums, workshops, and policy dialogues will
                  appear here as they are published.
                </p>
              </div>
            }
          />
        )}
      </div>
    </section>
  );
}
