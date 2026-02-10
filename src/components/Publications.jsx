export default function Publications() {
  return (
    <section id="publications" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-teal-700 mb-12">
          Publications
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <a href="#" className="block bg-slate-50 rounded shadow hover:shadow-lg">
            <img src="https://via.placeholder.com/400x250" />
            <div className="p-6">
              <h3 className="font-semibold">
                Strengthening Fiscal Transparency in Somalia
              </h3>
            </div>
          </a>

          <a href="#" className="block bg-slate-50 rounded shadow hover:shadow-lg">
            <img src="https://via.placeholder.com/400x250" />
            <div className="p-6">
              <h3 className="font-semibold">
                Domestic Revenue Mobilization Challenges
              </h3>
            </div>
          </a>

          <a href="#" className="block bg-slate-50 rounded shadow hover:shadow-lg">
            <img src="https://via.placeholder.com/400x250" />
            <div className="p-6">
              <h3 className="font-semibold">
                Inclusive Fiscal Policy for Sustainable Growth
              </h3>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
