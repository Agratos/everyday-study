# react persist
 - Redux store를 브라우저에서 기본적으로 제공해주는 저장소인 localstorage와 sessionstorage에 저장할 수 있게 해줌
 - 필요한 이유는 새로고침 또는 앱을 종료해도 store가 리셋되는 것을 방지하기 위해 사용

# 사용법
### 1. persist 정의
```
// persistStroe.js 
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "modules"; 

const persistConfig = {
  key: "root",
  storage,
};

export default persistReducer(persistConfig, rootReducer);
```
 - rootReducer에 합쳐두되고 따로 빼서 해두된다
 - localStorage에 저장
```
import storage from 'redux-persist/lib/storage'
```
 - session storage에 저장
```
import storageSession from 'redux-persist/lib/storage/session'
```
 - 조건 추가
```
const persistConfig = {
 ...
 blacklist: ['token'] // 거부
 whitelist: ['user'] // 승낙
}
```
### 2. persist 적용
```
// index.js
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { createStore } from 'redux';
import rootReducer from './modules';

const store = createStore(rootReducer,composeWithDevTools());
const persistor = persistStore(store);

ReactDOM.createRoot(rootNode).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>  
);
```