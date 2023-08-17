import { createSlice } from "@reduxjs/toolkit";

const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    productsCopy: [],
    product: null,
    loading: true,
    addProductLoading: true,
    error: false,
    showModal: false,
    showAddProductModal: false,
  },
  reducers: {
    pendingProductAction: (state) => {
      state.loading = true;
    },
    pendingAddProductAction: (state) => {
      state.showAddProductModal = true;
      state.addProductLoading = true;
    },
    resolveIndex: (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.productsCopy = action.payload;
    },
    resolveFilteredIndex: (state, action) => {
      state.loading = false;
      switch (action.payload) {
        case "htl":
          state.products = state.products.sort(function (a, b) {
            return b.price - a.price;
          });
          break;
        case "lth":
          state.products = state.products.sort(function (a, b) {
            return a.price - b.price;
          });
          break;
        default:
          state.products = state.productsCopy;
          break;
      }
    },
    resolveGetOneProduct: (state, action) => {
      state.loading = false;
      state.product = action.payload;
      state.showModal = true;
    },
    resolveCloseProductDetailsModalAction: (state, action) => {
      state.loading = false;
      state.product = action.payload;
      state.showModal = false;
    },
    resolveCloseAddProductModalAction: (state, action) => {
      state.addProductLoading = false;
      state.showAddProductModal = action.payload;
    },
    resolveOpenAddProductModalAction: (state, action) => {
      state.showAddProductModal = action.payload;
    },
    resolveStore: (state, action) => {
      console.log(action.payload);
      state.products = [...state.products, action.payload];
      state.productsCopy = [...state.products, action.payload];
      state.loading = false;
      state.showAddProductModal = false;
    },
    rejectProductAction: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  pendingProductAction,
  pendingAddProductAction,
  resolveIndex,
  resolveFilteredIndex,
  resolveGetOneProduct,
  resolveCloseProductDetailsModalAction,
  resolveCloseAddProductModalAction,
  resolveOpenAddProductModalAction,
  resolveStore,
  resolveNoResponse,
  rejectProductAction,
} = ProductsSlice.actions;
export default ProductsSlice.reducer;
