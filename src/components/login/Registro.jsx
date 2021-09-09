import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { registroEmailPasswordNombre } from '../../actions/actions';
import { useDispatch } from 'react-redux';

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

const Registro = () => {
  const dispatch = useDispatch();
  const [ values, handleInputChange, reset ] = useForm({
    name:'',
    email:'',
    password1:'',
    fechaDeNacimiento:''
  });

  const {name, email, password1, fechaDeNacimiento} = values;

  const handleRegistro = (e) => {
    e.preventDefault()
  }

  return (

      <div className="Registro py-3 container text-center w-25">

        <form className="form-signin"
        onSubmit={handleRegistro}
        >

          <Link to="/Inicio"><Img src={logo} alt="logo" /></Link>
          <p className="m-0" >Ingrese su nombre completo</p>
          <div className="input-group mb-3">

            <Input type="text" className="form-control mb-2" placeholder="Nombre de Usuario" aria-label="Username" aria-describedby="basic-addon1"
            value = {name}
            onChange= {handleInputChange} />
          </div>

          <p className="m-0" >Ingrese tu correo electronico</p>
          <div className="input-group mb-2">
            <Input type="text" className="form-control mb-2" placeholder="correo electronico" aria-label="Recipient's username" aria-describedby="basic-addon2"
          />
          </div>

          <label for="basic-url" className="form-label text-start">Ingresa tu contraseña</label>
          <div className="input-group mb-3">
            <Input type="password1" className="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder="contraseña"
            value = {name}
            onChange= {handleInputChange} />
          </div>
          <p className="m-0" >Fecha de nacimiento</p>
          <div className="input-group mb-3">
            <Input type="date" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder="Ingrese su fecha de nacimiento"
            value={fechaDeNacimiento}
            onChange={handleInputChange} />
          </div>
          <div class="d-grid gap-2">
            <Button className="btn btn-primary mb-3">Registrarse</Button>
          </div>
        </form>
        <p>¿ Ya tienes cuenta ? <Link to="/Login">Iniciar Sesión</Link></p>
      </div>

  )

}

export default Registro