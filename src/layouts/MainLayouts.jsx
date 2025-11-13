import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayouts = () => {
  return (
    <div className="content">
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayouts;