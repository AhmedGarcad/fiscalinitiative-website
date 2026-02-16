export default function TeamPage() {
  const boardMembers = [
    {
      name: "Dr. Ahmed Hassan",
      role: "Chairperson",
      bio: "Former Minister of Finance with over 20 years of experience in fiscal governance and public sector reform."
    },
    {
      name: "Prof. Amina Yusuf",
      role: "Board Member",
      bio: "Professor of Public Finance and advisor on fiscal federalism and revenue systems."
    },
    {
      name: "Mr. Abdirahman Ali",
      role: "Board Member",
      bio: "Expert in debt management and public financial accountability systems."
    }
  ];

  const managementTeam = [
    {
      name: "Mohamed Farah",
      role: "Executive Director",
      bio: "Leads FI’s strategic direction, partnerships, and research agenda."
    },
    {
      name: "Hodan Abdi",
      role: "Director of Research",
      bio: "Oversees research programs on taxation, public finance, and governance."
    }
  ];

  return (
    <section className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            FI Team
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our leadership brings together expertise in fiscal governance,
            macroeconomic policy, and institutional reform.
          </p>
        </div>

        {/* Board Section */}
        <h2 className="text-2xl font-semibold text-green-700 mb-8">
          Board Members
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {boardMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
              <p className="text-green-600 text-sm mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* Management Section */}
        <h2 className="text-2xl font-semibold text-green-700 mb-8">
          Management Team
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {managementTeam.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
              <p className="text-green-600 text-sm mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
