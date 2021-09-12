import React, { useEffect, useState } from 'react'
import {firebase} from '../firebase/firebaseConfig'
import { NavbarH } from '../components/Navbars/NavbarH'
import { useDispatch } from 'react-redux'
import { login } from '../actions/actions'
import Navbar from '../components/Navbars/Navbar'

export const Verificar = () => {

    const dispatch = useDispatch();
    const [isLooggedIn, setsIsLoogedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
          if (user?.uid) {
            dispatch(login(user.uid, user.displayName));
            setsIsLoogedIn(true);
            <Navbar />
          } else {
            setsIsLoogedIn(false);
            <NavbarH />
          }
          
        });
      }, []);
      return (
        <div>
        {
            isLooggedIn ? <Navbar/> : <NavbarH />
        }
        </div>
      )

}
