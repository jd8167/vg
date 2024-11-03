import { Helmet } from "react-helmet";
import { Outlet, useLocation, useParams } from "react-router-dom";
import PrivateHeader from "../../layout/PrivateHeader";
import AccountHeader from "../../layout/AccountHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAppContext } from "../../context/app-context";

// TODO: get the no visa available crd from ivisa and display it

function ApplicationLayout() {
  const [visaData, setVisaData] = useState(() =>
    JSON.parse(localStorage.getItem("egypt"))
  );
  const [visaHeading, setVisaHeading] = useState("");
  const { nationalityInitials, destinationInitials } = useAppContext();
  console.log(nationalityInitials, destinationInitials);
  const { pathname } = useLocation();
  console.log(visaData);
  useEffect(
    () => async () => {
      const getVisaData = async () => {
        try {
          // const { data } = await axios.get(
          //   `https://proxy.cors.sh/https://ivisatravel.com/visa/product-availability-results/${nationalityInitials}/NGN/${destinationInitials}`
          // );
          const { data: egyptVisa } = await axios.get(
            "https://proxy.cors.sh/https://ivisatravel.com/visa/product-availability-results/AU/NGN/EG"
          );
          // const res = await axios.get(
          //   "https://test-my-api-endpoint.web.app/https://ivisatravel.com/visa/product-availability-results/SA/NGN/AU"
          // );
          // const res = await axios.get(
          //   "https://proxy-ibmasyzzya-uc.a.run.app/https://ivisatravel.com/visa/product-availability-results/SA/NGN/AU"
          // );

          // const { data: card } = await axios.get(
          //   `https://proxy.cors.sh/https://ivisatravel.com/visa-information/5085/important-information/${destinationInitials}`
          // );
          const { data: egyptCard } = await axios.get(
            "https://proxy.cors.sh/https://ivisatravel.com/visa-information/5085/important-information/AU"
          );

          // console.log("dash: ", res.data);
          // console.log("dash: ", data);
          // console.log("card: ", card);
          // const info = { card, data, egyptVisa, egyptCard };
          const info = { egyptVisa, egyptCard };
          // const info = { card, data };
          console.log(info);
          return info;
        } catch (error) {
          console.error(error);
        }
      };

      // const data = await getVisaData();
      // console.log(data);
      // localStorage.setItem("egypt", JSON.stringify(data));
      // const data = JSON.parse(localStorage.getItem("egypt"));
      // console.log("new: ", data);
      // setVisaData(data);
    },
    []
  );

  return (
    <>
      {pathname.includes("step") ? (
        <>
          <Helmet>
            <link
              rel="preload"
              as="style"
              href="https://d3o7lrr6ovj0yv.cloudfront.net/build/assets/app-BBJJsEWP-b01ec469.css"
            ></link>
            <link
              rel="stylesheet"
              href="https://d3o7lrr6ovj0yv.cloudfront.net/build/assets/app-BBJJsEWP-b01ec469.css"
            ></link>
          </Helmet>
        </>
      ) : null}
      <PrivateHeader />
      {/* {isPrivate ? <AccountHeader /> : null} */}
      {pathname.includes("step") ? (
        <>
          <div className="s bhx">
            <div className="fq" style={{ marginBottom: "230px" }}>
              <Outlet context={{ visaData, visaHeading, setVisaHeading }} />
            </div>
          </div>
        </>
      ) : (
        <>
          <Outlet context={{ visaData, visaHeading, setVisaHeading }} />
        </>
      )}
    </>
  );
}

export default ApplicationLayout;
