export default function PageBanner({ title, subtitle, background, eyebrow = "The Fiscal Initiative" }) {
  return (
    <section
      className="mt-36 md:mt-[145px] w-full min-h-[360px] md:min-h-[460px] flex items-center text-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#004D47]/95 via-[#00796F]/75 to-black/35" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F4FAF8] to-transparent" />

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
