import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Inicio } from "../components/Home/Inicio";
import { Servicios } from "../components/Servicios/Servicios";
import { Tips } from "../components/Servicios/Tips";
import Registro from "../components/login/Registro";
import { login } from "../actions/actions";
import {firebase} from '../firebase/firebaseConfig'
import { useDispatch } from "react-redux";
import { PublicRoute } from "./PublicRoute";
import { AuthRouter } from './AuthRouter'
import {PrivateRoute} from './PrivateRoute'
import Loading from "../components/Loading";
import { Listar } from "../actions/citaAction";
import ListarCita from '../components/ListarCita'
import Login from "../components/login/Login";

export const AppRouters = () => {
  const [checking, setChecking] = useState(true);
  const [isLooggedIn, setsIsLoogedIn] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setsIsLoogedIn(true);
        dispatch(Listar(user.uid));
      } else {
        setsIsLoogedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking]);

  if (checking) {
    return <Loading />;
  }

    return (
      <BrowserRouter>
        <Switch>
          <PublicRoute 
          path="/auth" 
          component={AuthRouter} 
          isAuthenticated={isLooggedIn} 
          />

          <PublicRoute 
          path="/inicio" 
          component={Inicio} 
           
          />

          <PublicRoute 
          path="/Servicios" 
          component={Servicios} 
          />

          <PublicRoute 
          path="/Tips" 
          component={Tips} 
          />

          <PublicRoute 
            path="/login" 
            component={Login} 
          />

          <PrivateRoute
            exact
            path="/"
            component={ListarCita}
            isAuthenticated={isLooggedIn}
          />
          <Route exact path="/Registro" component={Registro} />
        </Switch>
        <Redirect to="/login" />
      </BrowserRouter>
    );
  }

