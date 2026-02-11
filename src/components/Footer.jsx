export default function Footer() {
  return (
    <footer
      id="contact"
      className="
        bg-slate-900 
        text-slate-200 
        py-12          /* ✅ NEW: better on mobile */
        md:py-16       /* existing desktop spacing */
      "
    >
      <div
        className="
          max-w-7xl 
          mx-auto 
          px-4           /* ✅ NEW: mobile padding */
          md:px-6        /* existing desktop padding */
          grid 
          grid-cols-1    /* ✅ NEW: stack on mobile */
          md:grid-cols-3 /* existing desktop layout */
          gap-6          /* ✅ NEW: tighter mobile gap */
          md:gap-8       /* existing desktop gap */
          text-center    /* ✅ NEW: better mobile alignment */
          md:text-left   /* existing desktop alignment */
        "
      >
        <div>
          <h3 className="font-bold text-base md:text-lg mb-2">
            Fiscal Initiative
          </h3>
          <p className="text-sm">
            Building Trust. Building Growth.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">
            Contact
          </h4>
          <p className="text-sm break-words">
            info@fiscalinitiative.com
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">
            Follow Us
          </h4>
          <p className="text-sm">
            LinkedIn · Twitter · Facebook
          </p>
        </div>
      </div>
    </footer>
  );
}
