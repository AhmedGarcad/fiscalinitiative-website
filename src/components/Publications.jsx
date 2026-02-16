export default function Publications() {
  return (
    <section id="publications" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-green-900 mb-4">
            Publications
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Fiscal Initiative produces high-quality research and analysis
            to inform public debate and strengthen fiscal governance in Somalia.
          </p>
        </div>

        {/* SHORT ESSAYS */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-green-800 mb-8 border-b pb-3">
            Short Essays
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <PublicationCard title="Expert Commentaries" />
            <PublicationCard title="Young Economist Voices" />
            <PublicationCard title="Budget Insights" />
          </div>
        </div>

        {/* LONG FORM */}
        <div>
          <h3 className="text-2xl font-semibold text-green-800 mb-8 border-b pb-3">
            Long Form Publications
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PublicationCard title="Policy Briefs" />
            <PublicationCard title="Policy Reports" />
            <PublicationCard title="Special Issues" />
            <PublicationCard title="Occasional Empirical Papers" />
            <PublicationCard title="Books and Monographs" />
          </div>
        </div>

      </div>
    </section>
  );
}

function PublicationCard({ title }) {
  return (
    <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-xl transition">
      <h4 className="text-xl font-semibold text-green-900 mb-3">
        {title}
      </h4>
      <p className="text-gray-600 text-sm">
        Explore research and analysis under this publication category.
      </p>
      <button className="mt-4 text-green-700 font-medium hover:underline">
        View Publications →
      </button>
    </div>
  );
}
