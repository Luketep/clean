import React from 'react';
import ReactDOM from 'react-dom';

import './../css/index.scss';
import './../resources/favicon.ico';

import App from './App';

window.addEventListener('load', () => {
  ReactDOM.render(<App />, document.querySelector('#app'));
});