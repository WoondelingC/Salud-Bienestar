import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
  import React, { Component } from 'react'
  import {Inicio} from '../components/Home/Inicio'
  import { Servicios } from '../components/Servicios/Servicios';
  import { Tips } from '../components/Servicios/Tips';
  import  Login  from '../components/login/Login';
  import  Registro 
   from '../components/login/Registro';
  
  export default class AppRouters extends Component {
  
  
      render() {
          return (
             <Router>
                 <Switch>
                    <Route exact path="/Inicio" component={Inicio}/>
                    <Route exact path="/Servicios" component={Servicios}/>
                    <Route exact path="/Tips" component={Tips}/>
                    <Route exact path="/Login" component={Login}/>
                    <Route exact path="/Registro" component={Registro}/>
                 </Switch>
                 <Redirect to="/Inicio" />
             </Router>
          )
      }
  }