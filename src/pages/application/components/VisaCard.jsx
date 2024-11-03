/* eslint-disable react/prop-types */
// import { useOutletContext } from "react-router-dom";

import { HashLink } from "react-router-hash-link";

function VisaCard({ cardDetails, heading }) {
  const { name, visa_validity, number_of_entries } = cardDetails;
  // console.log("details: ", cardDetails);
  const visaValidity = `${
    visa_validity.includes("Months")
      ? visa_validity.split(" ")[0] * 30 + " days"
      : visa_validity
  }`;

  return (
    <>
      <div className="wo bce bcg bqj bcp " data-handle="vt-card-container">
        {/* removed class btc */}
        <div className="baa bov  um cae w-full" style={{ width: "100%" }}>
          <div className="bfi bge bet bbl bid">
            <dl className="bfc biu bki bgw">
              <div className="cc bud uq cam">{name}</div>
              <div className="bw bty uq cam">{visaValidity}</div>
            </dl>
            <div className="bjf blm um cv">
              <div className="wo bcl uv">
                <div className="wn">
                  <svg
                    className="zc xc "
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
                <div className="vi vr">Validity:</div>
                <div className="cw">{`${visaValidity} after issued`}</div>
              </div>
              <div className="wo bcl uv">
                <div className="wn">
                  <svg
                    className="zc xc "
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
                <div className="vi vr">Number of entries:</div>
                <div className="cw">{number_of_entries} </div>
              </div>
              <div className="wo bcl">
                <div className="wn">
                  <svg
                    className="zc xc "
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
                <div className="vi vr">Max stay:</div>
                <div className="cw">
                  {`${`${
                    number_of_entries.includes("Multiple")
                      ? "30 days per entry"
                      : "30 days in total"
                  }`}`}
                </div>
              </div>
            </div>
            <div className="bjf bkg">
              <HashLink
                to={"#step=step_1"}
                state={{ form_heading: heading }}
                className="pd ph pm pp qm"
                data-handle="vt-5085"
                // onClick={handleClick}
              >
                <span className="">Start now</span>
                <div className="wn">
                  <svg
                    className="yx wz vi disabled:hover:v2-text-gray-300"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="gl-arrow-right">
                      <mask
                        id="mask0_1494_6912"
                        style={{
                          maskType: "alpha",
                        }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="17"
                        height="16"
                      >
                        <rect
                          id="bounding-box"
                          x="0.5"
                          width="16"
                          height="16"
                          fill="#D9D9D9"
                        ></rect>
                      </mask>
                      <g mask="url(#mask0_1494_6912)">
                        <path
                          id="arrow-right"
                          d="M13.8641 8.56497C14.1766 8.2526 14.1766 7.7453 13.8641 7.43292L9.86383 3.43448C9.55131 3.1221 9.04378 3.1221 8.73126 3.43448C8.41875 3.74686 8.41875 4.25416 8.73126 4.56654L11.3689 7.20051H3.69848C3.25596 7.20051 2.89844 7.55787 2.89844 8.0002C2.89844 8.44252 3.25596 8.79988 3.69848 8.79988H11.3664L8.73376 11.4339C8.42125 11.7462 8.42125 12.2535 8.73376 12.5659C9.04628 12.8783 9.55381 12.8783 9.86633 12.5659L13.8666 8.56747L13.8641 8.56497Z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VisaCard;
