import React from 'react'
import styled from 'styled-components'
import user from '../assets/userProfile.png'
import emailicon from '../assets/email.png'
import simbolo from '../assets/simbolo.png'
import '../style/main.css'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";

const User = styled.img`
width: 155px;
height: 156px;
border-radius: 104px;
`

const Perfil = () => {
    const { name, email, image, uid } = useSelector((state) => state.auth);

    return (
        <>

            <div className="container text-center py-2 w-50 content">

                <h3 className="mb-5">Mi Perfil</h3>
                <div className="mt-5 d-flex align-items-center justify-content-center" id="container__admi-profile">
                    <User src={image} alt="user" className="me-3" />
                    <div>
                        <div className="container-iconText">
                            <img src={user} alt="user-icon" className="img-profile" />
                            <p> {name}</p>
                        </div>
                        <div className="container-iconText">
                            <img src={emailicon} alt="email-icon" className="img-profile" />
                            <p>{email}</p>
                        </div>




                    </div>
                </div>{/*FIN justify-content-center*/}
                {
                    uid === 'vQcQcKWqcgf3Ek41lWuNkDcJ5Ra2' ?
                        <>
                            <div className="mt-5 text-center d-flex flex-column align-items-center">
                                <div className="container-iconText">
                                    <Link to="/listar"><img src={simbolo} alt="" className="img-profile" /></Link>
                                    <p className="fs-6 fw-bold">Ver Control citas</p>
                                </div>

                                <div className="container-iconText">
                                    <Link to="/Historiales"><img src={simbolo} alt="" className="img-profile" /></Link>
                                    <p className="fs-6 fw-bold">Ver Historiales</p>
                                </div>

                                <div className="container-iconText">
                                    <Link to="/Tips"><img src={simbolo} alt="" className="img-profile" /></Link>
                                    <p className="fs-6 fw-bold">Ver Publicaciones</p>
                                </div>



                            </div>{/*fin clase align-items-center */}

                        </>
                        :

                        <>
                            <div className="mt-5 text-center d-flex flex-column align-items-center">
                                <div className="container-iconText">
                                    <Link to="/listar"><img src={simbolo} alt="" className="img-profile" /></Link>
                                    <p className="fs-6 fw-bold">Citas Medicas</p>
                                </div>

                                <div className="container-iconText">
                                    <Link to="/Historial"><img src={simbolo} alt="" className="img-profile" /></Link>
                                    <p className="fs-6 fw-bold">Ir a Historial</p>
                                </div>



                            </div>{/*fin clase align-items-center */}
                        </>

                }

            </div>

        </>
    )
}

export default Perfil
