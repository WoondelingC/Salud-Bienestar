import React from 'react'
import user from '../assets/user.jpg'
import styled from 'styled-components'
import plus from '../assets/anadir.png'
import '../style/main.css'
import Navbar from './Navbar'

const User = styled.img`
    width: 45%;
    height: 30%;
    border-radius: 50%;
`

const Perfil = () => {
    return (
        <>
        <Navbar/>
        <div className="container text-center py-5 w-25 border border-1 border-dark content">
            
            <h3 className="mb-5">Perfil</h3>
            <div className="mt-5 d-flex align-items-center">
                <User src={user} alt="user" className="me-3" />
             <div>
                <p>Nombre</p>
                <p>Correo</p>
                <p>Fecha</p>
                </div>   
            </div>

            <div className="mt-5 text-start ms-4">
                <div className="mb-4 profile">
                    <img src={plus} alt="" className="me-3" />
                    <p className="fs-6 fw-bold">Citas Medicas</p>
                </div>

                <div className="profile">
                    <img src={plus} alt="" className="me-3" />
                    <p className="fs-6 fw-bold">Diagnóstico médico</p>
                </div>
                    
                
                
            </div>
        </div>
        </>
    )
}

export default Perfil
