export default function FundingPage() {
  return (
    <section className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-green-800 mb-6">
          Our Funding
        </h1>

        <p className="text-gray-700 leading-relaxed mb-6">
          Fiscal Initiative is committed to transparency and independence.
          Our funding comes from a diversified portfolio of grants, research
          partnerships, and institutional collaborations.
        </p>

        <div className="bg-gray-50 p-8 rounded-xl shadow mb-8">
          <h2 className="text-xl font-semibold text-green-700 mb-4">
            Funding Principles
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li>• Independence in research and analysis</li>
            <li>• Transparency in financial reporting</li>
            <li>• No political party affiliation</li>
            <li>• Public disclosure of institutional partnerships</li>
          </ul>
        </div>

        <div className="bg-green-50 p-8 rounded-xl">
          <h2 className="text-xl font-semibold text-green-700 mb-4">
            Institutional Support
          </h2>
          <p className="text-gray-700">
            We collaborate with academic institutions, development agencies,
            and policy networks to advance evidence-based fiscal governance.
          </p>
        </div>

      </div>
    </section>
  );
}
