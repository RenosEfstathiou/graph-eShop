import { createAsyncThunk } from "@reduxjs/toolkit";
import { IThunk } from "../../model/Common";
import { fetchProducts } from "./api";

export const fetchProductsAsync = createAsyncThunk<any, void, IThunk>(
  "fetchProductsAsync/fetchProducts",
  async (_, thunkApi) => {
    const res = await fetchProducts();

    if (res?.status >= 400) {
      return thunkApi.rejectWithValue(res.data);
    } else {
      return res.data;
    }
  }
);
