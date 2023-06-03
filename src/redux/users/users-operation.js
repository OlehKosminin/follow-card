import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../shared/services/cards";

export const getAllUsers = createAsyncThunk(
  "user/all",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.getAllUsers(data);
      return result;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
);

export const updUserFollowing = createAsyncThunk(
  "user/updFollowing",
  async (data, { rejectWithValue }) => {
    try {
      console.log("data: ", data);
      const result = await api.updUserFollowing(data);
      return result;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
);
