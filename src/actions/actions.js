import { types } from "../types/types";
import { firebase, google } from "../firebase/firebaseConfig";
import Swal from "sweetalert2";
import { finishLoading, startLoading } from "./uiErrors";


export const startGoogleLogin = () => {
  return (dispatch) => {

      firebase.auth().signInWithPopup(google)
          .then(async({ user }) => {
              
              dispatch(
                  login(user.uid, user.displayName,user.email,user.photoURL)
                  
              )
          }).catch(e => {
            console.log(e);
            
        })
  }

  }


  
export const startLoginEmailPassword = (email, password) => {
  return async(dispatch) => {
      return firebase.auth().signInWithEmailAndPassword(email, password)
          .then(({ user }) => {
              dispatch(startLoading())
              dispatch(login(user.uid, user.displayName,user.photoURL));
          })
          .catch(e => {
              console.log(e);
              dispatch(finishLoading)
          })
  }
}


export const startRegisterWithEmailPasswordName = (email, password, name, urlImage) => {
  return (dispatch) => {

      firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(async ({ user }) => {

            await user.updateProfile({ displayName: name,photoURL: urlImage });

              dispatch(
                login(user.uid, user.displayName,user.photoURL)
              );
              console.log(user)
              Swal.fire({
                  position: 'top-end',
                  text: 'Usuario Creado',
                  icon: 'success',
                  title:  user.displayName,
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

export const login = (uid, displayName,email,image) => ({
  type: types.login,
  payload: {
      uid,
      displayName,
      email,
      image
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