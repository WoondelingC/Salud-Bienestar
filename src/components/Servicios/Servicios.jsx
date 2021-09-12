import React from 'react'

/*IMAGENES*/
import doctora from '../../assets/nurse-2019420_960_720.webp'
import online from '../../assets/medico-online-2-e1625786356586.jpg'
import medicina from '../../assets/especialidad-medica.jpg'
import psicologia from '../../assets/psicologia.jpg'
import nutriologo from '../../assets/nutriologo.jpg'

/*COMPONENTES*/
import { Footer } from '../Home/Footer'
import { Verificar } from '../../helpers/Verificar'


export const Servicios = () => {


    return (
        <div>
            {/*VERIFICA SI ESTA LOGUEADO O NO , Y ME MUESTRA EL NAVBAR CORRECTO */}
            <Verificar />
            <section className="Servicios">
                <div className="Servicios__contenedor--title">
                    <h1>Servicios</h1>
                    <img src={doctora} alt="doctora" />
                </div>
                <p>Contamos con una alta  experiencia para nuestros usuarios, especializaciones en psicología y nutrición ,
                    también bienestar y ayuda para el que más lo necesite.</p>

                <ul>
                    <li>
                        <h3>Medicina general</h3>
                        <div className="container-li-text">
                            <img src={online} alt="medicina-online" />
                            <button type="button" class="btn btn-info">Agendar cita</button>
                        </div>

                    </li>


                    <li>
                        <h3>Especialidades</h3>
                        <div className="container-li-text">
                            <img src={medicina} alt="medicina-especialidad" />
                            <button type="button" class="btn btn-info">Agendar cita</button>
                        </div>

                    </li>


                    <li>
                        <h3>Especialidad Psicología</h3>
                        <div className="container-li-text">
                            <img src={psicologia} alt="psicologia" />
                            <button type="button" class="btn btn-info">Agendar cita</button>
                        </div>
                    </li>

                    <li>
                        <h3>Especialidad Nutriólogo</h3>
                        <div className="container-li-text">
                            <img src={nutriologo} alt="psicologia" />
                            <button type="button" class="btn btn-info">Agendar cita</button>
                        </div>
                    </li>

                </ul>
            </section>
            <Footer />
        </div>
    )
}
