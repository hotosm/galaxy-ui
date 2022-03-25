import { createSlice } from "@reduxjs/toolkit";

export const MapathonFormSlice = createSlice({
  name: "mapathon",
  initialState: {
    triggerSubmit: false,
    isLoading: false,
  },
  reducers: {
    setTriggerSubmit: (state, action) => {
      state.triggerSubmit = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setTriggerSubmit, setLoading } = MapathonFormSlice.actions;

export default MapathonFormSlice.reducer;
