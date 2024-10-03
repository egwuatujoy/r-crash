import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
const MainLayouts = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainLayouts;
