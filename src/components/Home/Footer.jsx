import React from 'react'
import '../../style/style.css'
import logo from '../../assets/logo.png'
import github from "../../assets/icon-github.png"
import instagram from "../../assets/icon-instagram.png"
import twitter from "../../assets/icon-twitter_squared.png"

export const Footer = () => {
    return (
        <div>
        <footer>
        <h2 id="title-footer"><img src={logo}/></h2>
        <span>Hecho por Diana, Woonderling , José . Copyright 2021 - Todos los derechos reservados.</span>
        <ul>
            <li><a href="https://github.com/WoondelingC/Salud-Bienestar.git"><img src={github} id="img-footer"/></a></li>
            <li><a href="https://www.instagram.com/laacademiageek/"><img src={instagram} id="img-footer"/></a></li>
            <li><a href="https://twitter.com/geek_colombia"><img src={twitter} id="img-footer"/></a></li>
        </ul>

        </footer>

        </div>
    )
}
