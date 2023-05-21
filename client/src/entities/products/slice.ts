import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";
import { APIStatuses, IFetchError } from "../../model/Common";
import { fetchProductsAsync } from "./asyncThunks";
import { Product } from "../../model/Product";

export interface IProductsSliceInitialState {
  products: Array<Product>;
  productsStatus: APIStatuses;
  productsError: IFetchError;
}

const initialState: IProductsSliceInitialState = {
  products: {} as Array<Product>,
  productsStatus: APIStatuses.Idle,
  productsError: { message: "" },
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductsAsync.pending, (state) => {
      state.productsStatus = APIStatuses.Pending;
    });
    builder.addCase(fetchProductsAsync.fulfilled, (state, { payload }) => {
      state.productsStatus = APIStatuses.Fulfilled;
      state.products = payload.data.products;
    });
    builder.addCase(fetchProductsAsync.rejected, (state, { meta, payload }) => {
      state.productsStatus = APIStatuses.Rejected;
      state.productsError.message =
        "Could not fetch data. Please refresh to try again.";
    });
  },
});

/**
 * export actions
 */
export const {} = productsSlice.actions;

/**
 * export selectors
 */

export const selectProducts = ({ products }: RootState) => products.products;
export const selectProductsStatus = ({ products }: RootState) =>
  products.productsStatus;

/**
 * export reducer
 */
export default productsSlice.reducer;
