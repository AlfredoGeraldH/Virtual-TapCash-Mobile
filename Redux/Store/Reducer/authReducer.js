import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;

      // Save only the token to localStorage
      localStorage.setItem("token", JSON.stringify(action.payload));
    },
    clearToken: (state) => {
      state.token = null;

      localStorage.removeItem("token");
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;
