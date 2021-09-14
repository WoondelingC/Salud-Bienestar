import React from 'react'
import { Verificar } from '../../helpers/Verificar'
import { CheckboxOne } from './CheckboxOne'
import { Select } from './Select'

export const Historial = () => {
    return (
        <div>
            <Verificar />
            <div className="Historial">
                <h1>Historial Médico</h1>
                <p>Este formulario nos permite conocerla(o) mejor y saber cómo podemos ayudarle</p>

                <div className="Checkbox">
                    <p>Razón de su diagnóstico:</p>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">Examen Rutina</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">Algo me molesta / tengo algo en específico que discutir</label>
                    </div>
                </div>
                <CheckboxOne />
                
                <Select />

                <div className="section_Checkbox">
                    <p>¿Cuanto tiempo llevas sin ir al medico?</p>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">3-6 meses</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">+ de 1 año</label>
                    </div>
                </div>
                <button type="button" class="btn btn-info">Enviar</button>
            </div>
        </div>
    )
}
