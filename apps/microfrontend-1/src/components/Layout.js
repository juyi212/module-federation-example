import React from "react";

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Link to="/page"> go to page</Link>
      <Outlet />
    </div>
  );
};

export default Layout;
