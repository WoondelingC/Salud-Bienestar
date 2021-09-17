import React from 'react'
import { useSelector } from "react-redux";
import '../style/admin.css'

export const InicioAdmin = () => {

    const { name } = useSelector((state) => state.auth);
    return (
        <div id="contenedor-Indexadmin">
            <h1>Doctor/a. {name}</h1>
        </div>
    )
}
