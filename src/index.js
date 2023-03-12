/** use React
 * BrowserRouter allows for routing to different urls which informs React which 'page' to render
 * reportWebVitals will log performance metrics in the console 
 */

import React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

// import App.jsx which defines routes to different 'pages'
import App from './App';

// helper that makes page 'scroll to top (of section)' on click
import ScrollToTop from "./helpers/ScrollToTop";

// render site (App.jsx) inside of the div with id of 'root' listed in index.html
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <ScrollToTop />
    <App />
  </Router>
);

reportWebVitals(console.log);
