import React from "react";
import { Outlet } from "react-router-dom";
import PublicHeader from "./PublicHeader";

function PublicLayout() {
  return (
    <>
      <PublicHeader />
      {/* <main> */}
      <Outlet />
      {/* </main> */}
      {/* <footer>
        <p>footer</p>
      </footer> */}
    </>
  );
}

export default PublicLayout;
