"use client";
import { Button } from "@/components/ui/button";
import { KeyRound } from "lucide-react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { useSearchParams } from "next/navigation";
import { createBrowserClient } from "@supabase/ssr";

export default function Authentication() {
  // const params = useSearchParams();
  // const next = params.get("next") || "";
  // const handleLoginWithOAuth = (provider: "github" | "google" | "discord") => {
  //   const supabase = supabaseBrowser();
  //   supabase.auth.signInWithOAuth({
  //     provider,
  //     options: {
  //       redirectTo: location.origin + "/auth/callback?next=" + next,
  //     },
  //   });
  // };
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
    <div className="flex items-center justify-center w-full h-[70vh]">
      <div className=" w-96 rounded-md border p-5 space-y-5 relative bg-slate-900">
        <div className="flex items-center gap-2">
          <KeyRound />
          <h1 className="text-2xl font-bold">Tiara.</h1>
        </div>

        <p className="text-sm text-gray-300">Register/SignIn Today 👇</p>
        <div className="flex flex-col gap-5">
          <Button
            className=" w-full flex items-center gap-2 "
            variant="outline"
            onClick={LoginWithGitHub}
          >
            <FaGithub /> Github
          </Button>
          <Button
            className=" w-full flex items-center gap-2 "
            variant="outline"
            onClick={LoginWithGoogle}
          >
            <FcGoogle /> Google
          </Button>
          <Button
            className=" w-full flex items-center gap-2 "
            variant="outline"
            onClick={LoginWithDiscord}
          >
            <FaDiscord /> Discord
          </Button>
        </div>
        <div className="glowBox -z-10"></div>
      </div>
    </div>
  );
}
