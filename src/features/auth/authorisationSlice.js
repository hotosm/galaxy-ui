import { createSlice } from "@reduxjs/toolkit";
import * as safeStorage from '../../utils/safeStorage';

export const AuthorisationSlice = createSlice({
  name: 'auth',
  initialState: {
    loggedIn: false,
    accessToken: null,
    authOrigin: "login"
  },
  reducers: {
    setLoggedIn: (state, action) => {
      safeStorage.setItem("loggedIn", action.payload)
      state.loggedIn = action.payload;
    },
    setToken: (state, action) => {
      const token = action.payload["access_token"];
      safeStorage.setItem("token", token);
      state.accessToken = token;
    },
    removeToken: (state) => {
      safeStorage.removeItem("token");
      state.accessToken = null;
    },
    setAuthOrigin: (state, action) => {
      safeStorage.setItem("authOrigin", action.payload);
      state.authOrigin = action.payload;
    }
  }
});

export const { setToken, removeToken, setLoggedIn, setAuthOrigin } = AuthorisationSlice.actions;

export default AuthorisationSlice.reducer;
