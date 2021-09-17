import React from 'react'
import { Verificar } from '../../helpers/Verificar'
export const Tips = () => {
      
    return (

        <div>
        {/*VERIFICA SI ESTA LOGUEADO O NO , Y ME MUESTRA EL NAVBAR CORRECTO */}
        <Verificar />

            <h2>Tips de salud por hacer</h2>
        </div>
    )
}
