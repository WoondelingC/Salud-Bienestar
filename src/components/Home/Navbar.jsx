import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import '../../style/style.css';


export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <img src={logo} alt="logotipo" id="logo-nav"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/Inicio'>Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Servicios'>Servicios</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Tips'>Tips de Salud</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
