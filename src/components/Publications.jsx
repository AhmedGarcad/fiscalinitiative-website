export default function Publications() {
  return (
    <section
      id="publications"
      className="
        py-16            /* ✅ NEW: better mobile spacing */
        md:py-24         /* existing desktop spacing */
        bg-white
      "
    >
      <div
        className="
          max-w-7xl 
          mx-auto 
          px-4            /* ✅ NEW: mobile padding */
          md:px-6         /* existing desktop padding */
        "
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center text-teal-700 mb-8 md:mb-12">
          Publications
        </h2>

        <div
          className="
            grid
            grid-cols-1        /* ✅ NEW: stack on small phones */
            sm:grid-cols-2     /* ✅ NEW: tablets */
            md:grid-cols-3     /* existing desktop layout */
            gap-6              /* ✅ NEW: tighter gap on mobile */
            md:gap-8           /* existing desktop gap */
          "
        >
          <a
            href="#"
            className="block bg-slate-50 rounded shadow hover:shadow-lg transition"
          >
            <img
              src="https://via.placeholder.com/400x250"
              alt="Strengthening Fiscal Transparency in Somalia"
              className="
                w-full              /* ✅ NEW: prevent overflow */
                h-auto              /* ✅ NEW */
                rounded-t
                object-cover        /* ✅ NEW: safe scaling */
              "
            />
            <div className="p-6">
              <h3 className="font-semibold text-sm md:text-base">
                Strengthening Fiscal Transparency in Somalia
              </h3>
            </div>
          </a>

          <a
            href="#"
            className="block bg-slate-50 rounded shadow hover:shadow-lg transition"
          >
            <img
              src="https://via.placeholder.com/400x250"
              alt="Domestic Revenue Mobilization Challenges"
              className="
                w-full
                h-auto
                rounded-t
                object-cover
              "
            />
            <div className="p-6">
              <h3 className="font-semibold text-sm md:text-base">
                Domestic Revenue Mobilization Challenges
              </h3>
            </div>
          </a>

          <a
            href="#"
            className="block bg-slate-50 rounded shadow hover:shadow-lg transition"
          >
            <img
              src="https://via.placeholder.com/400x250"
              alt="Inclusive Fiscal Policy for Sustainable Growth"
              className="
                w-full
                h-auto
                rounded-t
                object-cover
              "
            />
            <div className="p-6">
              <h3 className="font-semibold text-sm md:text-base">
                Inclusive Fiscal Policy for Sustainable Growth
              </h3>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
