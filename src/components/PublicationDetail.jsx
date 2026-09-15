import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

export default function PublicationDetail() {
  const { slug } = useParams();
  const [publication, setPublication] = useState(null);
  const [loading, setLoading] = useState(Boolean(supabase));

  useEffect(() => {
    let active = true;

    if (!supabase) {
      return undefined;
    }

    supabase
      .from("site_content")
      .select("*")
      .eq("slug", slug)
      .maybeSingle()
      .then(({ data, error }) => {
        if (!active) return;
        if (!error) {
          setPublication(data);
        }
        setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <section className="pt-40 px-6 min-h-screen bg-gray-50">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow p-8">
          Loading content...
        </div>
      </section>
    );
  }

  if (!publication) {
    return (
      <section className="pt-40 px-6 min-h-screen bg-gray-50">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow p-8">
          <h1 className="text-3xl font-black text-green-950 mb-4">
            Content not found
          </h1>
          <Link to="/publications" className="text-green-700 font-semibold">
            Back to publications
          </Link>
        </div>
      </section>
    );
  }

  const hasPdf = publication.file_url && publication.file_type === "pdf";
  const hasVideo = publication.video_url || publication.file_type === "video";
  const isMedia = publication.content_type === "media";
  const hasAttachment =
    publication.image_url || publication.file_url || publication.video_url;

  return (
    <section className="pt-40 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <article className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {publication.image_url && (
            <img
              src={publication.image_url}
              alt={publication.title}
              className="w-full h-[280px] md:h-[460px] object-cover"
            />
          )}

          <div className="p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.3em] text-green-700 mb-5">
              {formatType(publication.content_type)}
            </p>

            <h1 className="text-4xl md:text-6xl font-black text-green-950 mb-6 leading-tight">
              {publication.title}
            </h1>

            {publication.summary && (
              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-4xl">
                {publication.summary}
              </p>
            )}

            <div className="flex flex-wrap gap-3 mb-10">
              {hasPdf && (
                <a
                  href={publication.file_url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-800 text-white px-5 py-3 rounded-xl font-semibold"
                >
                  Open PDF
                </a>
              )}

              {publication.file_url && (
                <a
                  href={publication.file_url}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-green-800 text-green-900 px-5 py-3 rounded-xl font-semibold"
                >
                  Download File
                </a>
              )}

              {publication.video_url && (
                <a
                  href={publication.video_url}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-yellow-600 text-yellow-700 px-5 py-3 rounded-xl font-semibold"
                >
                  Open Video
                </a>
              )}
            </div>

            {publication.body && (
              <div className="text-gray-700 text-lg leading-relaxed mb-12 whitespace-pre-line">
                {publication.body}
              </div>
            )}

            {isMedia && !hasAttachment && (
              <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-6 text-yellow-950 mb-12">
                <h2 className="text-xl font-bold mb-2">
                  No media file is attached yet
                </h2>
                <p>
                  This item was published without an uploaded video, image, PDF/file, or YouTube URL. Open the admin page and create the media item again after the upload shows as attached.
                </p>
              </div>
            )}

            {hasPdf && (
              <section className="mb-14">
                <h2 className="text-2xl font-bold text-green-900 mb-5">
                  PDF Report
                </h2>

                <iframe
                  src={publication.file_url}
                  title={`${publication.title} PDF`}
                  className="w-full h-[720px] rounded-2xl border bg-gray-100"
                />
              </section>
            )}

            {hasVideo && (
              <section className="mb-4">
                <h2 className="text-2xl font-bold text-green-900 mb-5">
                  Video
                </h2>

                {isYouTube(publication.video_url) ? (
                  <iframe
                    className="w-full aspect-video rounded-2xl"
                    src={toYouTubeEmbed(publication.video_url)}
                    title={`${publication.title} video`}
                    allowFullScreen
                  />
                ) : (
                  <video controls className="w-full rounded-2xl bg-black">
                    <source src={publication.video_url || publication.file_url} />
                  </video>
                )}
              </section>
            )}
          </div>
        </article>
      </div>
    </section>
  );
}

function formatType(value) {
  return value?.replaceAll("_", " ") || "content";
}

function isYouTube(url) {
  return url?.includes("youtube.com") || url?.includes("youtu.be");
}

function toYouTubeEmbed(url) {
  if (!url) return "";
  if (url.includes("watch?v=")) {
    return url.replace("watch?v=", "embed/");
  }
  if (url.includes("youtu.be/")) {
    return url.replace("youtu.be/", "www.youtube.com/embed/");
  }
  return url;
}
