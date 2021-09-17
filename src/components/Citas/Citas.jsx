import React from 'react';
import PropTypes from 'prop-types';


const Cita = ({ cita, eliminarCita }) => (
    //AGENDAR CITA
    <div className="cita">
        <p>Nombre Completo: <span>{cita.nombre}</span> </p>
        <p>Correo Electronico: <span>{cita.email}</span> </p>
        <p>Que Desea Agendar: <span>{cita.categoria}</span> </p>
        <p>Fecha: <span>{cita.fecha}</span> </p>
        <p>Hora: <span>{cita.hora}</span> </p>


        <button
        className="button eliminar u-full-width"
        onClick={() => eliminarCita(cita.id)}>
            Eliminar &times;
        </button>
    </div>
);

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Cita;