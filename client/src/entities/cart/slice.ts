import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";

export interface IProductsSliceInitialState {
  productsIds: Array<{ id: number; price: number }>;
}

const initialState: IProductsSliceInitialState = {
  productsIds: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      state.productsIds = [...state.productsIds, payload];
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

export const selectProductIds = ({ cart }: RootState) => cart.productsIds;

/**
 * export reducer
 */
export default cartSlice.reducer;
