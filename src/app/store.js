import { configureStore } from "@reduxjs/toolkit";
import { saveState, loadState } from "./state";
import authReducer from "../features/auth/authorisationSlice";
import formReducer from "../features/form/formDataSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    form: formReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});
export default store;
