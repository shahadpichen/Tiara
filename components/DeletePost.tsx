"use client";

import React from "react";
import { Button } from "./ui/button";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { RiDeleteBin5Line } from "react-icons/ri";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function DeletePost({ post_by, image }: { post_by: string; image: string }) {
  const router = useRouter();

  const handleDelete = async () => {
    const supabase = supabaseBrowser();
    const { error } = await supabase.storage.from("images").remove([image]);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Successfully removed the image");
      router.refresh();
    }
  };

  return (
    <div>
      <Button onClick={handleDelete} variant="destructive">
        <RiDeleteBin5Line />
      </Button>
    </div>
  );
}

export default DeletePost;
