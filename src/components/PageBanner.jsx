export default function PageBanner({ title, subtitle, background }) {
  return (
    <div
      className="h-[45vh] flex items-center justify-center text-center text-white relative"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-lg text-gray-200">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
