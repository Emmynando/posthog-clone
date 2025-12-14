import {
  configureStore,
  type Action,
  type ThunkAction,
} from "@reduxjs/toolkit";
import toggleModalReducer from "./features/toggleModal";

export const store = configureStore({
  reducer: {
    toggleModalReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }).concat(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
