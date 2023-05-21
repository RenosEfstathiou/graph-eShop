import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";

export interface IProductsSliceInitialState {
  products: Array<{ id: number; price: number }>;
}

const initialState: IProductsSliceInitialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      state.products = [...state.products, payload];
    },
  },
});

/**
 * export actions
 */
export const { addProduct } = cartSlice.actions;

/**
 * export selectors
 */

export const selectCartProducts = ({ cart }: RootState) => cart.products;

export const selectCartProductIds = ({ cart }: RootState) =>
  cart.products.map((product) => product.id);

/**
 * export reducer
 */
export default cartSlice.reducer;
