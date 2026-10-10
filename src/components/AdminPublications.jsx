import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { supabase, isSupabaseConfigured } from "../lib/supabaseClient";

export default function AdminPublications() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(isSupabaseConfigured);

  const [editingItem, setEditingItem] = useState(null);

  const [editForm, setEditForm] = useState({
    title: "",
    summary: "",
    body: "",
  });

  const loadItems = useCallback(async () => {
    if (!supabase) return;

    const { data } = await supabase
      .from("site_content")
      .select("*")
      .order("created_at", { ascending: false });

    setItems(data || []);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!supabase) {
      return undefined;
    }

    let active = true;

    supabase
      .from("site_content")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        if (!active) return;
        setItems(data || []);
        setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  async function deletePublication(id) {
    if (!supabase) return;

    const confirmDelete = window.confirm(
      "Delete this publication?"
    );

    if (!confirmDelete) return;

    await supabase
      .from("site_content")
      .delete()
      .eq("id", id);

    loadItems();
  }

  function startEditing(item) {
    setEditingItem(item.id);

    setEditForm({
      title: item.title || "",
      summary: item.summary || "",
      body: item.body || "",
    });
  }

  async function saveEdit(id) {
    if (!supabase) return;

    await supabase
      .from("site_content")
      .update({
        title: editForm.title,
        summary: editForm.summary,
        body: editForm.body,
      })
      .eq("id", id);

    setEditingItem(null);

    loadItems();
  }

  if (!isSupabaseConfigured) {
    return (
      <section className="pt-40 px-6">
        <p>Supabase is not configured. Add your Supabase URL and anon key.</p>
      </section>
    );
  }

  if (loading) {
    return (
      <section className="pt-40 px-6">
        <p>Loading publications...</p>
      </section>
    );
  }

  return (
    <section className="pt-40 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-700 mb-3">
              Admin CMS
            </p>

            <h1 className="text-5xl font-black text-emerald-950">
              Manage Publications
            </h1>
          </div>

          <Link
            to="/admin"
            className="bg-emerald-800 text-white px-5 py-3 rounded-xl"
          >
            Back to Admin
          </Link>
        </div>

        <div className="grid gap-6">

          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow p-6"
            >

              {editingItem === item.id ? (
                <div className="space-y-4">

                  <input
                    value={editForm.title}
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        title: e.target.value,
                      })
                    }
                    className="w-full border rounded-lg px-4 py-3"
                    placeholder="Title"
                  />

                  <input
                    value={editForm.summary}
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        summary: e.target.value,
                      })
                    }
                    className="w-full border rounded-lg px-4 py-3"
                    placeholder="Summary"
                  />

                  <textarea
                    rows="6"
                    value={editForm.body}
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        body: e.target.value,
                      })
                    }
                    className="w-full border rounded-lg px-4 py-3"
                    placeholder="Body"
                  />

                  <div className="flex gap-3">

                    <button
                      onClick={() => saveEdit(item.id)}
                      className="bg-emerald-700 text-white px-5 py-2 rounded-lg"
                    >
                      Save
                    </button>

                    <button
                      onClick={() => setEditingItem(null)}
                      className="bg-gray-400 text-white px-5 py-2 rounded-lg"
                    >
                      Cancel
                    </button>

                  </div>
                </div>
              ) : (
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                  <div>
                    <p className="text-xs uppercase tracking-wide text-emerald-700 mb-2">
                      {item.content_type}
                    </p>

                    <h2 className="text-2xl font-bold text-emerald-950">
                      {item.title}
                    </h2>

                    <p className="text-gray-600 mt-3">
                      {item.summary}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">

                    <Link
                      to={`/content/${item.slug}`}
                      className="bg-emerald-600 text-white px-4 py-2 rounded-lg"
                    >
                      View
                    </Link>

                    <button
                      onClick={() => startEditing(item)}
                      className="bg-teal-500 text-white px-4 py-2 rounded-lg"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deletePublication(item.id)}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>

                  </div>
                </div>
              )}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
