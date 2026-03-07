import PageBanner from "./PageBanner";

export default function Forums() {

  return (

    <div>

      <PageBanner title="Policy Forums" />

      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-2xl font-semibold text-gray-800 mb-10">
          Fiscal Initiative Forums
        </h2>

        <div className="space-y-8">

          <div className="border-b pb-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Somalia Tax Policy Forum
            </h3>
            <p className="text-gray-600 mt-2">
              A national platform for discussing tax reforms and improving Somalia's tax policy framework.
            </p>
          </div>

          <div className="border-b pb-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Annual Budget Engagement Roundtable
            </h3>
            <p className="text-gray-600 mt-2">
              Dialogue between policymakers, experts, and stakeholders on national budget priorities.
            </p>
          </div>

          <div className="border-b pb-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Ministerial Fiscal Federalism Dialogue
            </h3>
            <p className="text-gray-600 mt-2">
              High-level discussions between federal and state governments on fiscal federalism.
            </p>
          </div>

          <div className="border-b pb-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Somalia Fiscal Outlook Conference
            </h3>
            <p className="text-gray-600 mt-2">
              An annual conference reviewing Somalia's fiscal performance and economic outlook.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Annual Anniversary and Fundraising Dinner
            </h3>
            <p className="text-gray-600 mt-2">
              A gathering of partners and stakeholders to celebrate achievements and support fiscal reforms.
            </p>
          </div>

        </div>

      </section>

    </div>

  );

}