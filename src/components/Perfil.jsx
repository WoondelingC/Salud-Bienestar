import React from 'react'
import user from '../assets/user.jpg'
import styled from 'styled-components'
import plus from '../assets/anadir.png'
import '../style/main.css'
import Navbar from './Navbars/Navbar'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const User = styled.img`
    width: 20%;
    height: 20%;
    border-radius: 50%;
`

const Perfil = () => {
    const { name, email, image } = useSelector((state) => state.auth);

    return (
        <>
        <Navbar/>
        <div className="container text-center py-2 w-50 content">
            
            <h3 className="mb-5">Perfil</h3>
            <div className="mt-5">
                <User src={image} alt="user" className="mb-3" />
             <div>
                <p>{name}</p>
                <p>{email}</p>
                </div>   
            </div>

            <div className="mt-5 d-flex flex-column align-items-center">
                <div className="mb-4 profile">
                    <img src={plus} alt="" className="me-3" />

                     <p className="fs-5 fw-bold">
                        <Link className="text-decoration-none" to="/listar">Citas Medicas</Link>
                        </p>
                </div>

                <div className="profile ms-5">
                    <img src={plus} alt="" className="me-3" />
                    <p className="fs-5 fw-bold"> <Link className="text-decoration-none" to="/agendar">Diagnóstico médico</Link></p>
                </div>
                    
                
                
            </div>
        </div>
        
        </>
    )
}

export default Perfil
