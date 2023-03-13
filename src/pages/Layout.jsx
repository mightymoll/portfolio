import { Outlet } from "react-router-dom";
import Construction from "./Construction";

import Header from "../components/Header";
import Footer from "../components/Footer";

// import stylesheet
import "../main.scss";

function Layout() {

  // check screen size
  // if smaller than a laptop will display the 'under construction' page
  const smallScreen = () => {
    const screenWidth = window.screen.width;
    console.log(screenWidth)

    if (screenWidth < 991) {
      return 'true'
    }
    else if (screenWidth >= 990) {
      return 'false'
    }
  }

  return (
    <div>
      {smallScreen() === 'true' ?
        <div>
          <Construction />
        </div >
        :
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      }
    </div >
  )
}

export default Layout;