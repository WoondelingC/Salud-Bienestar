import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Verificar } from '../../helpers/verificar'

export const Tips = () => {
    const dispatch = useDispatch();
    const [isLooggedIn, setsIsLoogedIn] = useState(false);

    

      
    return (
        <div>
           <Verificar />
            <h2>Tips de salud por hacer</h2>
        </div>
    )
}
