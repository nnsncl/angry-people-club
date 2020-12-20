import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from './store/reducer/index';

import { GlobalStyles } from './styles/global-styles';

const store = createStore(rootReducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
