import React, { Fragment, useState } from 'react';

const Formulario = ({ crearCita }) => {

    // Crear State de Citas
    const [cita, actualizarCita] = useState({
        nombre: '',
        email: '',
        fecha: '',
        hora: '',

    });
    const [error, actualizarError] = useState(false)

    // Función que se ejecuta cada que el usuario escribe en un input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }
 
// Extraer los valores
const { nombre, email, fecha, hora, categoria } = cita;

// Cuando el usuario presiona agregar cita
const submitCita = e => {
    e.preventDefault();

    // Validar
    if (nombre.trim() === '' || email.trim() === '' || fecha.trim() === '' || hora.trim() === '') {
        actualizarError(true);
        return;
    }
    // Eliminar el mensaje previo 
    actualizarError(false);

    // Asignar un ID
    

    // Crear la cita
    crearCita(cita);

    // Reiniciar el form
    actualizarCita({
        nombre: '',
        correo: '',
        fecha: '',
        hora: '',
        categoria: ''
    })
}

return (
    <Fragment>
        <h2>Agendar Cita</h2>

        {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

        <form
            onSubmit={submitCita}
        >
            <label>Nombre Completo</label>
            <input
                type="text"
                name="nombre"
                className="u-full-width"
                placeholder="Escriba su Nombre Completo"
                onChange={actualizarState}
                value={nombre}
            />

            <label>Correo Electronico</label>
            <input
                type="email"
                name="email"
                className="u-full-width"
                placeholder="Escriba su Correo Electronico"
                onChange={actualizarState}
                value={email}
            />
            <label>¿Que desea Agendar?</label>
            <label for="general"> Medicina General</label>
    <input name="categoria" type="radio" class="input-radio"  id="general" value="Medicina General"
                onChange={actualizarState}  />


<label for="especialista" >Especialista</label>
    <input name="categoria" type="radio" class="input-radio" id="especialista"  value="Especialista"
                onChange={actualizarState} />
          
               
           
            
            <label>Fecha</label>
            <input
                type="date"
                name="fecha"
                className="u-full-width"
                onChange={actualizarState}
                value={fecha}
            />

            <label>Hora</label>
            <input
                type="time"
                name="hora"
                className="u-full-width"
                onChange={actualizarState}
                value={hora}
            />


            <button
                type="submit"
                className="u-full-width button-primary"
            >Agendar Ahora</button>
        </form>
    </Fragment>
);
}



export default Formulario;