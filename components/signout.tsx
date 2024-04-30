import React from "react";
import { Button } from "@/components/ui/button";
import createSupabaServerClient from "@/lib/supabase/server";
import { redirect } from "next/navigation";

function SignOut() {
  const LogOut = async () => {
    const supabase = await createSupabaServerClient();
    await supabase.auth.signOut();
    redirect("/");
  };
  return (
    <form action={LogOut}>
      <Button variant="ghost">Signout</Button>
    </form>
  );
}

export default SignOut;
