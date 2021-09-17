import {React} from 'react'

export const CheckboxOne = ({props}) => {

    return (
        <div className="section_Checkbox">
            <p>¿Que problemas médicos tiene o ha tenido en el pasado?</p>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Diabetes" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">Diabetes</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Hipertensión" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">Hipertensión</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Colesterol alto" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">Colesterol alto</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Hepatitis A" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">Hepatitis A</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Hepatitis B" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">Hepatitis B</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Hepatitis C" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">Hepatitis C</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Problemas de hígado" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">Problemas de hígado</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Pancreatitis" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">Pancreatitis</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Insuficiencia renal" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">Insuficiencia renal</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Cáncer" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">Cáncer</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Depresión o ansiedad" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">Depresión o ansiedad</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Problemas de tiroides" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">Problemas de tiroides</label>
                        </div>
                    </div>
                    <div className="col">

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Migrañas" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">Migrañas</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Coágulos de sangre" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">Coágulos de sangre</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Problemas ginecológicos" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">Problemas ginecológicos</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Alergias" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">Alergias</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Asma" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">Asma</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Tuberculosis" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">Tuberculosis</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="VIH o SIDA" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">VIH o SIDA</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="COVID-19" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">COVID-19</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Ninguna" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">Ninguna</label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Otra" required/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">Otra</label>
                        </div>
                    </div>

                </div>
            </div>




        </div>

    )
}
