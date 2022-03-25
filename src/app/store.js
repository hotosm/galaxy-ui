import { configureStore } from "@reduxjs/toolkit";
import { saveState, loadState } from "./state";
import authReducer from "../features/auth/authorisationSlice";
import mapathonReducer from "../features/form/formSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    mapathon: mapathonReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});
export default store;
