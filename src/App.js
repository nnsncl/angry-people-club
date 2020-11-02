import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, SignIn, SignUp, Landing } from './pages';
import PrivateRoute from './utils/PrivateRoute';
import { AnimatePresence } from 'framer-motion';

export default function App() {

  return (
    <>
    <Router>
      <AnimatePresence>
        <Switch>
          <PrivateRoute exact path='/' component={Home} />
          <Route exact path='/sabotage' component={Landing} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
        </Switch>
      </AnimatePresence>
    </Router>
    </>
  );
};
