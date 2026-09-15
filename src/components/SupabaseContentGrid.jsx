import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

export default function SupabaseContentGrid({
  contentType,
  contentTypes,
  fallback = null,
}) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(Boolean(supabase));

  useEffect(() => {
    let active = true;

    async function loadContent() {
      if (!supabase) {
        setLoading(false);
        return;
      }

      let query = supabase
        .from("site_content")
        .select(`
          id,
          content_type,
          title,
          summary,
          body,
          slug,
          url,
          image_url,
          file_url,
          file_type,
          video_url,
          created_at
        `)
        .eq("published", true)
        .order("created_at", { ascending: false });

      if (contentTypes?.length) {
        query = query.in("content_type", contentTypes);
      } else {
        query = query.eq("content_type", contentType);
      }

      const { data, error } = await query;

      if (!active) return;

      if (error) {
        setItems([]);
      } else {
        setItems(data || []);
      }

      setLoading(false);
    }

    loadContent();

    return () => {
      active = false;
    };
  }, [contentType, contentTypes]);

  if (loading) {
    return (
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="h-48 bg-white rounded-xl shadow animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return fallback;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => (
        <article
          key={item.id}
          className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden border border-slate-100"
        >

          {item.image_url && (
            <img
              src={item.image_url}
              alt=""
              className="h-44 w-full object-cover"
              loading="lazy"
            />
          )}

          <div className="p-7">
            <p className="text-xs uppercase tracking-[0.2em] text-green-700 mb-3">
              {formatType(item.content_type)}
            </p>

            <h3 className="text-xl font-semibold text-green-900 mb-3">
              {item.title}
            </h3>

            {(item.summary || item.body) && (
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.summary || item.body}
              </p>
            )}

            <div className="flex flex-wrap gap-2 mt-5">
              {item.file_url && (
                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-800">
                  {item.file_type === "pdf" ? "PDF attached" : "File attached"}
                </span>
              )}

              {item.video_url && (
                <span className="rounded-full bg-yellow-50 px-3 py-1 text-xs font-semibold text-yellow-800">
                  Video attached
                </span>
              )}

              {item.image_url && (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  Image
                </span>
              )}
            </div>

            {item.slug && (
              <Link
                to={`/content/${item.slug}`}
                className="inline-block mt-5 text-green-700 font-medium hover:underline"
              >
                View Details
              </Link>
            )}

            {!item.slug && item.url && (
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-5 text-green-700 font-medium hover:underline"
              >
                Open Link
              </a>
            )}

          </div>
        </article>
      ))}
    </div>
  );
}

function formatType(value) {
  return value?.replaceAll("_", " ") || "content";
}
