// Import logos (existing images or placeholder)
import worldBankLogo from "../assets/images/world-bank.png";
import imfLogo from "../assets/images/imf.png";
import afdbLogo from "../assets/images/afdb.png";
import africaDevBankLogo from "../assets/images/africa-development-bank.png";
import placeholderLogo from "../assets/images/logo.jpeg"; // placeholder

export default function Partnerships() {
  const partners = [
    {
      name: "World Bank",
      logo: worldBankLogo,
      description:
        "Provides financial and technical assistance to support development projects and fiscal reforms in Somalia.",
      link: "#", // sample link
    },
    {
      name: "International Monetary Fund (IMF)",
      logo: imfLogo,
      description:
        "Offers policy advice, financial support, and capacity building for macroeconomic stability and fiscal governance.",
      link: "#",
    },
    {
      name: "African Development Bank (AfDB)",
      logo: afdbLogo,
      description:
        "Supports economic development and social progress through financing and advisory services in Africa.",
      link: "#",
    },
    {
      name: "African Union Development Bank",
      logo: africaDevBankLogo,
      description:
        "Strengthens regional integration and supports member countries with technical and financial expertise.",
      link: "#",
    },
    {
      name: "Universities",
      logo: placeholderLogo,
      description:
        "Collaborate on research, knowledge-sharing, and capacity building for policy and fiscal governance.",
      link: "#",
    },
    {
      name: "Research Institutes",
      logo: placeholderLogo,
      description:
        "Provide evidence-based analysis and support for data-driven decision-making in fiscal policies.",
      link: "#",
    },
    {
      name: "Bilateral Donors",
      logo: placeholderLogo,
      description:
        "Partner with Somali-led initiatives to provide funding, expertise, and global best practices.",
      link: "#",
    },
  ];

  return (
    <section
      id="partnerships"
      className="py-24"
      style={{
        background: "linear-gradient(to bottom, #ffffff, #d0f0fd)", // white + light teal gradient
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800">
          Our Partners
        </h2>
        <p className="max-w-4xl mx-auto text-gray-600 text-base md:text-lg mb-16 leading-relaxed">
          Fiscal Initiative collaborates with government institutions, universities, research institutes, and international partners to deliver impactful fiscal reforms and evidence-based solutions. Click on a partner to learn more.
        </p>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.link}
              className="bg-white p-6 rounded-2xl flex flex-col items-center shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-20 md:w-24 h-auto object-contain mb-4"
              />
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                {partner.name}
              </h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                {partner.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
