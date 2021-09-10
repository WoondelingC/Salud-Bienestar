import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '../components/login/Login'
import Registro from '../components/login/Registro'

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route 
                        exact
                        path="/login"
                        component={ Login }
                    />

                    <Route 
                        exact
                        path="/registro"
                        component={ Registro }
                    />

                    <Redirect to="/login" />

                </Switch>
            </div>

        </div>
    )
}