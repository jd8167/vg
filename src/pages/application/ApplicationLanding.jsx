import { Helmet } from "react-helmet";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import VisaCard from "./components/VisaCard";
import { useAppContext } from "../../context/app-context";
import NoVisa from "./NoVisa";

function ApplicationLanding() {
  const { visaData, setVisaHeading } = useOutletContext();
  const { nationality } = useAppContext();
  const { egyptCard, egyptVisa } = visaData;
  const tiles = egyptVisa?.cards[0]?.tile_groups;
  const tileName = Object.keys(tiles)[0];
  // console.log("card: ", egyptCard);
  // console.log("visa: ", egyptVisa);
  const { destination } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <link
          rel="preload"
          as="style"
          href="https://d3o7lrr6ovj0yv.cloudfront.net/build/assets/app-DvT5LPrL-ac7443d1.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://d3o7lrr6ovj0yv.cloudfront.net/build/assets/app-DvT5LPrL-ac7443d1.css"
        ></link>
      </Helmet>
      <div className="nq hk" id="step=step_1">
        <div className="sl" style={{ marginBottom: "230px" }}>
          <div className="hj">
            <div>
              <div className="wt bob bcl bcp uj">
                <div className="wo bcl bcp bdm bmu db lg:Paragraph_05_Eb bjm bjo beo bff bgg bhj">
                  <img
                    alt=""
                    src="https://d3o7lrr6ovj0yv.cloudfront.net/img/trustpilot/trustpilot-icon-gray.webp"
                    width="72"
                    height="20"
                  />
                  <span className="bej">
                    {" "}
                    4.6/5{" "}
                    <span className="wt hn">Based on +50,000 reviews</span>
                    <span className="hr">Stars</span>
                  </span>
                  <img
                    src="https://d3o7lrr6ovj0yv.cloudfront.net/img/trustpilot/trusty-reviewers.webp"
                    width="60"
                    height="20"
                    alt="Trustpilot reviews"
                  />
                </div>
              </div>
              <div className="wo bcp bp btq bmk wc caw uv">
                <span>Travel visas for</span>
              </div>
              <div className="wo bcp bcl bp btq bmk">
                <span className="bhd bjd beo blw bah">
                  {destination.charAt(0).toUpperCase() + destination.slice(1)}
                </span>
              </div>
            </div>
          </div>
          <div></div>

          <div className="di">
            <div id="question-container" className="sl">
              <div className="baa">
                <div>
                  <div
                    className="ben bhz bmv cc un wo bir v2-space-x-8 bcl"
                    style={{ display: "none" }}
                  >
                    <div className="wn">
                      <svg
                        className="zc xc bnf"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16 30.4C19.8191 30.4 23.4818 28.8829 26.1823 26.1823C28.8829 23.4818 30.4 19.8191 30.4 16C30.4 12.1809 28.8829 8.51819 26.1823 5.81767C23.4818 3.11714 19.8191 1.60001 16 1.60001C12.1809 1.60001 8.51819 3.11714 5.81767 5.81767C3.11714 8.51819 1.60001 12.1809 1.60001 16C1.60001 19.8191 3.11714 23.4818 5.81767 26.1823C8.51819 28.8829 12.1809 30.4 16 30.4ZM16 8.80001C16.7481 8.80001 17.35 9.40188 17.35 10.15V16.45C17.35 17.1981 16.7481 17.8 16 17.8C15.2519 17.8 14.65 17.1981 14.65 16.45V10.15C14.65 9.40188 15.2519 8.80001 16 8.80001ZM14.2 21.4C14.2 20.9226 14.3896 20.4648 14.7272 20.1272C15.0648 19.7896 15.5226 19.6 16 19.6C16.4774 19.6 16.9352 19.7896 17.2728 20.1272C17.6104 20.4648 17.8 20.9226 17.8 21.4C17.8 21.8774 17.6104 22.3352 17.2728 22.6728C16.9352 23.0104 16.4774 23.2 16 23.2C15.5226 23.2 15.0648 23.0104 14.7272 22.6728C14.3896 22.3352 14.2 21.8774 14.2 21.4Z"></path>
                      </svg>
                    </div>
                    <ul></ul>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="baa wo bcl bcq uv caa"></div>
                    <div className="baa kr wo bce bcp v2-space-y-16 lg:v2-space-y-20">
                      <div className="col-12">
                        <div className="v2-text-blue-900 wo bcr vx bno">
                          <img
                            src="https://d3o7lrr6ovj0yv.cloudfront.net/img/v2/stamp.svg"
                            alt="World stamp"
                            className="qw qk wt bny"
                            height="180"
                            style={{ top: "100px" }}
                          />
                          <img
                            src="https://d3o7lrr6ovj0yv.cloudfront.net/img/v2/stamp_2.svg"
                            alt="Baggage stamp"
                            className="ra qk wt bny"
                            height="180"
                            style={{ top: "100px" }}
                          />
                          <div>
                            <div className="wo bcl bcr">
                              <div className="bu btv vr bcl bcp bob">
                                <div className="wn vs wt bny">
                                  <svg
                                    className="zc xc "
                                    width="21"
                                    height="21"
                                    viewBox="0 0 21 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle
                                      cx="10.5771"
                                      cy="10.9609"
                                      r="10"
                                      fill="#C3C9F3"
                                    ></circle>
                                    <circle
                                      cx="10.5771"
                                      cy="10.9609"
                                      r="6"
                                      fill="#2538B8"
                                    ></circle>
                                  </svg>
                                </div>
                                <div className="bmp ce btt cav wo bcp bej">
                                  You need a visa
                                </div>
                                <div className="cr btt blw bmv bej">
                                  with a passport from
                                </div>
                                {/* removed bfp claass */}
                                <div className="vf caq wo bcp bgh">
                                  <div>
                                    <div>
                                      <div
                                        className="dropdown qm"
                                        tabIndex="0"
                                        name="general.common_nationality_country"
                                        required={true}
                                      >
                                        <div
                                          className="bcl wo cr btt bkm bsk bam"
                                          data-flip="false"
                                        >
                                          <div
                                            className="wo bcl ban blb beh bmv"
                                            data-handle="filter-value"
                                          >
                                            {/* removed country initials and the preceding dash */}
                                            <span className="beh">
                                              {nationality}
                                            </span>
                                          </div>
                                          {/* <div className="wn">
                                            <svg
                                              className="yx wz bmv bbl"
                                              width="20"
                                              height="20"
                                              viewBox="0 0 20 20"
                                              fill="currentColor"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path d="M9.29389 13.7081C9.68443 14.0986 10.3187 14.0986 10.7092 13.7081L16.7081 7.70924C17.0986 7.31869 17.0986 6.68444 16.7081 6.29389C16.3175 5.90334 15.6833 5.90334 15.2927 6.29389L10 11.5866L4.70728 6.29701C4.31673 5.90646 3.68248 5.90646 3.29193 6.29701C2.90139 6.68756 2.90139 7.32181 3.29193 7.71236L9.29076 13.7112L9.29389 13.7081Z"></path>
                                            </svg>
                                          </div> */}
                                        </div>
                                        {/* <div
                                          className="dropdown-filter i nu baa qm v2-dropdown-filter"
                                          style={{
                                            paddingTop: "0px",
                                            position: "absolute",
                                          }}
                                        >
                                          <div>
                                            <input
                                              name="doNotAutofill0.9652831100773169"
                                              type="search"
                                              autoComplete="off"
                                              role="combobox"
                                              aria-haspopup="true"
                                              aria-expanded="false"
                                              data-handle="dropdown-general.common_nationality_country"
                                              className="oz"
                                            />
                                          </div>
                                          <div
                                            data-critical="true"
                                            className=""
                                            style={{ display: "none" }}
                                          ></div>
                                        </div> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-ivisa-slug="common_nationality_country"
                          data-ivisa-question-selector="general.common_nationality_country"
                          className="ya baa bov bzs"
                        >
                          <div className="">
                            <label className="ov wo bcl v2-space-x-8">
                              <span></span>
                            </label>
                            <div className="qm"></div>
                          </div>
                        </div>
                      </div>
                      {!egyptCard ? (
                        <>
                          <NoVisa />
                          {/* <p>hello</p> */}
                        </>
                      ) : (
                        <>
                          <div className="col-12">
                            <div
                              data-ivisa-slug="visa_type_id"
                              data-ivisa-question-selector="general.visa_type_id"
                              className="ya baa"
                            >
                              <div className="">
                                <label className="ov wo bcl v2-space-x-8">
                                  <span></span>
                                </label>
                                <div className="qm">
                                  <div className="vy bnm">
                                    <div className="bmv">
                                      {/* card here */}
                                      <div className="flex flex-wrap justify-center items-center gap-6">
                                        {tiles[tileName].map((card) => (
                                          <VisaCard
                                            key={card.id}
                                            cardDetails={card}
                                            handleClick={() => {
                                              const heading = `${card.name} • ${card.visa_validity}, ${card.number_of_entries}`;
                                              setVisaHeading(heading);
                                              navigate("step=step_1");
                                            }}
                                          />
                                        ))}
                                      </div>
                                      <div className="cc baa blw bhj bjw bjd wf bnt">
                                        Not sure this is the right option for
                                        you?{" "}
                                        <a className="de v2-link-blue bbl">
                                          See all options
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplicationLanding;
