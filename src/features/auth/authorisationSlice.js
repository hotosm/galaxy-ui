import { createSlice } from "@reduxjs/toolkit";

export const AuthorisationSlice = createSlice({
  name: 'auth',
  initialState: {
    loggedIn: false,
    accessToken: ''
  },
  reducers: {
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
    // setAccessToken: (state, action) => {
    //   state.accessToken = action.payload;
    // },
    setToken: (state) => {
      state.accessToken = 'qwrtafgtg'
    },
    removeToken: (state) => {
      state.accessToken = ''
    }
  }
});

export const { setToken, removeToken, setLoggedIn } = AuthorisationSlice.actions;

export default AuthorisationSlice.reducer;
