import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Inicio } from './components/Home/Inicio';
import AppRoutes from './routers/AppRouters';

ReactDOM.render(

    <AppRoutes />
  ,
  document.getElementById('root')
);

