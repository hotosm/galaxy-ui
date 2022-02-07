import { createSlice } from "@reduxjs/toolkit";
import * as safeStorage from "../../utils/safeStorage";

export const AuthorisationSlice = createSlice({
  name: "auth",
  initialState: {
    loggedIn: false,
    accessToken: null,
  },
  reducers: {
    setLoggedIn: (state, action) => {
      safeStorage.setItem("loggedIn", action.payload);
      state.loggedIn = action.payload;
    },
    setToken: (state, action) => {
      const token = action.payload;
      safeStorage.setItem("token", token);
      state.accessToken = token;
    },
    removeToken: (state) => {
      safeStorage.removeItem("token");
      state.accessToken = null;
    },
  },
});

export const { setToken, removeToken, setLoggedIn } =
  AuthorisationSlice.actions;

export default AuthorisationSlice.reducer;
