import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Home, Landing } from '../pages';
import PrivateRoute from '../utils/PrivateRoute';

export default function Routes() {
    const location = useLocation();
    return (
        <Switch location={location} key={location.key} >
            <PrivateRoute exact path='/anonymity' component={Home} />
            <Route exact path='/' component={Landing} />
        </Switch>
    )
}