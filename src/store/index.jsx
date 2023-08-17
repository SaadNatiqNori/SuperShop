import { configureStore } from "@reduxjs/toolkit";
// Import My Slices to use as Reducer
import ProductsSlice from "./slices/ProductsSlice";

export const store = configureStore({
  reducer: {
    productsReducer: ProductsSlice,
  },
});

export default store;
