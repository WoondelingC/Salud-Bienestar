import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startRegisterWithEmailPasswordName } from '../../actions/actions';
import { removeError, setError } from '../../actions/uiErrors';
import validator from 'validator'

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
  const [ formValue, handleInputChange, reset ] = useForm({
    name:'',
    email:'',
    password1:'',
    password2:''
  });

  const {name, email, password1, password2} = formValue;

  const formValid = () => {
    if (name.trim().length === 0) {
        dispatch(setError('nombre requerido'))
        return false
    }
    else if (!validator.isEmail(email)) {
        dispatch(setError('Email requerido'))
        return false
    }
    else if (password1 !== password2 || password1 < 5) {
        dispatch(setError('La contraseña es incorecta'))
        return false
    }

    dispatch(removeError(''))
    return true
}

  const handleRegistro = (e) => {
    e.preventDefault();

    if (formValid()) {
        dispatch(startRegisterWithEmailPasswordName(email, password1, name))
    }
    reset()
}

  return (

      <div className="Registro py-3 container text-center w-25">

        <form className="form-signin"
        onSubmit={handleRegistro}
        >

          <Link to="/"><Img src={logo} alt="logo" /></Link>
          <p className="m-0" >Ingrese su nombre completo</p>
          <div className="input-group mb-3">

            <Input type="text" className="form-control mb-2" placeholder="Nombre de Usuario" aria-label="Username" aria-describedby="basic-addon1"
            name="name"
            value = {name}
            onChange= {handleInputChange} />
          </div>

          <p className="m-0" >Ingrese tu correo electronico</p>
          <div className="input-group mb-2">
            <Input type="email" className="form-control mb-2" placeholder="correo electronico" aria-label="Recipient's username" aria-describedby="basic-addon2"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          </div>

          <label className="form-label text-start">Ingresa tu contraseña</label>
          <div className="input-group mb-3">
            <Input type="password" className="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder="contraseña"
            name="password1"
            value = {password1}
            onChange= {handleInputChange} />
          </div>
          <p className="m-0">Repita su contraseña</p>
          <div className="input-group mb-3">
            <Input type="password" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder="repita su contraseña"
            name="password2"
            value={password2}
            onChange={handleInputChange} />
          </div>
          <div className="d-grid gap-2">
            <Button className="btn btn-primary mb-3" type="submit">Registrarse</Button>
          </div>
        </form>
        <p>¿ Ya tienes cuenta ? <Link to="/auth/login">Iniciar Sesión</Link></p>
      </div>

  )

}

export default Registro