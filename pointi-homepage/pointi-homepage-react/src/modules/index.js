import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import setDataReducer from './data';
import setDeviceReducer from './device';
import setChangeReducer from './change';

const persistConfig = {
    key:'root',
    storage,
}

export const rootReducer = combineReducers({
    setDataReducer,
    setDeviceReducer,
    setChangeReducer,
})

export default persistReducer(persistConfig, rootReducer);