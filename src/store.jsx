import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/AuthSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { thunk } from "redux-thunk";


const persistConfig = {
    key: "root",
    storage
}

const rootReducer = combineReducers({
    auth: authReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk)
}) 

export const persistor = persistStore(store)