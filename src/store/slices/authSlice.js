import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    isLoggedIn: false,
  },
  reducers: {
    login: (state, { payload }) => {
      state.isLoggedIn = true;
      state.user = { ...payload };
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = {};
    },
  },
});

export default authSlice.reducer;

export const { login, logout } = authSlice.actions;
