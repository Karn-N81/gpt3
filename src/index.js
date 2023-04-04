import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
// DOM helps to read,access and change content of html elements/tags in javascript
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

