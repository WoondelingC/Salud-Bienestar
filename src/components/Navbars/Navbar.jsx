import React from "react";
import logo from '../../assets/logo.png'
import styled from "styled-components";
import { Link } from "react-router-dom";

const Logo = styled.img`
  width: 100px;
  height: 50px;
`

const Navbar = () => {
  return (
    <div classNameName="container w-25 p-0 mt-2">
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <Logo src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
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
                  <Link className="nav-link active" aria-current="page" to="/inicio">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link classNameName="nav-Link" to='/perfil'>
                    Perfil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Agendar Cita
                  </Link>
                </li>

                <li classNameName="nav-item">
                  <Link className="nav-link" to="/Tips">
                    Tips de Salud
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
