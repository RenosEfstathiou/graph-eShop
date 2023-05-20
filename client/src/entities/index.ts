import { combineReducers } from "@reduxjs/toolkit";

import { products } from "./products";

/**
 * Root reducer
 */
const rootReducer = combineReducers({
  products,
});

export default rootReducer;
export type RootReducer = ReturnType<typeof rootReducer>;
