import React from 'react'


import Navbar from '../components/Navbars/Navbar'
import {BrowserRouter as Router,
Switch,

Route} from 'react-router-dom'

import ListarCita from '../components/citas/ListarCita'
import FormCita from '../components/citas/FormCita'
import MostrarCita from '../components/citas/MostrarCita'
import EditCita from '../components/citas/EditCita'
import Perfil from '../components/Perfil'

const RouterApp = () => {
    return (
        <>
        <Router>
        <Navbar />
       
        <Switch>
        <Route exact path="/edit/:id" component={EditCita} />
        <Route exact path="/listar" component={ListarCita} />
        <Route exact path="/add" component={FormCita} />
        <Route exact path="/inicio" component={MostrarCita} />
        <Route exact path="/perfil" component={Perfil} />
        </Switch>
        </Router>

</>
    )
}

export default RouterApp