import { createSlice } from "@reduxjs/toolkit";

const uploadDataSlice = createSlice({
  name: "uploadData",
  initialState: null,
  reducers: {
    upload(state, { payload }) {
      return payload;
    },
    name(state, { payload }) {
      return payload;
    },
  },
});

export const { upload, name } = uploadDataSlice.actions;
export default uploadDataSlice.reducer;
