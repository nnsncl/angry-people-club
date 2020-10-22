import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, SignIn, SignUp, Landing } from './pages';
import { AuthProvider } from './auth/Auth';
import PrivateRoute from './utils/PrivateRoute';
import ScrollContainer from './utils/ScrollContainer';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollContainer>
          <PrivateRoute exact path='/' component={Home} />
          <Route exact path='/sabotage' component={Landing} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
        </ScrollContainer>
      </Router>
    </AuthProvider>
  );
};
