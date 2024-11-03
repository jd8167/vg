/* eslint-disable react/prop-types */
import { useState } from "react";
// import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function StepThreeC({ isCurrentStep, heading }) {
  // const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  // const { destination } = useParams();
  // const { visaHeading } = useOutletContext();

  return (
    <div
      className="s bhx"
      id="step=step_2b"
      style={{
        display: !isCurrentStep ? "none" : "block",
        marginBottom: "230px",
      }}
    >
      <div className="bhw">
        <div>
          <h1 className="bcj bmi bvv bac wy bln">
            <span>
              {/* {visaHeading}  */}
              {heading}
            </span>
          </h1>
        </div>
      </div>
      <div>
        <div className="jt pr pw v2-space-x-32 bac bic jy bun">
          <div className="ro jt pr">
            <span className="mj kj rw tn sn jt pv iy bao ut">
              <div className="js">
                <svg
                  className="mf kh "
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
            <span className="bct kj">Trip details</span>
          </div>
          <div className="ng km rw dq ut"></div>
          <div className="ro jt pr">
            <span className="mj kj rw tn sn jt pv iy bao ut">
              <span className="bcy jb">2</span>
            </span>
            <span className="bct kj">Your info</span>
          </div>
          <div className="ng km rw dq un">
            <div className="ut lh rw dp"></div>
          </div>
          <div className="ro jt pr">
            <span className="mj kj rw tn sn jt pv iy">
              <span className="bcy jb">3</span>
            </span>
            <span className="bct kj">Checkout</span>
          </div>
        </div>
      </div>
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
                    <div className="bcl ia">Card inhtmlFormation</div>
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
              <div className="">
                <div className="ng jt pr pw ia bol">
                  <span className="bac bvy bcj">
                    Your Passport InhtmlFormation
                  </span>
                </div>
                <div className="yu bvh bok bpi ta tj">
                  <div className="ho boo col-12">
                    <div
                      data-ivisa-slug="nationality_country"
                      data-ivisa-question-selector="applicant.0.nationality_country"
                      className=""
                    >
                      <div className="">
                        <label className="by jt pr v2-space-x-8">
                          <span>Nationality on passport</span>
                        </label>
                        <div className="dq">
                          <div>
                            <div>
                              <div
                                className="dropdown dq"
                                tabIndex="0"
                                name="applicant.0.nationality_country"
                                required={true}
                              >
                                <div
                                  className="ca v2-small lg:v2-medium"
                                  data-flip="false"
                                >
                                  <div
                                    className="jt pr ns yj rm bac"
                                    data-handle="filter-value"
                                  >
                                    <span className="rm">
                                      Saudi Arabia - SA
                                    </span>
                                  </div>
                                  <div className="js">
                                    <svg
                                      className="me kg bac or"
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
                                </div>
                                <div
                                  className="dropdown-filter bay c ng w-full dq v2-dropdown-filter"
                                  style={{ paddingTop: "0px" }}
                                >
                                  <div>
                                    <input
                                      name="doNotAutofill0.06993692441909127"
                                      type="search"
                                      autoComplete="off"
                                      role="combobox"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      data-handle="dropdown-applicant.0.nationality_country"
                                      className="cc"
                                    />
                                  </div>
                                  <div
                                    data-critical="true"
                                    className="e"
                                    style={{ display: "none" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ho boo col-12">
                    <div
                      data-ivisa-slug="is_passport_on_hand"
                      data-ivisa-question-selector="applicant.0.is_passport_on_hand"
                      className=""
                    >
                      <div className="">
                        <div className="dq">
                          <div disabled={false} className="jt pp">
                            <div>
                              <input
                                type="checkbox"
                                name="applicant.0.is_passport_on_hand"
                                className="bn"
                                id="customCheckapplicant.0.is_passport_on_hand"
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                              />
                            </div>
                            <label
                              className="bac zq zh bwq"
                              data-handle="label-applicant.0.is_passport_on_hand"
                              htmlFor="customCheckapplicant.0.is_passport_on_hand"
                            >
                              Skip entering passport information for now
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {!isChecked && (
                    <>
                      <div className="ho boo col-12">
                        <div
                          data-ivisa-slug="passport_num"
                          data-ivisa-question-selector="applicant.0.passport_num"
                          className=""
                        >
                          <div className="">
                            <label className="by jt pr v2-space-x-8">
                              <span>Passport number</span>
                            </label>
                            <div className="dq">
                              <input
                                className="bn v2-small lg:v2-medium"
                                name="applicant.0.passport_num"
                                required=""
                                spellCheck="false"
                                autoComplete="on"
                                type="text"
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
                          </div>
                        </div>
                      </div>
                      <div className="ho boo col-12">
                        <div
                          data-ivisa-slug="passport_issued_date"
                          data-ivisa-question-selector="applicant.0.passport_issued_date"
                          className=""
                        >
                          <div className="">
                            <label className="by jt pr v2-space-x-8">
                              <span>When was your passport issued?</span>
                            </label>
                            <div className="dq">
                              <div type="date" className="sm vu">
                                <div className="jt pr">
                                  <select
                                    name="applicant.0.passport_issued_date.month"
                                    className="bn v2-small lg:v2-medium iz bpf"
                                    autoComplete="on"
                                  >
                                    <option disabled="" value="">
                                      Month
                                    </option>
                                    <option className="zr" value="1">
                                      January
                                    </option>
                                    <option className="zr" value="2">
                                      February
                                    </option>
                                    <option className="zr" value="3">
                                      March
                                    </option>
                                    <option className="zr" value="4">
                                      April
                                    </option>
                                    <option className="zr" value="5">
                                      May
                                    </option>
                                    <option className="zr" value="6">
                                      June
                                    </option>
                                    <option className="zr" value="7">
                                      July
                                    </option>
                                    <option className="zr" value="8">
                                      August
                                    </option>
                                    <option className="zr" value="9">
                                      September
                                    </option>
                                    <option className="zr" value="10">
                                      October
                                    </option>
                                    <option className="zr" value="11">
                                      November
                                    </option>
                                    <option className="zr" value="12">
                                      December
                                    </option>
                                  </select>
                                  <select
                                    name="applicant.0.passport_issued_date.day"
                                    className="bn v2-small lg:v2-medium iz bpf"
                                    autoComplete="on"
                                  >
                                    <option disabled="" value="">
                                      Day
                                    </option>
                                    <option className="zr" value="1">
                                      1
                                    </option>
                                    <option className="zr" value="2">
                                      2
                                    </option>
                                    <option className="zr" value="3">
                                      3
                                    </option>
                                    <option className="zr" value="4">
                                      4
                                    </option>
                                    <option className="zr" value="5">
                                      5
                                    </option>
                                    <option className="zr" value="6">
                                      6
                                    </option>
                                    <option className="zr" value="7">
                                      7
                                    </option>
                                    <option className="zr" value="8">
                                      8
                                    </option>
                                    <option className="zr" value="9">
                                      9
                                    </option>
                                    <option className="zr" value="10">
                                      10
                                    </option>
                                    <option className="zr" value="11">
                                      11
                                    </option>
                                    <option className="zr" value="12">
                                      12
                                    </option>
                                    <option className="zr" value="13">
                                      13
                                    </option>
                                    <option className="zr" value="14">
                                      14
                                    </option>
                                    <option className="zr" value="15">
                                      15
                                    </option>
                                    <option className="zr" value="16">
                                      16
                                    </option>
                                    <option className="zr" value="17">
                                      17
                                    </option>
                                    <option className="zr" value="18">
                                      18
                                    </option>
                                    <option className="zr" value="19">
                                      19
                                    </option>
                                    <option className="zr" value="20">
                                      20
                                    </option>
                                    <option className="zr" value="21">
                                      21
                                    </option>
                                    <option className="zr" value="22">
                                      22
                                    </option>
                                    <option className="zr" value="23">
                                      23
                                    </option>
                                    <option className="zr" value="24">
                                      24
                                    </option>
                                    <option className="zr" value="25">
                                      25
                                    </option>
                                    <option className="zr" value="26">
                                      26
                                    </option>
                                    <option className="zr" value="27">
                                      27
                                    </option>
                                    <option className="zr" value="28">
                                      28
                                    </option>
                                    <option className="zr" value="29">
                                      29
                                    </option>
                                    <option className="zr" value="30">
                                      30
                                    </option>
                                  </select>
                                  <select
                                    name="applicant.0.passport_issued_date.year"
                                    className="bn v2-small lg:v2-medium hideBackgroundImage"
                                  >
                                    <option disabled="" value="">
                                      Year
                                    </option>
                                    <option className="zr" value="2024">
                                      2024
                                    </option>
                                    <option className="zr" value="2023">
                                      2023
                                    </option>
                                    <option className="zr" value="2022">
                                      2022
                                    </option>
                                    <option className="zr" value="2021">
                                      2021
                                    </option>
                                    <option className="zr" value="2020">
                                      2020
                                    </option>
                                    <option className="zr" value="2019">
                                      2019
                                    </option>
                                    <option className="zr" value="2018">
                                      2018
                                    </option>
                                    <option className="zr" value="2017">
                                      2017
                                    </option>
                                    <option className="zr" value="2016">
                                      2016
                                    </option>
                                    <option className="zr" value="2015">
                                      2015
                                    </option>
                                    <option className="zr" value="2014">
                                      2014
                                    </option>
                                    <option className="zr" value="2013">
                                      2013
                                    </option>
                                    <option className="zr" value="2012">
                                      2012
                                    </option>
                                    <option className="zr" value="2011">
                                      2011
                                    </option>
                                    <option className="zr" value="2010">
                                      2010
                                    </option>
                                    <option className="zr" value="2009">
                                      2009
                                    </option>
                                    <option className="zr" value="2008">
                                      2008
                                    </option>
                                    <option className="zr" value="2007">
                                      2007
                                    </option>
                                    <option className="zr" value="2006">
                                      2006
                                    </option>
                                    <option className="zr" value="2005">
                                      2005
                                    </option>
                                    <option className="zr" value="2004">
                                      2004
                                    </option>
                                  </select>
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
                      <div className="ho boo col-12">
                        <div
                          data-ivisa-slug="passport_expiration_date"
                          data-ivisa-question-selector="applicant.0.passport_expiration_date"
                          className=""
                        >
                          <div className="">
                            <label className="by jt pr v2-space-x-8">
                              <span>When does your passport expire?</span>
                            </label>
                            <div className="dq">
                              <div type="date" className="sm vu">
                                <div className="jt pr">
                                  <select
                                    name="applicant.0.passport_expiration_date.month"
                                    className="bn v2-small lg:v2-medium iz bpf"
                                    autoComplete="on"
                                  >
                                    <option disabled="" value="">
                                      Month
                                    </option>
                                    <option className="zr" value="1">
                                      January
                                    </option>
                                    <option className="zr" value="2">
                                      February
                                    </option>
                                    <option className="zr" value="3">
                                      March
                                    </option>
                                    <option className="zr" value="4">
                                      April
                                    </option>
                                    <option className="zr" value="5">
                                      May
                                    </option>
                                    <option className="zr" value="6">
                                      June
                                    </option>
                                    <option className="zr" value="7">
                                      July
                                    </option>
                                    <option className="zr" value="8">
                                      August
                                    </option>
                                    <option className="zr" value="9">
                                      September
                                    </option>
                                    <option className="zr" value="10">
                                      October
                                    </option>
                                    <option className="zr" value="11">
                                      November
                                    </option>
                                    <option className="zr" value="12">
                                      December
                                    </option>
                                  </select>
                                  <select
                                    name="applicant.0.passport_expiration_date.day"
                                    className="bn v2-small lg:v2-medium iz bpf"
                                    autoComplete="on"
                                  >
                                    <option disabled="" value="">
                                      Day
                                    </option>
                                    <option className="zr" value="1">
                                      1
                                    </option>
                                    <option className="zr" value="2">
                                      2
                                    </option>
                                    <option className="zr" value="3">
                                      3
                                    </option>
                                    <option className="zr" value="4">
                                      4
                                    </option>
                                    <option className="zr" value="5">
                                      5
                                    </option>
                                    <option className="zr" value="6">
                                      6
                                    </option>
                                    <option className="zr" value="7">
                                      7
                                    </option>
                                    <option className="zr" value="8">
                                      8
                                    </option>
                                    <option className="zr" value="9">
                                      9
                                    </option>
                                    <option className="zr" value="10">
                                      10
                                    </option>
                                    <option className="zr" value="11">
                                      11
                                    </option>
                                    <option className="zr" value="12">
                                      12
                                    </option>
                                    <option className="zr" value="13">
                                      13
                                    </option>
                                    <option className="zr" value="14">
                                      14
                                    </option>
                                    <option className="zr" value="15">
                                      15
                                    </option>
                                    <option className="zr" value="16">
                                      16
                                    </option>
                                    <option className="zr" value="17">
                                      17
                                    </option>
                                    <option className="zr" value="18">
                                      18
                                    </option>
                                    <option className="zr" value="19">
                                      19
                                    </option>
                                    <option className="zr" value="20">
                                      20
                                    </option>
                                    <option className="zr" value="21">
                                      21
                                    </option>
                                    <option className="zr" value="22">
                                      22
                                    </option>
                                    <option className="zr" value="23">
                                      23
                                    </option>
                                    <option className="zr" value="24">
                                      24
                                    </option>
                                    <option className="zr" value="25">
                                      25
                                    </option>
                                    <option className="zr" value="26">
                                      26
                                    </option>
                                    <option className="zr" value="27">
                                      27
                                    </option>
                                    <option className="zr" value="28">
                                      28
                                    </option>
                                    <option className="zr" value="29">
                                      29
                                    </option>
                                    <option className="zr" value="30">
                                      30
                                    </option>
                                    <option className="zr" value="31">
                                      31
                                    </option>
                                  </select>
                                  <select
                                    name="applicant.0.passport_expiration_date.year"
                                    className="bn v2-small lg:v2-medium hideBackgroundImage"
                                  >
                                    <option disabled="" value="">
                                      Year
                                    </option>
                                    <option className="zr" value="2024">
                                      2024
                                    </option>
                                    <option className="zr" value="2025">
                                      2025
                                    </option>
                                    <option className="zr" value="2026">
                                      2026
                                    </option>
                                    <option className="zr" value="2027">
                                      2027
                                    </option>
                                    <option className="zr" value="2028">
                                      2028
                                    </option>
                                    <option className="zr" value="2029">
                                      2029
                                    </option>
                                    <option className="zr" value="2030">
                                      2030
                                    </option>
                                    <option className="zr" value="2031">
                                      2031
                                    </option>
                                    <option className="zr" value="2032">
                                      2032
                                    </option>
                                    <option className="zr" value="2033">
                                      2033
                                    </option>
                                    <option className="zr" value="2034">
                                      2034
                                    </option>
                                    <option className="zr" value="2035">
                                      2035
                                    </option>
                                    <option className="zr" value="2036">
                                      2036
                                    </option>
                                    <option className="zr" value="2037">
                                      2037
                                    </option>
                                    <option className="zr" value="2038">
                                      2038
                                    </option>
                                    <option className="zr" value="2039">
                                      2039
                                    </option>
                                    <option className="zr" value="2040">
                                      2040
                                    </option>
                                    <option className="zr" value="2041">
                                      2041
                                    </option>
                                    <option className="zr" value="2042">
                                      2042
                                    </option>
                                    <option className="zr" value="2043">
                                      2043
                                    </option>
                                    <option className="zr" value="2044">
                                      2044
                                    </option>
                                  </select>
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
                    </>
                  )}
                  <div className="ho boo col-12">
                    <div
                      data-ivisa-slug="home_country"
                      data-ivisa-question-selector="applicant.0.home_country"
                      className=""
                    >
                      <div className="">
                        <label className="by jt pr v2-space-x-8">
                          <span>Country of residence</span>
                          <div
                            data-v-5784ed69=""
                            className="inline-block bl"
                            style={{
                              border: "12px solid transparent",
                              margin: "-12px ",
                            }}
                          >
                            <div data-v-5784ed69="">
                              <div data-v-5784ed69-s="" className="bcy zw io">
                                <div data-v-5784ed69-s="" className="js">
                                  <svg
                                    className="me kg "
                                    width="30"
                                    height="30"
                                    viewBox="0 0 30 30"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M15 29.4C18.8191 29.4 22.4818 27.8829 25.1823 25.1823C27.8829 22.4818 29.4 18.8191 29.4 15C29.4 11.1809 27.8829 7.51819 25.1823 4.81767C22.4818 2.11714 18.8191 0.600006 15 0.600006C11.1809 0.600006 7.51819 2.11714 4.81767 4.81767C2.11714 7.51819 0.600006 11.1809 0.600006 15C0.600006 18.8191 2.11714 22.4818 4.81767 25.1823C7.51819 27.8829 11.1809 29.4 15 29.4ZM12.75 19.5H14.1V15.9H12.75C12.0019 15.9 11.4 15.2981 11.4 14.55C11.4 13.8019 12.0019 13.2 12.75 13.2H15.45C16.1981 13.2 16.8 13.8019 16.8 14.55V19.5H17.25C17.9981 19.5 18.6 20.1019 18.6 20.85C18.6 21.5981 17.9981 22.2 17.25 22.2H12.75C12.0019 22.2 11.4 21.5981 11.4 20.85C11.4 20.1019 12.0019 19.5 12.75 19.5ZM15 7.80001C15.4774 7.80001 15.9352 7.98965 16.2728 8.32721C16.6104 8.66478 16.8 9.12262 16.8 9.60001C16.8 10.0774 16.6104 10.5352 16.2728 10.8728C15.9352 11.2104 15.4774 11.4 15 11.4C14.5226 11.4 14.0648 11.2104 13.7272 10.8728C13.3896 10.5352 13.2 10.0774 13.2 9.60001C13.2 9.12262 13.3896 8.66478 13.7272 8.32721C14.0648 7.98965 14.5226 7.80001 15 7.80001Z"></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div
                              data-v-5784ed69=""
                              className="popper"
                              style={{ display: "none" }}
                            >
                              <span data-v-5784ed69-s="">
                                This is typically the country where you have
                                legal status, meaning you live there htmlFor
                                more than 183 days a year. Do not select a
                                country that you&apos;re visiting temporarily.
                              </span>
                              <div
                                data-v-20b7fd4a=""
                                data-v-5784ed69=""
                                id="arrow"
                                data-popper-arrow=""
                              ></div>
                            </div>
                          </div>
                        </label>
                        <div className="dq">
                          <div>
                            <div>
                              <div
                                className="dropdown dq"
                                tabIndex="0"
                                name="applicant.0.home_country"
                                required={true}
                              >
                                <div
                                  className="ca v2-small lg:v2-medium"
                                  data-flip="false"
                                >
                                  <div
                                    className="jt pr ns yj rm bac"
                                    data-handle="filter-value"
                                  >
                                    <span className="rm">
                                      Saudi Arabia - SA
                                    </span>
                                  </div>
                                  <div className="js">
                                    <svg
                                      className="me kg bac or"
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
                                </div>
                                <div
                                  className="dropdown-filter bay c ng w-full dq v2-dropdown-filter"
                                  style={{ paddingTop: "0px" }}
                                >
                                  <div>
                                    <input
                                      name="doNotAutofill0.6176297132377311"
                                      type="search"
                                      autoComplete="off"
                                      role="combobox"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      data-handle="dropdown-applicant.0.home_country"
                                      className="cc"
                                    />
                                  </div>
                                  <div
                                    data-critical="true"
                                    className="e"
                                    style={{ display: "none" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ho boo col-12">
                    <div
                      data-ivisa-slug="occupation_triage"
                      data-ivisa-question-selector="applicant.0.occupation_triage"
                      className=""
                    >
                      <div className="">
                        <label className="by jt pr v2-space-x-8">
                          <span>Current occupation status</span>
                        </label>
                        <div className="dq">
                          <div>
                            <div>
                              <div
                                className="dropdown dq"
                                tabIndex="0"
                                name="applicant.0.occupation_triage"
                                required={true}
                              >
                                <div
                                  className="ca v2-small lg:v2-medium"
                                  data-flip="false"
                                >
                                  <div
                                    className="jt pr ns yj rm bac"
                                    data-handle="filter-value"
                                  >
                                    <span className="rm">
                                      Employed - More than 2 years in current
                                      role
                                    </span>
                                  </div>
                                  <div className="js">
                                    <svg
                                      className="me kg bac or"
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
                                </div>
                                <div
                                  className="dropdown-filter bay c ng w-full dq v2-dropdown-filter"
                                  style={{ paddingTop: "0px" }}
                                >
                                  <div>
                                    <input
                                      name="doNotAutofill0.9938887777112746"
                                      type="search"
                                      autoComplete="off"
                                      role="combobox"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      data-handle="dropdown-applicant.0.occupation_triage"
                                      className="cc"
                                    />
                                  </div>
                                  <div
                                    data-critical="true"
                                    className="e"
                                    style={{ display: "none" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ho boo col-12">
                    <div
                      data-ivisa-slug="income_triage"
                      data-ivisa-question-selector="applicant.0.income_triage"
                      className=""
                    >
                      <div className="">
                        <label className="by jt pr v2-space-x-8">
                          <span>What is your monthly income after tax?</span>
                        </label>
                        <div className="dq">
                          <div>
                            <div>
                              <select
                                className="bn ix v2-small lg:v2-medium hideBackgroundImage"
                                data-handle="dropdown-applicant.0.income_triage"
                                required=""
                              >
                                <option value="No income">No income</option>
                                <option value="Less than 1000 USD monthly">
                                  Less than 1000 USD monthly
                                </option>
                                <option value="1000 - 2500 USD monthly">
                                  1000 - 2500 USD monthly
                                </option>
                                <option value="Over 2500 USD monthly">
                                  Over 2500 USD monthly
                                </option>
                                <option value="Partner-dependent income">
                                  Partner-dependent income
                                </option>
                                <option value="Income dependent (child/student)">
                                  Income dependent (child/student)
                                </option>
                              </select>
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
                  <div className="ho boo col-12">
                    <div
                      data-ivisa-slug="own_state_triage"
                      data-ivisa-question-selector="applicant.0.own_state_triage"
                      className=""
                    >
                      <div className="">
                        <label className="by jt pr v2-space-x-8">
                          <span>Do you own assets in your home country?</span>
                          <div
                            data-v-5784ed69=""
                            className="inline-block bl"
                            style={{
                              border: "12px solid transparent",
                              margin: "-12px",
                            }}
                          >
                            <div data-v-5784ed69="">
                              <div data-v-5784ed69-s="" className="bcy zw io">
                                <div data-v-5784ed69-s="" className="js">
                                  <svg
                                    className="me kg "
                                    width="30"
                                    height="30"
                                    viewBox="0 0 30 30"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M15 29.4C18.8191 29.4 22.4818 27.8829 25.1823 25.1823C27.8829 22.4818 29.4 18.8191 29.4 15C29.4 11.1809 27.8829 7.51819 25.1823 4.81767C22.4818 2.11714 18.8191 0.600006 15 0.600006C11.1809 0.600006 7.51819 2.11714 4.81767 4.81767C2.11714 7.51819 0.600006 11.1809 0.600006 15C0.600006 18.8191 2.11714 22.4818 4.81767 25.1823C7.51819 27.8829 11.1809 29.4 15 29.4ZM12.75 19.5H14.1V15.9H12.75C12.0019 15.9 11.4 15.2981 11.4 14.55C11.4 13.8019 12.0019 13.2 12.75 13.2H15.45C16.1981 13.2 16.8 13.8019 16.8 14.55V19.5H17.25C17.9981 19.5 18.6 20.1019 18.6 20.85C18.6 21.5981 17.9981 22.2 17.25 22.2H12.75C12.0019 22.2 11.4 21.5981 11.4 20.85C11.4 20.1019 12.0019 19.5 12.75 19.5ZM15 7.80001C15.4774 7.80001 15.9352 7.98965 16.2728 8.32721C16.6104 8.66478 16.8 9.12262 16.8 9.60001C16.8 10.0774 16.6104 10.5352 16.2728 10.8728C15.9352 11.2104 15.4774 11.4 15 11.4C14.5226 11.4 14.0648 11.2104 13.7272 10.8728C13.3896 10.5352 13.2 10.0774 13.2 9.60001C13.2 9.12262 13.3896 8.66478 13.7272 8.32721C14.0648 7.98965 14.5226 7.80001 15 7.80001Z"></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div
                              data-v-5784ed69=""
                              className="popper"
                              style={{ display: "none" }}
                            >
                              <span data-v-5784ed69-s="">
                                Examples include owning property or having
                                savings.
                              </span>
                              <div
                                data-v-20b7fd4a=""
                                data-v-5784ed69=""
                                id="arrow"
                                data-popper-arrow=""
                              ></div>
                            </div>
                          </div>
                        </label>
                        <div className="dq">
                          <div>
                            <div>
                              <div
                                className="jo jt v2-space-x-16"
                                name="applicant.0.own_state_triage"
                                required={true}
                              >
                                <button
                                  className="bcp bbq ww buf rs bbe bbf bfj bfl bbg uf nb bqx rs ze"
                                  data-handle="boolean-Yes"
                                >
                                  Yes
                                </button>
                                <button
                                  className="bcp bbq ww buf rs bbe bbf bfj bfl bbh nb bqx rs ze"
                                  data-handle="boolean-No"
                                >
                                  No
                                </button>
                                <div style={{ display: "none" }}>
                                  <input
                                    className="bn boolean jy"
                                    value="Yes"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ho boo col-12">
                    <div
                      data-ivisa-slug="travelled_behtmlFore_triage"
                      data-ivisa-question-selector="applicant.0.travelled_behtmlFore_triage"
                      className=""
                    >
                      <div className="">
                        <label className="by jt pr v2-space-x-8">
                          <span>
                            Have you travelled to other countries behtmlFore?
                          </span>
                        </label>
                        <div className="dq">
                          <div>
                            <div>
                              <div
                                className="jo v2-space-y-8 jw pg qq"
                                name="applicant.0.travelled_behtmlFore_triage"
                                required={true}
                              >
                                <button
                                  className="bcp bbq ww buf rs bbe bbf bfj bfl bbh rt wn bua fq bne bnm"
                                  data-handle="boolean-No, I haven't left my home country"
                                >
                                  No, I haven&apos;t left my home country
                                </button>
                                <button
                                  className="bcp bbq ww buf rs bbe bbf bfj bfl bbh rt wn bua fq bne bnm"
                                  data-handle="boolean-Yes, in the last 5 years, I have traveled out of my home country and returned."
                                >
                                  Yes, in the last 5 years, I have traveled out
                                  of my home country and returned.
                                </button>
                                <button
                                  className="bcp bbq ww buf rs bbe bbf bfj bfl bbg uf rt wn bua fq bne bnm"
                                  data-handle="boolean-Yes, in the last 5 years, I have traveled or have a visa htmlFor at least 1 of these countries - USA, Canada, Australia, UK, all Schengen countries."
                                >
                                  Yes, in the last 5 years, I have traveled or
                                  have a visa htmlFor at least 1 of these
                                  countries - USA, Canada, Australia, UK, all
                                  Schengen countries.
                                </button>
                                <div style={{ display: "none" }}>
                                  <input
                                    className="bn boolean jy"
                                    value="Yes, in the last 5 years, I have traveled or have a visa htmlFor at least 1 of these countries - USA, Canada, Australia, UK, all Schengen countries."
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ho boo col-12">
                    <div
                      data-ivisa-slug="applied_visa_triage"
                      data-ivisa-question-selector="applicant.0.applied_visa_triage"
                      className=""
                    >
                      <div className="">
                        <label className="by jt pr v2-space-x-8">
                          <span>
                            Have you applied htmlFor this visa behtmlFore?
                          </span>
                        </label>
                        <div className="dq">
                          <div>
                            <div>
                              <div
                                className="jo v2-space-y-8 jw pg qq"
                                name="applicant.0.applied_visa_triage"
                                required={true}
                              >
                                <button
                                  className="bcp bbq ww buf rs bbe bbf bfj bfl bbg uf rt wn bua fq bne bnm"
                                  data-handle="boolean-No"
                                >
                                  No
                                </button>
                                <button
                                  className="bcp bbq ww buf rs bbe bbf bfj bfl bbh rt wn bua fq bne bnm"
                                  data-handle="boolean-Yes"
                                >
                                  Yes
                                </button>
                                <button
                                  className="bcp bbq ww buf rs bbe bbf bfj bfl bbh rt wn bua fq bne bnm"
                                  data-handle="boolean-I was denied this visa less than 12 months ago."
                                >
                                  I was denied this visa less than 12 months
                                  ago.
                                </button>
                                <button
                                  className="bcp bbq ww buf rs bbe bbf bfj bfl bbh rt wn bua fq bne bnm"
                                  data-handle="boolean-I was denied this visa over 12 months ago"
                                >
                                  I was denied this visa over 12 months ago
                                </button>
                                <div style={{ display: "none" }}>
                                  <input className="bn boolean jy" value="No" />
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
          </div>
          <div className="jt pr bpq brt fq bqd">
            <div className="jy bpx"></div>
            <div
              id="btnContinueUnderSection"
              className="btnContinue jy bpx brs ng bne"
            >
              <button
                className="cg ch cn ct cx dq"
                // onClick={() => navigate("/a/australia/step=step_3e")}
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
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="bdm jt pw">
                    <span>htmlFor all travelers</span>
                    <span>(Includes taxes and fees)</span>
                  </div>
                </div>
              </div>
              <div className="v2-space-y-24 jg">
                <HashLink
                  to={"#step=step_2c"}
                  state={{ form_heading: heading }}
                  className="cg ch cn cs cx dq btnContinue"
                  id="btnContinueSidebar"
                >
                  <span className="">Save and continue</span>
                </HashLink>
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
                      htmlFor more details see{" "}
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
              <HashLink
                to={"#step=step_2c"}
                state={{ form_heading: heading }}
                className="cg ch co cu cx dq btnContinue"
                id="btnContinueUnderSectionMobile"
              >
                <span className="">Continue</span>
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepThreeC;
