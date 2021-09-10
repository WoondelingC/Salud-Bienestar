import React, { useEffect, useRef }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  Edit, Listar, startUploading } from '../actions/citaAction'
import { useForm } from '../hooks/useForm'
import ListarCita from './ListarCita'

const EditCita = () => {
let file="";
    const { active } = useSelector(state => state.cita)

    const activeId = useRef(active.id)

    useEffect(() => {
        if (active.id !== activeId.current) {
            reset(active)
        }
        activeId.current = active.id
    }, [active])

  

    const [formValue, handleInputChange, reset] = useForm(active)
    const { url, nombre, email,categoria,fecha,hora } = formValue

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
      e.preventDefault()
        
            dispatch(Edit(formValue))
          reset()
         
    }

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

    useEffect(() => {
        dispatch(Listar())
    }, [dispatch])



    return (
        <form onSubmit={handleSubmit} className="card card-body border-primary">
        <div className="form-group input-group ">
        <input
                    style={{ display: 'none' }}
                    type="text"
                    className="form-control"
                    id="imagen" 
                    name='image' placeholder="Image URL" defaultValue={url} onChange={handleInputChange} hidden
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
                <i className="material-icons  u-full-width" ></i>
            </div>
            <input
                type="text"
                name="nombre"
                placeholder="Nombre Completo"
                className="form-control"
                defaultValue={nombre}
                onChange={handleInputChange}
            />
               <input
                type="text"
                name="email"
                placeholder="Correo Electronico"
                className="form-control"
                defaultValue={email}
                onChange={handleInputChange}
            />
              
               <label>¿Que desea Agendar?</label>
            <label for="general"> Medicina General</label>
    <input name="categoria" type="radio" class="input-radio"  id="general" value="Medicina General"
                onChange={handleInputChange}  />


<label for="especialista" >Especialista</label>
    <input name="categoria" type="radio" class="input-radio" id="especialista"  value="Especialista"
                onChange={handleInputChange} />
          
               
           
            
            <label>Fecha</label>
            <input
                type="date"
                name="fecha"
                className="u-full-width"
                onChange={handleInputChange}
                value={fecha}
            />

            <label>Hora</label>
            <input
                type="time"
                name="hora"
                className="u-full-width"
                onChange={handleInputChange}
                value={hora}
            />


            
        </div>
       

        <button
                type="submit"
                className="u-full-width button-primary button eliminar"
            >Actualizar Cita</button>
        <ListarCita />
    </form>
    
    )
}

export default EditCita
