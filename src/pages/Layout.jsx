import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = ({ userToken, setUserToken, userName, setUserName }) => {
  return (
    <div className="w-screen">
      <Navbar
        userToken={userToken}
        setUserToken={setUserToken}
        userName={userName}
        setUserName={setUserName}
      />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
