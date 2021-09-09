import React, { useEffect, useRef }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  Edit, Listar, startUploading } from '../../actions/citaAction'
import { useForm } from '../../hooks/useForm'
import ListarCita from './ListarCita'
import styled from 'styled-components'



export const Button = styled.button`
  background: #7579F7;
  border: none;
  border-radius: 50px;
  `
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
        <>
        <div className=" py-3 container text-center w-25">
        <form onSubmit={handleSubmit} className="form-signin">
        
        <h1 className="text-center"> Actualizar Cita</h1>
            <div className="form-group input-group ">
            

            <h4 className="text-center"> </h4>
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
           
            <div className="form-group input-group mt-4">
            <p className="m-0" >Ingrese su nombre completo</p>
                <div className="input-group mb-3"></div>
            <input
                type="text"
                name="nombre"
                placeholder="Nombre Completo"
                className="form-control mb-2"
                defaultValue={nombre}
                onChange={handleInputChange}
            /> </div>
             <p className="m-0" >Ingresa tu correo electronico</p>
                <div className="input-group mb-3">
               <input
                type="text"
                name="email"
                placeholder="Correo Electronico"
                className="form-control"
                defaultValue={email}
                onChange={handleInputChange}
            />
              </div>
              <div className="input-group mb-3">
                <p className="m-0" >¿Que desea Agendar?</p>
               </div>
               <div className="form-check">
          
          <input name="categoria" type="radio" className="form-check-input" id="general" value="Medicina General"
               onChange={handleInputChange} />
          <label className="form-check-label" for="general"> Medicina General</label>
     </div>
     <div className="form-check">

     <input name="categoria" type="radio" className="form-check-input" id="especialista"  value="Especialista"
               onChange={handleInputChange} />
     <label className="form-check-label" for="especialista" >Especialista</label>
               
         </div>   
           
            
             <div className="input-group mb-3">
          <p className="m-0" >Elige un dia para Agendar</p>
            </div>
            <div className="input-group mb-3">
            <input
                type="date"
                name="fecha"
                className="form-control mb-2"
                onChange={handleInputChange}
                value={fecha}
            />
</div>
<div className="input-group mb-3">
 <p className="m-0" >Elige una Hora</p>
            </div>
            <div className="input-group mb-3">
            <input
                type="time"
                name="hora"
                className="u-full-width"
                onChange={handleInputChange}
                value={hora}
            />
</div>

            
        </div>
       

        <Button
                type="submit"
                className="btn-primary"
            >Actualizar Cita</Button>
     
    </form>
</div>
<ListarCita />

    </>
    )
}

export default EditCita
