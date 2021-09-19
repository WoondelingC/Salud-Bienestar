import React from 'react'
import imgHeader from '../../assets/header.jpg'
import imgHeadertwo from '../../assets/health-2082630_960_720.jpg'
import imgHeaderThree from '../../assets/shutterstock_1738390658_RED.jpg'
import imgHeaderFour from '../../assets/citamedica.jpg';
import '../../style/animation.css'
import { Link } from 'react-router-dom'

export const Slider = () => {
    return (

        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div>
                        <img src={imgHeader} className="d-block w-100" alt="..." />
                        <h2 id="itemOne-title">¡El mejor servicio a tu disposición!</h2>
                        <p id="item-p">¿No tienes cuenta aún?</p>
                        <Link to="/auth/registro" id="item-button">Registrate</Link>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={imgHeadertwo} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={imgHeaderThree} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={imgHeaderFour} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
