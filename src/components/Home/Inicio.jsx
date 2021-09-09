import React from 'react'
import { Navbar } from './Navbar'

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
import { Footer } from './Footer'
import { Slider } from './Slider'

export const Inicio = () => {
    return (
        <div class="container-fluid">
            <Navbar />

            <header>
                <Slider/>
            </header>

            <div className="container__Agendar-cita">
                <div className="container__Agendar-cita--titleImg">
                    <img src={icon} alt="Libreta-De-Agendas" />
                    <h1>Agendar Cita</h1>
                </div>
                <p>Agende su cita con algunos de nuestros asesores de salud</p>
            </div>

            <div className="container__categorias--tips">
                <div class="grid categorias">
                    <div class="g-col-4">
                        <h2>Alimentación Saludable</h2>
                        <img src={iconOne} alt="Cosecha" />
                    </div>
                    <div class="g-col-4">
                        <h2>Ejercicio fisico</h2>
                        <img src={iconTwo} alt="Ejercicio" />
                    </div>
                    <div class="g-col-4">
                        <h2>Paz mental</h2>
                        <img src={iconThree} alt="Paz-mental" />
                    </div>
                    <div class="g-col-4">
                        <h2>Tu descanso</h2>
                        <img src={iconFour} alt="Descanso" />
                    </div>
                </div>
            </div>{/*fin container categorias */}

            <div className="container__categorias--servicios">
                <h1>Servicios</h1>
                <div class="grid categorias--servicios">
                    <div class="g-col-4 categorias--servicios">

                        <img src={iconFive} alt="medicina" />
                        <h2>Medicina general</h2>
                        <p>La Medicina General es el primer nivel de atención médica. La consulta está orientada al abordaje integral
                            del paciente en su aspecto físico, mental y social. </p>
                        <button type="button" class="btn btn-secondary">Ir</button>

                    </div>
                    <div class="g-col-4 categorias--servicios">

                        <img src={iconSix} alt="doctor" />
                        <h2>Especialidades</h2>
                        <p>Esta especialidad médica se centra en el diagnóstico y el tratamiento integral de
                            los pacientes adultos, que en ocasiones se encuentran sin diagnóstico aparente.</p>
                        <button type="button" class="btn btn-secondary">Ir</button>
                    </div>
                    <div class="g-col-4 categorias--servicios">

                        <img src={iconSeven} alt="psicologia" />
                        <h2>Psicología</h2>
                        <p>Agenda tu terapia psicológica online ,tratamientos que te apoyarán en ansiedad depresión ,
                            tristeza, autoestima, autoconfianza de forma dinámica para tu biesnestar.</p>
                        <button type="button" class="btn btn-secondary">Ir</button>

                    </div>
                </div>
            </div>{/*fin container categorias servicios*/}

            <div className="container__contacto">
                <h1>Contactanos</h1>

                <div class="container contacto--p">
                    <div class="row">
                        <div class="col contacto">
                            <h2>¡Desde la comodidad de tu casa puedes comunicarte con un asesor para agendar tu cita!</h2>
                            <p>Bogotá D.C</p>
                            <p>+57 38434834</p>
                        </div>
                        <div class="col contacto">
                            <img src={contacto} alt="contacto" />
                        </div>
                    </div>
                </div>

            </div>





        <Footer/>
        </div>/*Fin container fluid */
    )
}
