// Banners use a plain brand colour; callers may still pass a `background` image, which is ignored.
export default function PageBanner({ title, subtitle, eyebrow = "The Fiscal Initiative" }) {
  // Without a title the banner is just a slim strip of brand colour.
  if (!title) {
    return (
      <section className="mt-20 md:mt-[172px] w-full h-28 md:h-40 bg-gradient-to-r from-[#004D47] to-[#00796F]" />
    );
  }

  return (
    <section className="mt-36 md:mt-[145px] w-full min-h-[300px] md:min-h-[380px] flex items-center text-white relative overflow-hidden bg-gradient-to-r from-[#004D47] to-[#00796F]">
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-xs uppercase tracking-[0.28em] text-white/80 mb-5">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-5 leading-none">
            {title}
          </h1>

          {subtitle && (
            <p className="text-base md:text-xl text-white/90 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
