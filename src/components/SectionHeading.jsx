export default function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={center ? "text-center mb-12" : "mb-12"}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.25em] text-sky-600 font-semibold mb-3">
          {eyebrow}
        </p>
      )}
      <div className={`w-14 h-1 bg-sky-600 mb-4 ${center ? "mx-auto" : ""}`} />
      <h2 className="text-3xl md:text-4xl font-bold text-blue-800">{title}</h2>
      {subtitle && (
        <p className={`mt-4 text-lg md:text-xl font-bold text-gray-800 ${center ? "max-w-2xl mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
