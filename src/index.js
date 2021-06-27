import React from 'react';
import ReactDOM from 'react-dom';
import './GlobalStyle.css';
import App from './common/App';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux";


ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
   </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

