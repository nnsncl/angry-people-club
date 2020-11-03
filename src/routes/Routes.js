import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Home, SignIn, SignUp, Landing } from '../pages';
import PrivateRoute from '../utils/PrivateRoute';
import { AnimatePresence } from 'framer-motion';

export default function Routes() {
    const location = useLocation();

    console.log('**********************')
    console.warn(location)
    console.log('**********************')

    return (
        <AnimatePresence>
            <Switch location={location} key={location.key} >
                <PrivateRoute exact path='/' component={Home} />
                <Route exact path='/sabotage' component={Landing} />
                <Route exact path='/signin' component={SignIn} />
                <Route exact path='/signup' component={SignUp} />
            </Switch>
        </AnimatePresence>
    )
}