import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './styles/normalize.scss';
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';
import '../src/styles/settings.scss';
//import '../../styles/normalize.scss';
import '../src/styles/normalize.scss';
import '../src/styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
