"use client";

import React, { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Tus from "@uppy/tus";

import Uppy from "@uppy/core";
import { Dashboard } from "@uppy/react";

import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";

import { supabaseBrowser } from "@/lib/supabase/browser";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import useUser from "@/app/hook/useUser";

function Uploader() {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const productNameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const priceRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const ratingRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const categoryRef =
    useRef<HTMLSelectElement>() as React.MutableRefObject<HTMLSelectElement>;
  const { data: user } = useUser();
  const supabase = supabaseBrowser();
  const router = useRouter();

  const onBeforeRequest = async (req: any) => {
    const { data } = await supabase.auth.getSession();
    req.setHeader("Authorization", `Bearer ${data.session?.access_token}`);
  };

  const [uppy] = useState(() =>
    new Uppy({
      restrictions: {
        maxNumberOfFiles: 1,
        allowedFileTypes: ["image/*"],
        maxFileSize: 5 * 1000 * 1000,
      },
    }).use(Tus, {
      endpoint:
        process.env.NEXT_PUBLIC_SUPABASE_URL + "/storage/v1/upload/resumable",
      onBeforeRequest,
      allowedMetaFields: [
        "bucketName",
        "objectName",
        "contentType",
        "cacheControl",
      ],
    })
  );

  uppy.on("file-added", (file) => {
    file.meta = {
      ...file.meta,
      bucketName: "images",
      contentType: file.type,
    };
  });

  uppy.on("upload-success", () => {
    uppy.cancelAll();

    document.getElementById("trigger-close")?.click();
    // if (inputRef.current) {
    //   inputRef.current.value = "";
    // }
    router.refresh();
  });

  // const handleUploads = () => {
  //   // Validate inputs

  //   if (uppy.getFiles().length !== 0) {
  //     const randomUUID = crypto.randomUUID();

  //     uppy.setFileMeta(uppy.getFiles()[0].id, {
  //       objectName: user?.id + "/" + randomUUID + "/" + uppy.getFiles()[0].name,
  //     });

  //     uppy.upload().then(async () => {
  //       const productName = productNameRef.current.value;
  //       const description = inputRef.current.value;
  //       const price = parseFloat(priceRef.current.value);
  //       const rating = parseInt(ratingRef.current.value);
  //       const category = categoryRef.current.value;
  //       console.log(productName, description, price, rating, category);
  //       if (
  //         productName.trim() ||
  //         description.trim() ||
  //         isNaN(price) ||
  //         isNaN(rating)
  //       ) {
  //         const { error } = await supabase
  //           .from("posts")
  //           .update({
  //             product_name: productNameRef.current.value,
  //             description: inputRef.current.value,
  //             price: parseFloat(priceRef.current.value),
  //             rating: parseInt(ratingRef.current.value),
  //             category: categoryRef.current.value,
  //           })
  //           .eq("id", randomUUID);

  //         if (error) {
  //           toast.error("Failed to upload.");
  //         }
  //       }
  //     });
  //   } else {
  //     toast.warning("Please fill all datas");
  //   }
  // };
  const handleUploads = async () => {
    // Validate inputs
    if (uppy.getFiles().length !== 0) {
      const randomUUID = crypto.randomUUID();

      uppy.setFileMeta(uppy.getFiles()[0].id, {
        objectName: user?.id + "/" + randomUUID + "/" + uppy.getFiles()[0].name,
      });

      uppy.upload().then(async () => {
        const productName = productNameRef.current.value.trim();
        const description = inputRef.current.value.trim();
        const price = parseFloat(priceRef.current.value);
        const rating = parseInt(ratingRef.current.value);
        const category = categoryRef.current.value;

        // Check if required fields are empty
        if (!productName || !description || isNaN(price) || isNaN(rating)) {
          toast.warning("Please fill all fields correctly.");
          return;
        }

        try {
          // Update the database
          const { error } = await supabase
            .from("posts")
            .update({
              product_name: productName,
              description: description,
              price: price,
              rating: rating,
              category: category,
            })
            .eq("id", randomUUID);

          if (error) {
            toast.error("Failed to upload.");
          } else {
            toast.success("Upload successful.");
            router.refresh();
          }
        } catch (error) {
          console.error("Error uploading:", error);
          toast.error("Failed to upload.");
        }
      });
    } else {
      toast.warning("Please select a file.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button> Upload </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Daily Upload</DialogTitle>
          <DialogDescription>Select your photo.</DialogDescription>
        </DialogHeader>
        <div className="space-y-5 ">
          <Dashboard uppy={uppy} hideUploadButton />

          <div className="grid grid-cols-2 gap-3">
            <Input placeholder="Product Name" ref={productNameRef} />
            <Input placeholder="Description" ref={inputRef} />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Input placeholder="Price" type="number" ref={priceRef} />
            <Input placeholder="Rating" type="number" ref={ratingRef} />
            <select
              ref={categoryRef}
              className="bg-transparent border border-2 rounded-md p-1"
            >
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kids">Kids</option>
            </select>
          </div>

          <Button className="w-full" onClick={handleUploads}>
            Upload
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default Uploader;
