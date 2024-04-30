"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { createBrowserClient } from "@supabase/ssr";
import { FaDiscord, FaGithub } from "react-icons/fa";

export default function OAuthForm() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const LoginWithGitHub = () => {
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/auth-server-action/callback`,
      },
    });
  };

  const LoginWithDiscord = () => {
    supabase.auth.signInWithOAuth({
      provider: "discord",
      options: {
        redirectTo: `${location.origin}/auth-server-action/callback`,
      },
    });
  };

  const LoginWithGoogle = () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
        redirectTo: `${location.origin}/auth-server-action/callback`,
      },
    });
  };

  return (
    <>
      <Button className="w-full gap-1" onClick={LoginWithGitHub}>
        <FaGithub /> Github
      </Button>

      <Button className="w-full gap-1" onClick={LoginWithDiscord}>
        <FaDiscord /> Discord
      </Button>

      {/* <Button className="w-full" onClick={LoginWithGoogle}>
        Login With Google
      </Button> */}
    </>
  );
}
