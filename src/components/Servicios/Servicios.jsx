import React from 'react'
import { Navbar } from '../Home/Navbar'
import doctora from '../../assets/nurse-2019420_960_720.webp'
export const Servicios = () => {
    return (
        <div>
            <Navbar/>
            <section className="Servicios">
                <div className="Servicios__contenedor--title">
                    <h1>Servicios</h1>
                    <img src={doctora} alt="doctora"/>
                </div>
                <p>Contamos con una alta  experiencia para nuestros usuarios, espelizaciones en psicologia y nutrición , 
                también bienestar y ayuda para el que más lo necesite.</p>
            </section>

        </div>
    )
}
