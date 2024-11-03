import { Link } from "react-router-dom";
import c from "../pages/external-two.module.css";

function EditPaymentMethod() {
  return (
    <>
      <div
        id="h1-tag-container"
        className={`${c.fu} ${c.bgp} ${c.bqg} ${c.beh} ${c.bbv} ${c.bpr}`}
      >
        <span>Payment methods</span>
      </div>
      <div className={`${c.ft} ${c.fu}`}>
        <Link
          href="/account/settings"
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
          data-vue-component="payment-standalone-fixed-price"
          className={`${c.kd} ${c.bks} ${c.bkw} ${c.bri} ${c.mt} ${c.me}`}
        >
          <div data-v-32cc5755="" className={`${c.kd} ${c.bks}`}>
            <div data-v-32cc5755="">
              <div
                data-v-32cc5755=""
                className={`${c.bgs} ${c.fm} ${c.beh} ${c.mm} ${c.bso} ${c.ok} ${c.uf}`}
              >
                <span data-v-32cc5755="">Credit / debit card</span>
                <img
                  data-v-32cc5755=""
                  src="https://d3o7lrr6ovj0yv.cloudfront.net/img/payment/credit_card_icons.svg"
                  alt="Credit Card Icon"
                />
              </div>
              <div
                data-v-32cc5755=""
                className={`${c.btq} ${c.uf} ${c.beh} ${c.bbt} ${c.xd} ${c.xq} ${c.mk}`}
              >
                <div
                  data-v-32cc5755=""
                  className={`${c.ok} ${c.ua} ${c.md} ${c.bsb}`}
                >
                  <div
                    data-v-32cc5755=""
                    className={`${c.op} ${c.bto} ${c.nq}`}
                  >
                    <div data-v-32cc5755="" className={`${c.oj}`}>
                      <svg
                        className={`${c.qw} ${c.oy}`}
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
                  </div>
                  <div data-v-32cc5755="" className={`${c.btt} ${c.nq}`}>
                    <div data-v-32cc5755="" className={`${c.oj}`}>
                      <svg
                        className={`${c.qr} ${c.ov}`}
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
                  </div>
                  <div data-v-32cc5755="" className={`${c.bhs} ${c.bun}`}>
                    All card information is fully encrypted and secure.
                  </div>
                </div>
              </div>
              <div data-v-32cc5755="">
                <div
                  data-v-c7f314ba=""
                  data-v-32cc5755=""
                  id="applyPaymentCard"
                  className={`${c.mo}`}
                >
                  <div data-v-c7f314ba="" className={`${c.mj}`}>
                    <div
                      data-v-c7f314ba=""
                      className={`${c.wc} ${c.xs} ${c.label_comp_text_03_R} ${c.beh} ${c.rt} ${c.wu}`}
                    >
                      <div data-v-c7f314ba="" className={`${c.ik}`}>
                        <input
                          data-v-c7f314ba=""
                          required=""
                          type="text"
                          inputmode="numeric"
                          name="number"
                          autoComplete="cc-number"
                          placeholder="Card number"
                          maxlength="19"
                          className={`${c.bjt} ${c.bjw} ${c.wv} ${c.rt} ${c.wp} placeholder:v2-text-gray-300 ${c.bar} ${c.bbc}`}
                        />
                        <div
                          data-v-c7f314ba=""
                          className={`${c.ij} ${c.jc} ${c.jk} ${c.no} ${c.ok} ${c.ua}`}
                        >
                          <img
                            data-v-c7f314ba=""
                            src="https://d3o7lrr6ovj0yv.cloudfront.net/img/payment/cc-visa.png"
                          />
                        </div>
                      </div>
                      <div
                        data-v-c7f314ba=""
                        className={`${c.ok} ${c.xs} ${c.wz}`}
                      >
                        <div data-v-c7f314ba="" className={`${c.ik} ${c.qh}`}>
                          <input
                            data-v-c7f314ba=""
                            required=""
                            placeholder="MM/YY"
                            maxlength="5"
                            name="mmyy"
                            inputmode="numeric"
                            className={`${c.bjs} ${c.bjt} ${c.bjw} ${c.rt} {c.wv} ${c.xs} ${c.xh} placeholder:v2-text-gray-300 ${c.bar} ${c.bbc}`}
                          />
                        </div>
                        <div data-v-c7f314ba="" className={`${c.ik} ${c.qh}`}>
                          <input
                            data-v-c7f314ba=""
                            required=""
                            autoComplete="cc-csc"
                            inputmode="numeric"
                            placeholder="CVV"
                            name="cvv"
                            type="text"
                            maxlength="4"
                            className={`${c.bjt} ${c.bjw} ${c.rt} ${c.wv} placeholder:v2-text-gray-300 ${c.bar} ${c.bbc}`}
                          />
                          <div data-v-c7f314ba="" className={`${c.oj}`}>
                            <svg
                              className={`${c.qx} ${c.oz} ${c.ij} ${c.jc} ${c.jj} ${c.no}`}
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
                      <div data-v-c7f314ba="" className={`${c.ik}`}>
                        <input
                          data-v-c7f314ba=""
                          required=""
                          type="text"
                          name="full_name"
                          autoComplete="cc-name"
                          placeholder="Cardholder name"
                          className={`${c.bjt} ${c.bjw} ${c.wv} ${c.rt} ${c.wi} placeholder:v2-text-gray-300 bar ${c.bbc}`}
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    data-v-c7f314ba=""
                    disabled=""
                    className={`${c.ha} ${c.hb} ${c.hi} ${c.hm} ${c.hr} ${c.ik}`}
                    id="btnSubmitPayment"
                  >
                    <div className={`${c.oj}`}>
                      <svg
                        className={`${c.qr} ${c.ov} ${c.nq} disabled:hover:v2-text-gray-300`}
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
                    <span className="">Add new card</span>
                  </button>
                  <div
                    data-v-c7f314ba=""
                    className={`${c.rt} ${c.ok} ${c.ua} ${c.ue} ${c.bcy}`}
                  >
                    <a
                      data-v-c7f314ba=""
                      href="https://ivisatravel.com/account/payment-method"
                    >
                      <button
                        className={`${c.ha} ${c.hc} ${c.hi} ${c.ho} ${c.hr} ${c.ik}`}
                      >
                        <span className="">Cancel</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-32cc5755="" id="device-fingerprint"></div>
            <div
              data-v-32cc5755=""
              aria-modal="true"
              className="hs"
              role="dialog"
              style={{ display: "none" }}
            >
              <div
                data-v-32cc5755=""
                className={`${c["popup-inner"]} ${c["three-ds"]}`}
              >
                <main
                  data-v-32cc5755=""
                  id="challenge-modal"
                  className={`${c.pv}`}
                >
                  <div data-v-32cc5755="" id="challenge"></div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditPaymentMethod;
