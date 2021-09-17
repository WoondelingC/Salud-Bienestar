import React from 'react'

export const Select = () => {
    return (
        <div className="Select">
            <p>¿Cuáles operaciones ha tenido en el pasado?</p>
        <select className="form-select" aria-label="Default select example" id="select" name="select" required>
            <option select="true">Selecciona tu opción</option>
            <option defaultValue="Apendicetomía">Apendicetomía</option>
            <option defaultValue="Colecistitis">Colecistitis</option>
            <option defaultValue="Perforación de colon">Perforación de colon</option>
            <option defaultValue="Obstrucción intestinal">Obstrucción intestinal</option>
            <option defaultValue="Patología ginecológica">Patología ginecológica</option>
            <option defaultValue="Reconstrucción de pecho">Reconstrucción de pecho</option>
            <option defaultValue="Ninguna">Ninguna</option>
            <option defaultValue="otra">Otra</option>
        </select>
        </div>
    )
}
