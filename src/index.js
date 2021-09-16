import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {AppRouters} from './routers/AppRouters';
import './style/style'

ReactDOM.render(
  <Provider store={store}>
    <AppRouters />
  </Provider> ,
  document.getElementById('root')
);

