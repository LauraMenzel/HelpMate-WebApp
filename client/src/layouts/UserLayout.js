import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/Context";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function UserLayout() {
  const { state } = useContext(AppContext);

  if (state.user._id) {
    return (
      <>
        <NavBar />
        <Outlet />
        <Footer />
      </>
    );
  } else {
    return <Navigate to="/" />;
  }
}

export default UserLayout;
