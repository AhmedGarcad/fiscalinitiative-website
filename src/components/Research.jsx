import financeImage from "../assets/images/research-finance.jpg";
import democracyImage from "../assets/images/research-democracy.jpg";
import economyImage from "../assets/images/research-economy.jpg";
import anticorruptionImage from "../assets/images/research-anticorruption.jpg";
import capacityImage from "../assets/images/research-capacity.jpg";
import inclusiveImage from "../assets/images/research-inclusive.jpg";

export default function Research() {
  const researchAreas = [
    {
      title: "Public Finance",
      description:
        "Promoting transparency, accountability, and efficient management of public resources to strengthen fiscal governance.",
      image: financeImage,
      reports: [
        { name: "World Bank Public Finance Report 2023", link: "#" },
        { name: "OECD Fiscal Governance Review", link: "#" },
      ],
    },
    {
      title: "Democracy & Governance",
      description:
        "Strengthening democratic institutions, accountability mechanisms, and citizen participation in decision-making.",
      image: democracyImage,
      reports: [
        { name: "UNDP Democracy Report 2022", link: "#" },
        { name: "Governance Journal - Vol. 10", link: "#" },
      ],
    },
    {
      title: "Economic Policy",
      description:
        "Supporting inclusive economic growth through evidence-based research on taxation, trade, and development.",
      image: economyImage,
      reports: [
        { name: "IMF Economic Outlook 2023", link: "#" },
        { name: "World Economic Journal - Vol. 45", link: "#" },
      ],
    },
    {
      title: "Anti-Corruption",
      description:
        "Advancing reforms to prevent corruption and improve integrity across public institutions.",
      image: anticorruptionImage,
      reports: [
        { name: "Transparency International Report 2022", link: "#" },
        { name: "Anti-Corruption Journal - Issue 12", link: "#" },
      ],
    },
    {
      title: "Institutional Capacity",
      description:
        "Enhancing the ability of government institutions to design and implement effective fiscal policies.",
      image: capacityImage,
      reports: [
        { name: "UN Capacity Building Report", link: "#" },
        { name: "Government Reform Journal - Vol. 7", link: "#" },
      ],
    },
    {
      title: "Inclusive Development",
      description:
        "Ensuring economic policies benefit all citizens, especially vulnerable and marginalized communities.",
      image: inclusiveImage,
      reports: [
        { name: "Inclusive Growth Report - World Bank", link: "#" },
        { name: "Social Policy Journal - Vol. 15", link: "#" },
      ],
    },
  ];

  return (
    <section id="research" className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-teal-700">
            Research
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-700 text-lg md:text-xl leading-relaxed">
            Fiscal Initiative conducts rigorous, policy-relevant research to
            support transparent governance, sustainable development, and
            evidence-based decision-making.
          </p>
        </div>

        {/* Research Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 flex flex-col h-full overflow-hidden"
            >
              {/* IMAGE */}
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-52 md:h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* TEXT */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-teal-800 mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed flex-grow mb-4">
                  {area.description}
                </p>

                {/* Sample Reports / Journals */}
                <div className="mb-4">
                  <h4 className="text-teal-700 font-semibold mb-2 text-sm md:text-base">
                    Sample Reports:
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-1">
                    {area.reports.map((report, idx) => (
                      <li key={idx}>
                        <a
                          href={report.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-600 hover:text-teal-800 hover:underline"
                        >
                          {report.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="mt-auto bg-teal-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-teal-800 transition">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
