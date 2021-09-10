import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  citaNew, Edit, Listar, startUploading } from '../actions/citaAction'
import { useForm } from '../hooks/useForm'
import { useFormik } from 'formik'
import * as Yup from 'yup'

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
    }, [active])
  

    const [formValue, handleInputChange, reset] = useForm(active)
    const { url, nombre,email,categoria,fecha,hora } = formValue
    

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(Edit(active))
         
    }



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
      
        <form onSubmit={formik.handleSubmit} className="card card-body border-primary">
            <div className="form-group input-group ">
                
                <input
                    style={{ display: 'none' }}
                    type="text"
                    className="form-control"
                    id="imagen" 
                    name='image' placeholder="Image URL" value={formik.values.url} onChange={formik.handleChange} hidden
                />
                <div>
                <input
                        id="fileSelector"
                        type="file"
                        name="image"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                        />  
                </div>
                <div>
                <input
                className="btn-primary text-center"
                            type="button"
                            value="Cargar Imagen"
                            onClick={handlePictureClick}
                            style={{ display: 'none' }}
                        />
                </div>
            </div>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">create</i>
                </div>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre Completo"
                    className="form-control  u-full-width"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                   
                />
                {formik.errors.name ?<div>{formik.errors.name}</div> : null}
                <input
                    type="text"
                    name="email"
                    placeholder="Correo Electronico"
                    className="form-control u-full-width"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                   
                />
                {formik.errors.email ?<div>{formik.errors.email}</div> : null}
                <label>¿Que desea Agendar?</label>
            <label for="general"> Medicina General</label>
    <input name="categoria" type="radio" class="input-radio"  id="general" value="Medicina General"
                  onChange={formik.handleChange} />


<label for="especialista" >Especialista</label>
    <input name="categoria" type="radio" class="input-radio" id="especialista"  value="Especialista"
                  onChange={formik.handleChange} />
          
          {formik.errors.categoria ?<div>{formik.errors.categoria}</div> : null}
           
            
            <label>Fecha</label>
            <input
                type="date"
                name="fecha"
                className="u-full-width"
                onChange={formik.handleChange}
                value={formik.values.fecha}
            />
 {formik.errors.fecha ?<div>{formik.errors.fecha}</div> : null}
            <label>Hora</label>
            <input
                type="time"
                name="hora"
                className="u-full-width"
                onChange={formik.handleChange}
                value={formik.values.hora}
            />
             {formik.errors.hora ?<div>{formik.errors.hora}</div> : null}
  </div>

            <button
                type="submit"
                className="u-full-width button-primary"
            >Agendar Ahora</button>
            

            
          
        </form>
        
        
        </>
    )
}

export default FormCita
