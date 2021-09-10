import {types} from '../types/types';
import { firebase , google } from '../firebase/firebaseConfig'
import Swal from 'sweetalert2';
import { finishLoading, startLoading } from './uiErrors';


export const loginEmailPassword = (email, password) => {
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

export const registerWithEmailPasswordName = (email, password, name) => {
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
                    text: 'Usuario Creaso',
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

export const loginGoogle = ()=>{

    return(dispatch) =>{
        firebase.auth().signInWithPopup(google)
        .then(({user}) =>{
            console.log (user);
            dispatch(login(user.uid, user.displayName))
        })
    }
}

export const login = (uid, displayname) => {

    return{
        type: types.login,
        payload:{
            uid,
            displayname
        }
    }
}
