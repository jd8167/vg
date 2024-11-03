import { Helmet } from "react-helmet";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { capitalizeFirstLetter } from "../../utils";
function SecondStep() {
  const { destination } = useParams();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(new Date());
  const { visaHeading } = useOutletContext();

  return (
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
      <div className="s bhx" id="step=step_1">
        <div className="fq" style={{ marginBottom: "230px" }}>
          <div className="bhw">
            <div>
              <h1 className="bcj bmi bvv bac wy bln">
                <span>
                  {/* Australia Visitor Visa • 1 year, Multiple entry {" "} */}
                  {visaHeading}
                </span>
              </h1>
            </div>
          </div>
          <div>
            <div className="jt pr pw v2-space-x-32 bac bic jy bun">
              <div className="ro jt pr">
                <span className="mj kj rw tn sn jt pv iy bao ut">
                  <span className="bcy jb">1</span>
                </span>
                <span className="bct kj">Trip details</span>
              </div>
              <div className="ng km rw dq un"></div>
              <div className="ro jt pr">
                <span className="mj kj rw tn sn jt pv iy">
                  <span className="bcy jb">2</span>
                </span>
                <span className="bct kj">Your info</span>
              </div>
              <div className="ng km rw dq un"></div>
              <div className="ro jt pr">
                <span className="mj kj rw tn sn jt pv iy">
                  <span className="bcy jb">3</span>
                </span>
                <span className="bct kj">Checkout</span>
              </div>
            </div>
          </div>

          <div className="bdv jg">
            <div id="question-container" className="bni">
              <div className="ng">
                <div>
                  <div
                    className="rs vf bac bcp hs jt vx v2-space-x-8 pr"
                    style={{ display: "none" }}
                  >
                    <div className="js">
                      <svg
                        className="mj kj bam"
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
                    <div className="ng jt pr pw ia bol">
                      <span className="bac bvy bcj">Your Trip Details</span>
                    </div>
                    <div className="ng blc jt pk pv v2-space-y-16 lg:v2-space-y-20 ta tj yu">
                      <div className="col-12">
                        <div
                          data-ivisa-slug="arrival_date"
                          data-ivisa-question-selector="general.arrival_date"
                          className="lh ng"
                        >
                          <div className="">
                            <label className="by jt pr v2-space-x-8">
                              <span>
                                When do you arrive in{" "}
                                {capitalizeFirstLetter(destination)}?
                              </span>
                            </label>
                            <div className="dq">
                              <div>
                                <div disabled={false}>
                                  <div className="dq">
                                    {/* <input
                                      style={{ border: "2px solid red" }}
                                      placeholder="MM/DD/YYYY"
                                      className="bn v2-small lg:v2-medium"
                                      type="date"
                                      readOnly=""
                                      name="general.arrival_date"
                                      value="12/04/2024"
                                    /> */}
                                    <DatePicker
                                      selected={selected}
                                      onChange={(date) => setSelected(date)}
                                      className="bn v2-small lg:v2-medium w-full"
                                      monthsShown={2}
                                      // popperClassName=" bg-yellow-400"
                                    />
                                  </div>
                                  <div className="cat">{/* trying */}</div>
                                </div>
                              </div>
                              <span className="dp ei bmv en od">
                                <div className="js bac">
                                  <svg
                                    className="me kg "
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M24.9333 9.6C24.4 9.06667 23.6 9.06667 23.0666 9.6L13.0666 19.6L8.93329 15.4667C8.39996 14.9333 7.59996 14.9333 7.06663 15.4667C6.53329 16 6.53329 16.8 7.06663 17.3333L12.1333 22.4C12.4 22.6667 12.6666 22.8 13.0666 22.8C13.4666 22.8 13.7333 22.6667 14 22.4L24.9333 11.4667C25.4666 10.9333 25.4666 10.1333 24.9333 9.6Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* commented out the departure date */}
                      {/* <div className="col-12">
                        <div
                          data-ivisa-slug="departure_date"
                          data-ivisa-question-selector="general.departure_date"
                          className="lh ng"
                        >
                          <div className="">
                            <label className="by jt pr v2-space-x-8">
                              <span>When do you leave Australia?</span>
                            </label>
                            <div className="dq">
                              <div modelmodifiers="[object Object]">
                                <div columns="2" disabled={false}>
                                  <div className="dq">
                                    <input
                                      placeholder="MM/DD/YYYY"
                                      className="bn v2-small lg:v2-medium"
                                      type="search"
                                      readOnly=""
                                      name="general.departure_date"
                                      value="12/11/2024"
                                    />
                                  </div>
                                  <div
                                    className="cat"
                                    placement="bottom-start"
                                  ></div>
                                </div>
                              </div>
                              <span className="dp ei bmv en od">
                                <div className="js bac">
                                  <svg
                                    className="me kg "
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M24.9333 9.6C24.4 9.06667 23.6 9.06667 23.0666 9.6L13.0666 19.6L8.93329 15.4667C8.39996 14.9333 7.59996 14.9333 7.06663 15.4667C6.53329 16 6.53329 16.8 7.06663 17.3333L12.1333 22.4C12.4 22.6667 12.6666 22.8 13.0666 22.8C13.4666 22.8 13.7333 22.6667 14 22.4L24.9333 11.4667C25.4666 10.9333 25.4666 10.1333 24.9333 9.6Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      <div className="col-12">
                        <div
                          data-ivisa-slug="email"
                          data-ivisa-question-selector="general.email"
                          className="lh ng"
                        >
                          <div className="">
                            <label className="by jt pr v2-space-x-8">
                              <span>Email address</span>
                            </label>
                            <div className="dq">
                              <input
                                className="bn v2-small lg:v2-medium"
                                name="general.email"
                                required=""
                                placeholder="johnsmith@gmail.com"
                                spellCheck="false"
                                autoComplete="on"
                                type="email"
                              />
                              <span className="dp ei bmv en od">
                                <div className="js bac">
                                  <svg
                                    className="me kg "
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M24.9333 9.6C24.4 9.06667 23.6 9.06667 23.0666 9.6L13.0666 19.6L8.93329 15.4667C8.39996 14.9333 7.59996 14.9333 7.06663 15.4667C6.53329 16 6.53329 16.8 7.06663 17.3333L12.1333 22.4C12.4 22.6667 12.6666 22.8 13.0666 22.8C13.4666 22.8 13.7333 22.6667 14 22.4L24.9333 11.4667C25.4666 10.9333 25.4666 10.1333 24.9333 9.6Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                              </span>
                            </div>
                            <div className="bdm ji bpu bab bu">
                              <span>
                                We use this to create your iVisa account and
                                send you updates about your application.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div
                          data-ivisa-slug="consent_to_marketing_emails"
                          data-ivisa-question-selector="general.consent_to_marketing_emails"
                          className="lh ng"
                        >
                          <div className="">
                            <div className="dq">
                              <div disabled={false} className="jt pp">
                                <div>
                                  <input
                                    type="checkbox"
                                    name="general.consent_to_marketing_emails"
                                    className="bn"
                                    id="customCheckgeneral.consent_to_marketing_emails"
                                  />
                                </div>
                                <label
                                  className="bac zq zh bwq"
                                  data-handle="label-general.consent_to_marketing_emails"
                                  htmlFor="customCheckgeneral.consent_to_marketing_emails"
                                >
                                  I want to receive iVisa&apos;s updates,
                                  product launches and personalized offers. I
                                  can opt out anytime.
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="jt pr bpq brt fq bqd">
                <div className="jy bpx"></div>
                <div
                  id="btnContinueUnderSection"
                  className="btnContinue jy bpx brs ng bne"
                >
                  <button
                    className="cg ch cn ct cx dq"
                    onClick={() => navigate(`/a/${destination}/step=step_2`)}
                  >
                    <span className="">Continue</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="dr ew fq bnv bnw" style={{ top: "7rem" }}>
              <div className="jy bpx dr ew">
                <div>
                  <div>
                    <div className="xc bty bac bth btl bte btm gx">
                      <div className="jt pp pw ia bac">
                        <ul className="vu ow oy ns">
                          <li className="bdk">Australia Visitor Visa</li>
                        </ul>
                      </div>
                      <div>
                        <div className="jt pw bdi ql ia">
                          <span className="ns">+ Government fees</span>
                          <span className="bac nf rq">₦ 224926.00</span>
                        </div>
                      </div>
                      <div>
                        <div className="jt pw bdi ql">
                          <span className="ns">+ Standard</span>
                          <span className="bac nf rq">₦ 965434.30</span>
                        </div>
                      </div>
                    </div>
                    <div className="wl bac">
                      <div className="jt pw bcm">
                        <span>Total</span>
                        <span>Calculated at checkout</span>
                      </div>
                      <div className="bdm jt pw">
                        <span>For all travelers</span>
                        <span>(Includes taxes and fees)</span>
                      </div>
                    </div>
                  </div>
                  <div className="v2-space-y-24 jg">
                    <button
                      className="cg ch cn cs cx dq btnContinue"
                      id="btnContinueSidebar"
                      onClick={() => navigate(`/a/${destination}/step=step_2`)}
                    >
                      <span className="">Save and continue</span>
                    </button>
                    <div>
                      <div className="bac bdm">
                        <div className="jt pr">
                          <div className="js">
                            <svg
                              className="me kg "
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M11.8 16.4983C13.2852 16.4983 14.7096 15.8926 15.7598 14.8144C16.81 13.7363 17.4 12.2739 17.4 10.7492C17.4 9.22439 16.81 7.76207 15.7598 6.68389C14.7096 5.60571 13.2852 5 11.8 5C10.3148 5 8.89041 5.60571 7.8402 6.68389C6.79 7.76207 6.2 9.22439 6.2 10.7492C6.2 12.2739 6.79 13.7363 7.8402 14.8144C8.89041 15.8926 10.3148 16.4983 11.8 16.4983ZM9.80062 18.6543C5.49125 18.6543 2 22.2385 2 26.6626C2 27.3993 2.58188 27.9966 3.29938 27.9966H20.3006C20.3794 27.9966 20.4538 27.9876 20.5325 27.9742C17.1944 25.4993 16.1663 21.6411 16.0219 18.9821C15.3175 18.7665 14.5737 18.6543 13.8037 18.6543H9.80062ZM23.3106 15.1374L18.0606 17.2933C17.6625 17.4595 17.4 17.8548 17.4 18.2949C17.4 21.1381 18.5331 25.8766 23.2975 27.9158C23.5556 28.0281 23.8487 28.0281 24.1069 27.9158C28.8669 25.8766 30 21.1381 30 18.2949C30 17.8548 29.7375 17.4595 29.3394 17.2933L24.0894 15.1374C23.84 15.0341 23.56 15.0341 23.3106 15.1374ZM27.8738 19.0136C27.7031 21.2908 26.6838 24.2552 23.7 25.7374V17.2978L27.8738 19.0136Z"></path>
                            </svg>
                          </div>
                          <strong className="bdl il">
                            Your info is safe with us!
                          </strong>
                        </div>
                        <div className="ih">
                          {" "}
                          For more details see{" "}
                          <span className="bds v2-link-blue">
                            how we keep your data safe
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="zw bcr jt v2-space-x-8 pr or bey btnPrevious"
                      id="btnPreviousSidebar"
                    >
                      <div className="js">
                        <svg
                          className="mj kj "
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.29299 8.73519C2.90234 9.15821 2.90234 9.84518 3.29299 10.2682L8.29326 15.6827C8.68391 16.1058 9.31832 16.1058 9.70897 15.6827C10.0996 15.2597 10.0996 14.5728 9.70897 14.1497L6.41191 10.5829H15.9999C16.5531 10.5829 17 10.099 17 9.5C17 8.90101 16.5531 8.41709 15.9999 8.41709H6.41503L9.70584 4.85025C10.0965 4.42724 10.0965 3.74027 9.70584 3.31726C9.3152 2.89425 8.68079 2.89425 8.29014 3.31726L3.28986 8.73181L3.29299 8.73519Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <span>Previous</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="dw do vj ng eb bac wl bli wy bqd"
                style={{
                  zIndex: 1000,
                  boxShadow: "rgba(17, 18, 17, 0.18) 0px 0px 16px 0px",
                }}
              >
                <div className="jt pk pw pr">
                  <div className="jt pr pw ng hr">
                    <div className="bcu">Total</div>
                    <div className="bcv">Calculated at checkout</div>
                  </div>
                  <button
                    className="cg ch co cu cx dq btnContinue"
                    id="btnContinueUnderSectionMobile"
                    onClick={() => navigate(`/a/${destination}/step=step_2`)}
                    // onClick={() => navigate(`step=step_2`)}
                  >
                    <span className="">Continue</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondStep;
