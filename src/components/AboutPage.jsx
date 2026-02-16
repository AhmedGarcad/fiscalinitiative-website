import { useState } from "react";

export default function About() {
  const [active, setActive] = useState(null);

  const sections = [
    {
      id: "team",
      title: "FI Team",
      content: (
        <div className="space-y-16">

          <TeamCategory
            title="Board Members"
            members={[
              {
                name: "Dr. Mohamed Hassan",
                role: "Chairperson",
                bio: "Senior fiscal policy expert with over 20 years of experience in public financial management and economic reform across Africa.",
              },
              {
                name: "Amina Ali",
                role: "Board Member",
                bio: "Governance specialist with strong expertise in institutional development and fiscal accountability frameworks.",
              },
            ]}
          />

          <TeamCategory
            title="Management Team"
            members={[
              {
                name: "Ahmed Abdi Mohamed",
                role: "Executive Director",
                bio: "Leads Fiscal Initiative’s research programs, partnerships, and institutional development strategy.",
              },
              {
                name: "Fatima Noor",
                role: "Research Director",
                bio: "Oversees research programs in taxation, fiscal federalism, and public finance reform.",
              },
            ]}
          />

          <TeamCategory
            title="Honorary Advisors"
            members={[
              {
                name: "Prof. Abdirahman Yusuf",
                role: "Senior Advisor",
                bio: "International macroeconomist advising on fiscal reform, public finance modernization, and economic stabilization policies.",
              },
            ]}
          />

        </div>
      ),
    },
    {
      id: "work",
      title: "Work With Us",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed text-lg">
            Fiscal Initiative offers professional opportunities for economists,
            policy analysts, and researchers committed to strengthening fiscal
            governance and institutional reform in Somalia.
          </p>

          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li>Research Fellowships</li>
            <li>Policy Analyst Positions</li>
            <li>Graduate Internship Programs</li>
            <li>Consultancy Opportunities</li>
          </ul>

          <button className="mt-6 bg-green-900 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition">
            View Open Positions
          </button>
        </div>
      ),
    },
    {
      id: "funding",
      title: "Our Funding",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed text-lg">
            Fiscal Initiative maintains independence and integrity through
            diversified funding mechanisms that support research excellence.
          </p>

          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li>Institutional Grants</li>
            <li>Development Partner Support</li>
            <li>Project-Based Research Funding</li>
            <li>Strategic Partnerships</li>
          </ul>
        </div>
      ),
    },
    {
      id: "contact",
      title: "Contact Us",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed text-lg">
            For research collaboration, partnerships, or media inquiries,
            please contact Fiscal Initiative.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <p>Email: info@fiscalinitiative.org</p>
            <p>Office Location: Mogadishu, Somalia</p>
            <p>Phone: +252 XXX XXX XXX</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      {/* PROFESSIONAL PAGE BANNER */}
      <div className="bg-green-900 text-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            About Fiscal Initiative
          </h1>
          <p className="max-w-3xl mx-auto text-green-200 text-lg">
            A non-partisan research institute dedicated to fiscal governance,
            transparency, and economic reform in Somalia.
          </p>
        </div>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* CLICKABLE CARDS */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {sections.map((section) => (
              <div
                key={section.id}
                onClick={() =>
                  setActive(active === section.id ? null : section.id)
                }
                className={`cursor-pointer p-8 rounded-xl shadow-md text-center transition duration-300 
                ${
                  active === section.id
                    ? "bg-green-900 text-white scale-105"
                    : "bg-white hover:shadow-xl hover:-translate-y-1"
                }`}
              >
                <h3 className="text-xl font-semibold">
                  {section.title}
                </h3>
              </div>
            ))}
          </div>

          {/* EXPANDED CONTENT */}
          {active && (
            <div className="bg-white p-12 rounded-xl shadow-xl max-w-6xl mx-auto animate-fadeIn">
              {sections.find((s) => s.id === active).content}
            </div>
          )}

        </div>
      </section>
    </>
  );
}

/* TEAM CATEGORY COMPONENT */
function TeamCategory({ title, members }) {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-green-900 mb-10 border-b pb-3">
        {title}
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition duration-300"
          >
            <div className="w-24 h-24 bg-gray-200 rounded-full mb-6"></div>

            <h4 className="text-lg font-semibold text-green-900">
              {member.name}
            </h4>

            <p className="text-sm text-green-700 font-medium mb-4">
              {member.role}
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
