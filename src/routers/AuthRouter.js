import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../components/login/Login";
import Olvido from "../components/login/Olvido";
import Registro from "../components/login/Registro";
import { Servicios } from "../components/Servicios/Servicios";
import {Tips} from '../components/Servicios/Tips'

export const AuthRouter = () => {
  return (
    <div className="auth__main">
      <div>
        <Switch>
          <Route exact path="/auth/login" component={Login} />

          <Route exact path="/auth/registro" component={Registro} />

          <Route exact path="/auth/olvido" component={Olvido} />

          <Route exact path="/auth/Servicios" component={Servicios} />

          <Route exact path="/auth/Tips" component={Tips} />

          <Redirect to="/inicio" />
        </Switch>
      </div>
    </div>
  );
};
