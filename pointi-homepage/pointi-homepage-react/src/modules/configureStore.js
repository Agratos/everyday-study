import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./rootReducer";

const persistConfig = {
    ket:'root',
    storage,
}

export const store= createStore(pReducer, middleware);
export const persist = persistStore(store);