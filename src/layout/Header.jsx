import { useState } from "react";
import AuthLayout from "./PrivateHeader";
import NotAuthLayout from "./PublicHeader";

function Header() {
  const [isLoggedIn, setIsLOggedIn] = useState(true);
  return <>{isLoggedIn ? <AuthLayout /> : <NotAuthLayout />}</>;
}

export default Header;
