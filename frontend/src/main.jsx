import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Router from './router.jsx';
import './index.css';
import { store } from './store.js';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Router />
    </Provider>
  </React.StrictMode>
);
