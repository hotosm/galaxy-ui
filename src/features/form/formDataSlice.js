import { createSlice } from "@reduxjs/toolkit";
import * as safeStorage from '../../utils/safeStorage';

const initialState = {
    projectIds: "",
    hashtags: ""
}

export const FormDataSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setProjectIds: (state, action) => {
      safeStorage.setItem("projectIds", action.payload);
      state.projectIds = action.payload;
    },
    setHashtags: (state, action) => {
      safeStorage.setItem("hashtags", action.payload);
      state.hashtags = action.payload;
    },
  }
});

export const { setProjectIds, setHashtags } = FormDataSlice.actions;

export default FormDataSlice.reducer;
