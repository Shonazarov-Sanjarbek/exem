import { configureStore } from "@reduxjs/toolkit";

import { api } from "./api";
import cartSilice from "./api/slice/cartSilice";

export const store = configureStore({
  reducer: {
    cart: cartSilice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
