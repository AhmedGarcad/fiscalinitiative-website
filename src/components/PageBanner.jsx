export default function PageBanner({ title, subtitle, background }) {
  return (
    <section
      className="mt-28 w-full h-[50vh] flex items-center justify-center text-center text-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Banner Content */}
      <div className="relative z-10 max-w-4xl px-6">

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            {subtitle}
          </p>
        )}

      </div>
    </section>
  );
}