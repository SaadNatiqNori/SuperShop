import {
  pendingProductAction,
  pendingAddProductAction,
  resolveIndex,
  resolveFilteredIndex,
  resolveGetOneProduct,
  resolveStore,
  resolveCloseProductDetailsModalAction,
  resolveCloseAddProductModalAction,
  resolveOpenAddProductModalAction,
  rejectProductAction,
} from "../slices/ProductsSlice.js";

// Get All Products
export const indexProducts = async (dispatch) => {
  dispatch(pendingProductAction());
  const res = await fetch(
    `${import.meta.env.VITE_REACT_APP_BASE_API_URL}/products`
  );
  const data = await res.json();
  try {
    dispatch(resolveIndex(data));
  } catch (error) {
    dispatch(rejectProductAction());
  }
};

// Get All Filtered Products
export const indexFilteredProducts = async (sortBy, dispatch) => {
  dispatch(pendingProductAction());
  dispatch(resolveFilteredIndex(sortBy));
};

// Get One Product
export const getOneProduct = async (id, dispatch) => {
  dispatch(pendingProductAction());
  const res = await fetch(
    `${import.meta.env.VITE_REACT_APP_BASE_API_URL}/products/${id}`
  );
  const data = await res.json();
  try {
    dispatch(resolveGetOneProduct(data));
    return data;
  } catch (error) {
    dispatch(rejectProductAction());
  }
};

// Close Add Product Modal
export const closeAddProductModal = async (value, dispatch) => {
  dispatch(resolveCloseAddProductModalAction(value));
};
// Open Add Product Modal
export const openAddProductModal = async (value, dispatch) => {
  dispatch(resolveOpenAddProductModalAction(value));
};

// Close Product Details Modal & Reset Value
export const closeProductDetailsModal = async (value, dispatch) => {
  dispatch(resolveCloseProductDetailsModalAction(value));
};

// Adding New Product
export const storeProduct = async (productData, dispatch) => {
  dispatch(pendingAddProductAction());
  const res = await fetch(
    `${import.meta.env.VITE_REACT_APP_BASE_API_URL}/products`,
    {
      method: "POST",
      body: JSON.stringify(productData),
    }
  );
  const data = await res.json();
  console.log(data);
  try {
    dispatch(resolveStore(productData));
  } catch (error) {
    dispatch(rejectProductAction());
  }
};
