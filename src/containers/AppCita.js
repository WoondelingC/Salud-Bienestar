import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Provider } from 'react-redux'
import RouterApp from '../routers/AppRouter';
import { store } from '../store/store'
import {MuiPickersUtilsProvider} from '@material-ui/pickers'
import DateFnUtils from '@date-io/date-fns'
import esLocale from 'date-fns/locale/es'
const AppCita = () => {


  return (

    <Provider store={store}>
      <MuiPickersUtilsProvider utils={DateFnUtils} locale={esLocale}>
      <RouterApp />
</MuiPickersUtilsProvider>
    </Provider>
  );
}

export default AppCita;
