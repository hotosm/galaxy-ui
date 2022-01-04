import { configureStore } from "@reduxjs/toolkit";
import { saveState, loadState } from "./state";
import authReducer from '../features/auth/authorisationSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});
export default store;
