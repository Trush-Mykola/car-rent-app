import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { configureStore } from "@reduxjs/toolkit";
import { catalogCarReducer } from "./catalogCars/slice";
import { timerReducer } from "./timer/slice";
import { carDetailsReducer } from "./carDetails/carDetailsSlice";

const carsPeristConfig = {
  key: "favoritesCars",
  storage,
  whitelist: ["favoritesCars"],
};

export const store = configureStore({
  reducer: {
    catalog: persistReducer(carsPeristConfig, catalogCarReducer),
    timerValue: timerReducer,
    carDetails: carDetailsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
