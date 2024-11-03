import { Link } from "react-router-dom";
import c from "../pages/external-two.module.css";

const hasPaymentMethod = true;

function PaymentMethod() {
  return (
    <>
      {!hasPaymentMethod ? (
        <>
          <div
            id="h1-tag-container"
            className={`${c.fu} ${c.bgp} ${c.bqg} ${c.beh} ${c.bbv} ${c.bpr}`}
          >
            <span>Payment methods</span>
          </div>

          <div className={`${c.ft} ${c.fu}`}>
            <Link
              to="/account/settings"
              className={`${c.kh} ${c.bhe} ${c.bud} ${c.beb} ${c.ok} ${c.ua} ${c.bjl} ${c.nx} ${c.rs}`}
            >
              <svg
                className={`${c.beb} ${c.qr} ${c.ov}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.29299 8.73519C2.90234 9.15821 2.90234 9.84518 3.29299 10.2682L8.29326 15.6827C8.68391 16.1058 9.31832 16.1058 9.70897 15.6827C10.0996 15.2597 10.0996 14.5728 9.70897 14.1497L6.41191 10.5829H15.9999C16.5531 10.5829 17 10.099 17 9.5C17 8.90101 16.5531 8.41709 15.9999 8.41709H6.41503L9.70584 4.85025C10.0965 4.42724 10.0965 3.74027 9.70584 3.31726C9.3152 2.89425 8.68079 2.89425 8.29014 3.31726L3.28986 8.73181L3.29299 8.73519Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className={`${c.nf}`}>My account</span>
            </Link>

            <div
              className={`${c.kd} ${c.bks} ${c.bkw} ${c.bri} ${c.nu} ${c.btf} ${c.mt} ${c.bsd}`}
            >
              <div
                className={`${c.beh} ${c.bgs} ${c.fm} ${c.xb} ${c.xq} ${c.bbt}`}
              >
                Manage Payment Method
              </div>
              <div className={`${c.ty}`}>
                <div
                  className={`${c.zh} ${c.bae} ${c.dg} ${c.wh} ${c.ok} ${c.ty} ${c.uk} ${c.lm}`}
                >
                  <svg
                    className={`${c.ben} ${c.qw} ${c.oy}`}
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    {/* Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) */}
                    <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path>
                  </svg>
                  <div>
                    <p className={`${c.beh} ${c.bgv} ${c.fr}`}>
                      A card is needed
                    </p>
                    <p className={`${c.bhs} ${c.bun}`}>
                      You need to add a debit or credit card.
                    </p>
                  </div>
                </div>

                {/* <a to="https://ivisatravel.com/account/payment-method/edit" tabIndex="-1"> */}

                <Link
                  to="/account/payment-method/edit"
                  className={`${c.ha} ${c.hc} ${c.hi} ${c.hm} ${c.hr}`}
                  data-handle="addPaymentMethodBtn"
                  type="submit"
                >
                  Add card
                  <svg
                    className={`${c.bkd} ${c.nf} ${c.qr} ${c.ov}`}
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_1568_8796"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="17"
                      height="16"
                    >
                      <rect
                        x="0.5"
                        width="16"
                        height="16"
                        fill="#D9D9D9"
                      ></rect>
                    </mask>
                    <g mask="url(#mask0_1568_8796)">
                      <path
                        d="M2.94313 13.3333C2.64313 13.3333 2.38295 13.2231 2.16258 13.0027C1.94221 12.7824 1.83203 12.5222 1.83203 12.2222V3.77773C1.83203 3.47773 1.94221 3.21754 2.16258 2.99718C2.38295 2.77681 2.64313 2.66663 2.94313 2.66663H14.0543C14.3543 2.66663 14.6144 2.77681 14.8348 2.99718C15.0552 3.21754 15.1654 3.47773 15.1654 3.77773V7.76663H2.94313V12.2222H9.5987V13.3333H2.94313ZM2.94313 5.33329H14.0543V3.77773H2.94313V5.33329ZM13.3876 14.6666V12.6666H11.3876V11.5555H13.3876V9.55553H14.4987V11.5555H16.4987V12.6666H14.4987V14.6666H13.3876Z"
                        fill="black"
                      ></path>
                    </g>
                  </svg>
                </Link>

                {/* </a> */}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={`${c.ft} ${c.fu}`}>
            <Link
              to="/account/settings"
              className={`${c.kh} ${c.bhe} ${c.bud} ${c.beb} ${c.ok} ${c.ua} ${c.bjl} ${c.nx} ${c.rs}`}
            >
              <svg
                className={`${c.beb} ${c.qr} ${c.ov}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.29299 8.73519C2.90234 9.15821 2.90234 9.84518 3.29299 10.2682L8.29326 15.6827C8.68391 16.1058 9.31832 16.1058 9.70897 15.6827C10.0996 15.2597 10.0996 14.5728 9.70897 14.1497L6.41191 10.5829H15.9999C16.5531 10.5829 17 10.099 17 9.5C17 8.90101 16.5531 8.41709 15.9999 8.41709H6.41503L9.70584 4.85025C10.0965 4.42724 10.0965 3.74027 9.70584 3.31726C9.3152 2.89425 8.68079 2.89425 8.29014 3.31726L3.28986 8.73181L3.29299 8.73519Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className={`${c.nf}`}>My account</span>
            </Link>

            <div
              className={`${c.kd} ${c.bks} ${c.bkw} ${c.bri} ${c.nu} ${c.btf} ${c.mt} ${c.bsd}`}
            >
              <div
                className={`${c.beh} ${c.bgs} ${c.fm} ${c.xb} ${c.xq} ${c.bbt}`}
              >
                Manage Payment Method
              </div>
              <div className={`${c.ty}`}>
                <div
                  className={`${c.ok} ${c.bog} ${c.boj} ${c.tt} ${c.boc} ${c.xb} ${c.xq} ${c.bpl} ${c.nw}`}
                >
                  <div className={`${c.mf} ${c.blh}`}>
                    <div className={`${c.ok} ${c.uk} ${c.mm} ${c.rt}`}>
                      <img
                        data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/v2/credit-cards/Visa.webp"
                        alt="Visa"
                        height="24"
                        width="32"
                        data-ll-status="loaded"
                        className={`${c.entered} ${c.loaded}`}
                        src="https://d3o7lrr6ovj0yv.cloudfront.net/img/v2/credit-cards/Visa.webp"
                      />
                      <div className={`${c.bgv} ${c.beh}`}>
                        Visa ending in 8418
                      </div>
                    </div>
                    <div className={`${c.bhs} ${c.beg} ${c.ok} ${c.ua}`}>
                      <svg
                        className={`${c.op} ${c.qr} ${c.ov}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>

                      <div className={`${c.nd}  ${c.bcl}`}>
                        Expires on Jan 31, 2028
                      </div>
                    </div>
                  </div>
                  <div className={`${c.vj} ${c.boq} ${c.mf} ${c.blh}`}>
                    <Link
                      to="https://ivisatravel.com/account/payment-method/edit"
                      tabIndex="-1"
                    >
                      <button
                        className={`${c.ha} ${c.hb} ${c.hl} ${c.ho} ${c.hr}`}
                        data-handle="updatePaymentMethodBtn"
                        type="submit"
                      >
                        Update payment method
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default PaymentMethod;
