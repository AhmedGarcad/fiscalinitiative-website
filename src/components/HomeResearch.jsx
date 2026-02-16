import { Link } from "react-router-dom";

export default function HomeResearch() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900">
            Research Focus
          </h2>
          <div className="w-16 h-[3px] bg-yellow-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          <Card title="Taxation & Revenue" />
          <Card title="Public Financial Management" />
          <Card title="Debt & Fiscal Stability" />
          <Card title="Fiscal Federalism" />
          <Card title="Budget & Expenditure Reform" />
          <Card title="Governance & Transparency" />

        </div>

        <div className="text-center mt-16">
          <Link
            to="/research"
            className="bg-[#0B2E25] text-white px-8 py-3 rounded-md hover:bg-[#134438] transition"
          >
            View All Research
          </Link>
        </div>

      </div>
    </section>
  );
}

function Card({ title }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition text-center">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
  );
}
