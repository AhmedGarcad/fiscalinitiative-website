import { Link } from "react-router-dom";
import IconBadge from "./IconBadge";

export default function IconLinkGrid({ items, hrefFor, itemWidth = "w-40 sm:w-52", showSummary = false }) {
  return (
    <ol className="flex flex-wrap justify-center gap-x-8 gap-y-12">
      {items.map((item) => (
        <li key={item.title} className={itemWidth}>
          <Link to={hrefFor(item)} className="group flex flex-col items-center text-center">
            <span className="rounded-full transition duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl">
              <IconBadge icon={item.icon} size={100} />
            </span>
            <span className="icon-label mt-5 text-lg font-bold leading-snug text-gray-800 group-hover:text-emerald-700 transition">
              {item.title}
            </span>
            {showSummary && item.summary && (
              <span className="mt-2 text-sm text-gray-600 leading-relaxed max-w-xs">
                {item.summary}
              </span>
            )}
            <span className="mt-2 text-sm font-semibold text-emerald-700 opacity-0 group-hover:opacity-100 transition">
              Read more →
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
