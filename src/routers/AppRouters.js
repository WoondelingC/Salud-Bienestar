import React, { useEffect, useState } from "react";

/*FUNCIONAMIENTOS*/
import { firebase } from "../firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { login } from "../actions/actions";

/*RUTAS*/
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { Inicio } from "../components/Home/Inicio";
import { Servicios } from "../components/Servicios/Servicios";
import { Tips } from "../components/Servicios/Tips";
import { InicioAuth } from '../components/Home/InicioAuth'
import Login from "../components/login/Login";
import Olvido from "../components/login/Olvido";
import Registro from "../components/login/Registro";
import Loading from "../components/Loading";
import { Listar } from "../actions/citaAction";
import ListarCita from "../components/Citas/ListarCita";
import Perfil from "../components/Perfil";
import FormCita from "../components/Citas/FormCita";
import EditCita from "../components/Citas/EditCita";
import { Historial } from "../components/Historial";
import EditPost from "../components/posts/EditPost";
import AddPost from "../components/posts/AddPost";
import ListarPost from "../components/posts/ListarPost";
import { Verificar } from "../helpers/verificar";
import DetallesPost from "../components/posts/DetallesPost";

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
     <Verificar />
      <Switch>
     
        <PublicRoute
          path="/auth"
          component={AuthRouter}
          isAuthenticated={isLooggedIn}
        />

        {/*RUTAS PUBLICAS*/}
        <PublicRoute exact path="/inicio" component={Inicio} />

        <PublicRoute exact path="/auth/Servicios" component={Servicios} />

        <PublicRoute exact path="/auth/Tips" component={Tips} />

        <PublicRoute exact path="/auth/login" component={Login} />

        <PublicRoute exact path="/auth/registro" component={Registro} />

        <PublicRoute exact path="/auth/olvido" component={Olvido} />

        {/*RUTAS PRIVADAS*/}
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
          path="/publicacion/:id"
          component={DetallesPost}
          isAuthenticated={isLooggedIn}
        />
        <PrivateRoute
          exact
          path="/listar"
          component={ListarCita}
          isAuthenticated={isLooggedIn}
        />

        <PrivateRoute
          exact
          path="/agendar"
          component={FormCita}
          isAuthenticated={isLooggedIn}
        />

        <PrivateRoute
          exact
          path="/editar/:id"
          component={EditCita}
          isAuthenticated={isLooggedIn}
        />
 <PrivateRoute
          exact
          path="/editarpost/:id"
          component={EditPost}
          isAuthenticated={isLooggedIn}
        />
         <PrivateRoute
          exact
          path="/agregarpost"
          component={AddPost}
          isAuthenticated={isLooggedIn}
        />
         <PrivateRoute
          exact
          path="/posts"
          component={ListarPost}
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
        <PrivateRoute
          exact
          path="/Historial"
          component={Historial}
          isAuthenticated={isLooggedIn}
        />

        <Route
          component={() =>
            isLooggedIn ? <Redirect to="/" /> : <Redirect to="/inicio" />
          }
        />
      </Switch>
    </BrowserRouter>
  );
};
