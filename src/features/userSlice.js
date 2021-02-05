import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state) => {
      state.value += 1;
    },
    logout: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login, logout } = counterSlice.actions;

export const selectUser = (state) => state.user.user;

export default counterSlice.reducer;