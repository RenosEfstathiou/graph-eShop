import { combineReducers } from "@reduxjs/toolkit";

import { products } from "./products";
import { cart } from "./cart";

/**
 * Root reducer
 */
const rootReducer = combineReducers({
  products,
  cart,
});

export default rootReducer;
export type RootReducer = ReturnType<typeof rootReducer>;
