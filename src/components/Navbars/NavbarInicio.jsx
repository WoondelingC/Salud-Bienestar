import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../../style/style.css";
import { Logo, Ham } from "./Navbar";

 const NavbarInicio = () => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Logo src={logo} alt="logotipo" id="logo-nav" />
          <Ham
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Ham>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ps-3">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/inicio">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/auth/Servicios">
                  Servicios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/auth/Tips">
                  Tips de salud
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/auth/login">
                  Ingresar
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavbarInicio