import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Inicio } from "../components/Home/Inicio";
import { Servicios } from "../components/Servicios/Servicios";
import { Tips } from "../components/Servicios/Tips";
import Registro from "../components/login/Registro";
import { login } from "../actions/actions";
import { firebase } from "../firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { PublicRoute } from "./PublicRoute";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import Loading from "../components/Loading";
import { Listar } from "../actions/citaAction";
import ListarCita from "../components/Citas/ListarCita";
import Login from "../components/login/Login";
import Olvido from "../components/login/Olvido";
import { InicioAuth } from "../components/Home/InicioAuth";
import Perfil from "../components/Perfil";

export const AppRouters = () => {
  const [checking, setChecking] = useState(true);
  const [isLooggedIn, setsIsLoogedIn] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName, user.email, user.photoURL));
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

        <PublicRoute exact path="/inicio" component={Inicio} />

        <PublicRoute exact path="/auth/Servicios" component={Servicios} />

        <PublicRoute exact path="/auth/Tips" component={Tips} />

        <PublicRoute exact path="/auth/login" component={Login} />

        <PublicRoute exact path="/auth/registro" component={Registro} />

        <PublicRoute exact path="/auth/olvido" component={Olvido} />

        <PrivateRoute
          exact
          path="/"
          component={InicioAuth}
          isAuthenticated={isLooggedIn}
        />

        <PrivateRoute
          exact
          path="/perfil"
          component={Perfil}
          isAuthenticated={isLooggedIn}
        />

        <PrivateRoute
          exact
          path="/listarCita"
          component={ListarCita}
          isAuthenticated={isLooggedIn}
        />

        <PrivateRoute
          exact
          path="/Tips"
          component={Tips}
          isAuthenticated={isLooggedIn}
        />

        <PrivateRoute
          exact
          path="/Servicios"
          component={Servicios}
          isAuthenticated={isLooggedIn}
        />

        <Route
          component={(props) =>
            isLooggedIn ? <Redirect to="/" /> : <Redirect to="/inicio" />
          }
        />
      </Switch>
    </BrowserRouter>
  );
};
