import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import '../../style/style.css';


export const Navbar = () => {
    
    const { name } = useSelector((state) => state.auth);

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
                            <li class="nav-item">
                                <Link class="nav-link" to='/Tips'>Tips de salud</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" to='/Login'>Ingresar</Link>
                            </li>

                            <li className="text-danger d-flex">{name}</li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
