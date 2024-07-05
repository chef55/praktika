import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux"
import {configureStore} from "@reduxjs/toolkit";
import ioReducer from "./slices/inout.js"

const store=configureStore({
  reducer:{
    inout: ioReducer,
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
