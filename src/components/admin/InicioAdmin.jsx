import React from 'react'
import { useSelector } from "react-redux";
import styled from 'styled-components';
import cita from '../../assets/citaicon.png';
import publicaciones from '../../assets/publicaciones.png';
import usericon from '../../assets/usericon.png';
import { Link } from "react-router-dom";


const Title = styled.h1`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    font-style: italic;
`;


const H3 = styled.h3`
    font-size: 1.2rem;
`;




export const InicioAdmin = () => {

    const { name } = useSelector((state) => state.auth);
    return (
        <div id="contenedor-Indexadmin">
            <Title>Bienvenido {name}</Title>

            <div className="container__categorias--admin">
                <div className="grid admin">
                    <div className="g-col-4">
                        <Link to="/listar" className="ov-btn-slide-right"><H3>Ver Control de citas</H3></Link>
                        <img src={cita} alt="cita" id="img-admi"/>
                    </div>
                    <div className="g-col-4">
                    <Link to="/agregarpost/" className="ov-btn-slide-right"><H3>Crear publicaciones</H3></Link>
                        <img src={publicaciones} alt="publicaciones" id="img-admi"/>
                    </div>
                    <div className="g-col-4">
                    <Link to="/Historiales" className="ov-btn-slide-right"><H3>Ver historial de usuarios</H3></Link>
                        <img src={usericon} alt="usericon" id="img-admi"/>
                    </div>
                </div>
            </div>{/*fin container categorias */}


        </div>
    )
}
