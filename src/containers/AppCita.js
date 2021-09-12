import React from 'react';
import '../index.css'
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
