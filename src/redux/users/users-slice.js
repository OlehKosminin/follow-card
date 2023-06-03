import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers, updUserFollowing } from "./users-operation";

const initialState = {
  cards: [],
  loading: false,
  error: null,
  fullLoad: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (store) => {
        store.loading = true;
        store.error = null;
      })
      .addCase(getAllUsers.fulfilled, (store, { payload }) => {
        if (payload.data.length === 0) {
          store.fullLoad = true;
        }
        store.loading = false;
        store.error = null;
        store.cards = [...store.cards, ...payload.data];
      })
      .addCase(getAllUsers.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(updUserFollowing.pending, (store) => {
        store.loading = true;
        store.error = null;
      })
      .addCase(updUserFollowing.fulfilled, (store) => {
        store.loading = false;
        store.error = null;
      })
      .addCase(updUserFollowing.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});

export default userSlice.reducer;
