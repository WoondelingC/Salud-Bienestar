
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
export const ListarHistorial = () => {

    const { card } = useSelector(state => state.card)


    return (
        <div className=" row ">
            <h1>Historial de pacientes</h1>
            <br/>
            {
                card.map(data=>(
                    <div className="col-md-4 text-center py-1 container" key={data.id}>
                    <div className="card mt-2 container text-center">
                        <div className="card-title text-center container">
                            <h3>Paciente: {data.name}</h3>
                           
                            <span className="badge badge-pill bg-danger ml-2">Razon de diagnostico: {data.razon}</span>
                            <p><strong>Problema médico:</strong> {data.examen}</p>
                            <p><strong>Operaciones:</strong> {data.operacion}</p>
                            <p><strong>Tiempo sin ir al medico:</strong> {data.tiempo}</p>
                            <p><strong>Descripcion:</strong> {data.describe}</p>
    
                        </div>
    
                        <div className="card-body">
                            <button
                                className="btn btn-danger"

                            >
                                Delete
                            </button>
                        
                    </div>
                    </div>
                </div>
                ))
            }
           
        </div>
    )
}
