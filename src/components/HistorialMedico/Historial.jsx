
import { React, useState, useRef, useEffect } from 'react'
//import { Verificar } from '../../helpers/verificar'
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import {AgregarHistorial} from '../../actions/actionHistorial';

export const Historial = () => {
    const [name, setName] = useState("");
    const [razon, setRazon] = useState("");
    const [examen, setExamen] = useState("");
    const [operacion, setOperacion] = useState("");
    const [tiempo, setTiempo] = useState("");
    const [describe, setDecribe] = useState("");


    const { active } = useSelector((state) => state.cita);
    const activeId = useRef(active.id);

    useEffect(() => {
        if (active.id !== activeId.current) {
        reset(active)
        }
        activeId.current = active.id
    }, [active])


    
    const [reset] = useForm(active);
    


    //FUNCIONES PARA CAPTURAR LOS DATOS
    const handleChangeName = e => {
        setName(e.target.value);
    }

    const handleChangeRadio = e => {
        setRazon(e.target.value);
    }

    const handleChangeSelectOne = e => {
        setExamen(e.target.value);
    }
    const handleChangeSelectTwo = e => {
        setOperacion(e.target.value);
    }
    const handleChangeRadioTwo = e => {
        setTiempo(e.target.value);
    }
    const handleChangeText = e => {
        setDecribe(e.target.value);
    }
    //ENVIO DEL FORMULARIO
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Enviado');
        console.log(name, razon, examen, operacion, tiempo, describe)

        dispatch(AgregarHistorial(name, razon, examen, operacion, tiempo, describe))

    }


    return (
        <div>

            <Form className="Historial" onSubmit={handleSubmit}>
                <h1>Historial Médico</h1>
                <p>Este formulario nos permite conocerla(o) mejor y saber cómo podemos ayudarle</p>
                <br />
                <p className="m-0" >Ingrese su nombre completo</p>
                <FormGroup className="input-group mb-3">

                    <Input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Nombre"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={handleChangeName}
                        required />
                </FormGroup>


                <FormGroup className="Checkbox" onChange={handleChangeRadio}>
                    <p>Razón de su diagnóstico:</p>
                    <FormGroup className="form-check">
                        <Input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            defaultChecked={razon === 'Examen Rutina' ? true : false}
                            value="Examen Rutina"
                            required
                        />
                        <Label className="form-check-label" htmlFor="flexRadioDefault1">Examen Rutina</Label>
                    </FormGroup>
                    <FormGroup className="form-check">
                        <Input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            defaultChecked={razon === 'Algo me molesta / tengo algo en específico que discutir' ? true : false}
                            value="Algo me molesta / tengo algo en específico que discutir"
                            required
                        />
                        <Label className="form-check-label" htmlFor="flexRadioDefault1">Algo me molesta / tengo algo en específico que discutir</Label>
                    </FormGroup>

                </FormGroup>{/*FIN DE CLASE CHECKBOX */}

                <FormGroup className="Select">
                    <p>¿Que problemas médicos tiene o ha tenido en el pasado?</p>
                    <select className="form-select" aria-label="Default select example" id="selectOne" name="selectOne" onChange={handleChangeSelectOne} required>
                        <option select="true" >Selecciona tu opción</option>
                        <option defaultValue="Diabetes" required>Diabetes</option>
                        <option defaultValue="Hipertensión">Hipertensión</option>
                        <option defaultValue="Colesterol alto">Colesterol alto</option>
                        <option defaultValue="Hepatitis A">Hepatitis A</option>
                        <option defaultValue="Hepatitis B">Hepatitis B</option>
                        <option defaultValue="Hepatitis C">Hepatitis C</option>
                        <option defaultValue="Problemas de hígado">Problemas de hígado</option>
                        <option defaultValue="Pancreatitis">Pancreatitis</option>
                        <option defaultValue="Insuficiencia renal">Insuficiencia renal</option>
                        <option defaultValue="Depresión o ansiedad">Depresión o ansiedad</option>
                        <option defaultValue="Problemas de tiroides">Problemas de tiroides</option>
                        <option defaultValue="Migrañas">Migrañas</option>
                        <option defaultValue="Coágulos de sangre">Coágulos de sangre</option>
                        <option defaultValue="Problemas ginecológicos">Problemas ginecológicos</option>
                        <option defaultValue="Alergias">Alergias</option>
                        <option defaultValue="Asma">Asma</option>
                        <option defaultValue="Tuberculosis">Tuberculosis</option>
                        <option defaultValue="VIH o SIDA">VIH o SIDA</option>
                        <option defaultValue="COVID-19">COVID-19</option>
                        <option defaultValue="Ninguna">Ninguna</option>
                        <option defaultValue="otra">Otra</option>
                    </select>
                </FormGroup>{/*FIN DEL SELECCION PROBLEMAS MEDICOS */}

                <FormGroup className="Select" required>
                    <p>¿Cuáles operaciones ha tenido en el pasado?</p>
                    <select className="form-select" aria-label="Default select example" id="selectTwo" name="selectTwo" onChange={handleChangeSelectTwo} required>
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
                </FormGroup>

                <FormGroup className="section_Checkbox">
                    <p>¿Cuanto tiempo llevas sin ir al medico?</p>
                    <div className="form-check" onChange={handleChangeRadioTwo}>
                        <Input
                            className="form-check-input"
                            type="radio"
                            id="flexCheckDefault"
                            defaultChecked={tiempo === '3-6 meses' ? true : false}
                            value="3-6 meses"
                            required
                        />
                        <Label className="form-check-label" htmlFor="flexCheckDefault">3-6 meses</Label>
                    </div>
                    <div className="form-check">
                        <Input
                            className="form-check-input"
                            type="radio"
                            id="flexCheckDefault"
                            defaultChecked={tiempo === '+ de 1 año' ? true : false}
                            value="+ de 1 año"
                            required
                        />
                        <Label className="form-check-label" htmlFor="flexCheckDefault">+ de 1 año</Label>
                    </div>
                </FormGroup>

                <FormGroup className="form-floating">
                    <p>¿Como te has sentido ultimamente?</p>
                    <textarea className="form-control" placeholder="Ingresa alguna descripcion" id="floatingTextarea2" onChange={handleChangeText}></textarea>
                </FormGroup>
                <Button type="submit" className="btn btn-info">Enviar</Button>

            </Form>{/*FIN DEL FORMULARIO */}
        </div>

    );
}