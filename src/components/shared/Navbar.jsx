import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// My Styles
import NS from "../../assets/css/components/shared/NavbarStyles.module.css";
// My Components
import AddProductModal from "../AddProductModal";
import {
  indexFilteredProducts,
  openAddProductModal,
} from "../../store/services/ProductsService";

export default function Navbar() {
  const dispatch = useDispatch();
  // Destructuring This Variables From (ProductsSlice)
  const { showAddProductModal } = useSelector((state) => state.productsReducer);
  // Sorting Variables
  const [sortBy, setSortBy] = useState("normal");

  // Open Add Product Modal By Redux
  const handleOpenAddProductModal = () => {
    openAddProductModal(true, dispatch);
  };

  // On Select Sort Option
  const handleSort = (event) => {
    setSortBy(event.target.value);
    indexFilteredProducts(event.target.value, dispatch);
  };

  return (
    <>
      <div className={NS.navbar}>
        <h2>
          <b>All Products</b>
        </h2>
        <div className={NS.filter}>
          <p>Price sorting</p>
          <select name="sort" id="sort" onChange={handleSort}>
            <option value="normal">Normal</option>
            <option value="htl">High to low</option>
            <option value="lth">Low to high</option>
          </select>
          {/* Add New Product Button */}
          <button
            className={NS.addNewProduct}
            onClick={() => {
              handleOpenAddProductModal();
            }}
          >
            <span> + </span> Add new product
          </button>
        </div>
      </div>
      {showAddProductModal ? <AddProductModal /> : ""}
    </>
  );
}
