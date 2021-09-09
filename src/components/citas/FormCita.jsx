import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  citaNew,  Listar, startUploading } from '../../actions/citaAction'
import { useForm } from '../../hooks/useForm'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import PrincipalNav from '../Navbars/PrincipalNav'

export const Input = styled.input`
  background-color: rgba(176, 194, 184, 18);
`
export const A = styled.a`
  color: #CE20E0;
  text-decoration: none;
`

export const Img = styled.img`
  width: 70%;
  border-radius: 50%;
  margin-bottom: 20px;
`
export const Button = styled.button`
  background: #7579F7;
  border: none;
  border-radius: 50px;
`
const FormCita = () => {
    let file = "";
    
    const { active } = useSelector(state => state.cita)
    
const formik= useFormik({initialValues:{
    url:"",
    nombre: '',
    email:'',
    categoria: '',
    fecha:'',
    hora:''

},
validationSchema: Yup.object({

nombre:Yup.string().required("nombre completo requerido"),
email:Yup.string().email().required("Correo Electronico requerido"),
fecha:Yup.date().required("fecha requerida"),
hora:Yup.string().required("Hora requerida"),


}), onSubmit:(data)=>{
    
        dispatch(citaNew(data))
        
     
}
})
    const activeId = useRef(active.id)

    useEffect(() => {
        if (active.id !== activeId.current) {
            reset(active)
        }
        activeId.current = active.id
    }, [active, ])
  

    const [reset] = useForm(active)
    
    

    const dispatch = useDispatch()





    useEffect(() => {
        dispatch(Listar())
    }, [dispatch])

    const handleFileChange = (e) => {
        file = e.target.files[0];
        console.log(file)
        if (file) {
          dispatch(startUploading(file))
        file = document.querySelector('#imagen').click()
        }
      }

      const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
      }

    return (
        <>
        <div className=" py-3 container text-center w-25">
      
        <form onSubmit={formik.handleSubmit} className="form-signin">
        <h1 className="text-center"> Agendar Cita</h1>
            <div className="form-group input-group ">
            

            <h4 className="text-center"> Agende citas con nuestros profesionales de la salud</h4>
                <Input
                    style={{ display: 'none' }}
                    type="text"
                    className="form-control"
                    id="imagen" 
                    name='image' placeholder="Image URL" value={formik.values.url} onChange={formik.handleChange} hidden
                />
                <div>
                <Input
                        id="fileSelector"
                        type="file"
                        name="image"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                        />  
                </div>
                <div>
                <Input
                className="btn-primary text-center"
                            type="button"
                            value="Cargar Imagen"
                            onClick={handlePictureClick}
                            style={{ display: 'none' }}
                        />
                </div>
            </div>
            <div className="form-group input-group mt-4">
            <p className="m-0" >Ingrese su nombre completo</p>
                <div className="input-group mb-3">
                <Input
                    type="text"
                    name="nombre"
                    placeholder="Nombre Completo"
                    className="form-control mb-2"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    aria-label="Username" aria-describedby="basic-addon1"
                />
                
                </div>
                {formik.errors.nombre ?<div className="text-danger mb-4">{formik.errors.nombre}</div> : null}
                <p className="m-0" >Ingresa tu correo electronico</p>
                <div className="input-group mb-3">
                <Input
                    type="text"
                    name="email"
                    placeholder="Correo Electronico"
                    className="form-control mb-2"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                   
                />
               
                </div>
                {formik.errors.email ?<div className="text-danger mb-4">{formik.errors.email}</div> : null}
                <div className="input-group mb-3">
                <p className="m-0" >¿Que desea Agendar?</p>
               </div>
        <div className="form-check">
          
             <input name="categoria" type="radio" className="form-check-input" id="general" value="Medicina General"
                  onChange={formik.handleChange} />
             <label className="form-check-label" for="general"> Medicina General</label>
        </div>
        <div className="form-check">

        <input name="categoria" type="radio" className="form-check-input" id="especialista"  value="Especialista"
                  onChange={formik.handleChange} />
        <label className="form-check-label" for="especialista" >Especialista</label>
                  
            </div>             
     {formik.errors.categoria ?<div className="text-danger">{formik.errors.categoria}</div> : null}
          
          
           
          <div className="input-group mb-3">
          <p className="m-0" >Elige un dia para Agendar</p>
            </div>
            <div className="input-group mb-3">
            <Input
                type="date"
                name="fecha"
                className="form-control mb-2"
                onChange={formik.handleChange}
                value={formik.values.fecha}
            />
            </div>
 {formik.errors.fecha ?<div className="text-danger mb-3">{formik.errors.fecha}</div> : null}
 <div className="input-group mb-3">
 <p className="m-0" >Elige una Hora</p>
            </div>
            <div className="input-group mb-3">
            <Input
                type="time"
                name="hora"
                className="form-control mb-2"
                onChange={formik.handleChange}
                value={formik.values.hora}
            />
            </div>
             {formik.errors.hora ?<div className="text-danger mb-3">{formik.errors.hora}</div> : null}
  </div>

            <Button
                type="submit"
                className="btn-primary"
            >Agendar Ahora</Button>
            

            
          
        </form>
        </div>
        <PrincipalNav />
        </>
    )
}

export default FormCita
