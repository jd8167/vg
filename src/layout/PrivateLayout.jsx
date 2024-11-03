import { Outlet } from "react-router-dom";
import PrivateHeader from "./PrivateHeader";
import AccountHeader from "./AccountHeader";
const isPrivate = false;
function PrivateLayout() {
  return (
    <>
      <PrivateHeader />
      {isPrivate ? <AccountHeader /> : null}
      {/* <main> */}
      <Outlet />
      {/* </main> */}
      {/* <footer>
        <p>footer</p>
      </footer> */}
    </>
  );
}

export default PrivateLayout;
