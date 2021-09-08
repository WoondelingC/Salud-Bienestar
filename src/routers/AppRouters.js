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
  
  export default class AppRouters extends Component {
  
  
      render() {
          return (
             <Router>
                 <Switch>
                    <Route exact path="/Inicio" component={Inicio}/>
                    <Route exact path="/Servicios" component={Servicios}/>
                    <Route exact path="/Tips" component={Tips}/>
                 </Switch>
                 <Redirect to="/Inicio" />
             </Router>
          )
      }
  }