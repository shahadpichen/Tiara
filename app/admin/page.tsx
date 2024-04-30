import React from "react";
import ProductTable from "../../components/ProductTable";
import Uploader from "@/components/Uploader";

function AdminPanel() {
  return (
    <main className="m-10 flex flex-col gap-10">
      <h1 className="text-2xl font-bold">Admin Portal</h1>
      <Uploader />
      <ProductTable />
    </main>
  );
}

export default AdminPanel;
