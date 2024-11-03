import { useState } from "react";
import { Helmet } from "react-helmet";
import ListBox from "../components/ListBox";
import { ressidenceOptions } from "../data";
import { useAppContext } from "../context/app-context";
import { useNavigate } from "react-router-dom";
// TODO:
// function closeAlertModal() {
//   document.getElementById("alert-modal-v2").classList.add("oh");
// }

// function toggleDebugInfo() {
//   const debugContent = document.getElementById("local-error-debug-content");
//   debugContent.classList.toggle("oh");
// }

const sortList = (a, b) => {
  // arr.sort((a, b) => {
  if (a.option > b.option) {
    return 1;
  }
  if (a.option < b.option) {
    return -1;
  }

  return 0;
  // });
};

const searchArray = (value, arr) => {
  if (value === "") {
    return arr;
  }

  return arr.filter((item) =>
    item.option.toLowerCase().startsWith(value.toLowerCase())
  );
};

function Landing() {
  const {
    nationality,
    setNationality,
    destination,
    setDestination,
    destinationInitials,
    setDestinationInitials,
    nationalityInitials,
    setNationalityInitials,
  } = useAppContext();
  const [showOption, setShowOption] = useState(false);
  const [showOption2, setShowOption2] = useState(false);
  const [list, setList] = useState(ressidenceOptions);
  const [list2, setList2] = useState(ressidenceOptions);
  const navigate = useNavigate();
  // console.log(nationality, NationalityInitials);
  // console.log(destination, destinationInitials);

  return (
    <>
      <Helmet>
        <link
          rel="preload"
          as="style"
          href="https://d3o7lrr6ovj0yv.cloudfront.net/build/assets/app-DvT5LPrL-a90f4b38.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://d3o7lrr6ovj0yv.cloudfront.net/build/assets/app-DvT5LPrL-a90f4b38.css"
        ></link>
        <title>
          Global Online Visa Services &amp; Information Check | EVisa.com
        </title>
        <meta
          name="description"
          content="EVisa.com provides the simplest solution to process your travel visa. We enable travelers to process visas from a computer, smartphone or tablet."
        ></meta>
      </Helmet>
      <div>
        <section
          className="hero ro bva ia bzj byi nu"
          onClick={(e) => {
            e.stopPropagation();
            setShowOption(false);
            setShowOption2(false);
          }}
        >
          <div className="fe bbo bej">
            <h1 className="bgm ef bzo bdk bqo bnk bvd">
              Get your travel visa for any country{" "}
            </h1>

            <div className="nu btt wc za cd ed bah">
              <div>
                <form
                  className="ro kz po oc ts uy vd la ty bej x"
                  onSubmit={(e) => {
                    e.preventDefault();
                    navigate(`/a/${destination.toLowerCase()}`);
                  }}
                >
                  <span className="oh">Check visa requirements</span>
                  <div className="uk ro oc sb ts boj">
                    <div className="bnd ro">
                      <h4 className="bgv mj">Where am I from?</h4>
                      <div
                        className="dropdown ia ro"
                        tabIndex="0"
                        id="countryFrom"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowOption(true);
                          setShowOption2(false);
                        }}
                      >
                        <div className="gm" data-flip="false">
                          <div
                            className="oc tz sb bcp vv bej"
                            data-handle="filter-value"
                          >
                            <span
                              className={`${!nationality ? "beh oq" : "vv"}`}
                            >
                              {nationality
                                ? `${nationality} - ${nationalityInitials}`
                                : "Travelling From"}
                            </span>
                          </div>
                          <div className="ob">
                            <svg
                              className="ql on bej sz"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.29389 13.7081C9.68443 14.0986 10.3187 14.0986 10.7092 13.7081L16.7081 7.70924C17.0986 7.31869 17.0986 6.68444 16.7081 6.29389C16.3175 5.90334 15.6833 5.90334 15.2927 6.29389L10 11.5866L4.70728 6.29701C4.31673 5.90646 3.68248 5.90646 3.29193 6.29701C2.90139 6.68756 2.90139 7.32181 3.29193 7.71236L9.29076 13.7112L9.29389 13.7081Z"></path>
                            </svg>
                          </div>
                        </div>
                        <div
                          className={`dropdown-filter bff fi ro ia v2-dropdown-filter ${
                            showOption ? "show" : ""
                          }`}
                          style={{ paddingTop: "0px", position: "absolute" }}
                        >
                          <div>
                            <input
                              name="doNotAutofill0.059798419103621825"
                              type="search"
                              autoComplete="off"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-handle="visa-checker-nationality"
                              className="gn"
                              // value={inputOneValue}
                              onChange={(e) => {
                                // setInputOneValue(e.target.value);
                                setList(
                                  searchArray(e.target.value, ressidenceOptions)
                                );
                              }}
                            />
                          </div>
                          {showOption ? (
                            <ListBox
                              // options={list}
                              options={list.sort(sortList)}
                              handleClick={(country, initials) => {
                                setNationality(country);
                                setNationalityInitials(initials);
                              }}
                              handleClose={() => {
                                setShowOption(false);
                                setShowOption2(false);
                              }}
                            />
                          ) : null}
                          <div
                            data-critical="true"
                            className="fk"
                            style={{ display: "none" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="bnd ro">
                      <h4 className="bgv mj">Where am I going?</h4>
                      <div
                        className="dropdown ia"
                        tabIndex="0"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowOption(false);
                          setShowOption2(true);
                        }}
                      >
                        <div className="gm" data-flip="false">
                          <div
                            className="oc tz sb bcp vv bej"
                            data-handle="filter-value"
                          >
                            <span
                              className={`${!destination ? "beh oq" : "vv"}`}
                            >
                              {destination
                                ? `${destination} - ${destinationInitials}`
                                : "Travelling To"}
                            </span>
                          </div>
                          <div className="ob">
                            <svg
                              className="ql on bej sz"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.29389 13.7081C9.68443 14.0986 10.3187 14.0986 10.7092 13.7081L16.7081 7.70924C17.0986 7.31869 17.0986 6.68444 16.7081 6.29389C16.3175 5.90334 15.6833 5.90334 15.2927 6.29389L10 11.5866L4.70728 6.29701C4.31673 5.90646 3.68248 5.90646 3.29193 6.29701C2.90139 6.68756 2.90139 7.32181 3.29193 7.71236L9.29076 13.7112L9.29389 13.7081Z"></path>
                            </svg>
                          </div>
                        </div>
                        <div
                          className={`dropdown-filter bff fi ro ia v2-dropdown-filter ${
                            showOption2 ? "show" : ""
                          }`}
                          style={{ paddingTop: "0px", position: "absolute" }}
                        >
                          <div>
                            <input
                              name="doNotAutofill0.5670121513640949"
                              type="search"
                              autoComplete="off"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              data-handle="visa-checker-destination"
                              className="gn"
                              // value={destinationInitials}
                              onChange={(e) => {
                                // setDestinationInitials(e.target.value);
                                setList2(
                                  searchArray(e.target.value, ressidenceOptions)
                                );
                              }}
                            />
                          </div>
                          {showOption2 ? (
                            <ListBox
                              options={list2}
                              handleClick={(country, initials) => {
                                setDestination(country);
                                setDestinationInitials(initials);
                              }}
                              handleClose={() => {
                                setShowOption(false);
                                setShowOption2(false);
                              }}
                            />
                          ) : null}
                          <div
                            data-critical="true"
                            className="fk"
                            style={{ display: "none" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h oc ty ro vx">
                    <div className="ro">
                      <button
                        className="gr gs gy hd hi ia"
                        id="btn_visa_checker_v2"
                        // onClick={(e) => {
                        //   console.log("btn: ", destination);
                        //   e.stopPropagation();
                        //   navigate(`/a/${destination}`);
                        // }}
                      >
                        <span className="">Get started!</span>
                        <div className="ob">
                          <svg
                            className="qq oq mw disabled:hover:v2-text-gray-300"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <mask
                              style={{ maskType: "alpha" }}
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="20"
                              height="20"
                            >
                              <rect
                                width="20"
                                height="20"
                                fill="currentColor"
                              ></rect>
                            </mask>
                            <g>
                              <path
                                d="M16.707 10.706C17.0977 10.3155 17.0977 9.68137 16.707 9.2909L11.7067 4.29285C11.3161 3.90238 10.6817 3.90238 10.291 4.29285C9.90038 4.68333 9.90038 5.31745 10.291 5.70793L13.5881 9.00039H4.00006C3.4469 9.00039 3 9.44709 3 10C3 10.5529 3.4469 10.9996 4.00006 10.9996H13.585L10.2942 14.2921C9.90351 14.6825 9.90351 15.3167 10.2942 15.7071C10.6848 16.0976 11.3192 16.0976 11.7099 15.7071L16.7101 10.7091L16.707 10.706Z"
                                fill="currentColor"
                              ></path>
                            </g>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <div id="main" className="sb ">
          <div>
            <section className="fe zr xa xr bbj oc ts boj tz ud up bej">
              <div className="oc up rc uf">
                <div className="bdk">
                  <h4 className="bgo me">1.2M</h4>
                  <p className="bhq">happy customers</p>
                </div>
                <div className="bdk">
                  <h4 className="bgo me">24/7</h4>
                  <p className="bhq">assistance when needed</p>
                </div>
              </div>
              <div className="ro bnj bdk bjq">
                <img
                  className="kz entered loaded"
                  alt=""
                  data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/trustpilot/trustpilot-icon-gray.webp"
                  width="100"
                  height="32"
                  data-ll-status="loaded"
                  src="https://d3o7lrr6ovj0yv.cloudfront.net/img/trustpilot/trustpilot-icon-gray.webp"
                />
                <div className="oc ud tz lb uq">
                  <img
                    alt="star"
                    data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/trustpilot/star-filled-gray.webp"
                    width="24"
                    height="24"
                    data-ll-status="loaded"
                    className="entered loaded"
                    src="https://d3o7lrr6ovj0yv.cloudfront.net/img/trustpilot/star-filled-gray.webp"
                  />
                  <img
                    alt="star"
                    data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/trustpilot/star-filled-gray.webp"
                    width="24"
                    height="24"
                    data-ll-status="loaded"
                    className="entered loaded"
                    src="https://d3o7lrr6ovj0yv.cloudfront.net/img/trustpilot/star-filled-gray.webp"
                  />
                  <img
                    alt="star"
                    data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/trustpilot/star-filled-gray.webp"
                    width="24"
                    height="24"
                    data-ll-status="loaded"
                    className="entered loaded"
                    src="https://d3o7lrr6ovj0yv.cloudfront.net/img/trustpilot/star-filled-gray.webp"
                  />
                  <img
                    alt="star"
                    data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/trustpilot/star-filled-gray.webp"
                    width="24"
                    height="24"
                    data-ll-status="loaded"
                    className="entered loaded"
                    src="https://d3o7lrr6ovj0yv.cloudfront.net/img/trustpilot/star-filled-gray.webp"
                  />
                  <img
                    alt="star"
                    data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/trustpilot/star-half-gray.webp"
                    width="24"
                    height="24"
                    data-ll-status="loaded"
                    className="entered loaded"
                    src="https://d3o7lrr6ovj0yv.cloudfront.net/img/trustpilot/star-half-gray.webp"
                  />
                </div>
                <p className="bhq">+50,000 reviews</p>
              </div>
              <div className="oc up rc uf">
                <div className="bdk">
                  <h4 className="bgo me">10</h4>
                  <p className="bhq">years of experience</p>
                </div>
                <div className="bdk">
                  <h4 className="bgo me">99%</h4>
                  <p className="bhq">approval rate</p>
                </div>
              </div>
            </section>
            <section className="fd fe nu btt mh bsw bej">
              <div className="jz brr ds">
                <img
                  alt="airplane view"
                  src="https://d3o7lrr6ovj0yv.cloudfront.net/images/homepage-why.webp"
                  className="wh mb"
                />
                <h2 className="bgl bqr mj">Why iVisa is awesome</h2>
                <p className="bhq md">
                  Here&apos;s why iVisa is awesome and why you should try us.
                </p>
              </div>
              <div className="jz brr of ti boe tq um nt btr">
                <div className="yn wc bal bdk">
                  <svg
                    className="kz qs os"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    {/* Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)  */}
                    <path d="M360 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24 0 90.965 51.016 167.734 120.842 192C75.016 280.266 24 357.035 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24 0-90.965-51.016-167.734-120.842-192C308.984 231.734 360 154.965 360 64c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24zm-64 448H88c0-77.458 46.204-144 104-144 57.786 0 104 66.517 104 144z"></path>
                  </svg>
                  <h5 className="bgt lm">Simple</h5>
                  <p className="bhs">
                    Our process is simpler than the government&apos;s.
                  </p>
                </div>
                <div className="yn wc bal bdk">
                  <svg
                    className="kz qs os"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    {/* Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) */}
                    <path d="M622.3 271.1l-115.2-45c-4.1-1.6-12.6-3.7-22.2 0l-115.2 45c-10.7 4.2-17.7 14-17.7 24.9 0 111.6 68.7 188.8 132.9 213.9 9.6 3.7 18 1.6 22.2 0C558.4 489.9 640 420.5 640 296c0-10.9-7-20.7-17.7-24.9zM496 462.4V273.3l95.5 37.3c-5.6 87.1-60.9 135.4-95.5 151.8zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm96 40c0-2.5.8-4.8 1.1-7.2-2.5-.1-4.9-.8-7.5-.8h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c6.8 0 13.3-1.5 19.2-4-54-42.9-99.2-116.7-99.2-212z"></path>
                  </svg>
                  <h5 className="bgt lm">Secure</h5>
                  <p className="bhs">
                    Your information is always safe with us.
                  </p>
                </div>
                <div className="yn wc bal bdk">
                  <svg
                    className="kz qs os"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    {/* Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) */}
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                  </svg>
                  <h5 className="bgt lm">Success-driven</h5>
                  <p className="bhs">99% of our applications are approved.</p>
                </div>
                <div className="yn wc bal bdk">
                  <svg
                    className="kz qs os"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    {/* Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) */}
                    <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"></path>
                  </svg>
                  <h5 className="bgt lm">Dedicated</h5>
                  <p className="bhs">We&apos;re here to help 24/7.</p>
                </div>
              </div>
            </section>{" "}
            <section className="fe mh bsw bej">
              <h2 className="bgl bqr mj kz rn">Our application process</h2>
              <p className="bhm mh bdk">
                Here&apos;s how to apply for different travel documents with us.
              </p>
              <div className="fd">
                <div className="jz brr bry">
                  <div className="oc uk mf">
                    <div className="rj pc baf oc tz ud za wf bgj">01</div>
                    <div className="">
                      <h6 className="bgp">Apply</h6>
                      <p className="bhs">
                        Answer some initial information, make your payment, and
                        provide some final information.
                      </p>
                    </div>
                  </div>
                  <div className="oc uk mf">
                    <div className="rj pc baf oc tz ud za wf bgj">02</div>
                    <div className="">
                      <h6 className="bgp">Leave the rest to us</h6>
                      <p className="bhs">
                        Get easy access to your document via email. If an
                        embassy appointment is required to get your document,
                        we’ll schedule it for you.
                      </p>
                    </div>
                  </div>
                  <div className="oc uk mh">
                    <div className="rj pc baf oc tz ud za wf bgj">03</div>
                    <div className="">
                      <h6 className="bgp">Enjoy your visit!</h6>
                      <p className="bhs">
                        Be ready to show your passport and document when you
                        land at your destination.
                      </p>
                    </div>
                  </div>
                  <a href="#content" tabIndex="-1">
                    <button className="gr gs gy hf hi" type="submit">
                      Apply Now
                      <svg
                        className="bki mw ql on"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        {/* Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) */}
                        <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                      </svg>
                    </button>
                  </a>
                </div>
                <div className="oh buh jv nt btr">
                  <img
                    src="https://d3o7lrr6ovj0yv.cloudfront.net/images/homepage-app-process.webp"
                    alt="Application process"
                    className="ro pm wc"
                  />
                </div>
              </div>
            </section>{" "}
            <section className="fd fe ml bsw bej">
              <div className="jz bro md">
                <h2 className="bgl bqr lx">Customer reviews</h2>
                <p className="bgr">
                  Read about our happy traveler&apos;s experiences.
                </p>
              </div>

              <figure className="jz bro oc ts bdk bqo mg">
                <svg
                  className="sr lv kz blg qr or"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  {/* Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) */}
                  <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
                </svg>
                <p className="bhs lv">
                  {" "}
                  My experience was great as it was easy to use, there were
                  clear requirements and I was kept well-informed of the
                  progress.
                </p>
                <figcaption>
                  <div className="bhu me">Helen Susan Clifton</div>
                  <div className="bha lv">14 hours ago</div>
                  <div className="oc va ud boo">
                    <img
                      data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/rate_star.svg"
                      alt="star"
                    />
                    <img
                      data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/rate_star.svg"
                      alt="star"
                    />
                    <img
                      data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/rate_star.svg"
                      alt="star"
                    />
                    <img
                      data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/rate_star.svg"
                      alt="star"
                    />
                    <img
                      data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/rate_star.svg"
                      alt="star"
                    />
                  </div>
                </figcaption>
              </figure>

              <figure className="jz bro oc ts bdk bqo mg">
                <svg
                  className="sr lv kz blg qr or"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  {/* Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) */}
                  <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
                </svg>
                <p className="bhs lv">
                  iVisa takes care of all your visa needs without requiring you
                  to run around resolving issues with the application. Thank you
                  very much for taking this burden off my shoulders.
                </p>
                <figcaption>
                  <div className="bhu me">Jerry Kennedy</div>
                  <div className="bha lv">2 days ago</div>
                  <div className="oc va ud boo">
                    <img
                      data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/rate_star.svg"
                      alt="star"
                    />
                    <img
                      data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/rate_star.svg"
                      alt="star"
                    />
                    <img
                      data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/rate_star.svg"
                      alt="star"
                    />
                    <img
                      data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/rate_star.svg"
                      alt="star"
                    />
                    <img
                      data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/rate_star.svg"
                      alt="star"
                    />
                  </div>
                </figcaption>
              </figure>

              <figure className="jz bro oc ts bdk bqo mg">
                <svg
                  className="sr lv kz blg qr or"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  {/* Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) */}
                  <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
                </svg>
                <p className="bhs lv">
                  I loved the simplicity of the process and how they kept the
                  customer updated from start to finish. It built confidence
                  that your visa applications are in good hands. Good job iVisa.
                </p>
                <figcaption>
                  <div className="bhu me">Ranjan Sharma, MD</div>
                  <div className="bha lv">20 hours ago</div>
                  <div className="oc va ud boo">
                    <img
                      data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/rate_star.svg"
                      alt="star"
                    />
                    <img
                      data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/rate_star.svg"
                      alt="star"
                    />
                    <img
                      data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/rate_star.svg"
                      alt="star"
                    />
                    <img
                      data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/rate_star.svg"
                      alt="star"
                    />
                    <img
                      data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/rate_star.svg"
                      alt="star"
                    />
                  </div>
                </figcaption>
              </figure>
            </section>{" "}
            <section className="fe bej bdk ml">
              <h2 className="bgl bqr mj">Top destinations</h2>
              <p className="bhm mh bsw">
                Find out what you&apos;ll need to travel to our most popular
                destinations.{" "}
              </p>
              <div className="bif lw oc vn tv um">
                <a
                  href="https://ivisatravel.com/a/australia"
                  className="se qh brp wc lg bso bey"
                >
                  <figure className="po ro">
                    <img
                      src="https://d3o7lrr6ovj0yv.cloudfront.net/images/countries/australia-bg.webp"
                      alt="AU"
                      className="ro"
                    />
                    <figcaption className="yg bev bat bbj bdj wi">
                      <h3 className="bgq me">Australia</h3>
                      <p className="bhs oc tz uq">
                        <svg
                          className="bek qq oq"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_1025_2749"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="32"
                            height="32"
                          >
                            <rect width="32" height="32" fill="#D9D9D9"></rect>
                          </mask>
                          <g mask="url(#mask0_1025_2749)">
                            <path
                              d="M7.04001 11.6C7.04001 10.2209 7.57944 8.89823 8.53963 7.92304C9.49981 6.94785 10.8021 6.39999 12.16 6.39999C13.5179 6.39999 14.8202 6.94785 15.7804 7.92304C16.7406 8.89823 17.28 10.2209 17.28 11.6C17.28 12.9791 16.7406 14.3018 15.7804 15.2769C14.8202 16.2521 13.5179 16.8 12.16 16.8C10.8021 16.8 9.49981 16.2521 8.53963 15.2769C7.57944 14.3018 7.04001 12.9791 7.04001 11.6ZM3.20001 25.9934C3.20001 21.9919 6.39201 18.75 10.332 18.75H13.988C17.928 18.75 21.12 21.9919 21.12 25.9934C21.12 26.6597 20.588 27.2 19.932 27.2H4.38801C3.73201 27.2 3.20001 26.6597 3.20001 25.9934ZM27.572 27.2H22.056C22.272 26.8181 22.4 26.3753 22.4 25.9V25.575C22.4 23.1091 21.316 20.895 19.608 19.4081C19.704 19.4041 19.796 19.4 19.892 19.4H22.348C25.912 19.4 28.8 22.3331 28.8 25.9528C28.8 26.6434 28.248 27.2 27.572 27.2ZM20.48 16.8C19.24 16.8 18.12 16.2881 17.308 15.4634C18.096 14.3828 18.56 13.0462 18.56 11.6C18.56 10.5112 18.296 9.48343 17.828 8.58156C18.572 8.02906 19.488 7.69999 20.48 7.69999C22.956 7.69999 24.96 9.73531 24.96 12.25C24.96 14.7647 22.956 16.8 20.48 16.8Z"
                              fill="currentColor"
                            ></path>
                          </g>
                        </svg>
                        <span className="bhs"> +126,697 Processed visas</span>
                      </p>
                    </figcaption>
                  </figure>
                </a>
                <a
                  href="https://ivisatravel.com/a/india"
                  className="se qh brp wc lg bso bey"
                >
                  <figure className="po ro">
                    <img
                      src="https://d3o7lrr6ovj0yv.cloudfront.net/images/countries/india-bg.webp"
                      alt="IN"
                      className="ro"
                    />
                    <figcaption className="yg bev bat bbj bdj wi">
                      <h3 className="bgq me">India</h3>
                      <p className="bhs oc tz uq">
                        <svg
                          className="bek qq oq"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_1025_2749"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="32"
                            height="32"
                          >
                            <rect width="32" height="32" fill="#D9D9D9"></rect>
                          </mask>
                          <g mask="url(#mask0_1025_2749)">
                            <path
                              d="M7.04001 11.6C7.04001 10.2209 7.57944 8.89823 8.53963 7.92304C9.49981 6.94785 10.8021 6.39999 12.16 6.39999C13.5179 6.39999 14.8202 6.94785 15.7804 7.92304C16.7406 8.89823 17.28 10.2209 17.28 11.6C17.28 12.9791 16.7406 14.3018 15.7804 15.2769C14.8202 16.2521 13.5179 16.8 12.16 16.8C10.8021 16.8 9.49981 16.2521 8.53963 15.2769C7.57944 14.3018 7.04001 12.9791 7.04001 11.6ZM3.20001 25.9934C3.20001 21.9919 6.39201 18.75 10.332 18.75H13.988C17.928 18.75 21.12 21.9919 21.12 25.9934C21.12 26.6597 20.588 27.2 19.932 27.2H4.38801C3.73201 27.2 3.20001 26.6597 3.20001 25.9934ZM27.572 27.2H22.056C22.272 26.8181 22.4 26.3753 22.4 25.9V25.575C22.4 23.1091 21.316 20.895 19.608 19.4081C19.704 19.4041 19.796 19.4 19.892 19.4H22.348C25.912 19.4 28.8 22.3331 28.8 25.9528C28.8 26.6434 28.248 27.2 27.572 27.2ZM20.48 16.8C19.24 16.8 18.12 16.2881 17.308 15.4634C18.096 14.3828 18.56 13.0462 18.56 11.6C18.56 10.5112 18.296 9.48343 17.828 8.58156C18.572 8.02906 19.488 7.69999 20.48 7.69999C22.956 7.69999 24.96 9.73531 24.96 12.25C24.96 14.7647 22.956 16.8 20.48 16.8Z"
                              fill="currentColor"
                            ></path>
                          </g>
                        </svg>
                        <span className="bhs"> +149,245 Processed visas</span>
                      </p>
                    </figcaption>
                  </figure>
                </a>
                <a
                  href="https://ivisatravel.com/a/colombia"
                  className="se qh brp wc lg bso bey"
                >
                  <figure className="po ro">
                    <img
                      src="https://d3o7lrr6ovj0yv.cloudfront.net/images/countries/colombia-bg.webp"
                      alt="CO"
                      className="ro"
                    />
                    <figcaption className="yg bev bat bbj bdj wi">
                      <h3 className="bgq me">Colombia</h3>
                      <p className="bhs oc tz uq">
                        <svg
                          className="bek qq oq"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_1025_2749"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="32"
                            height="32"
                          >
                            <rect width="32" height="32" fill="#D9D9D9"></rect>
                          </mask>
                          <g mask="url(#mask0_1025_2749)">
                            <path
                              d="M7.04001 11.6C7.04001 10.2209 7.57944 8.89823 8.53963 7.92304C9.49981 6.94785 10.8021 6.39999 12.16 6.39999C13.5179 6.39999 14.8202 6.94785 15.7804 7.92304C16.7406 8.89823 17.28 10.2209 17.28 11.6C17.28 12.9791 16.7406 14.3018 15.7804 15.2769C14.8202 16.2521 13.5179 16.8 12.16 16.8C10.8021 16.8 9.49981 16.2521 8.53963 15.2769C7.57944 14.3018 7.04001 12.9791 7.04001 11.6ZM3.20001 25.9934C3.20001 21.9919 6.39201 18.75 10.332 18.75H13.988C17.928 18.75 21.12 21.9919 21.12 25.9934C21.12 26.6597 20.588 27.2 19.932 27.2H4.38801C3.73201 27.2 3.20001 26.6597 3.20001 25.9934ZM27.572 27.2H22.056C22.272 26.8181 22.4 26.3753 22.4 25.9V25.575C22.4 23.1091 21.316 20.895 19.608 19.4081C19.704 19.4041 19.796 19.4 19.892 19.4H22.348C25.912 19.4 28.8 22.3331 28.8 25.9528C28.8 26.6434 28.248 27.2 27.572 27.2ZM20.48 16.8C19.24 16.8 18.12 16.2881 17.308 15.4634C18.096 14.3828 18.56 13.0462 18.56 11.6C18.56 10.5112 18.296 9.48343 17.828 8.58156C18.572 8.02906 19.488 7.69999 20.48 7.69999C22.956 7.69999 24.96 9.73531 24.96 12.25C24.96 14.7647 22.956 16.8 20.48 16.8Z"
                              fill="currentColor"
                            ></path>
                          </g>
                        </svg>
                        <span className="bhs"> +31,546 Processed visas</span>
                      </p>
                    </figcaption>
                  </figure>
                </a>
              </div>
            </section>
          </div>
          <div
            id="alert-modal-v2"
            className="oh hy"
            style={{ zIndex: 10000 }}
            aria-labelledby="alert-modal"
            role="dialog"
            aria-modal="true"
          >
            <div className="hy ic jk yh bgb bgf oc px tz ud">
              <div className="wh zr baj ch bfz ro ku g">
                <div className="kz lx oy re oc sd tz ud wf zn">
                  <svg
                    className="bes qw ou"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    {/* Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) */}
                    <path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path>
                  </svg>
                </div>

                <div className="bdk md">
                  <h3 className="bgp v2-text-gray-900" id="fo"></h3>
                  <p className="bej bgp" id="fn"></p>
                  <p className="oh gf bdj nq" id="fm"></p>
                </div>
                <button
                  className="gr gs gz hd hi"
                  data-handle="alert-modal-button"
                  type="submit"
                  id="fp"
                  onClick={() => "closeAlertModal()"}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
