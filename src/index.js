import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from "react-router-dom";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.min.css'
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

const root = ReactDOM.createRoot(document.getElementById('root'));

const initialState = {
  categories: [],
  categoriesIsLoading: false,
  products: []
};

const store = configureStore(initialState);
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
