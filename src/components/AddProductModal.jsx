import React, { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import {
  closeAddProductModal,
  storeProduct,
} from "../store/services/ProductsService";
// My Styles
import APMS from "../assets/css/components/AddProductModalStyles.module.css";
// Import Icons & Images
import closeIcon from "../assets/icons/close.png";

export default function AddProductModal() {
  const dispatch = useDispatch();
  // Destructuring This Variables From (ProductsSlice)
  const { addProductLoading } = useReducer((state) => state.productsReducer);
  // Close The Modal By Redux
  const closeModal = () => {
    closeAddProductModal(false, dispatch);
  };

  // Handle Set Product Data Before Sending
  const [productData, setProductData] = useState({
    title: "",
    price: null,
    description: "",
    image: "",
    category: "",
  });
  const handleSetProductData = (event) => {
    const { name, value } = event.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };
  // handle Add Product Function
  const handleAddProduct = () => {
    storeProduct(productData, dispatch);
  };

  return (
    <div className={APMS.modal}>
      <div className={APMS.backdrop}></div>
      <div className={APMS.modalContent}>
        <div className={APMS.modalHead}>
          <h3>
            <b>Add New Product</b>
          </h3>
          <img
            src={closeIcon}
            width={20}
            height={20}
            alt="close-modal"
            onClick={closeModal}
          />
        </div>
        <div className={APMS.modalBody}>
          <form>
            <div className={APMS.formInput}>
              <label htmlFor="title">
                <b>Title</b>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Product Title ..."
                id="title"
                onChange={handleSetProductData}
                min="2"
                max="100"
                required
              />
            </div>
            <div className={APMS.formInput}>
              <label htmlFor="price">
                <b>Price</b>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Product Price ..."
                id="price"
                onChange={handleSetProductData}
                min="1"
                required
              />
            </div>
            <div className={APMS.formInput}>
              <label htmlFor="description">
                <b>Description</b>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Product Description ..."
                id="description"
                onChange={handleSetProductData}
                min="2"
                max="900"
                required
              />
            </div>
            <div className={APMS.formInput}>
              <label htmlFor="image">
                <b>Image</b>
              </label>
              <input
                type="url"
                name="image"
                placeholder="Product Image URL"
                id="image"
                onChange={handleSetProductData}
                min="2"
                max="900"
                required
              />
            </div>
            <div className={APMS.formInput}>
              <label htmlFor="category">
                <b>Category</b>
              </label>
              <input
                type="text"
                name="category"
                placeholder="Product Category"
                id="category"
                onChange={handleSetProductData}
                min="2"
                max="100"
                required
              />
            </div>
          </form>
        </div>
        <div className={APMS.modalFooter}>
          <button className={APMS.cancleButton} onClick={closeModal}>
            Cancle
          </button>
          <button
            onClick={handleAddProduct}
            className={APMS.addButton}
            disabled={
              addProductLoading ||
              productData.title.length < 1 ||
              productData.price == 0 ||
              productData.description.length < 1 ||
              productData.image.length < 1 ||
              productData.category.length < 1
            }
          >
            {addProductLoading ? "Adding..." : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}
