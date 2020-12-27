import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './hooks/use-private-route';
import { Home, Landing } from './pages';

export default function App() {
  return (
    <Router>
      <PrivateRoute exact path='/' component={Home} />
      <Route exact path='/sabotage' component={Landing} />
    </Router>
  );
};
