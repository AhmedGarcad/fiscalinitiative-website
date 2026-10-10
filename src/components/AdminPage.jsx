import { useCallback, useEffect, useState } from "react";
import { supabase, isSupabaseConfigured } from "../lib/supabaseClient";

const contentTypes = [
  { value: "expert_commentary", label: "Expert Commentary" },
  { value: "young_economist_voice", label: "Young Economist Voice" },
  { value: "budget_insight", label: "Budget Insight" },
  { value: "policy_brief", label: "Policy Brief" },
  { value: "policy_report", label: "Policy Report" },
  { value: "special_issue", label: "Special Issue" },
  { value: "occasional_paper", label: "Occasional Empirical Paper" },
  { value: "book_monograph", label: "Book / Monograph" },
  { value: "research", label: "Research Focus Item" },
  { value: "video", label: "Media - Video" },
  { value: "photo", label: "Media - Photo" },
  { value: "program", label: "Capacity Development Program" },
  { value: "forum", label: "Forum" },
  { value: "board_member", label: "Team - Board Member" },
  { value: "management_member", label: "Team - Management Member" },
  { value: "advisor", label: "Team - Honorary Advisor" },
];

const initialForm = {
  content_type: "policy_brief",
  title: "",
  summary: "",
  body: "",
  image_url: "",
  file_url: "",
  video_url: "",
  file_type: "",
  published: true,
};

function hasAttachedMedia(form) {
  return Boolean(
    form.image_url ||
      form.file_url ||
      form.video_url
  );
}

export default function AdminPage() {
  const [session, setSession] = useState(null);

  const [mode, setMode] = useState("login");

  const [authForm, setAuthForm] = useState({
    email: "",
    password: "",
  });

  const [contentForm, setContentForm] =
    useState(initialForm);

  const [items, setItems] = useState([]);

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const [uploading, setUploading] =
    useState(false);

  const loadItems = useCallback(async () => {
    if (!supabase) return;

    const { data } = await supabase
      .from("site_content")
      .select("*")
      .order("created_at", {
        ascending: false,
      })
      .limit(20);

    setItems(data || []);
  }, []);

  useEffect(() => {
    if (!supabase) return undefined;

    supabase.auth
      .getSession()
      .then(({ data }) => {
        setSession(data.session);

        if (data.session) {
          loadItems();
        }
      });

    const { data: listener } =
      supabase.auth.onAuthStateChange(
        (_event, nextSession) => {
          setSession(nextSession);

          if (nextSession) {
            loadItems();
          }
        }
      );

    return () =>
      listener.subscription.unsubscribe();
  }, [loadItems]);

  async function uploadFile(file, bucket) {
    if (!file) return null;

    setUploading(true);
    setMessage(`Uploading ${file.name}...`);

    const fileName = `${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from(bucket)
      .upload(fileName, file);

    if (error) {
      setMessage(
        `${error.message}. Check that the Supabase storage bucket "${bucket}" exists and is public.`
      );

      setUploading(false);

      return null;
    }

    const { data } = supabase.storage
      .from(bucket)
      .getPublicUrl(fileName);

    setUploading(false);

    return data.publicUrl;
  }

  async function handleAuth(event) {
    event.preventDefault();

    setLoading(true);

    setMessage("");

    const action =
      mode === "login"
        ? supabase.auth.signInWithPassword(
            authForm
          )
        : supabase.auth.signUp(authForm);

    const { error } = await action;

    if (error) {
      setMessage(error.message);
    } else {
      setMessage(
        mode === "login"
          ? "Logged in successfully."
          : "Account created successfully."
      );
    }

    setLoading(false);
  }

  async function handleContentSubmit(
    event
  ) {
    event.preventDefault();

    setLoading(true);

    setMessage("");

    if (uploading) {
      setMessage(
        "Please wait until the file upload finishes, then press Upload Content."
      );
      setLoading(false);
      return;
    }

    if (
      ["video", "photo"].includes(contentForm.content_type) &&
      !hasAttachedMedia(contentForm)
    ) {
      setMessage(
        "Video and Photo content need an uploaded image, uploaded video, PDF/file, or YouTube URL before publishing."
      );
      setLoading(false);
      return;
    }

    const { data: userData } =
      await supabase.auth.getUser();

    const slug = contentForm.title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    const payload = {
      ...contentForm,
      slug,
      user_id: userData.user.id,
    };

    const { error } = await supabase
      .from("site_content")
      .insert(payload);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage(
        "Content uploaded successfully."
      );

      setContentForm(initialForm);

      loadItems();
    }

    setLoading(false);
  }

  async function handleSignOut() {
    await supabase.auth.signOut();

    setItems([]);
  }

  if (!isSupabaseConfigured) {
    return (
      <section className="pt-36 pb-20 bg-gray-50 min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-xl shadow p-8">

            <h1 className="text-3xl font-bold text-emerald-900 mb-4">
              Supabase Not Configured
            </h1>

            <p className="text-gray-600">
              Add your Supabase URL and anon key.
            </p>

          </div>
        </div>
      </section>
    );
  }

  if (!session) {
    return (
      <section className="pt-36 pb-20 bg-gray-50 min-h-screen">

        <div className="max-w-md mx-auto px-6">

          <div className="bg-white rounded-xl shadow p-8">

            <h1 className="text-3xl font-bold text-emerald-900 mb-2">
              Admin Access
            </h1>

            <p className="text-gray-600 mb-8">
              Sign in to manage website content.
            </p>

            <form
              onSubmit={handleAuth}
              className="space-y-4"
            >

              <input
                type="email"
                placeholder="Email"
                value={authForm.email}
                onChange={(event) =>
                  setAuthForm({
                    ...authForm,
                    email:
                      event.target.value,
                  })
                }
                className="w-full border rounded-lg px-4 py-3"
                required
              />

              <input
                type="password"
                placeholder="Password"
                value={authForm.password}
                onChange={(event) =>
                  setAuthForm({
                    ...authForm,
                    password:
                      event.target.value,
                  })
                }
                className="w-full border rounded-lg px-4 py-3"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-emerald-800 text-white rounded-lg px-4 py-3"
              >
                {loading
                  ? "Please wait..."
                  : mode === "login"
                  ? "Login"
                  : "Sign Up"}
              </button>

            </form>

            <button
              type="button"
              onClick={() =>
                setMode(
                  mode === "login"
                    ? "signup"
                    : "login"
                )
              }
              className="mt-5 text-sm text-emerald-700 hover:underline"
            >
              {mode === "login"
                ? "Need an account? Sign up"
                : "Already have an account? Login"}
            </button>

            {message && (
              <p className="mt-4 text-sm text-gray-600">
                {message}
              </p>
            )}

          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-36 pb-20 bg-gray-50 min-h-screen">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between mb-10">

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-700 mb-3">
              Supabase CMS
            </p>

            <h1 className="text-4xl font-bold text-emerald-900">
              Fiscal Initiative Admin
            </h1>
          </div>

          <button
            onClick={handleSignOut}
            className="border border-emerald-800 text-emerald-900 px-5 py-2 rounded-lg"
          >
            Sign Out
          </button>

        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8">

          <form
            onSubmit={handleContentSubmit}
            className="bg-white rounded-xl shadow p-8 space-y-5"
          >

            <h2 className="text-2xl font-semibold text-gray-900">
              Add Website Content
            </h2>

            <p className="text-sm text-gray-600">
              For Media posts, attach a video, image, PDF/file, or YouTube link before publishing. The public page will show exactly what is attached here.
            </p>

            <div className="grid md:grid-cols-2 gap-5">

              <label className="block">

                <span className="text-sm font-medium text-gray-700">
                  Type
                </span>

                <select
                  value={
                    contentForm.content_type
                  }
                  onChange={(event) =>
                    setContentForm({
                      ...contentForm,
                      content_type:
                        event.target.value,
                    })
                  }
                  className="mt-2 w-full border rounded-lg px-4 py-3"
                >
                  {contentTypes.map(
                    (type) => (
                      <option
                        key={type.value}
                        value={type.value}
                      >
                        {type.label}
                      </option>
                    )
                  )}
                </select>

              </label>

              <label className="block">

                <span className="text-sm font-medium text-gray-700">
                  Title
                </span>

                <input
                  value={contentForm.title}
                  onChange={(event) =>
                    setContentForm({
                      ...contentForm,
                      title:
                        event.target.value,
                    })
                  }
                  className="mt-2 w-full border rounded-lg px-4 py-3"
                  required
                />

              </label>

            </div>

            <label className="block">

              <span className="text-sm font-medium text-gray-700">
                Summary
              </span>

              <input
                value={contentForm.summary}
                onChange={(event) =>
                  setContentForm({
                    ...contentForm,
                    summary:
                      event.target.value,
                  })
                }
                className="mt-2 w-full border rounded-lg px-4 py-3"
              />

            </label>

            <label className="block">

              <span className="text-sm font-medium text-gray-700">
                Body
              </span>

              <textarea
                rows="6"
                value={contentForm.body}
                onChange={(event) =>
                  setContentForm({
                    ...contentForm,
                    body:
                      event.target.value,
                  })
                }
                className="mt-2 w-full border rounded-lg px-4 py-3"
              />

            </label>

            {/* PDF */}

            <label className="block">

              <span className="text-sm font-medium text-gray-700">
                Upload PDF / Report
              </span>

              <input
                type="file"
                accept=".pdf"
                className="mt-2 w-full border rounded-lg px-4 py-3"
                onChange={async (
                  event
                ) => {
                  const file =
                    event.target.files[0];

                  const url =
                    await uploadFile(
                      file,
                      "publication-pdfs"
                    );

                  if (url) {
                    setContentForm((prev) => ({
                      ...prev,
                      file_url: url,
                      file_type: "pdf",
                    }));
                    setMessage("PDF attached. Press Upload Content to publish it.");
                  }
                }}
              />

            </label>

            {/* IMAGE */}

            <label className="block">

              <span className="text-sm font-medium text-gray-700">
                Upload Image
              </span>

              <input
                type="file"
                accept="image/*"
                className="mt-2 w-full border rounded-lg px-4 py-3"
                onChange={async (
                  event
                ) => {
                  const file =
                    event.target.files[0];

                  const url =
                    await uploadFile(
                      file,
                      "media-files"
                    );

                  if (url) {
                    setContentForm((prev) => ({
                      ...prev,
                      image_url: url,
                    }));
                    setMessage("Image attached. Press Upload Content to publish it.");
                  }
                }}
              />

            </label>

            {/* VIDEO */}

            <label className="block">

              <span className="text-sm font-medium text-gray-700">
                Upload Video
              </span>

              <input
                type="file"
                accept="video/*"
                className="mt-2 w-full border rounded-lg px-4 py-3"

                onChange={async (
                  event
                ) => {

                  const file =
                    event.target.files[0];

                  if (!file) return;

                  const url =
                    await uploadFile(
                      file,
                      "video-files"
                    );

                  if (url) {

                    setContentForm((prev) => ({
                      ...prev,
                      content_type: "video",
                      video_url: url,
                      file_type: "video",
                    }));
                    setMessage("Video attached. Press Upload Content to publish it.");

                  }

                }}
              />

            </label>

            {/* YOUTUBE */}

            <label className="block">

              <span className="text-sm font-medium text-gray-700">
                YouTube URL
              </span>

              <input
                type="url"
                value={
                  contentForm.video_url
                }
                onChange={(event) =>
                  setContentForm((prev) => ({
                    ...prev,
                    content_type: event.target
                      .value
                      ? "video"
                      : prev.content_type,
                    video_url:
                      event.target.value,
                    file_type:
                      event.target.value
                        ? "video"
                        : prev.file_type,
                  }))
                }
                className="mt-2 w-full border rounded-lg px-4 py-3"
                placeholder="https://youtube.com/..."
              />

            </label>

            <label className="flex items-center gap-3 text-sm text-gray-700">

              <input
                type="checkbox"
                checked={
                  contentForm.published
                }
                onChange={(event) =>
                  setContentForm({
                    ...contentForm,
                    published:
                      event.target.checked,
                  })
                }
              />

              Publish immediately

            </label>

            {["video", "photo"].includes(contentForm.content_type) &&
              !hasAttachedMedia(contentForm) && (
                <div className="rounded-xl border border-teal-200 bg-teal-50 p-4 text-sm text-teal-900">
                  Video and Photo pages need a visible attachment. Upload a video or image, or paste a YouTube URL, before pressing Upload Content.
                </div>
              )}

            {(contentForm.file_url ||
              contentForm.image_url ||
              contentForm.video_url) && (
              <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-900 space-y-2">
                <p className="font-semibold">Attached files ready:</p>

                {contentForm.file_url && (
                  <a
                    href={contentForm.file_url}
                    target="_blank"
                    rel="noreferrer"
                    className="block hover:underline"
                  >
                    PDF / report attached
                  </a>
                )}

                {contentForm.image_url && (
                  <a
                    href={contentForm.image_url}
                    target="_blank"
                    rel="noreferrer"
                    className="block hover:underline"
                  >
                    Image attached
                  </a>
                )}

                {contentForm.video_url && (
                  <a
                    href={contentForm.video_url}
                    target="_blank"
                    rel="noreferrer"
                    className="block hover:underline"
                  >
                    Video attached
                  </a>
                )}
              </div>
            )}

            <button
              type="submit"
              disabled={
                loading || uploading
              }
              className="bg-emerald-800 text-white rounded-lg px-6 py-3"
            >
              {uploading
                ? "Uploading..."
                : loading
                ? "Saving..."
                : "Upload Content"}
            </button>

            {message && (
              <p className="text-sm text-gray-600">
                {message}
              </p>
            )}

          </form>

          <aside className="bg-white rounded-xl shadow p-8">

            <h2 className="text-2xl font-semibold text-gray-900 mb-5">
              Latest Uploads
            </h2>

            <div className="space-y-4">

              {items.map((item) => (
                <div
                  key={item.id}
                  className="border-b pb-4"
                >

                  <p className="text-xs uppercase tracking-wide text-emerald-700">
                    {item.content_type}
                  </p>

                  <h3 className="font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-500">
                    {item.published
                      ? "Published"
                      : "Draft"}
                  </p>

                  <div className="mt-2 flex flex-wrap gap-2 text-[11px]">
                    {item.file_url && (
                      <span className="rounded-full bg-emerald-50 px-2 py-1 text-emerald-800">
                        File
                      </span>
                    )}
                    {item.video_url && (
                      <span className="rounded-full bg-teal-50 px-2 py-1 text-teal-800">
                        Video
                      </span>
                    )}
                    {item.image_url && (
                      <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-700">
                        Image
                      </span>
                    )}
                    {!hasAttachedMedia(item) && (
                      <span className="rounded-full bg-red-50 px-2 py-1 text-red-700">
                        No file attached
                      </span>
                    )}
                  </div>

                  {item.slug && (
                    <a
                      href={`/content/${item.slug}`}
                      className="mt-3 inline-block text-xs font-semibold text-emerald-700 hover:underline"
                    >
                      View page
                    </a>
                  )}

                </div>
              ))}

            </div>

          </aside>

        </div>
      </div>
    </section>
  );
}
