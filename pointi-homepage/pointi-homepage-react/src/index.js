import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async'
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { legacy_createStore as createStore } from 'redux';
import rootReducer from './modules';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { composeWithDevTools } from 'redux-devtools-extension';

import BeforeRendering from 'containers/setting/BeforeRendering';

const rootNode = document.getElementById('root');
const store = createStore(rootReducer,composeWithDevTools());
const persistor = persistStore(store);

ReactDOM.createRoot(rootNode).render(
  <HelmetProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BeforeRendering />
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>  
  </HelmetProvider>
);

reportWebVitals();
