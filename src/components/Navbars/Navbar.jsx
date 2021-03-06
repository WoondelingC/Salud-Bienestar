import React from "react";
import logo from '../../assets/logo.png'
import styled from "styled-components";

const Logo = styled.img`
  width: 100px;
  height: 50px;
`

const Navbar = () => {
  return (
    <div className="container w-25 p-0 mt-2">
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
                  <a class="nav-link active" aria-current="page" href="/">
                    Inicio
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Perfil
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Agendar Cita
                  </a>
                </li>

                <li className="nav-item">
                  <a class="nav-link" href="/">
                    Tips de Salud
                  </a>
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
