import React from "react";
import logo from '../../assets/Logo.jpeg'
import styled from "styled-components";
import {Link} from 'react-router-dom'

const Logo = styled.img`
  width: 100px;
  height: 60px;
`

const Navbar = () => {
  return (
    <div className="container w-25 p-0">
      <nav class="navbar navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="/">
            <Logo src={logo} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Salud & Bienestar
              </h5>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/Inicio">
                    Inicio
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/perfil">
                    Perfil
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/add">Agendar Cita</Link>
                 
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/listar">Control de Cita</Link>
                 
                </li>
                  <li class="nav-item">
                  <Link class="nav-link" to="/auth/Registro">Registro</Link>
                 
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/auth/login">Login</Link>
                 
                </li>

                <li className="nav-item">
                  <Link class="nav-link" to="/edit/:id">
                    Actualizar Cita
                  </Link>
                  <Link class="nav-link" to="/Tips">
                    Tips de Salud
                  </Link>
                  <Link class="nav-link" to="Servicios">
                    Servicios
                  </Link>
                </li>
                </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
