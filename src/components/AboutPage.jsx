import { useState } from "react";
import PageBanner from "./PageBanner";
import banner from "../assets/images/about-banner.jpg";

export default function AboutPage() {

  const [active, setActive] = useState("about");

  const sections = [

    {
      id: "about",
      title: "About FI",
      content: (
        <div className="space-y-6">

          <p className="text-gray-700 leading-relaxed text-lg">
            Fiscal Initiative (FI) is an independent, non-partisan policy
            research institute dedicated to strengthening fiscal governance,
            promoting transparency, and advancing evidence-based economic
            policymaking in Somalia.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            Established in October 2025, the institute works to bridge the
            gap between fiscal policy priorities and the lived realities of
            citizens by promoting rigorous research, institutional capacity
            development, and inclusive policy dialogue.
          </p>

        </div>
      )
    },

    {
      id: "mission",
      title: "Mission",
      content: (
        <p className="text-gray-700 leading-relaxed text-lg">
          To advance transparent fiscal governance and strengthen public
          financial management through high-quality policy research,
          institutional capacity building, and evidence-based dialogue
          that supports sustainable economic development in Somalia.
        </p>
      )
    },

    {
      id: "vision",
      title: "Vision",
      content: (
        <p className="text-gray-700 leading-relaxed text-lg">
          To become Somalia’s leading institution for fiscal policy research
          and governance innovation, serving as a trusted partner for
          government, citizens, and development partners in designing
          effective fiscal solutions.
        </p>
      )
    },

    {
      id: "objectives",
      title: "Objectives",
      content: (
        <ul className="list-disc pl-6 space-y-4 text-gray-700 text-lg">

          <li>
            Promote transparent and accountable fiscal governance.
          </li>

          <li>
            Strengthen institutional capacity in public financial management.
          </li>

          <li>
            Support evidence-based policymaking and fiscal reform initiatives.
          </li>

          <li>
            Foster national dialogue on taxation, budgeting, and fiscal policy.
          </li>

          <li>
            Encourage citizen engagement and public awareness on fiscal
            governance.
          </li>

        </ul>
      )
    },

    {
      id: "leadership",
      title: "Leadership",
      content: (
        <div className="flex justify-center">

          <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-md">

            <div className="w-28 h-28 bg-gray-200 rounded-full mx-auto mb-6"></div>

            <h3 className="text-xl font-semibold text-green-900">
              Dr. Awais
            </h3>

            <p className="text-green-700 font-medium mb-4">
              Chairperson
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              Provides strategic leadership and institutional guidance for
              Fiscal Initiative, supporting the advancement of fiscal
              governance reforms and evidence-based economic policy dialogue.
            </p>

          </div>

        </div>
      )
    },

    {
      id: "contact",
      title: "Contact",
      content: (
        <div className="space-y-6 text-lg">

          <p className="text-gray-700">
            For research collaboration, partnerships, or media inquiries,
            please contact Fiscal Initiative.
          </p>

          <div className="bg-gray-100 p-6 rounded-lg shadow">

            <p className="mb-2">
              <strong>Email:</strong> info@fiscalinitiative.org
            </p>

            <p className="mb-2">
              <strong>Location:</strong> Mogadishu, Somalia
            </p>

            <p>
              <strong>Phone:</strong> +252 XXX XXX XXX
            </p>

          </div>

        </div>
      )
    }

  ];

  return (

    <div>

      <PageBanner
        title="About Fiscal Initiative"
        subtitle="Advancing Fiscal Governance, Transparency, and Evidence-Based Economic Policy in Somalia."
        background={banner}
      />

      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          {/* Navigation Cards */}

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">

            {sections.map((section) => (

              <button
                key={section.id}
                onClick={() => setActive(section.id)}
                className={`p-5 rounded-xl shadow-md transition text-center font-medium

                ${active === section.id
                    ? "bg-green-900 text-white"
                    : "bg-white hover:shadow-xl hover:-translate-y-1"}
                `}
              >
                {section.title}
              </button>

            ))}

          </div>


          {/* Section Content */}

          <div className="bg-white p-12 rounded-xl shadow-xl max-w-6xl mx-auto">

            {sections.find((s) => s.id === active).content}

          </div>

        </div>

      </section>

    </div>

  );

}