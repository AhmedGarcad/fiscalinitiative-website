export default function CapacityDevelopment() {
  const programs = [
    {
      title: "Macroeconomics Analysis and Forecasting Workshop",
      description:
        "Technical training program designed to strengthen institutional capacity in macroeconomic modelling, fiscal forecasting, and policy analysis for government officials and economic practitioners.",
    },
    {
      title: "Young Economist Program",
      description:
        "A structured mentorship and research initiative supporting emerging Somali economists through applied research experience, policy writing, and academic engagement.",
    },
    {
      title: "Taxpayers Education Program",
      description:
        "Public awareness and engagement initiative aimed at improving tax literacy, fiscal transparency, and citizen participation in revenue governance.",
    },
  ];

  return (
    <section id="capacity" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-900 mb-4">
            Capacity Development
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Fiscal Initiative delivers high-level training and institutional
            development programs to strengthen Somalia’s fiscal governance
            architecture and policy leadership.
          </p>
        </div>

        {/* PROGRAM BLOCKS */}
        <div className="space-y-12">
          {programs.map((program, index) => (
            <div
              key={index}
              className="border-l-4 border-green-700 pl-8"
            >
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                {program.title}
              </h3>

              <p className="text-gray-600 leading-relaxed max-w-4xl">
                {program.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
