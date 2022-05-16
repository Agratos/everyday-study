import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import setDataReducer from './data';
import setDeviceReducer from './device';

const persistConfig = {
    key:'root',
    storage,
}

export const rootReducer = combineReducers({
    setDataReducer,
    setDeviceReducer,
})

export default persistReducer(persistConfig, rootReducer);