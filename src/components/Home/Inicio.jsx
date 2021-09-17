import React from 'react'
/*IMAGENES*/
import icon from '../../assets/agenda.png'
import iconOne from '../../assets/cosecha.png'
import iconTwo from '../../assets/ejercicio.png'
import iconThree from '../../assets/338172.png'
import iconFour from '../../assets/3094845.png'
import iconFive from '../../assets/salud.png'
import iconSix from '../../assets/equipo-medico.png'
import iconSeven from '../../assets/2913008.png'
import contacto from '../../assets/contacto.png'
import '../../style/style.css'

import { Link } from "react-router-dom";
/*COMPONENTES*/
import { NavbarH } from './NavbarH'
import { Footer } from './Footer'
import { Slider } from './Slider'

export const Inicio = () => {
    return (
        <div className="container-fluid">
            

            <header>
                <Slider />
            </header>

            <div className="container__Agendar-cita">
                <div className="container__Agendar-cita--titleImg">
                    <img src={icon} alt="Libreta-De-Agendas" />
                    <Link to="/auth/login"><h1>Agendar Cita</h1></Link>
                </div>
                <p>Agende su cita con algunos de nuestros asesores de salud</p>
            </div>

            <div className="container__categorias--tips">
                <div className="grid categorias">
                    <div className="g-col-4">
                        <Link to="/auth/Tips"><h2>Alimentación Saludable</h2></Link>
                        <img src={iconOne} alt="Cosecha" />
                    </div>
                    <div className="g-col-4">
                    <Link to="/auth/Tips"><h2>Ejercicio fisico</h2></Link>
                        <img src={iconTwo} alt="Ejercicio" />
                    </div>
                    <div className="g-col-4">
                    <Link to="/auth/Tips"><h2>Paz mental</h2></Link>
                        <img src={iconThree} alt="Paz-mental" />
                    </div>
                    <div className="g-col-4">
                    <Link to="/auth/Tips"><h2>Tu descanso</h2></Link>
                        <img src={iconFour} alt="Descanso" />
                    </div>
                </div>
            </div>{/*fin container categorias */}

            <div className="container__categorias--servicios">
                <h1>Servicios</h1>
                <div className="grid categorias--servicios">
                    <div className="g-col-4 categorias--servicios">

                        <img src={iconFive} alt="medicina" />
                        <h2>Medicina general</h2>
                        <p>La Medicina General es el primer nivel de atención médica. La consulta está orientada al abordaje integral
                            del paciente en su aspecto físico, mental y social. </p>
                        <Link  to="/auth/Servicios"><button type="button" className="btn btn-secondary">Ir</button></Link>

                    </div>
                    <div className="g-col-4 categorias--servicios">

                        <img src={iconSix} alt="doctor" />
                        <h2>Especialidades</h2>
                        <p>Esta especialidad médica se centra en el diagnóstico y el tratamiento integral de
                            los pacientes adultos, que en ocasiones se encuentran sin diagnóstico aparente.</p>
                        <Link  to="/auth/Servicios"><button type="button" className="btn btn-secondary">Ir</button></Link>
                    </div>
                    <div className="g-col-4 categorias--servicios">

                        <img src={iconSeven} alt="psicologia" />
                        <h2>Psicología</h2>
                        <p>Agenda tu terapia psicológica online ,tratamientos que te apoyarán en ansiedad depresión ,
                            tristeza, autoestima, autoconfianza de forma dinámica para tu biesnestar.</p>
                        <Link  to="/auth/Servicios"><button type="button" className="btn btn-secondary">Ir</button></Link>

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
