import React from 'react'
import {  useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const MostrarCita = () => {
    const { cita } = useSelector(state => state.cita)

   
    

    return (
        <>
        
            {
                cita.map((data,index) => (
                    <div className="col-md-4 ms-5" key={`${index}-${data.id}`}>
                        <div className="card mb-1" >
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <h4>{data.name}</h4>
                                    <div>
                                       
                                        <Link to={`/edit/${data}`}>
                                        <i
                                            className="material-icons edit"
                                            
                                             >
                                            Editar
                                        </i></Link>
                                    </div>
                                </div>
                                
                                <p>{data.email}</p>
                                <p>{data.categoria}</p>
                                <p>{data.fecha}</p>
                                <p>{data.hora}</p>
                            </div>
                        </div>

                    </div>
                ))
            }

        </>
    )
}

export default MostrarCita
