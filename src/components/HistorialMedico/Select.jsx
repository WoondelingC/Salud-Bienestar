import React from 'react'

export const Select = () => {
    return (
        <div className="Select">
            <p>¿Cuáles operaciones ha tenido en el pasado?</p>
        <select className="form-select" aria-label="Default select example">
            <option selected>Selecciona tu opción</option>
            <option value="Apendicetomía">Apendicetomía</option>
            <option value="Colecistitis">Colecistitis</option>
            <option value="Perforación-de-colon">Perforación de colon</option>
            <option value="Obstrucción-intestinal">Obstrucción intestinal</option>
            <option value="Patología-ginecológica">Patología ginecológica</option>
            <option value="Reconstrucción-de-pecho">Reconstrucción de pecho</option>
            <option value="Ninguna">Ninguna</option>
            <option value="otra">Otra</option>
        </select>
        </div>
    )
}
