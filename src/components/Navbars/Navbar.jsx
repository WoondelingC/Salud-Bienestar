import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startLogout } from "../../actions/actions";
import logo from '../../assets/logo.png'
import styled from "styled-components";

export const Logo = styled.img`
    width: 170px;
    height: 65px;
    margin-left: 5px;
    padding: 0;
`

export const ContenedorNavbar = styled.div`
a{
  font-size: 18px;
  color: #868686!important;
}

li{
  color: #5b5bff!Important;
}
 
`

export const Ham = styled.button`
  height: 70px;
  width: 100px;
`

const Navbar = () => {
  const dispatch = useDispatch()
  const { name, uid } = useSelector((state) => state.auth);

  return (
    <ContenedorNavbar className="mt-2" >
      <nav className="navbar navbar-light bg-light d-flex justify.content-between">


          <Logo src={logo} alt="logo" />
       


        <div>
          <Ham
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </Ham>
          <div
            className="offcanvas offcanvas-end"


            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Salud & Bienestar
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-Link" to='/perfil'>
                    Perfil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/agendar">
                    Agendar Cita
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/listar">
                    Control de citas
                  </Link>
                </li>

                {/*COMPROBAR SI EL ADMI ESTA LOGUEADO MUESTRO EL NAVBAR ADMI */}
                {
                  uid === 'vQcQcKWqcgf3Ek41lWuNkDcJ5Ra2' &&
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/agregarpost/">
                        Crear Publicaciones
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/posts">
                        Publicaciones
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Historiales">
                        Historiales
                      </Link>
                    </li>

                  </>
                }

                {/*<li className="nav-item">
                  <Link className="nav-link" to="/editar/:id">
                    Actualizar cita
                  </Link>
              </li>*/}

                {/*<li className="nav-item">
                  <Link className="nav-link" to="/Tips">
                    Tips de Salud
                  </Link>
                </li>*/}

                {/*<li className="nav-item">
                  <Link className="nav-link" to="/Servicios">
                    Servicios
                  </Link>
                </li>*/}

                <li className="nav-item">
                  <Link className="nav-link" to="/Historial">
                    Historial
                  </Link>
                </li>

                <li className="text-danger d-flex">Bienvenido/a - {name}</li>
                <br />

                <Link to="/inicio">
                  <li
                    onClick={() => dispatch(startLogout())}
                  >
                    Cerrar Sesion
                  </li>
                </Link>

              </ul>
            </div>
          </div>
        </div>
      </nav>
    </ContenedorNavbar>
  );
};

export default Navbar;
