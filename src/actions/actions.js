import {types} from '../types/types';
import { firebase , google } from '../firebase/firebaseConfig'

export const loginGoogle = ()=>{

    return(dispatch) =>{
        firebase.auth().signInWithPopup(google)
        .then(({user}) =>{
            console.log (user);
            dispatch(login(user.uid, user.displayname))
        })
    }
}

export const login = (id, displayname) => {

    return{
        type: types.login,
        payload:{
            id,
            displayname
        }
    }
}