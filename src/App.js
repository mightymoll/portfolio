// use react router to control what is rendered in the virtual DOM
import { Routes, Route } from "react-router-dom";

/** import website 'page' files and components
 * HOME page : single-page scroll with Hero, Projects, and About sections
 * header and footer components (same throughout all site pages)
 * ERROR page will be rendered if route or content is non-existent
 */

import Home from './pages/Home';
import Error from './pages/Error';
import Layout from "./pages/Layout";

function App() {
  return (
    <div className="App_container">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
