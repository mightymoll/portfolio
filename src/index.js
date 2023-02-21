/** use React
 * createRoot connects React components to a DOM node (for rendering purposes)
 * BrowserRouter allows for routing to different urls which informs React which 'page' to render
 * reportWebVitals will log performance metrics in the console 
 */

import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

// import stylesheet
import './styles/index.css';

// import App.jsx which defines routes to different 'pages'
import App from './App';

// render site (App.jsx) inside of the div with id of 'root' listed in index.html
const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
reportWebVitals(console.log);
