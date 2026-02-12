import aboutImage from "../assets/images/about-hero.jpg";

export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">

        {/* IMAGE - large horizontal */}
        <div className="md:w-3/5 flex justify-center md:justify-start">
          <img
            src={aboutImage}
            alt="About Fiscal Initiative"
            className="w-full h-auto rounded-xl shadow-2xl"
          />
        </div>

        {/* TEXT - matching image size */}
        <div className="md:w-2/5 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-teal-700 mb-6 leading-tight">
            About Us
          </h2>

          <p className="text-gray-700 mb-6 text-lg md:text-xl leading-relaxed">
            The Fiscal Initiative (TFI) is a non-partisan policy research and
            capacity-building institute dedicated to advancing prudent fiscal
            governance and strengthening citizen participation in Somalia’s
            economic decision-making.
          </p>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Established in 2025, TFI bridges the gap between fiscal policy goals
            and lived realities through evidence-based analysis, capacity
            development, and inclusive dialogue. We strive for transparency,
            impact, and citizen-centered fiscal policies.
          </p>
        </div>

      </div>
    </section>
  );
}
