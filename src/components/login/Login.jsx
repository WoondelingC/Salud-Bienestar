import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import { Img } from './Registro';
import { Button } from './Registro';
import { A } from './Registro';
import { Input } from './Registro';
import { useForm } from '../../hooks/useForm';
import { login } from '../../actions/actions';
import { loginGoogle } from '../../actions/actions';
import { Link } from 'react-router-dom'


const Google = styled.div`
    border-radius: 50px;
`
  


const Login = () => {
    const dispatch = useDispatch();
    
    const [ values, handleInputChange, reset ] = useForm({
      email: '',
      password: ''
    })

    const { email, password } = values;

    const handleSubmit = (e) =>{
      e.preventDefault();
      dispatch(login(email,password));
    }

    const handleLoginGoogle = () =>{
        dispatch(loginGoogle());
    }
    
    return (
      <div className="Registro py-4 container text-center w-25">
        <form className="form-signin" onChange={handleSubmit}>
          <Img src={logo} alt="" />
        <form className="form-signin">
        <Link to="/Inicio"><Img src={logo} alt="logo" /></Link>
          <p className="m-0">Email</p>
          <Input
            type="email"
            name="email"
            id="inputEmail"
            className="form-control mb-4"
            placeholder="Email"
            required=""
            value={email}
            onChange={handleInputChange}
          />

          <p className="m-0">Contraseña</p>

          <Input
            type="Password"
            id="inputPassword"
            name="password"
            className="form-control mb-5"
            placeholder="Contraseña"
            required=""
            value={password}
            onChange={handleInputChange}
          />

          <div class="d-grid gap-2">
            <Button className="btn btn-primary" onSubmit={handleSubmit}>
              Ingresar
            </Button>
          </div>

          <div className="text-white">
            <p>Login with social networks</p>

            <Google className="google-btn btn-danger mb-3" onClick={handleLoginGoogle}>
              <div className="google-icon-wrapper d-flex justify-content-evenly align-items-center">
                <img
                  className="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="google button"
                />
                <p className="align-items-center p-2 m-0">
                <b>Sign in with google</b>
                </p>
              </div>
              
            </Google>
            <p className="text-dark">¿Aún no tienes cuenta? <Link to="/Registro">Registrate</Link> </p>
            <p className="text-dark">¿Olvidaste la contraseña?</p>
          </div>
        </form>
      </div>

    );
}

export default Login