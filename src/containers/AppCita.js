import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Provider } from 'react-redux'
import RouterApp from '../routers/AppRouter';
import { store } from '../store/store'
const AppCita = () => {


  return (

    <Provider store={store}>
      <RouterApp />

    </Provider>
  );
}

export default AppCita;
