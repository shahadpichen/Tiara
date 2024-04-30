"use server";

import createSupabaServerClient from "@/lib/supabase/server";
import { revalidatePath, unstable_noStore as noStore } from "next/cache";

export async function AddToCart(
  name: string,
  description: string,
  price: number,
  rating: number,
  post_by: string,
  user: string
) {
  const supabase = await createSupabaServerClient();

  const result = await supabase
    .from("cart")
    .insert({ name, description, price, rating, post_by, user })
    .single();
  revalidatePath("/home/");
  return JSON.stringify(result);
}

export async function readProduct() {
  noStore();
  const supabase = await createSupabaServerClient();
  return await supabase.from("cart").select("*");
}

export async function deleteProductById(id: string) {
  const supabase = await createSupabaServerClient();
  await supabase.from("cart").delete().eq("id", id);
  revalidatePath("/home/");
}
