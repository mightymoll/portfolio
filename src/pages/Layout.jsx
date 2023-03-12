import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

// import stylesheet
import "../main.scss";

function Layout() {
  return (
    <div>
      <Header />
      {/* <Outlet> renders whatever child route is currently active in App.js */}
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout;