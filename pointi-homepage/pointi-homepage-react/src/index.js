import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async'
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootNode = document.getElementById('root');
const store = createStore(rootReducer,composeWithDevTools());

//axios.defaults.baseURL = 'http://localhost:3001';

ReactDOM.createRoot(rootNode).render(
  <HelmetProvider>
    <Provider store={store}>
      <App />
    </Provider>  
  </HelmetProvider>
);

reportWebVitals();
