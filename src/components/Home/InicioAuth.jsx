import React from 'react'
/*IMAGENES*/

import '../../style/style.css'
/*COMPONENTES*/
import {useSelector } from "react-redux";

import { InicioAdmin } from '../../admin/InicioAdmin'
import { InicioUserAuth } from './InicioUserAuth'

export const InicioAuth = () => {
 
    const { name, uid } = useSelector((state) => state.auth);
    return (
        
     <div>

         {
               uid === 'vQcQcKWqcgf3Ek41lWuNkDcJ5Ra2' ?
               
                <InicioAdmin/>
               :
               <InicioUserAuth/>
        } 
     </div>
    )
}
