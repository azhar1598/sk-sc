import ProductsListing from "@/app/(dashboard)/products/ProductsListing";
import React, { Suspense } from "react";
import AddCategoryForm from "./AddCategoryForm";

function CategoryAddPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AddCategoryForm />
    </Suspense>
  );
}

export default CategoryAddPage;
