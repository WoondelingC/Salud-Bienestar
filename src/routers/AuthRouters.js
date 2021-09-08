import React from 'react';
import {Route,Switch, Redirect} from 'react-router-dom';
import {Inicio} from '../components/Home/Inicio'
import { Servicios } from '../components/Servicios/Servicios';
import { Tips } from '../components/Servicios/Tips';
//import Login  from '../container/auth/Login';
//import Register  from '../container/auth/Register';

export const AuthRoutes = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    {/*<Route 
                        exact
                        path="/auth/Login"
                        component={ Login }
                    />
                    <Route 
                        exact
                        path="/auth/Register"
                        component={ Register }
                    />
                     <Route 
                        exact
                        path="/Inicio"
                        component={ Inicio }
                    />
                    <Route 
                        exact
                        path="/Servicios"
                        component={ Servicios }
                    />
                    <Route 
                        exact
                        path="/Tips"
                        component={ Tips }
                    />
                    <Redirect to="/Inicio" />
*/}
                </Switch>
            </div>

        </div>
    )
}