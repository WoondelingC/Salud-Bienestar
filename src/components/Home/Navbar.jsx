import React from 'react'
import logo from '../../assets/logo.png'
import '../../style/style.css'

export const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                <img src={logo} alt="logotipo" id="logo-nav"/>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Servicios</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Tips de Salud</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
