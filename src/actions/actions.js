import { types } from "../types/types";
import { firebase, google } from "../firebase/firebaseConfig";
import Swal from "sweetalert2";
import { finishLoading, startLoading } from "./uiErrors";

/*INICIO DE SESION CON GOOGLE*/
export const startGoogleLogin = () => {
  return (dispatch) => {

    firebase.auth().signInWithPopup(google)
      .then(({ user }) => {
        dispatch(startLoading())
        dispatch(
          login(user.uid, user.displayName)

        )
      });

  }
}

/*INICIO DE SESION NORMAL*/
export const startLoginEmailPassword = (email, password) => {
  return async (dispatch) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(startLoading())
        dispatch(login(user.uid, user.displayName));
      })
      .catch(e => {
        console.log(e);
        dispatch(finishLoading)
      })
  }
}

/*REGISTRARSE*/
export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {

        await user.updateProfile({ displayName: name });

        dispatch(
          login(user.uid, user.displayName)
        );
        console.log(user)
        Swal.fire({
          position: 'top-end',
          text: 'Usuario Creado',
          icon: 'success',
          title: user.displayName,
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch(e => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: e,
          footer: ''
        })

      })

  }
}

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName
  }
});


export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
  }
}


export const logout = () => ({
  type: types.logout
})