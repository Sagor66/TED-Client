import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import NavBar from "../pages/Shared/NavBar";

const Main = () => {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>
      <Footer className="mt-auto"></Footer>
    </div>
  );
};

export default Main;
