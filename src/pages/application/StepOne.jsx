import { Link, useNavigate } from "react-router-dom";
// import c from "../../css/application.module.css";

function StepOne() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        {/* <div id="cookies-disabled-container" style={{ display: "none" }}>
          <div className="inner-container">
            <span className={`${c.title}`}>Oops!!</span>
            <a
              href="https://www.digitaltrends.com/computing/how-to-enable-cookies/"
              target="_blank"
              tabindex="-1"
              className=""
            >
              <button
                type="button"
                data-destination="https://www.digitaltrends.com/computing/how-to-enable-cookies/"
                data-btn-text="Enable cookies"
                className="btn btn--primary btn--std flex-row-reverse"
              >
                <span>Enable cookies </span>
              </button>
            </a>
            <div className="message">
              iVisa provides a 100% online solution to apply for your visa. In
              order to enable core website functionality, you must enable
              browser cookies to apply online. Cookies are a necessary part of
              the way the web works, but rest assured iVisa is 100% GDPR
              compliant.{" "}
            </div>
          </div>
        </div> */}

        {/* <div></div> */}
        {/* <div id="paynow">
              <div
                data-v-f1673198=""
                className="em boo"
                primary-product-classification="visa"
              >
                <div
                  data-v-f1673198=""
                  className="co vi tj bcb bic dm db ed"
                  style={{ display: "none" }}
                >
                  <div className="co vi tj dm db bqe"></div>
                  <div className="blt fh tj bsc">
                    <div className="to vi bro cp boc cw bot bov bvr bvy bdk bak bsu">
                      <div className="cq bel bex bhe bkt">
                        <span>Select payment method</span>
                        <div className="cp dj dp wt">
                          <div className="ru">
                            <svg
                              className="um sm "
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                id="close"
                                d="M16.0001 17.8667L9.46673 24.4C9.22229 24.6444 8.91118 24.7667 8.5334 24.7667C8.15562 24.7667 7.84451 24.6444 7.60007 24.4C7.35562 24.1555 7.2334 23.8444 7.2334 23.4667C7.2334 23.0889 7.35562 22.7778 7.60007 22.5333L14.1334 16L7.60007 9.46665C7.35562 9.22221 7.2334 8.9111 7.2334 8.53332C7.2334 8.15554 7.35562 7.84443 7.60007 7.59999C7.84451 7.35554 8.15562 7.23332 8.5334 7.23332C8.91118 7.23332 9.22229 7.35554 9.46673 7.59999L16.0001 14.1333L22.5334 7.59999C22.7778 7.35554 23.089 7.23332 23.4667 7.23332C23.8445 7.23332 24.1556 7.35554 24.4001 7.59999C24.6445 7.84443 24.7667 8.15554 24.7667 8.53332C24.7667 8.9111 24.6445 9.22221 24.4001 9.46665L17.8667 16L24.4001 22.5333C24.6445 22.7778 24.7667 23.0889 24.7667 23.4667C24.7667 23.8444 24.6445 24.1555 24.4001 24.4C24.1556 24.6444 23.8445 24.7667 23.4667 24.7667C23.089 24.7667 22.7778 24.6444 22.5334 24.4L16.0001 17.8667Z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="bep bfu bgv bbb bbk">
                        <div
                          className="v2-space-y-8"
                          style={{ display: "none" }}
                        ></div>
                        <div>
                          <div className="bkl ha">Card information</div>
                          <div
                            data-v-976c1bc7=""
                            data-v-f1673198=""
                            id="applyPaymentCard"
                            className=""
                          >
                            <div data-v-976c1bc7="" className="gs">
                              <div
                                data-v-976c1bc7=""
                                className="zv bbm label_comp_text_03_R bic vi ban"
                              >
                                <div data-v-976c1bc7="" className="cq">
                                  <input
                                    data-v-976c1bc7=""
                                    required=""
                                    type="text"
                                    inputmode="numeric"
                                    name="number"
                                    autocomplete="cc-number"
                                    placeholder="Card number"
                                    maxlength="23"
                                    className="bno bnr bao vi bai placeholder:v2-text-gray-300 bel bew"
                                  />
                                </div>
                                <div data-v-976c1bc7="" className="rv bbm bas">
                                  <div data-v-976c1bc7="" className="cq tw">
                                    <input
                                      data-v-976c1bc7=""
                                      required=""
                                      placeholder="MM/YY"
                                      maxlength="5"
                                      name="mmyy"
                                      inputmode="numeric"
                                      className="bnn bno bnr vi bao bbm bba placeholder:v2-text-gray-300 bel bew"
                                    />
                                  </div>
                                  <div data-v-976c1bc7="" className="cq tw">
                                    <input
                                      data-v-976c1bc7=""
                                      required=""
                                      autocomplete="cc-csc"
                                      inputmode="numeric"
                                      placeholder="CVV"
                                      name="cvv"
                                      type="text"
                                      maxlength="4"
                                      className="bno bnr vi bao placeholder:v2-text-gray-300 bel bew"
                                    />
                                    <div data-v-976c1bc7="" className="ru">
                                      <svg
                                        className="um sm cp dj dq hx"
                                        width="48"
                                        height="48"
                                        viewBox="0 0 48 48"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <g id="gl-solid-card">
                                          <path
                                            id="Vector"
                                            d="M4 34C4 37.4 6.6 40 10 40H38C41.4 40 44 37.4 44 34V22H4V34ZM10 26H16C17.2 26 18 26.8 18 28C18 29.2 17.2 30 16 30H10C8.8 30 8 29.2 8 28C8 26.8 8.8 26 10 26ZM38 10H10C6.6 10 4 12.6 4 16V18H44V16C44 12.6 41.4 10 38 10Z"
                                            fill="#0B3947"
                                          ></path>
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div data-v-976c1bc7="" className="cq">
                                  <input
                                    data-v-976c1bc7=""
                                    required=""
                                    type="text"
                                    name="full_name"
                                    autocomplete="cc-name"
                                    placeholder="Cardholder name"
                                    className="bno bnr bao vi bab placeholder:v2-text-gray-300 bel bew"
                                  />
                                </div>
                              </div>
                            </div>
                            <button
                              data-v-976c1bc7=""
                              disabled=""
                              className="bg bh bo bs bx cq"
                              id="btnSubmitPayment"
                            >
                              <div className="ru">
                                <svg
                                  className="ug si hz disabled:hover:v2-text-gray-300"
                                  width="48"
                                  height="48"
                                  viewBox="0 0 48 48"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    id="Vector"
                                    d="M34 18V14C34 8.4 29.6 4 24 4C18.4 4 14 8.4 14 14V18C10.6 18 8 20.6 8 24V38C8 41.4 10.6 44 14 44H34C37.4 44 40 41.4 40 38V24C40 20.6 37.4 18 34 18ZM18 14C18 10.6 20.6 8 24 8C27.4 8 30 10.6 30 14V18H18V14Z"
                                  ></path>
                                </svg>
                              </div>
                              <span className="">Pay ₦222442.21 NGN</span>
                            </button>
                          </div>
                        </div>
                        <div className="ic bic rv xr">
                          <p className="blo">
                            By submitting payment I acknowledge that I have read
                            and accept the iVisa{" "}
                            <a
                              href="https://ivisatravel.com/terms-and-conditions"
                              target="_blank"
                              className="bls"
                            >
                              Terms of Service
                            </a>
                            ,{" "}
                            <a
                              href="https://ivisatravel.com/privacy"
                              target="_blank"
                              className="bls"
                            >
                              Privacy Policy
                            </a>
                            , and{" "}
                            <a
                              href="https://help.ivisa.com/en/articles/6112152-what-is-ivisa-s-refund-policy"
                              target="_blank"
                              className="bls"
                            >
                              Refund Policy.{" "}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-v-f1673198=""></div>
                <div data-v-f1673198="" id="device-fingerprint"></div>
                <div
                  data-v-f1673198=""
                  aria-modal="true"
                  className="by"
                  role="dialog"
                  style={{ display: "none" }}
                >
                  <div data-v-f1673198="" className="popup-inner three-ds">
                    <main
                      data-v-f1673198=""
                      id="challenge-modal"
                      className="tj"
                    >
                      <div data-v-f1673198="" id="challenge"></div>
                    </main>
                  </div>
                </div>
              </div>
            </div> */}
        <div className={`${c.blv} ${c.ig}`}>
          <div id="question-container" className={`${c.bvi}`}>
            <div className="">
              {/* <div>
                    <div
                      className={`${c.zu} ${c.bdg} ${c.bic} ${c.bkp} ${c.gs} ${c.rv} ${c.bdy} v2-space-x-8 ${c.xt}`}
                      style={{ display: "none" }}
                    >
                      <div className="ru">
                        <svg
                          className="ul sl bim"
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
                  </div> */}
              <div>
                <div>
                  <div
                    className={`${c.vi} ${c.rv} ${c.xt} ${c.xy} ${c.ha} ${c.bwl}`}
                  >
                    <span className={`${c.bic} ${c.ly} ${c.bkj}`}>
                      Apply now for your Australia Visitor Visa
                    </span>
                  </div>
                  <div
                    className={`${c.vi} ${c.btc} ${c.rv} ${c.xm} ${c.xx} v2-space-y-16 lg:v2-space-y-20 ${c.bbb} ${c.bbk} ${c.bgu}`}
                  >
                    <div className="col-12">
                      <div
                        className={`${c.zv} ${c.bcd} v2-text-blue-900 ${c.go} ${c.rv}`}
                      >
                        <div
                          className={`${c.bdy} ${c.rv} ${c.xt}`}
                          style={{
                            borderRight: "2px solid rgb(255, 255, 255)",
                          }}
                        >
                          <div className={`${c.ru}`}>
                            <svg
                              className={`{${c.uw} ${c.ss}`}
                              width="49"
                              height="48"
                              viewBox="0 0 49 48"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.29883 4.79883H40.7184C42.3335 4.79883 43.6137 6.16153 43.5129 7.77349L42.4988 23.9988H6.49883L5.29883 4.79883Z"
                                fill="#0B3947"
                              ></path>
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M18.9657 13.8841C19.3728 11.8894 20.8825 10.2773 22.811 9.71169C22.1097 10.9695 21.67 12.3986 21.5235 13.8841H18.9657ZM18.8894 15.5508C19.134 17.7466 20.7348 19.5112 22.8592 19.9873C22.1013 18.6589 21.638 17.1341 21.5073 15.5508H18.8894ZM23.1806 15.5508C23.3039 16.8225 23.6782 18.0325 24.2635 19.0844C24.8489 18.0325 25.2232 16.8225 25.3465 15.5508H23.1806ZM27.0198 15.5508C26.8944 17.0699 26.4628 18.5353 25.7585 19.8249C27.6328 19.1847 29.0706 17.5456 29.41 15.5508H27.0198ZM29.4316 13.8841H27.0036C26.8556 12.3833 26.4083 10.9401 25.6943 9.67286C27.6582 10.2003 29.1346 11.8416 29.4316 13.8841ZM25.3275 13.8841H23.1996C23.3395 12.6778 23.7057 11.5317 24.2635 10.5291C24.8214 11.5317 25.1876 12.6778 25.3275 13.8841ZM17.1925 14.8042C17.3057 10.9514 20.522 7.82812 24.3765 7.82812C28.2309 7.82812 31.2638 10.9514 31.1507 14.8042C31.0376 18.657 27.8212 21.7803 23.9668 21.7803C20.1123 21.7803 17.0794 18.657 17.1925 14.8042Z"
                                fill="#00D474"
                              ></path>
                              <path
                                d="M6.49883 24H42.4988L43.6988 43.2H8.27929C6.66419 43.2 5.384 41.8373 5.48474 40.2253L6.49883 24Z"
                                fill="#00D474"
                              ></path>
                              <path
                                d="M24.4837 30.0155V29.3822H38.3171V30.0155H24.4837Z"
                                fill="#0B3947"
                                stroke="#0B3947"
                                stroke-width="1.16667"
                              ></path>
                              <path
                                d="M24.4837 33.6171V32.9837H38.3171V33.6171H24.4837Z"
                                fill="#0B3947"
                                stroke="#0B3947"
                                stroke-width="1.16667"
                              ></path>
                              <path
                                d="M24.4837 37.2167V36.5833H32.9171V37.2167H24.4837Z"
                                fill="#0B3947"
                                stroke="#0B3947"
                                stroke-width="1.16667"
                              ></path>
                              <path
                                d="M15.0205 34C16.7879 34 18.2207 32.5672 18.2207 30.7998C18.2207 29.0324 16.7879 27.5996 15.0205 27.5996C13.2531 27.5996 11.8203 29.0324 11.8203 30.7998C11.8203 32.5672 13.2531 34 15.0205 34Z"
                                fill="#0B3947"
                              ></path>
                              <path
                                d="M10.2207 36.1988C10.2207 35.4256 10.8475 34.7988 11.6207 34.7988H18.4213C19.1945 34.7988 19.8213 35.4256 19.8213 36.1988V39.5991H10.2207V36.1988Z"
                                fill="#0B3947"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className={`${c.bdy} ${c.rv} ${c.xt}`}>
                          <div>
                            <div className={`${c.bkm}`}>Visa required</div>
                            <div className={`${c.blm}`}>
                              You need a visa to travel to Australia if you have
                              a passport from Saudi Arabia.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-ivisa-slug="common_nationality_country"
                        data-ivisa-question-selector="general.common_nationality_country"
                        className={`${c.tj} ${c.vi}`}
                      >
                        <div>
                          <label
                            className={`${c.y} ${c.rv} ${c.xt} v2-space-x-8`}
                          >
                            <span>What is your nationality?</span>
                          </label>
                          <div className={`${c.cq}`}>
                            <div>
                              <div>
                                <div
                                  className={`dropdown ${c.cq}`}
                                  tabindex="0"
                                  name="general.common_nationality_country"
                                  required="true"
                                >
                                  <div
                                    className={`${c.ba} ${c["v2-small"]} lg:v2-medium`}
                                    data-flip="false"
                                  >
                                    <div
                                      className={`${c.rv} ${c.xt} ${c.vu} ${c.bgj} ${c.zo} ${c.bic}`}
                                      data-handle="filter-value"
                                    >
                                      <span className={`${c.zo}`}>
                                        Saudi Arabia - SA
                                      </span>
                                    </div>
                                    <div className={`${c.ru}`}>
                                      <svg
                                        className={`${c.ug} ${c.si} ${c.bic} ${c.wt}`}
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
                                    className={`${c["dropdown-filter"]} ${c.biy} ${c.a} ${c.vi} w-full ${c.cq} ${c["v2-dropdown-filter"]}`}
                                    style={{ paddingTop: "0px" }}
                                  >
                                    <div>
                                      <input
                                        name="doNotAutofill0.9062887274295777"
                                        type="search"
                                        autocomplete="off"
                                        role="combobox"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        data-handle="dropdown-general.common_nationality_country"
                                        className={`${c.bc}`}
                                      />
                                    </div>
                                    <div
                                      data-critical="true"
                                      className="c"
                                      style={{ display: "none" }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className={`${c.blm} ${c.ii} ${c.bxu} ${c.bib} ${c.u}`}
                          >
                            <span>
                              Ensure you select the nationality of the passport
                              you'll be traveling with.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div
                        data-ivisa-slug="visa_type_id"
                        data-ivisa-question-selector="general.visa_type_id"
                        className={`${c.tj} ${c.vi}`}
                      >
                        <div className="">
                          <label
                            className={`${c.y} ${c.rv} ${c.xt} v2-space-x-8`}
                          >
                            <span>Applying for</span>
                          </label>
                          <div className={`${c.cq}`}>
                            <div className={`${c.cq} ${c.go} ${c.bwo}}`}>
                              <div>
                                <div>
                                  <select
                                    className={`${c.rr} ${c.hx} ${c["v2-small"]} lg:v2-medium`}
                                    data-handle="dropdown-general.visa_type_id"
                                    required=""
                                  >
                                    <option value="5085">
                                      Australia Visitor Visa - 1 year, Multiple
                                      entry
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${c.rv} ${c.xt} ${c.bxq} ${c.bzt} ${c.eq} ${c.xy}`}
            >
              <div className={`${c.sa} ${c.bxx}`}>
                <div
                  className={`${c.rv} ${c.xx} ${c.xt} ${c.yu} ${c.bic} ${c.id} ${c.bxh} ${c.bhj} ${c.bhp} ${c.bhl}`}
                >
                  <img
                    alt=""
                    src="https://d3o7lrr6ovj0yv.cloudfront.net/img/trustpilot/trustpilot-icon-gray.webp"
                    width="83"
                    height="20"
                  />
                  <div className={`${c.rv} {c.xx} ${c.xt} ${c.yi}`}>
                    <img
                      alt=""
                      src="https://d3o7lrr6ovj0yv.cloudfront.net/img/trustpilot/star-filled-gray.webp"
                      width="20"
                      height="20"
                    />
                    <img
                      alt=""
                      src="https://d3o7lrr6ovj0yv.cloudfront.net/img/trustpilot/star-filled-gray.webp"
                      width="20"
                      height="20"
                    />
                    <img
                      alt=""
                      src="https://d3o7lrr6ovj0yv.cloudfront.net/img/trustpilot/star-filled-gray.webp"
                      width="20"
                      height="20"
                    />
                    <img
                      alt=""
                      src="https://d3o7lrr6ovj0yv.cloudfront.net/img/trustpilot/star-filled-gray.webp"
                      width="20"
                      height="20"
                    />
                    <img
                      alt=""
                      src="https://d3o7lrr6ovj0yv.cloudfront.net/img/trustpilot/star-half-gray.webp"
                      width="20"
                      height="20"
                    />
                  </div>
                  <p>+50,000 Reviews</p>
                </div>
              </div>
              <div
                id="btnContinueUnderSection"
                className={`btnContinue ${c.sa} ${c.bxx} ${c.bzs} ${c.vi} ${c.bve}`}
              >
                <button
                  onClick={() => navigate("/v/a/step=step_2")}
                  className={`${c.bg} ${c.bh} ${c.bn} ${c.bt} ${c.bx} ${c.cq}`}
                >
                  <span className="">Start your application</span>
                </button>
              </div>
            </div>
          </div>
          <div
            className={`${c.cr} ${c.dw} ${c.eq} ${c.bvv} ${c.bvw}`}
            style={{ top: "7rem" }}
          >
            <div
              className={`sidebar ${c.baa} ${c.bcq} ${c.ban} ${c.bbk} ${c.beb} ${c.bic} ${c.bya} ${c.xm} ${c.cr} ${c.dw} ${c.hd} ${c.bpg} ${c.ig} ${c.bxt}`}
              data-handle="step-1-sidebar"
            >
              <div
                className={`${c.bfm} ${c.baw} ${c.bbk} ${c.go} ${c.rv} ${c.xy} ${c.xt}`}
              >
                <span className={`${c.bkj}`}>Australia Visitor Visa</span>
                <span
                  className={`${c.zu} ${c.bes} ${c.bfa} ${c.bky} ${c.ti} ${c.bck} ${c.bhu}`}
                >
                  Most popular
                </span>
              </div>
              <div className="v2-space-y-20">
                <div className={`${c.rv}`}>
                  <div className={`${c.beg}`}>
                    <div className={`${c.ru}`}>
                      <svg
                        className={`${c.um} ${c.sm}`}
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                      >
                        <path d="M24.96 5.76001H23.68V4.48001C23.68 3.71201 23.168 3.20001 22.4 3.20001C21.632 3.20001 21.12 3.71201 21.12 4.48001V5.76001H10.88V4.48001C10.88 3.71201 10.368 3.20001 9.6 3.20001C8.832 3.20001 8.32 3.71201 8.32 4.48001V5.76001H7.04C4.864 5.76001 3.2 7.42401 3.2 9.60001V10.88H28.8V9.60001C28.8 7.42401 27.136 5.76001 24.96 5.76001ZM3.2 24.96C3.2 27.136 4.864 28.8 7.04 28.8H24.96C27.136 28.8 28.8 27.136 28.8 24.96V13.44H3.2V24.96ZM22.4 16C23.168 16 23.68 16.512 23.68 17.28C23.68 18.048 23.168 18.56 22.4 18.56C21.632 18.56 21.12 18.048 21.12 17.28C21.12 16.512 21.632 16 22.4 16ZM22.4 21.12C23.168 21.12 23.68 21.632 23.68 22.4C23.68 23.168 23.168 23.68 22.4 23.68C21.632 23.68 21.12 23.168 21.12 22.4C21.12 21.632 21.632 21.12 22.4 21.12ZM16 16C16.768 16 17.28 16.512 17.28 17.28C17.28 18.048 16.768 18.56 16 18.56C15.232 18.56 14.72 18.048 14.72 17.28C14.72 16.512 15.232 16 16 16ZM16 21.12C16.768 21.12 17.28 21.632 17.28 22.4C17.28 23.168 16.768 23.68 16 23.68C15.232 23.68 14.72 23.168 14.72 22.4C14.72 21.632 15.232 21.12 16 21.12ZM9.6 16C10.368 16 10.88 16.512 10.88 17.28C10.88 18.048 10.368 18.56 9.6 18.56C8.832 18.56 8.32 18.048 8.32 17.28C8.32 16.512 8.832 16 9.6 16ZM9.6 21.12C10.368 21.12 10.88 21.632 10.88 22.4C10.88 23.168 10.368 23.68 9.6 23.68C8.832 23.68 8.32 23.168 8.32 22.4C8.32 21.632 8.832 21.12 9.6 21.12Z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className={`${c.ho}`}>
                    <div className={`${c.bli} ${c.bib}`}>Valid for</div>
                    <div className={`${c.blg}`}>1 year after arrival</div>
                  </div>
                </div>
                <div className={`${c.rv}`}>
                  <div className={`${c.beg}`}>
                    <div className={`${c.ru}`}>
                      <svg
                        className={`${c.um} ${c.sm}`}
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1.61351 11.0234L1.60001 6.3875C1.60001 5.90468 2.02751 5.54843 2.47751 5.65156L4.07951 6.02187C4.55651 6.12968 4.94351 6.48593 5.11451 6.95937L5.92001 9.2L11.6485 10.9625L9.78101 4.15625C9.65051 3.67812 9.99701 3.2 10.474 3.2H12.2785C12.8005 3.2 13.2775 3.49062 13.534 3.96406L18.439 13.0484L23.263 14.5344C23.9785 14.7547 24.649 15.1203 25.2295 15.6031L26.7775 16.8969C27.8575 17.7969 27.592 19.5828 26.296 20.0937C24.442 20.825 22.417 20.9422 20.5 20.4219L7.07651 16.7844C6.57701 16.6484 6.12251 16.3766 5.75801 15.9922L2.02751 12.0781C1.76201 11.7969 1.60901 11.4219 1.60901 11.0234H1.61351ZM3.04001 24.2H28.96C29.7565 24.2 30.4 24.8703 30.4 25.7C30.4 26.5297 29.7565 27.2 28.96 27.2H3.04001C2.24351 27.2 1.60001 26.5297 1.60001 25.7C1.60001 24.8703 2.24351 24.2 3.04001 24.2ZM7.36001 20.45C7.36001 20.0522 7.51172 19.6706 7.78177 19.3893C8.05182 19.108 8.41809 18.95 8.80001 18.95C9.18192 18.95 9.54819 19.108 9.81824 19.3893C10.0883 19.6706 10.24 20.0522 10.24 20.45C10.24 20.8478 10.0883 21.2294 9.81824 21.5107C9.54819 21.792 9.18192 21.95 8.80001 21.95C8.41809 21.95 8.05182 21.792 7.78177 21.5107C7.51172 21.2294 7.36001 20.8478 7.36001 20.45ZM13.12 19.7C13.5019 19.7 13.8682 19.858 14.1382 20.1393C14.4083 20.4206 14.56 20.8022 14.56 21.2C14.56 21.5978 14.4083 21.9794 14.1382 22.2607C13.8682 22.542 13.5019 22.7 13.12 22.7C12.7381 22.7 12.3718 22.542 12.1018 22.2607C11.8317 21.9794 11.68 21.5978 11.68 21.2C11.68 20.8022 11.8317 20.4206 12.1018 20.1393C12.3718 19.858 12.7381 19.7 13.12 19.7Z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className={`${c.ho}`}>
                    <div className={`${c.bli} ${c.bib}`}>Number of entries</div>
                    <div className={`${c.blg}`}>Multiple entry</div>
                  </div>
                </div>
                <div className={`${c.rv}`}>
                  <div className={`${c.beg}`}>
                    <div className={`${c.ru}`}>
                      <svg
                        className={`${c.um} ${c.sm}`}
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M23.68 5.76H24.96C27.136 5.76 28.8 7.424 28.8 9.6V10.88H3.2V9.6C3.2 7.424 4.864 5.76 7.04 5.76H8.32V4.48C8.32 3.712 8.832 3.2 9.6 3.2C10.368 3.2 10.88 3.712 10.88 4.48V5.76H21.12V4.48C21.12 3.712 21.632 3.2 22.4 3.2C23.168 3.2 23.68 3.712 23.68 4.48V5.76ZM7.04 28.8C4.864 28.8 3.2 27.136 3.2 24.96V13.44H28.8V24.96C28.8 27.136 27.136 28.8 24.96 28.8H7.04ZM20.9183 17.4341C20.4606 17.0153 19.768 17.0153 19.3102 17.4341L14.4914 21.8435L12.6897 20.1949C12.232 19.7761 11.5394 19.7761 11.0817 20.1949C10.8538 20.4034 10.72 20.6854 10.72 20.9882C10.72 21.291 10.8538 21.573 11.0817 21.7816L13.6874 24.1659C13.9049 24.3649 14.1552 24.48 14.4914 24.48C14.8277 24.48 15.078 24.3649 15.2955 24.1659L20.9183 19.0208C21.1462 18.8122 21.28 18.5303 21.28 18.2274C21.28 17.9246 21.1462 17.6426 20.9183 17.4341Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className={`${c.ho}`}>
                    <div className={`${c.bli} ${c.bib}`}>Max stay</div>
                    <div className={`${c.blg}`}>90 days per entry</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${c.cw} ${c.co} ${c.bdk} ${c.vi} ${c.db} ${c.bic} ${c.bel} ${c.bti} ${c.bey} ${c.byd}`}
              style={{
                zIndex: 1000,
                boxShadow: "rgba(17, 18, 17, 0.18) 0px 0px 16px 0px",
              }}
            >
              <div className={`${c.rv} ${c.xm} ${c.xy} ${c.xt}`}>
                <button
                  className={`${c.bg} ${c.bh} ${c.bo} ${c.bu} ${c.bx} ${c.cq} btnContinue`}
                  id="btnContinueUnderSectionMobile"
                >
                  <span>Start your application</span>
                </button>
              </div>
              <div
                className={`${c.rv} ${c.xx} ${c.xt} ${c.yu} ${c.bic} ${c.id} ${c.bxh} ${c.bhj} ${c.bhp} ${c.bhl}`}
              >
                <img
                  alt=""
                  src="https://d3o7lrr6ovj0yv.cloudfront.net/img/trustpilot/trustpilot-icon-gray.webp"
                  width="83"
                  height="20"
                />
                <div className={`${c.rv} ${c.xx} ${c.xt} ${c.yi}`}>
                  <img
                    alt=""
                    src="https://d3o7lrr6ovj0yv.cloudfront.net/img/trustpilot/star-filled-gray.webp"
                    width="20"
                    height="20"
                  />
                  <img
                    alt=""
                    src="https://d3o7lrr6ovj0yv.cloudfront.net/img/trustpilot/star-filled-gray.webp"
                    width="20"
                    height="20"
                  />
                  <img
                    alt=""
                    src="https://d3o7lrr6ovj0yv.cloudfront.net/img/trustpilot/star-filled-gray.webp"
                    width="20"
                    height="20"
                  />
                  <img
                    alt=""
                    src="https://d3o7lrr6ovj0yv.cloudfront.net/img/trustpilot/star-filled-gray.webp"
                    width="20"
                    height="20"
                  />
                  <img
                    alt=""
                    src="https://d3o7lrr6ovj0yv.cloudfront.net/img/trustpilot/star-half-gray.webp"
                    width="20"
                    height="20"
                  />
                </div>
                <p>+50,000 Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StepOne;
