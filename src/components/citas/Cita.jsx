import React from 'react';

export const Cita = ({
    
    url,
    nombre,
    email,
    categoria,
    fecha,
    hora
}) => {
    return (
        <div className="card ms-3 animate__animated animate__fadeIn" style={ { maxWidth: 540 } }>
            <div className="row no-gutters">
               
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{nombre}</h5>
                        <p className="card-text"> </p>
                        <p className="card-text">
                            <small className="text-muted">{email}</small>
                        </p>
                        <p className="card-text">
                            <small className="text-muted">{categoria}</small>
                        </p>
                        <p className="card-text">
                            <small className="text-muted">{fecha}</small>
                        </p>
                        <p className="card-text">
                            <small className="text-muted">{hora}</small>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}