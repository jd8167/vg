/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

// TODO: Work on the payment overlay
function ReviewApplication({ isCurrentStep }) {
  const navigate = useNavigate();

  return (
    <div
      id="step=review"
      className="s bhx"
      style={{
        display: !isCurrentStep ? "none" : "block",
        marginBottom: "50px",
      }}
    >
      {/* <div className="fq" style={{ marginBottom: "230px" }}> */}
      <div className="bhw">
        <div>
          <h1 className="bcj bmi bvv bac wy bln">
            <span className="bcg bmg">Review your order</span>
          </h1>
        </div>
      </div>
      <div></div>
      <div id="paynow">
        <div data-v-98c42a8b="" className="fm bgo">
          <div
            data-v-98c42a8b=""
            className="do ng lh ua bac em eb fd"
            style={{ display: "none" }}
          >
            <div className="do ng lh em eb bie"></div>
            <div className="bdt gh lh bkc">
              <div className="lm ng bjo dp bgc dw bgt bgv bnr bny vj si bku">
                <div className="dq wl wx ze bct">
                  <span>Select payment method</span>
                  <div className="dp ej ep or">
                    <div className="js">
                      <svg
                        className="mk kk "
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
                <div className="wp xu yv ta tj">
                  <div className="v2-space-y-8">
                    <button className="ng jt ty pv pr rw kp bql">
                      <img
                        src="https://d3o7lrr6ovj0yv.cloudfront.net/img/payment/google-pay.svg"
                        alt="Google Pay"
                        className="kj bqg"
                      />
                    </button>
                  </div>
                  <div className="jt pr pw baa bdj gv">
                    <div className="nw li uq"></div>
                    <div className="gk">Or pay with</div>
                    <div className="nw li uq"></div>
                  </div>
                  <div>
                    <div className="bcl ia">Card information</div>
                    <div
                      data-v-0c766109=""
                      data-v-98c42a8b=""
                      id="applyPaymentCard"
                      className=""
                    >
                      <div data-v-0c766109="" className="hs">
                        <div
                          data-v-0c766109=""
                          className="rt tl label_comp_text_03_R bac ng sl"
                          style={{
                            maxWidth: "50%",
                            border: "2px solid red",
                          }}
                        >
                          <div data-v-0c766109="" className="dq">
                            <input
                              data-v-0c766109=""
                              required=""
                              type="text"
                              inputMode="numeric"
                              name="number"
                              autoComplete="cc-number"
                              placeholder="Card number"
                              maxLength="23"
                              className="bfo bfr sm ng sg placeholder:v2-text-gray-300 wl ww"
                            />
                          </div>
                          <div data-v-0c766109="" className="jt tl sq">
                            <div data-v-0c766109="" className="dq lu">
                              <input
                                data-v-0c766109=""
                                required=""
                                placeholder="MM/YY"
                                maxLength="5"
                                name="mmyy"
                                inputMode="numeric"
                                className="bfn bfo bfr ng sm tl sz placeholder:v2-text-gray-300 wl ww"
                              />
                            </div>
                            <div data-v-0c766109="" className="dq lu">
                              <input
                                data-v-0c766109=""
                                required=""
                                autoComplete="cc-csc"
                                inputMode="numeric"
                                placeholder="CVV"
                                name="cvv"
                                type="text"
                                maxLength="4"
                                className="bfo bfr ng sm placeholder:v2-text-gray-300 wl ww"
                              />
                              <div data-v-0c766109="" className="js">
                                <svg
                                  className="mk kk dp ej eq ix"
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
                          <div data-v-0c766109="" className="dq">
                            <input
                              data-v-0c766109=""
                              required=""
                              type="text"
                              name="full_name"
                              autoComplete="cc-name"
                              placeholder="Cardholder name"
                              className="bfo bfr sm ng rz placeholder:v2-text-gray-300 wl ww"
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        data-v-0c766109=""
                        disabled=""
                        className="cg ch co cs cx dq"
                        id="btnSubmitPayment"
                      >
                        <div className="js">
                          <svg
                            className="me kg iz disabled:hover:v2-text-gray-300"
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
                        <span className="">Pay ₦1190360.30 NGN</span>
                      </button>
                    </div>
                  </div>
                  <div className="jc bac jt pp">
                    <p className="bdo">
                      By submitting payment I acknowledge that I have read and
                      accept the iVisa{" "}
                      <a
                        href="https://ivisatravel.com/terms-and-conditions"
                        target="_blank"
                        className="bds"
                      >
                        Terms of Service
                      </a>
                      ,{" "}
                      <a
                        href="https://ivisatravel.com/privacy"
                        target="_blank"
                        className="bds"
                      >
                        Privacy Policy
                      </a>
                      , and{" "}
                      <a
                        href="https://help.ivisa.com/en/articles/6112152-what-is-ivisa-s-refund-policy"
                        target="_blank"
                        className="bds"
                      >
                        Refund Policy.{" "}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-v-98c42a8b=""></div>
          <div data-v-98c42a8b="" id="device-fingerprint"></div>
          <div
            data-v-98c42a8b=""
            aria-modal="true"
            className="cy"
            role="dialog"
            style={{ display: "none" }}
          >
            <div data-v-98c42a8b="" className="popup-inner three-ds">
              <main data-v-98c42a8b="" id="challenge-modal" className="lh">
                <div data-v-98c42a8b="" id="challenge"></div>
              </main>
            </div>
          </div>
        </div>
      </div>
      <div className="bdv jo">
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
            <div className="ng xs" data-handle="reviewStepContainer">
              <div className="vw uc zr bda ru ho bop jt pr pt">
                <div className="js iz">
                  <svg
                    className="mj kj "
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.8 3.6H15.6C16.96 3.6 18 4.64 18 6V6.8H2V6C2 4.64 3.04 3.6 4.4 3.6H5.2V2.8C5.2 2.32 5.52 2 6 2C6.48 2 6.8 2.32 6.8 2.8V3.6H13.2V2.8C13.2 2.32 13.52 2 14 2C14.48 2 14.8 2.32 14.8 2.8V3.6ZM4.4 18C3.04 18 2 16.96 2 15.6V8.4H18V15.6C18 16.96 16.96 18 15.6 18H4.4ZM13.0737 10.8963C12.7876 10.6345 12.3547 10.6345 12.0686 10.8963L9.05685 13.6521L7.9308 12.6218C7.64473 12.36 7.21182 12.36 6.92576 12.6218C6.78332 12.7521 6.69971 12.9283 6.69971 13.1176C6.69971 13.3069 6.78332 13.4831 6.92576 13.6134L8.55433 15.1036C8.69027 15.228 8.8467 15.3 9.05685 15.3C9.267 15.3 9.42343 15.228 9.55937 15.1036L13.0737 11.8879C13.2161 11.7576 13.2997 11.5814 13.2997 11.3921C13.2997 11.2029 13.2161 11.0266 13.0737 10.8963Z"></path>
                  </svg>
                </div>
                <span>Standard Processing</span>
              </div>
              <div className="wa xp ry sl tj dq ho bop">
                <div className="jt pj bsj pp bsm pw qc bss xr">
                  <div className="visa-info lu brv zd bac">
                    <div className="jt pp pw qi">
                      <h2 className="bcm bwb ho">Australia Visitor Visa</h2>
                      <div className="bcv jy bpx ws xe ru zu uj ro">
                        Standard
                      </div>
                    </div>
                    <p className="bdm bwh ho">
                      Valid for:{" "}
                      <span className="jq bpz bwj bdn">
                        1 year after arrival
                      </span>
                    </p>
                    <p className="bdm bwh ho">
                      Max stay:{" "}
                      <span className="jq bpz bwj bdn">90 days per entry</span>
                    </p>
                    <p className="bdm bwh">
                      Number of entries:{" "}
                      <span className="jq bpz bwj bdn">Multiple entry</span>
                    </p>
                  </div>
                  <div className="uf jt pr pv vz rw qz">
                    <img
                      src="https://d3o7lrr6ovj0yv.cloudfront.net/img/v2/visa-green.png"
                      alt="visa icon"
                      height="64"
                      width="64"
                    />
                  </div>
                </div>
                <div className="yv bac ta tj">
                  <h5 className="bcl zn hm">travelers</h5>
                  <div className="jt pr pt bco ia ql">
                    <div className="js">
                      <svg
                        className="mk kk "
                        viewBox="0 0 32 32"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16 16C14.6667 16 13.5333 15.5333 12.6 14.6C11.6667 13.6667 11.2 12.5333 11.2 11.2C11.2 9.86666 11.6667 8.73333 12.6 7.79999C13.5333 6.86666 14.6667 6.39999 16 6.39999C17.3333 6.39999 18.4667 6.86666 19.4 7.79999C20.3333 8.73333 20.8 9.86666 20.8 11.2C20.8 12.5333 20.3333 13.6667 19.4 14.6C18.4667 15.5333 17.3333 16 16 16ZM6.39999 25.6V22.4C6.39999 21.8889 6.53888 21.4056 6.81666 20.95C7.09444 20.4944 7.47777 20.1111 7.96666 19.8C9.18888 19.0889 10.4833 18.5444 11.85 18.1667C13.2167 17.7889 14.6 17.6 16 17.6C17.4 17.6 18.7833 17.7889 20.15 18.1667C21.5167 18.5444 22.8111 19.0889 24.0333 19.8C24.5222 20.0889 24.9056 20.4667 25.1833 20.9333C25.4611 21.4 25.6 21.8889 25.6 22.4V25.6H6.39999Z"></path>
                      </svg>
                    </div>
                    <p style={{ wordBreak: "break-word" }}>john willian</p>
                  </div>
                </div>
              </div>
              <div className="bqd">
                <div className="xc bty bac bth btl bte btm hu">
                  <div className="jt pp pw ia bac">
                    <ul className="vu ow oy ns">
                      <li className="bdk">Australia Visitor Visa</li>
                    </ul>
                    <p className="bdm nf rq">1 Traveler</p>
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
              </div>
            </div>
          </div>
          <div className="jt pr bpq brt fq bqd">
            <div className="jy bpx"></div>
            <div
              id="btnContinueUnderSection"
              className="btnContinue jy bpx brs ng bne"
            >
              <button className="cg ch cn ct cx dq">
                <span className="">Continue</span>
              </button>
            </div>
          </div>
        </div>
        <div className="dr ew fq bnv bnw" style={{ top: "7rem" }}>
          <div className="jy bpx dr ew">
            <div>
              <div>
                <div className="xc bty bac bth btl bte btm hu">
                  <div className="jt pp pw ia bac">
                    <ul className="vu ow oy ns">
                      <li className="bdk">Australia Visitor Visa</li>
                    </ul>
                    <p className="bdm nf rq">1 Traveler</p>
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
                    <span>
                      NGN ₦<span data-handle="order-total">1190360.30</span>
                    </span>
                  </div>
                  <div className="bdm jt pw">
                    <span>For all travelers</span>
                  </div>
                </div>
              </div>
              <div className="v2-space-y-24 jg">
                <button
                  className="cg ch cn cs cx dq btnContinue"
                  id="btnContinueSidebar"
                >
                  <span className="">Continue to payment</span>
                </button>
                <div
                  className="zw bcr jt v2-space-x-8 pr or bey btnPrevious"
                  id="btnPreviousSidebar"
                  onClick={() => navigate(-1)}
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
                <div className="bcv">₦1190360.30 NGN</div>
              </div>
              <button
                className="cg ch co cu cx dq btnContinue"
                id="btnContinueUnderSectionMobile"
              >
                <span className="">Continue to payment</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default ReviewApplication;
