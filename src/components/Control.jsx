import React from 'react'
import '../style/main.css'
import reloj from '../assets/relojtime.png'

const Control = ({categoria, hora, fecha}) => {
    return (
        <div className="container w-25 py-5" >
            <h3 className="fw-bold text-center pb-5">Control de citas</h3>
            <div className="d-flex justify-content-evenly mt-5 div mb-3">
            <p><img src={reloj} alt="" /> {categoria}</p> 
            <div className="cita">Hora: {hora}</div>
            <div className="cita">Dia: {fecha}</div>
            </div>
            <div>
                <button>Editar</button>
                <button>Cancelar</button>
            </div>

            <div className="d-flex justify-content-evenly mt-5 div">
            <p><img src={reloj} alt="" /> Cita1</p> 
            <div className="cita">hora</div>
            <div className="cita">Dia</div>
            </div>
        </div>
    )
}

export default Control
