import { Link, Outlet } from "react-router-dom";
import React from "react";
const GlobalLayout = () => {
  return (
    <div>
      <Link to={"/microfrontend1"}>Go To microfrontend1 page</Link>
      <Outlet />
    </div>
  );
};

export default GlobalLayout;
