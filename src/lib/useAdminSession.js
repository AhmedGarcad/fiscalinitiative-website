import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

// Returns null while checking, then true when someone is signed in through the admin page.
export function useAdminSession() {
  const [isAdmin, setIsAdmin] = useState(supabase ? null : false);

  useEffect(() => {
    if (!supabase) return undefined;

    supabase.auth.getSession().then(({ data }) => setIsAdmin(Boolean(data.session)));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) =>
      setIsAdmin(Boolean(session))
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  return isAdmin;
}
