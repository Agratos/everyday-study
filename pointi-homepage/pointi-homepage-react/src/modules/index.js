import { combineReducers } from 'redux';
import setDataReducer from './data';
import setDeviceReducer from './device';

const rootReducer = combineReducers({
    setDataReducer,
    setDeviceReducer,
})

export default rootReducer;