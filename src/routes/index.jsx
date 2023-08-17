import React from "react";
import { Route, Routes } from "react-router-dom";
// Import Pages Here
import LayoutPage from "../pages/LayoutPage";
import NotFoundPage from "./../pages/other/NotFoundPage";
// import HomePage from "../pages/home/HomePage";
import ProductsPage from "../pages/product/ProductsPage";
import NotesPage from "../pages/other/NotesPage";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          {/* start outlets */}
          <Route index element={<ProductsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/notes" element={<NotesPage />} />
        </Route>
        {/* If the URL doesn't match anythingthen show: */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default Routing;
