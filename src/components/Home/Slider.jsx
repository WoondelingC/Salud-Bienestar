import React from 'react'
import imgHeader from '../../assets/health-2082630_960_720.png'
import imgHeadertwo from '../../assets/serv-med-gen-37u6b7apy483xl7kagsb9c.jpg'
import imgHeaderThree from '../../assets/shutterstock_1738390658_RED.jpg'
import { Link } from 'react-router-dom'

export const Slider = () => {
    return (

        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div>
                    <img src={imgHeader} class="d-block w-100" alt="..."/>
                    <h2 id="itemOne-title">¡El mejor servicio a tu disposición!</h2>
                    <p id="item-p">¿No tienes cuenta aún?</p>
                    <Link to="/Registro" id="item-button">Registrate</Link>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={imgHeadertwo} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={imgHeaderThree} class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}
