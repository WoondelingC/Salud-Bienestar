import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import { Img } from './Registro';
import { Button } from './Registro';
import { A } from './Registro';
import { Input } from './Registro';

const Google = styled.div`
    border-radius: 50px;
`
  


const Login = () => {
    
    return (
      <div className="Registro py-4 container text-center w-25">
        <form className="form-signin">
          <Img src={logo} alt="" />
          <p className="m-0">Email</p>
          <Input
            type="email"
            name="email"
            id="inputEmail"
            className="form-control mb-4"
            placeholder="Email"
            required=""
          />
          <p className="m-0">Contraseña</p>
          <Input
            type="Password"
            id="inputPassword"
            name="password"
            className="form-control mb-5"
            placeholder="Contraseña"
            required=""
          />

          <div class="d-grid gap-2">
            <Button className="btn btn-primary">
              Ingresar
            </Button>
          </div>

          <div className="text-white">
            <p>Login with social networks</p>

            <Google className="google-btn btn-danger mb-3">
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
            <p className="text-dark">¿Aún no tienes cuenta? <A href="/">Registrate</A> </p>
            <p className="text-dark">¿Olvidaste la contraseña?</p>
          </div>
        </form>
      </div>
    );
}

export default Login