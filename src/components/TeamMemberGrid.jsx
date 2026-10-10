import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function TeamMemberGrid({ contentType, fallback = null }) {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(Boolean(supabase));

  useEffect(() => {
    let active = true;

    async function loadMembers() {
      if (!supabase) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("site_content")
        .select("id, title, summary, image_url")
        .eq("content_type", contentType)
        .eq("published", true)
        .order("created_at", { ascending: true });

      if (!active) return;

      setMembers(error ? [] : data || []);
      setLoading(false);
    }

    loadMembers();

    return () => {
      active = false;
    };
  }, [contentType]);

  if (loading) {
    return (
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {[1, 2, 3].map((item) => (
          <div key={item} className="h-56 bg-white rounded-2xl shadow animate-pulse" />
        ))}
      </div>
    );
  }

  if (members.length === 0) {
    return fallback;
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
      {members.map((member) => (
        <div key={member.id} className="text-center">
          <div className="w-40 h-40 rounded-full overflow-hidden bg-slate-200 mx-auto mb-5">
            {member.image_url ? (
              <img
                src={member.image_url}
                alt={member.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <PersonPlaceholder />
            )}
          </div>
          <h4 className="text-lg font-bold text-blue-700">{member.title}</h4>
          {member.summary && (
            <p className="text-gray-600 text-sm mt-1">{member.summary}</p>
          )}
        </div>
      ))}
    </div>
  );
}

function PersonPlaceholder() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full text-slate-400">
      <circle cx="50" cy="38" r="18" fill="currentColor" />
      <path d="M15 90c3-22 20-34 35-34s32 12 35 34z" fill="currentColor" />
    </svg>
  );
}
