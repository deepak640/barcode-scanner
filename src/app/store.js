import { configureStore } from "@reduxjs/toolkit";
import uploadreducer from "../func/Slice";

export const store = configureStore({
  reducer: {
    upload: uploadreducer,
  },
});
