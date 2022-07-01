import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { authApi } from "../apis/authApi";
import activeChatIdSlice from "../features/activeChatIdSlice";
import authSlice from "../features/authSlice";
import chatSlice from "../features/chatSlice";
import contactSlice from "../features/contactSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducers = combineReducers({
  authSlice,
  contactSlice,
  chatSlice,
   activeChatIdSlice
 });

const persistedReducer = persistReducer(persistConfig, persistedReducers);

const reducers = {
  persistedReducer,
  [authApi.reducerPath]: authApi.reducer,
};

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
export const persistor = persistStore(store);
