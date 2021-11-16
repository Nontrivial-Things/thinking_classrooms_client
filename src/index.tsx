/* eslint @typescript-eslint/no-var-requires: "off" */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './assets/styles/global-styles';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
