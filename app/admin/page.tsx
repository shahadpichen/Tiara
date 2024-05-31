import React from "react";
import ProductTable from "../../components/ProductTable";
import Uploader from "@/components/Uploader";

function AdminPanel() {
  return (
    <main className="m-10 flex flex-col gap-10">
      <div>
        <h1 className="text-2xl font-bold">Admin Portal</h1>
        <p className="text-sm text-slate-300">
          Click upload to add items to the list.
        </p>
      </div>
      <Uploader />
      <ProductTable />
    </main>
  );
}

export default AdminPanel;
