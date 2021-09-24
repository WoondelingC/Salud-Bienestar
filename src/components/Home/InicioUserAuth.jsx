import React from 'react'
/*IMAGENES*/
import icon from '../../assets/agenda.png'
import iconOne from '../../assets/cosecha.png'
import iconTwo from '../../assets/ejercicio.png'
import iconThree from '../../assets/338172.png'
import iconFour from '../../assets/descanso.png'
import iconFive from '../../assets/salud.png'
import iconSix from '../../assets/equipo-medico.png'
import iconSeven from '../../assets/2913008.png'
import contacto from '../../assets/contacto.png'
import user from '../../assets/3094845.png'
import '../../style/style.css'
import '../../style/animation.css'
import { Link } from "react-router-dom";
/*COMPONENTES*/
import { Footer } from './Footer'
import { useSelector } from "react-redux";
import styled from 'styled-components';

const Title = styled.h2`
    color: #ffffff;
    font-weight: bold;
    background: #0095ff6b;
    padding: 25px;
    text-align: center;
    border-radius: 20px;
    width: fit-content;
    margin: 0px auto;
    margin-top: 45px;
    margin-bottom: 58px;

  `;









export const InicioUserAuth = () => {

    const { name } = useSelector((state) => state.auth);
    return (
        <div className="container-fluid">
         
            <Title>¡Hola!, Bienvenido {name}</Title>
            <div className="container__Agendar-cita">
                <div className="container__Agendar-cita--titleImg">
                    <img src={icon} alt="Libreta-De-Agendas" />
                    <Link to="/auth/login"><h1>Agenda tu cita</h1></Link>
                </div>
                <p>➤ Agende su cita con algunos de nuestros asesores de salud</p>
            </div>

            <div className="container__categorias--tips">
                <div className="grid categorias">
                    <div className="g-col-4">
                        <Link to="/auth/Tips" className="ov-btn-slide-right"><h2>Alimentación</h2></Link>
                        <img src={iconOne} alt="Cosecha" />
                    </div>
                    <div className="g-col-4">
                    <Link to="/auth/Tips" className="ov-btn-slide-right"><h2>Ejercicios</h2></Link>
                        <img src={iconTwo} alt="Ejercicio" />
                    </div>
                    <div className="g-col-4">
                    <Link to="/auth/Tips" className="ov-btn-slide-right"><h2>Paz mental</h2></Link>
                        <img src={iconThree} alt="Paz-mental" />
                    </div>
                    <div className="g-col-4">
                    <Link to="/auth/Tips" className="ov-btn-slide-right"><h2>Tu descanso</h2></Link>
                        <img src={iconFour} alt="Descanso"/>
                    </div>
                </div>
            </div>{/*fin container categorias */}

            <div className="container__QuienesSomos">
                <div className="container__QuienesSomos--img">
                <img src={user} alt="usuarios" />
                <h2>¿Quienes somos?</h2>
                </div>
                
                <p>Salud y bienestar, presta servicios de manera virtual, con distintos servicios y especializaciones.

                Esto se fundamento en un modelo de salud centrado en el usuario, el cual lleva procesos de manera fácil y rápida. Nuestros clientes nos recomiendan y disfrutan de nuestro servicio y la comodidad de nuestra página.

                Nos encontramos en la capital de Colombia/Bogotá, contamos con citas directamente a través de Zoom, con los especialistas que te brindaran todo el asesoramiento adecuado a tu necesidad.</p>
            </div>

            
            <div className="container__categorias--servicios">
                <h1>Servicios</h1>
                <div className="grid categorias--servicios">
                    <div className="g-col-4 categorias--servicios">

                        <img src={iconFive} alt="medicina" id="img-servicios"/>
                        <Link  to="/auth/Servicios"><h2>Medicina general</h2></Link>

                    </div>
                    <div className="g-col-4 categorias--servicios">

                        <img src={iconSix} alt="doctor" id="img-servicios"/>
                        <Link  to="/auth/Servicios"><h2>Especialidades</h2></Link>

                    </div>
                    <div className="g-col-4 categorias--servicios">

                        <img src={iconSeven} alt="psicologia" id="img-servicios"/>
                        <Link  to="/auth/Servicios"><h2>Psicología</h2></Link>

                    </div>
                </div>
            </div>{/*fin container categorias servicios*/}

            <div className="container__contacto">
                <h1>Contactanos</h1>

                <div className="container contacto--p">
                    <div className="row">
                        <div className="col contacto">
                            <h2>¡Desde la comodidad de tu casa puedes comunicarte con un asesor para agendar tu cita!</h2>
                            <p>Bogotá D.C</p>
                            <p>+57 38434834</p>
                        </div>
                        <div className="col contacto">
                            <img src={contacto} alt="contacto" />
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>/*Fin container fluid */
    )
}
