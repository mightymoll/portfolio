// use react router to control what is rendered in the virtual DOM
import { Routes, Route } from "react-router-dom";

/** import website 'page' files and components
 * HOME page : single-page scroll with Hero, Projects, and About sections
 * Projects: card section that will open individual project page when card is clicked
 * header and footer components (same throughout all site pages)
 * ERROR page will be rendered if route or content is non-existent
 */

import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectPage from './pages/ProjectPage';
import Error from './pages/Error';

// import SCSS stylesheet (site is using SASS)
import './main.scss';

function App() {
  return (
    <div className="App_container">
      <Header className="header" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects/*" exact element={<ProjectPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer className="footer" />
    </div>
  );
}

export default App;
