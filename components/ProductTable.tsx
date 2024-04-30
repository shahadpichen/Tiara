"use server";

import React from "react";
import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import createSupabaServerClient from "@/lib/supabase/server";
import DeletePost from "@/components/DeletePost";

async function ProductTable() {
  const supabase = await createSupabaServerClient();

  const { data } = await supabase
    .from("posts")
    .select("*,profiles(display_name)")
    // .eq("category", "women")
    .order("created_at", { ascending: false });

  const imageUrlHost =
    "https://zuhswuoryabxgyutinbo.supabase.co/storage/v1/object/public/images/";
  const posts = data?.map((post) => {
    return {
      image: `${post.post_by}/${post.id}/${post.name}`,
      ...post,
    };
  });
  return (
    <section>
      <h2 className="text-xl font-semibold mb-2 text-[--tertiaryTiara]">
        Table:
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Section</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts?.map((product) => {
            return (
              <TableRow key={product.id}>
                <TableCell>{product.product_name}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.rating}</TableCell>
                <TableCell>${product.price}</TableCell>
                <TableCell className="text-right">
                  <DeletePost post_by={product.post_by} image={product.image} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
}

export default ProductTable;
