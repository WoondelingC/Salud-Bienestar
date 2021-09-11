import React from 'react'


import Navbar from '../components/Navbars/Navbar'
import {BrowserRouter as Router,
Switch,

Route} from 'react-router-dom'

import ListarCita from '../components/citas/ListarCita'
import FormCita from '../components/citas/FormCita'

import EditCita from '../components/citas/EditCita'
import Perfil from '../components/Perfil'
import {Inicio} from '../components/Home/Inicio'
import { Servicios } from '../components/Servicios/Servicios';
import { Tips } from '../components/Servicios/Tips';
import  Login  from '../components/login/Login';
import  Registro 
 from '../components/login/Registro';
const RouterApp = () => {
    return (
        <>
        <Router>
        <Navbar />
       
        <Switch>
        <Route exact path="/edit/:id" component={EditCita} />
        <Route exact path="/listar" component={ListarCita} />
        <Route exact path="/add" component={FormCita} />
       
        <Route exact path="/perfil" component={Perfil} />
        <Route exact path="/Inicio" component={Inicio}/>
                    <Route exact path="/Servicios" component={Servicios}/>
                    <Route exact path="/Tips" component={Tips}/>
                    <Route exact path="/Login" component={Login}/>
                    <Route exact path="/Registro" component={Registro}/>
        </Switch>
        </Router>

</>
    )
}

export default RouterApp