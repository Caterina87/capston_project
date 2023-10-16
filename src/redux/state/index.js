import { configureStore, combineReducers } from "@reduxjs/toolkit";

import getLawyers from "../reducers/lawyers";

import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import getArticles from "../reducers/articles";
import appointmentReducer from "../reducers/appointments";

const rootReducer = combineReducers({
  getLawyers: getLawyers,
  getArticles: getArticles,
  appointmentReducer: appointmentReducer,
});

const persistConfig = { key: "root", storage };

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const profileResult = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(profileResult);
