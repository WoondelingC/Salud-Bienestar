import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Login from './components/login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


ReactDOM.render(
  <Provider store={store}>
    <Login />
  </Provider> ,
  document.getElementById('root')
);

