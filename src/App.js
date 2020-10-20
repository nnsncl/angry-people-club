import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, SignIn, SignUp, Landing } from './pages';
import { AuthProvider } from './auth/Auth';
import PrivateRoute from './helpers/PrivateRoute';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <PrivateRoute exact path='/' component={Home} />
        <Route exact path='/sabotage' component={Landing} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
      </Router>
    </AuthProvider>
  );
};
