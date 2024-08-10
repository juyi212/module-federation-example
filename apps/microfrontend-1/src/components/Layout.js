import React from "react";

import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Link to="/page"> Go To Microfrontend1-New Page </Link>
      <Outlet />
    </div>
  );
};

export default Layout;
