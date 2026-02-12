// Import all your images
import fiscalTransparency from "../assets/images/fiscal-transparency.jpg";
import revenueChallenges from "../assets/images/revenue-challenges.jpg";
import inclusivePolicy from "../assets/images/inclusive-policy.jpg";
import antiCorruption from "../assets/images/anti-corruption.jpg";
import capacityBuilding from "../assets/images/capacity-building.jpg";
import citizenPolicy from "../assets/images/citizen-policy.jpg";
import sustainableDevelopment from "../assets/images/sustainable-development.jpg";
import fiscalGovernance from "../assets/images/fiscal-governance.jpg";
import financeResearch from "../assets/images/finance-research.jpg";

export default function Publications() {
  const publications = [
    { title: "Strengthening Fiscal Transparency in Somalia", image: fiscalTransparency, author: "Fiscal Initiative, 2025", link: "#" },
    { title: "Domestic Revenue Mobilization Challenges", image: revenueChallenges, author: "World Bank, 2024", link: "#" },
    { title: "Inclusive Fiscal Policy for Sustainable Growth", image: inclusivePolicy, author: "IMF, 2023", link: "#" },
    { title: "Advancing Anti-Corruption Strategies", image: antiCorruption, author: "Transparency International, 2022", link: "#" },
    { title: "Enhancing Institutional Capacity", image: capacityBuilding, author: "UNDP, 2024", link: "#" },
    { title: "Citizen-Centered Economic Policies", image: citizenPolicy, author: "OECD, 2023", link: "#" },
    { title: "Sustainable Development & Fiscal Reform", image: sustainableDevelopment, author: "World Bank, 2023", link: "#" },
    { title: "Fiscal Governance Best Practices", image: fiscalGovernance, author: "Fiscal Initiative, 2025", link: "#" },
    { title: "Public Finance Research & Insights", image: financeResearch, author: "IMF, 2024", link: "#" },
  ];

  return (
    <section id="publications" className="bg-gray-50 py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-teal-700 text-center mb-16">
          Publications
        </h2>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {publications.map((pub, index) => (
            <a
              key={index}
              href={pub.link}
              className="block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 overflow-hidden flex flex-col h-full"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={pub.image}
                  alt={pub.title}
                  className="w-full h-56 md:h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                  {pub.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base mb-4">
                  {pub.author}
                </p>
                <p className="text-gray-700 text-sm md:text-base flex-grow">
                  This publication highlights research and insights by the Fiscal Initiative on fiscal governance, transparency, and policy development.
                </p>

                {/* Learn More Button */}
                <button className="mt-4 bg-teal-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-teal-800 transition">
                  View Publication →
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
