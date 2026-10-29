import { Link } from "react-router-dom";
import PageBanner from "./PageBanner";
import IconBadge from "./IconBadge";

// Detail page for one item in an ordered list (About sections, events),
// with previous/next links so readers can move through them in sequence.
export default function SequenceDetail({
  items,
  index,
  hrefFor,
  backTo,
  backLabel,
  eyebrow,
  background,
  children,
}) {
  const item = items[index];
  const previous = items[index - 1];
  const next = items[index + 1];
  const position = `${String(index + 1).padStart(2, "0")} / ${String(items.length).padStart(2, "0")}`;

  return (
    <div>
      <PageBanner title={item.title} subtitle={eyebrow} background={background} />

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            to={backTo}
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-900 mb-8"
          >
            ← {backLabel}
          </Link>

          <article className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden">
            <div className="px-8 md:px-12 pt-10 md:pt-12 flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="shrink-0">
                <IconBadge icon={item.icon} size={88} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-emerald-700 font-semibold mb-2">
                  {position}
                </p>
                <h2 className="text-3xl md:text-4xl font-black text-gray-950 leading-tight">
                  {item.title}
                </h2>
              </div>
            </div>

            <div className="px-8 md:px-12 py-10">{children}</div>
          </article>

          <nav className="grid sm:grid-cols-2 gap-4 mt-8" aria-label="More in this section">
            {previous ? <SequenceLink item={previous} to={hrefFor(previous)} direction="previous" /> : <span />}
            {next && <SequenceLink item={next} to={hrefFor(next)} direction="next" />}
          </nav>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {items.map((other, otherIndex) => (
              <Link
                key={other.title}
                to={hrefFor(other)}
                title={other.title}
                aria-label={other.title}
                aria-current={otherIndex === index ? "page" : undefined}
                className={`rounded-full transition hover:-translate-y-1 ${
                  otherIndex === index ? "ring-4 ring-emerald-200 ring-offset-2" : "opacity-60 hover:opacity-100"
                }`}
              >
                <IconBadge icon={other.icon} size={48} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function SequenceLink({ item, to, direction }) {
  const isNext = direction === "next";

  return (
    <Link
      to={to}
      className={`group bg-white rounded-xl border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition p-5 flex items-center gap-4 ${
        isNext ? "sm:flex-row-reverse sm:text-right" : ""
      }`}
    >
      <IconBadge icon={item.icon} size={52} />
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">
          {isNext ? "Next →" : "← Previous"}
        </p>
        <p className="icon-label mt-1 font-bold text-gray-900 group-hover:text-emerald-700">
          {item.title}
        </p>
      </div>
    </Link>
  );
}
