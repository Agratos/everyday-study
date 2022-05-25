import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "modules";

const persistConfig = {
  key: "root",
  storage,
};

export default persistReducer(persistConfig, rootReducer);