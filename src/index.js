import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import store from './app/store';
import { Provider } from 'react-redux';

import { GlobalStyles } from './styles/global-styles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
