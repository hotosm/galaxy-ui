import { createSlice } from "@reduxjs/toolkit";

export const AuthorisationSlice = createSlice({
  name: 'auth',
  initialState: {
    loggedIn: false,
    accessToken: null
  },
  reducers: {
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
    setToken: (state, action) => {
      state.accessToken = action.payload["access_token"];
    },
    removeToken: (state) => {
      state.accessToken = null;
    }
  }
});

export const { setToken, removeToken, setLoggedIn } = AuthorisationSlice.actions;

export default AuthorisationSlice.reducer;
