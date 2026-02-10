import aboutImage from "../assets/images/about-hero.jpg";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <img
          src={aboutImage}
          alt="About Fiscal Initiative"
          className="rounded-lg shadow"
        />

        {/* TEXT */}
        <div>
          <h2 className="text-3xl font-bold text-teal-700 mb-6">
            About Us
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            The Fiscal Initiative (TFI) is a non-partisan policy research and
            capacity-building institute dedicated to advancing prudent fiscal
            governance and strengthening citizen participation in Somalia’s
            economic decision-making.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Established in 2025, TFI bridges the gap between fiscal policy goals
            and lived realities through evidence-based analysis, capacity
            development, and inclusive dialogue.
          </p>
        </div>

      </div>
    </section>
  );
}
