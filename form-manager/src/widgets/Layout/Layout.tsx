import Navigation from "./ui/Navigation";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <div className="content-wrapper">
        <Navigation />
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;