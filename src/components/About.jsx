export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-24 bg-white"
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          md:px-6
          grid
          grid-cols-1
          md:grid-cols-2
          gap-10
          md:gap-12
          items-center
        "
      >
        {/* TEXT */}
        <div className="md:col-span-2 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mb-4 md:mb-6">
            About Us
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">
            The Fiscal Initiative (TFI) is a non-partisan policy research and
            capacity-building institute dedicated to advancing prudent fiscal
            governance and strengthening citizen participation in Somalia’s
            economic decision-making.
          </p>

          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Established in 2025, TFI bridges the gap between fiscal policy goals
            and lived realities through evidence-based analysis, capacity
            development, and inclusive dialogue.
          </p>
        </div>
      </div>
    </section>
  );
}
