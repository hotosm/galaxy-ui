import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authorisationSlice';

export default configureStore({
    reducer: {
        auth: authReducer
    },
});
