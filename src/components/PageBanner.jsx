// Slim strip of brand colour under the header, with the page title on white below it.
export default function PageBanner({ title, subtitle }) {
  return (
    <>
      <div className="mt-20 md:mt-[172px] w-full h-28 md:h-40 bg-gradient-to-r from-[#004D47] to-[#00796F]" />

      {title && (
        <header className="bg-gray-50 pt-16 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-950 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </header>
      )}
    </>
  );
}
