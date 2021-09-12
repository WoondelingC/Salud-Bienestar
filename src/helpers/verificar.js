import React, { useEffect, useState } from 'react'
import {firebase} from '../firebase/firebaseConfig'
import { NavbarH } from '../components/Navbars/NavbarH'
import { firebase } from '../firebase/firebaseConfig'
import { useDispatch } from 'react-redux'
import { login } from '../actions/actions'
import { NavbarH } from '../components/Home/NavbarH'
import Navbar from '../components/Navbars/Navbar'

export const Verificar = () => {

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
            {
                isLooggedIn ? <Navbar /> : <NavbarH />
            }
        </div>
      )

}