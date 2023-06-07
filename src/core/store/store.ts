import { configureStore } from "@reduxjs/toolkit";
import characterSlice from "../../got/redux/character.slice";

export const store = configureStore({
  reducer: {
    characters: characterSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
