import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { startRegisterWithEmailPasswordName } from '../../actions/actions';


import { useFormik } from "formik";
import * as Yup from "yup";
import { startUploadingImage } from '../../actions/postAction';
export const Input = styled.input`
  background-color: rgba(176, 194, 184, 18);
`
export const A = styled.a`
  color: #CE20E0;
  text-decoration: none;
`

export const Img = styled.img`
  width: 70%;
  margin-bottom: 20px;
`
export const Button = styled.button`
  background: #7579F7;
  border: none;
  border-radius: 50px;
`

const Registro = () => {
  const dispatch = useDispatch();
  
  const formik = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      password1: "",
      password2: "",
      LinkImg:"",
    },
    validationSchema: Yup.object({
      nombre: Yup
        .string()
        .min(9, 'Tu nombre debe tener mas 9 caracteres')
        .required("Debes escribir tu nombre"),
      email: Yup
        .string()
        .email("Invalid email address")
        .required("Email required"),
      password1: Yup
        .string()
        .min(8, "La contraseña es muy corta - debe tener minimo 8 caracteres.")
        .matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S/, "La contraseña debe tener un numero, una mayuscula y un minuscula.")
        .required("Escribe tu contraseña."),
      password2: Yup
        .string()
        .oneOf([Yup.ref("password1"), null], "Las contraseñas deben ser iguales")
        .required("Escribe tu contraseña."),
    }),
    onSubmit: () => {
      dispatch(startRegisterWithEmailPasswordName(email, password1, nombre, LinkImg));
    },
  });

  const { nombre, email, password1, password2, LinkImg } = formik.values;

  const handleFileChange = async(e)=>{
    // console.log(e);
    const file =e.target.files[0];
    if(file){
      let fileURL = await dispatch(startUploadingImage(file));
      let inputURl = document.querySelector("#floatingURL");
      inputURl.value = fileURL;
      formik.values.LinkImg = fileURL;

    }

}
const handleClickFile = () =>{
    document.querySelector('#fileSelector').click();
}



  return (

      <div className="Registro py-3 container text-center w-25" >

        <form className="form-signin"
        onSubmit={formik.handleSubmit}
        >

          <Link to="/"><Img src={logo} alt="logo" /></Link>
          <p className="m-0" >Ingrese su nombre completo</p>
          <div className="input-group mb-3">

            <Input type="text" className="form-control mb-2" placeholder="Nombre Completo" aria-label="Username" aria-describedby="basic-addon1"
            name="nombre"
            value = {nombre}
            onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      required/>
          </div>
          {formik.touched.nombre && formik.errors.nombre ? (
                    <div className="text-danger mb-3">
                      {formik.errors.nombre}
                    </div>
                  ) : null}
          <p className="m-0" >Ingrese tu correo electronico</p>
          <div className="input-group mb-2">
            <Input type="email" className="form-control mb-2" placeholder="correo electronico" aria-label="Recipient's username" aria-describedby="basic-addon2"
            name="email"
            value={email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          </div>
          {formik.touched.email && formik.errors.email ? (
                    <div className="text-danger mb-3">
                      {formik.errors.email}
                    </div>
                  ) : null}
          <label className="form-label text-start">Ingresa tu contraseña</label>
          <div className="input-group mb-3">
            <Input type="password" className="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder="contraseña"
            name="password1"
            value = {password1}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required />
          </div>
            {formik.touched.password1 && formik.errors.password1 ? (
                    <div className="text-danger mb-3">
                      {formik.errors.password1}
                    </div>
                  ) : null}
          <p className="m-0">Repita su contraseña</p>
          <div className="input-group mb-3">
            <Input type="password" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder="repita su contraseña"
            name="password2"
            value={password2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required />
          </div>
          {formik.touched.password2 && formik.errors.password2 ? (
                    <div className="text-danger mb-3">
                      {formik.errors.password2}
                    </div>
                  ) : null}

<div className="input-group mb-1">
                    <input
                      type="url"
                      className="form-control"
                      id="floatingURL"
                      placeholder="url"
                      name="LinkImg"
                      value={LinkImg}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      disabled
                      required
                      style={{ display: "none" }}
                    />
                    <label className="form-label text-start " htmlFor="floatingPassword">
                      Imagen de perfil / avatar
                    </label>
                  </div>

                  <input
                    id="fileSelector"
                    type="file"
                    name="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  <div className="btn btn-primary btn-register text-uppercase fw-bold">
                    <input
                      type="button"
                      className="btn text-white fw-bold"
                      value="Avatar"
                      onClick={handleClickFile}
                      
                    />
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