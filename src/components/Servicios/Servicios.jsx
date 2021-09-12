import React, { useEffect, useState } from 'react'
import { NavbarH } from '../Home/NavbarH'
import doctora from '../../assets/nurse-2019420_960_720.webp'
import Navbar from '../Navbars/Navbar'
import { useDispatch } from 'react-redux'
import {firebase} from '../../firebase/firebaseConfig'
import { login } from '../../actions/actions'


export const Servicios = () => {

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
            
            <section className="Servicios">
                <div className="Servicios__contenedor--title">
                    <h1>Servicios</h1>
                    <img src={doctora} alt="doctora"/>
                </div>
                <p>Contamos con una alta  experiencia para nuestros usuarios, espelizaciones en psicologia y nutrición , 
                también bienestar y ayuda para el que más lo necesite.</p>
            </section>

        </div>
    )
}
