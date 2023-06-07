import { configureStore } from "@reduxjs/toolkit";
// import phoneSlicer from "../../feature/phone/redux/phone.slice";

export const store = configureStore({
  reducer: {
    characters: {},
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
