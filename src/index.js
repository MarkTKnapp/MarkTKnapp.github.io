import React from 'react';
import ReactDOM from 'react-dom';

import style from './app.css';
import fonts from './resources/fonts.css';

import App_root from './components/App_root/App_root';

import windowMethods from './windowMethods.js';

ReactDOM.render(
  <App_root />,
  document.getElementById('root')
);