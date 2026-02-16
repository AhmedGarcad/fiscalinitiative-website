export default function Media() {
  return (
    <section id="media" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-green-900 mb-4">
            Media
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Explore Fiscal Initiative’s public engagements, conferences,
            workshops, and policy dialogues through our video and photo archives.
          </p>
        </div>

        {/* VIDEOS SECTION */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-green-800 mb-8 border-b pb-3">
            Videos
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <MediaCard title="Conference Highlights" />
            <MediaCard title="Policy Dialogue Sessions" />
            <MediaCard title="Workshop Presentations" />
          </div>
        </div>

        {/* PHOTOS SECTION */}
        <div>
          <h3 className="text-2xl font-semibold text-green-800 mb-8 border-b pb-3">
            Photos
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {[1,2,3,4,5,6,7,8].map((item) => (
              <div
                key={item}
                className="h-40 bg-white shadow rounded-lg flex items-center justify-center text-gray-400 text-sm"
              >
                Image Placeholder
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function MediaCard({ title }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
      <h4 className="text-xl font-semibold text-green-900 mb-3">
        {title}
      </h4>
      <p className="text-gray-600 text-sm">
        Watch recordings and highlights from Fiscal Initiative events.
      </p>
      <button className="mt-4 text-green-700 font-medium hover:underline">
        Watch →
      </button>
    </div>
  );
}
