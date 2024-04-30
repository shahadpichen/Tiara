"use server";

import createSupabaServerClient from "../supabase/server";

export default async function readUserSession() {
  const supabase = await createSupabaServerClient();
  return supabase.auth.getSession();
}
