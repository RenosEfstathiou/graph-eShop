import type { PreloadedState } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useTypedSelector,
} from "react-redux";

import rootReducer from "../entities";

export const store = configureStore({
  reducer: rootReducer,
  devTools:
    process.env.NODE_ENV && process.env.NODE_ENV === "development"
      ? true
      : false,
  // customizing-the-included-middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const preloadedStore = (preloadedState?: PreloadedState<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    devTools:
      process.env.NODE_ENV && process.env.NODE_ENV === "development"
        ? true
        : false,
    preloadedState,
    // customizing-the-included-middleware
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });
  return store;
};

export type AppStore = ReturnType<typeof preloadedStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useDispatch: () => AppDispatch = useAppDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = useTypedSelector;
export default store;
