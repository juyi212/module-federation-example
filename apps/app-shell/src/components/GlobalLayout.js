import React from "react";
import { Link, Outlet } from "react-router-dom";
const GlobalLayout = () => {
  return (
    <div>
      <Link to={"/microfrontend1"}>Go To Microfrontend1</Link>
      <Outlet />
    </div>
  );
};

export default GlobalLayout;
