import React from 'react'


import NavApp from '../components/NavApp'
import {BrowserRouter as Router,
Switch,

Route} from 'react-router-dom'

import { SearchApp } from '../components/SearchApp'
import ListarCita from '../components/ListarCita'
import FormCita from '../components/FormCita'
import MostrarCita from '../components/MostrarCita'
import EditCita from '../components/EditCita'
import logo from '../logo.jpg'
const RouterApp = () => {
    return (
        <>
        <Router>
        <NavApp />
        <img src={logo} 
                             className="imagen-fluid " style={{width:"90px"}}
                             alt="logo" />
        <Switch>
        <Route exact path="/edit/:id" component={EditCita} />
        <Route exact path="/listar" component={ListarCita} />
        <Route exact path="/add" component={FormCita} />
        <Route exact path="/inicio" component={MostrarCita} />
        <Route exact path="/search" component={SearchApp} />
        </Switch>
        </Router>

</>
    )
}

export default RouterApp