import React, { useEffect, useState } from 'react'
import { firebase } from '../firebase/firebaseConfig'
import { useDispatch } from 'react-redux'
import { login } from '../actions/actions'
import  NavarInicio  from '../components/Navbars/NavbarInicio'
import Navbar from '../components/Navbars/Navbar'

export const Verificar = () => {

    const dispatch = useDispatch();
    const [isLooggedIn, setsIsLoogedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName, user.email, user.photoURL));
                setsIsLoogedIn(true);
                <Navbar />
            } else {
                setsIsLoogedIn(false);
                <NavarInicio />
            }

        });
    }, [ dispatch]);
    return (
        <div>
            {
                isLooggedIn ? <Navbar /> : <NavarInicio />
            }
        </div>
    )

}
