import { createSlice } from "@reduxjs/toolkit";

export const MapathonFormSlice = createSlice({
  name: "mapathon",
  initialState: {
    triggerSubmit: false,
    isLoading: false,
    downloadError: null,
  },
  reducers: {
    setTriggerSubmit: (state, action) => {
      state.triggerSubmit = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setDownloadError: (state, action) => {
      state.downloadError = action.payload;
    },
  },
});

export const { setTriggerSubmit, setLoading, setDownloadError } =
  MapathonFormSlice.actions;

export default MapathonFormSlice.reducer;
