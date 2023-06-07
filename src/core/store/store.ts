import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import phoneSlicer from "../../feature/phone/redux/phone.slice";

export const store = configureStore({
  reducer: {
    phone: phoneSlicer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
