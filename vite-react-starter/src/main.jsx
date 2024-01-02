import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
