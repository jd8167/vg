import { Link } from "react-router-dom";
import c from "../pages/account.module.css";

function AccountHeader() {
  return (
    <>
      <div className={c.breadcrumbs}>
        <div className="bhd mr bbk bef">
          <Link to="/">
            <span>Home</span>
          </Link>
          <span> &gt; </span>
          <Link href="/account/settings">
            <span>My Account</span>
          </Link>
          <span> &gt; </span>
          <span className="bef oj bhe">My Orders</span>
        </div>
      </div>
      {/* <div id="h1-tag-container" className={c.heading}>
        <h1>My Orders</h1>
      </div> */}
    </>
  );
}

export default AccountHeader;
