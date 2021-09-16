import React from 'react'
import user from '../assets/user.jpg'
import styled from 'styled-components'
import plus from '../assets/anadir.png'
import '../style/main.css'
import Navbar from './Navbars/Navbar'
import { useSelector } from 'react-redux'


const User = styled.img`
    width: 20%;
    height: 20%;
    border-radius: 50%;
`

const Perfil = () => {
    const { name, email, image } = useSelector((state) => state.auth);

    return (
        <>
       
        <div className="container text-center py-2 w-50 content">
            
            <h3 className="mb-5">Perfil</h3>
            <div className="mt-5 d-flex align-items-center justify-content-center">
                <User src={image} alt="user" className="me-3" />
             <div>
                <p>{name}</p>
                <p>{email}</p>
               
                </div>   
            </div>

            <div className="mt-5 text-center d-flex flex-column align-items-center">
                <div className="mb-4 profile me-4">
                    <img src={plus} alt="" className="me-3" />
                    <p className="fs-6 fw-bold">Citas Medicas</p>
                </div>

                <div className="profile ms-2">
                    <img src={plus} alt="" className="me-3" />
                    <p className="fs-6 fw-bold">Diagnóstico médico</p>
                </div>
                    
                
                
            </div>
        </div>
        
        </>
    )
}

export default Perfil
