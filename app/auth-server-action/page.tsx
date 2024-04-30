import React from "react";
import { AuthForm } from "./components/AuthForm";
import readUserSession from "@/lib/actions";
import { redirect } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";
import Authentication from "./components/Authentication";

export default async function page() {
  const { data } = await readUserSession();

  if (data.session) {
    return redirect("/home");
  }
  return (
    <div className="flex justify-center items-center h-screen bg-[--primaryHome]">
      <div>
        {/* <AuthForm /> */}
        <Authentication />
        <Toaster />
      </div>
    </div>
  );
}
