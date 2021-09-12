import React, { useEffect, useState } from 'react'
import { NavbarH } from '../Home/NavbarH'
import Navbar from '../Navbars/Navbar'
import {firebase} from '../../firebase/firebaseConfig'
import { login } from '../../actions/actions'
import { useDispatch } from 'react-redux'

export const Tips = () => {
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
            <h2>Tips de salud por hacer</h2>
        </div>
    )
}
