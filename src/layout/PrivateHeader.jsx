import { Link } from "react-router-dom";
import c from "../pages/external-two.module.css";
const isLoggedIn = false;
function PrivateHeader() {
  return (
    <>
      <header className={`${c.zq} ${c.bki} ${c.rt} ${c.beh} ${c.ju} ${c.bbc}`}>
        <div className={`${c.fu} ${c.ok} ${c.ua} ${c.uf}`}>
          <div className={`${c.ok} ${c.ua} ${c.uo}`}>
            <Link to="/">
              <img
                src="https://d3o7lrr6ovj0yv.cloudfront.net/images/logo.svg"
                width="150"
                height="32"
                className={`${c.sy} ${c.lw} ${c.bu} ${c.bsr}`}
                alt="iVisa"
              />
            </Link>
            <div className={`${c.op} ${c.ua} ${c.bmh}`}>
              <div className={`${c["feature-logo"]} ${c.ok} ${c.tt}`}></div>
            </div>
          </div>
          <nav className={`${c.op} ${c.btq} ${c.ua} ${c.uo}`}>
            <button
              className={`${c.bhw} ${c["v2-link-blue"]} ${c.op}`}
              id="save-and-exit"
            >
              Save &amp; Exit
            </button>

            <div
              className={`${c.gq} ${c.op} ${c.beh} ${c.bhb} ${c.oj} ${c.te} ${c.bmh} ${c.ua}`}
              onClick={() => window.mount_currency_selector()}
            >
              <span className={`${c.vx} ${c.bdr}`} id="langHeader">
                en
              </span>
              <span className={`${c.op}`}>|</span>
              <div
                className={`${c.oi} ${c.yv} ${c.ov} ${c.qf} ${c.lg} ${c.hidden}`}
              ></div>
              <span className={`${c.vx}`} id="currencyHeader">
                ₦ NGN
              </span>
            </div>
            <div
              className={`${c.oi} ${c.ik} ${c.te}`}
              aria-controls="visaLinkMenuMobile-dropdown"
              aria-expanded="false"
              id="visaLinkMenuMobile"
              data-menu-js=""
            >
              <div className={`${c.rt} ${c.ok} ${c.uf} ${c.ua}`}>
                <span className={`${c.bhw}`}>Get my visa</span>
                <svg
                  className={`${c.nf} ${c.oj} ${c.qp} ${c.os}`}
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  {/* Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) */}
                  <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                </svg>
              </div>

              <div
                id="visaLinkMenuMobile-dropdown"
                className={`${c.op} ${c.ij} ${c.iy} ${c.jn}`}
                tabIndex="-1"
              >
                <ul
                  className={`${c.bhm} ${c.zq} ${c.wh} ${c.bbh} ${c.bff} ${c.ru}`}
                >
                  <li className={`${c.ok} ${c.ua} ${c.biw}`}>
                    <a
                      href="https://ivisatravel.com/colombia/p/check-mig-form"
                      className={`${c.bar} ${c.bbc} ${c.rt}`}
                    >
                      <img
                        className={`${c.oj} ${c.ov} ${c.qr} ${c.nq}`}
                        data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/circle-flags/CO.png"
                        alt="Check Mig Colombia"
                      />
                      Check Mig Colombia
                    </a>
                  </li>
                  <li className={`${c.ok} ${c.ua} ${c.biw}`}>
                    <a
                      href="https://ivisatravel.com/india/p/tourist-e-visa"
                      className={`${c.bar} ${c.bbc} ${c.rt}`}
                    >
                      <img
                        className={`${c.oj} ${c.ov} ${c.qr} ${c.nq}`}
                        data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/circle-flags/IN.png"
                        alt="India evisa"
                      />
                      India eVisa
                    </a>
                  </li>
                  <li className={`${c.ok} ${c.ua} ${c.biw}`}>
                    <a
                      href="https://ivisatravel.com/usa/p/esta"
                      className={`${c.bar} ${c.bbc} ${c.rt}`}
                    >
                      <img
                        className={`${c.oj} ${c.ov} ${c.qr} ${c.nq}`}
                        data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/circle-flags/US.png"
                        alt="US Esta"
                      />
                      US Esta
                    </a>
                  </li>
                  <li className={`${c.ok} ${c.ua} ${c.biw}`}>
                    <a
                      href="https://ivisatravel.com/singapore/p/sg-arrival-card-health-declaration"
                      className={`${c.bar} ${c.bbc} ${c.rt}`}
                    >
                      <img
                        className={`${c.oj} ${c.ov} ${c.qr} ${c.nq}`}
                        data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/circle-flags/SG.png"
                        alt="Singapore Arrival Card"
                      />
                      Singapore Arrival Card
                    </a>
                  </li>{" "}
                  <li className={`${c.ok} ${c.ua} ${c.biw}`}>
                    <a
                      href="https://ivisatravel.com/canada/p/eta"
                      className={`${c.bar} ${c.bbc} ${c.rt}`}
                    >
                      <img
                        className={`${c.oj} ${c.ov} ${c.qr} ${c.nq}`}
                        data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/circle-flags/CA.png"
                        alt="Canada eVisa"
                      />
                      Canada eVisa
                    </a>
                  </li>{" "}
                  <li className={`${c.ok} ${c.ua} ${c.biw}`}>
                    <a
                      href="https://ivisatravel.com/australia/p/eta"
                      className={`${c.bar} ${c.bbc} ${c.rt}`}
                    >
                      <img
                        className={`${c.oj} ${c.ov} ${c.qr} ${c.nq}`}
                        data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/circle-flags/AU.png"
                        alt="Australia ETA"
                      />
                      Australia ETA
                    </a>
                  </li>
                  <li className={`${c.ok} ${c.ua} ${c.biw}`}>
                    <a
                      href="https://ivisatravel.com/brazil/p/tourist-e-visa"
                      className={`${c.bar} ${c.bbc} ${c.rt}`}
                    >
                      <img
                        className={`${c.oj} ${c.ov} ${c.qr} ${c.nq}`}
                        data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/circle-flags/BR.png"
                        alt="Brazil eVisa"
                      />
                      Brazil eVisa
                    </a>
                  </li>{" "}
                  <li className={`${c.ok} ${c.ua} ${c.biw}`}>
                    <a
                      href="https://ivisatravel.com/malaysia/p/tourist-e-visa"
                      className={`${c.bar} ${c.bbc} ${c.rt}`}
                    >
                      <img
                        className={`${c.oj} ${c.ov} ${c.qr} ${c.nq}`}
                        data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/circle-flags/MY.png"
                        alt="Malaysia eVisa"
                      />
                      Malaysia eVisa
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {isLoggedIn ? (
              <>
                <Link to="/account" className={`${c.bhw}`}>
                  My account
                </Link>
                <form method="post" action="https://ivisatravel.com/logout">
                  <button
                    className={`${c.ha} ${c.hf} ${c.hk} ${c.hn} ${c.hr}`}
                    type="submit"
                  >
                    Logout
                  </button>
                </form>
              </>
            ) : (
              <Link to={"login"} className="ts tu uc ug uj" type="submit">
                Login
              </Link>
            )}
          </nav>

          <div className={`${c.btt}`}>
            <span
              id="headerMobileNav"
              aria-controls="headerMobileNav-drawer"
              aria-expanded="false"
              data-drawer-js=""
            >
              <svg
                className={`${c.beh} ${c.btt} ${c.te} ${c.rc} ${c.pc}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>

            <section
              className={`${c.iy} ${c.fv} ${c.rt} sd jf bbo bar ${c.zq} ${c.vt} ${c.kr}`}
              style={{ transform: "translate( 100%, 0)" }}
              data-direction="right"
              tabIndex="-1"
              id="headerMobileNav-drawer"
            >
              <div
                id="headerMobileNav-close"
                className={`${c.ij} ${c.te} ${c.jc} ${c.jl}`}
              >
                <svg
                  className={`${c.qx} ${c.oz}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>

              <Link
                to="/account"
                className={`${c.bhw} ${c["v2-w-block"]} ${c.ll}`}
              >
                My account
              </Link>
              <div
                className={`${c.rt} ${c.ik} ${c.te}`}
                aria-controls="-dropdown"
                aria-expanded="false"
                id=""
                data-menu-js=""
              >
                <div className={`${c.ok} ${c.uc} ${c.ua} ${c.ll}`}>
                  <span className={`${c.bhw}`}>Get my visa</span>
                  <svg
                    className={`${c.mw} ${c.oj} ${c.qp} ${c.os}`}
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    {/* Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)  */}
                    <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                  </svg>
                </div>

                <div id="-dropdown" className={`${c.op} ${c.sc}`} tabIndex="-1">
                  <ul className={`${c.bhm} ${c.zq} ${c.wh}`}>
                    <li className={`${c.ok} ${c.ua} ${c.biw}`}>
                      <a
                        href="https://ivisatravel.com/colombia/p/check-mig-form"
                        className={`${c.bar} ${c.bbc} ${c.rt}`}
                      >
                        <img
                          className={`${c.oj} ${c.ov} ${c.qr} ${c.nq}`}
                          data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/circle-flags/CO.png"
                          alt="Check Mig Colombia"
                        />
                        Check Mig Colombia
                      </a>
                    </li>
                    <li className={`${c.ok} ${c.ua} ${c.biw}`}>
                      <a
                        href="https://ivisatravel.com/india/p/tourist-e-visa"
                        className={`${c.bar} ${c.bbc} ${c.rt}`}
                      >
                        <img
                          className={`${c.oj} ${c.ov} ${c.qr} ${c.nq}`}
                          data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/circle-flags/IN.png"
                          alt="India evisa"
                        />
                        India eVisa
                      </a>
                    </li>{" "}
                    <li className={`${c.ok} ${c.ua} ${c.biw}`}>
                      <a
                        href="https://ivisatravel.com/usa/p/esta"
                        className={`${c.bar} ${c.bbc} ${c.rt}`}
                      >
                        <img
                          className={`${c.oj} ${c.ov} ${c.qr} ${c.nq}`}
                          data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/circle-flags/US.png"
                          alt="US Esta"
                        />
                        US Esta
                      </a>
                    </li>
                    <li className={`${c.ok} ${c.ua} ${c.biw}`}>
                      <a
                        href="https://ivisatravel.com/singapore/p/sg-arrival-card-health-declaration"
                        className={`${c.bar} ${c.bbc} ${c.rt}`}
                      >
                        <img
                          className={`${c.oj} ${c.ov} ${c.qr} ${c.nq}`}
                          data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/circle-flags/SG.png"
                          alt="Singapore Arrival Card"
                        />
                        Singapore Arrival Card
                      </a>
                    </li>
                    <li className={`${c.ok} ${c.ua} ${c.biw}`}>
                      <a
                        href="https://ivisatravel.com/canada/p/eta"
                        className={`${c.bar} ${c.bbc} ${c.rt}`}
                      >
                        <img
                          className={`${c.oj} ${c.ov} ${c.qr} ${c.nq}`}
                          data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/circle-flags/CA.png"
                          alt="Canada eVisa"
                        />
                        Canada eVisa
                      </a>
                    </li>
                    <li className={`${c.ok} ${c.ua} ${c.biw}`}>
                      <a
                        href="https://ivisatravel.com/australia/p/eta"
                        className={`${c.bar} ${c.bbc} ${c.rt}`}
                      >
                        <img
                          className={`${c.oj} ${c.ov} ${c.qr} ${c.nq}`}
                          data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/circle-flags/AU.png"
                          alt="Australia ETA"
                        />
                        Australia ETA
                      </a>
                    </li>
                    <li className={`${c.ok} ${c.ua} ${c.biw}`}>
                      <a
                        href="https://ivisatravel.com/brazil/p/tourist-e-visa"
                        className={`${c.bar} ${c.bbc} ${c.rt}`}
                      >
                        <img
                          className={`${c.oj} ${c.ov} ${c.qr} ${c.nq}`}
                          data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/circle-flags/BR.png"
                          alt="Brazil eVisa"
                        />
                        Brazil eVisa
                      </a>
                    </li>
                    <li className={`${c.ok} ${c.ua} ${c.biw}`}>
                      <a
                        href="https://ivisatravel.com/malaysia/p/tourist-e-visa"
                        className={`${c.bar} ${c.bbc} ${c.rt}`}
                      >
                        <img
                          className={`${c.oj} ${c.ov} ${c.qr} ${c.nq}`}
                          data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/circle-flags/MY.png"
                          alt="Malaysia eVisa"
                        />
                        Malaysia eVisa
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <span
                id="mobileLangSelector"
                aria-controls="mobileLangSelector-drawer"
                aria-expanded="false"
                data-drawer-js=""
              >
                <div
                  className={`${c.bbc} ${c.rt} ${c.ok} ${c.ua} ${c.te} ${c.ut}`}
                >
                  <svg
                    className={`${c.qx} ${c.oz}`}
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Vector"
                      d="M15.993 2.00006C12.7559 2.00168 9.61939 3.12502 7.1173 5.1789C4.61521 7.23278 2.90218 10.0903 2.26978 13.265C1.63738 16.4397 2.12468 19.7355 3.64876 22.5914C5.17283 25.4473 7.63948 27.6868 10.6289 28.9287C13.6183 30.1706 16.9457 30.3382 20.0447 29.403C23.1438 28.4677 25.823 26.4875 27.6264 23.7992C29.4297 21.1109 30.2457 17.8808 29.9356 14.6586C29.6254 11.4364 28.2082 8.4212 25.9251 6.12628C24.6262 4.81392 23.0791 3.7732 21.3739 3.06479C19.6687 2.35638 17.8395 1.99444 15.993 2.00006ZM18.6345 8.77827C17.7619 8.92771 16.8783 9.00307 15.993 9.00355C15.1078 9.00307 14.2241 8.92771 13.3515 8.77827C14.0916 5.98155 15.1666 4.33456 15.993 4.33456C16.8194 4.33456 17.8945 5.98155 18.6345 8.77827ZM19.7002 4.9427C21.0214 5.38177 22.2524 6.05599 23.3338 6.93285C22.588 7.46489 21.7695 7.88707 20.9036 8.18648C20.6232 7.06418 20.2196 5.97632 19.7002 4.9427ZM12.5135 14.8398C12.5518 13.5758 12.6688 12.3155 12.8636 11.0661C13.8969 11.2477 14.944 11.3387 15.993 11.338C17.0401 11.3383 18.0853 11.2473 19.1166 11.0661C19.3114 12.3155 19.4284 13.5758 19.4668 14.8398H12.5135ZM19.4726 17.1743C19.4342 18.4382 19.3173 19.6986 19.1224 20.948C17.0558 20.5854 14.9419 20.5854 12.8753 20.948C12.6766 19.6988 12.5557 18.4385 12.5135 17.1743H19.4726ZM11.0824 8.18648C10.2165 7.88707 9.39809 7.46489 8.6522 6.93285C9.73408 6.05806 10.965 5.38583 12.2858 4.94853C11.7668 5.98029 11.3632 7.06618 11.0824 8.18648ZM10.598 10.4895C10.3631 11.9288 10.2227 13.3821 10.1778 14.8398H4.37773C4.60107 12.5468 5.50467 10.373 6.97253 8.59735C8.06261 9.43279 9.28926 10.073 10.598 10.4895ZM10.1778 17.1743C10.2227 18.632 10.3631 20.0852 10.598 21.5246C9.29202 21.9404 8.06781 22.5789 6.97953 23.4121C5.51403 21.6363 4.60925 19.4652 4.38007 17.1743H10.1778ZM11.0824 23.8276C11.3622 24.949 11.765 26.0361 12.2835 27.069C10.9688 26.6283 9.74346 25.9563 8.66504 25.0847C9.40683 24.5527 10.2208 24.1293 11.0824 23.8276ZM13.3515 23.244C15.0997 22.9436 16.8863 22.9436 18.6345 23.244C17.8945 26.0325 16.8194 27.6795 15.993 27.6795C15.1666 27.6795 14.0916 26.0325 13.3515 23.2358V23.244ZM20.9036 23.8276C21.7666 24.1278 22.5822 24.55 23.3257 25.0812C22.2473 25.9528 21.0219 26.6248 19.7072 27.0655C20.2238 26.0335 20.6251 24.9476 20.9036 23.8276ZM21.388 21.5293C21.6231 20.0884 21.7635 18.6336 21.8083 17.1743H27.606C27.3771 19.4651 26.4728 21.6362 25.0077 23.4121C23.919 22.5788 22.6944 21.9402 21.388 21.5246V21.5293ZM21.8083 14.8398C21.7633 13.3821 21.6229 11.9288 21.388 10.4895C22.6968 10.073 23.9234 9.43279 25.0135 8.59735C26.4814 10.373 27.385 12.5468 27.6083 14.8398H21.8083Z"
                      fill="currentColor"
                    ></path>
                  </svg>

                  <span>
                    English - <span className={`${c.bdr}`}>en</span>
                  </span>
                </div>
              </span>

              <section
                className={`${c.iy} ${c.fv} ${c.rt} ${c.sd} ${c.jf} ${c.bbo} ${c.bar} ${c.zq} ${c.vt} ${c.kr}`}
                style={{ transform: "translate( 100%, 0)" }}
                data-direction="right"
                tabIndex="-1"
                id="mobileLangSelector-drawer"
              >
                <div
                  id="mobileLangSelector-cl${c.os}e"
                  className={`${c.ij} ${c.te} ${c.jc} ${c.jl}`}
                >
                  <svg
                    className={`${c.qx} ${c.oz}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>

                <h4 className={`${c.bgp} ${c.md}`}>Select Your Language</h4>
                <ul className={`${c.pv} ${c.rt}`}>
                  <li className={`${c.yu}`}>
                    <Link
                      to="/account/settings"
                      className={`${c.bbc} ${c.ok} ${c.rt} ${c.ua}`}
                    >
                      <svg
                        className={`${c.nq} ${c.beh} ${c.qx} ${c.oz}`}
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          id="Vector"
                          d="M15.993 2.00006C12.7559 2.00168 9.61939 3.12502 7.1173 5.1789C4.61521 7.23278 2.90218 10.0903 2.26978 13.265C1.63738 16.4397 2.12468 19.7355 3.64876 22.5914C5.17283 25.4473 7.63948 27.6868 10.6289 28.9287C13.6183 30.1706 16.9457 30.3382 20.0447 29.403C23.1438 28.4677 25.823 26.4875 27.6264 23.7992C29.4297 21.1109 30.2457 17.8808 29.9356 14.6586C29.6254 11.4364 28.2082 8.4212 25.9251 6.12628C24.6262 4.81392 23.0791 3.7732 21.3739 3.06479C19.6687 2.35638 17.8395 1.99444 15.993 2.00006ZM18.6345 8.77827C17.7619 8.92771 16.8783 9.00307 15.993 9.00355C15.1078 9.00307 14.2241 8.92771 13.3515 8.77827C14.0916 5.98155 15.1666 4.33456 15.993 4.33456C16.8194 4.33456 17.8945 5.98155 18.6345 8.77827ZM19.7002 4.9427C21.0214 5.38177 22.2524 6.05599 23.3338 6.93285C22.588 7.46489 21.7695 7.88707 20.9036 8.18648C20.6232 7.06418 20.2196 5.97632 19.7002 4.9427ZM12.5135 14.8398C12.5518 13.5758 12.6688 12.3155 12.8636 11.0661C13.8969 11.2477 14.944 11.3387 15.993 11.338C17.0401 11.3383 18.0853 11.2473 19.1166 11.0661C19.3114 12.3155 19.4284 13.5758 19.4668 14.8398H12.5135ZM19.4726 17.1743C19.4342 18.4382 19.3173 19.6986 19.1224 20.948C17.0558 20.5854 14.9419 20.5854 12.8753 20.948C12.6766 19.6988 12.5557 18.4385 12.5135 17.1743H19.4726ZM11.0824 8.18648C10.2165 7.88707 9.39809 7.46489 8.6522 6.93285C9.73408 6.05806 10.965 5.38583 12.2858 4.94853C11.7668 5.98029 11.3632 7.06618 11.0824 8.18648ZM10.598 10.4895C10.3631 11.9288 10.2227 13.3821 10.1778 14.8398H4.37773C4.60107 12.5468 5.50467 10.373 6.97253 8.59735C8.06261 9.43279 9.28926 10.073 10.598 10.4895ZM10.1778 17.1743C10.2227 18.632 10.3631 20.0852 10.598 21.5246C9.29202 21.9404 8.06781 22.5789 6.97953 23.4121C5.51403 21.6363 4.60925 19.4652 4.38007 17.1743H10.1778ZM11.0824 23.8276C11.3622 24.949 11.765 26.0361 12.2835 27.069C10.9688 26.6283 9.74346 25.9563 8.66504 25.0847C9.40683 24.5527 10.2208 24.1293 11.0824 23.8276ZM13.3515 23.244C15.0997 22.9436 16.8863 22.9436 18.6345 23.244C17.8945 26.0325 16.8194 27.6795 15.993 27.6795C15.1666 27.6795 14.0916 26.0325 13.3515 23.2358V23.244ZM20.9036 23.8276C21.7666 24.1278 22.5822 24.55 23.3257 25.0812C22.2473 25.9528 21.0219 26.6248 19.7072 27.0655C20.2238 26.0335 20.6251 24.9476 20.9036 23.8276ZM21.388 21.5293C21.6231 20.0884 21.7635 18.6336 21.8083 17.1743H27.606C27.3771 19.4651 26.4728 21.6362 25.0077 23.4121C23.919 22.5788 22.6944 21.9402 21.388 21.5246V21.5293ZM21.8083 14.8398C21.7633 13.3821 21.6229 11.9288 21.388 10.4895C22.6968 10.073 23.9234 9.43279 25.0135 8.59735C26.4814 10.373 27.385 12.5468 27.6083 14.8398H21.8083Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      English
                    </Link>
                  </li>
                  <li className={`${c.yu}`}>
                    <a
                      href="https://ivisaviajes.com/account/settings"
                      className={`${c.bbc} ${c.ok} ${c.rt} ${c.ua}`}
                    >
                      <svg
                        className={`${c.nq} ${c.beh} ${c.qx} ${c.oz}`}
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          id="Vector"
                          d="M15.993 2.00006C12.7559 2.00168 9.61939 3.12502 7.1173 5.1789C4.61521 7.23278 2.90218 10.0903 2.26978 13.265C1.63738 16.4397 2.12468 19.7355 3.64876 22.5914C5.17283 25.4473 7.63948 27.6868 10.6289 28.9287C13.6183 30.1706 16.9457 30.3382 20.0447 29.403C23.1438 28.4677 25.823 26.4875 27.6264 23.7992C29.4297 21.1109 30.2457 17.8808 29.9356 14.6586C29.6254 11.4364 28.2082 8.4212 25.9251 6.12628C24.6262 4.81392 23.0791 3.7732 21.3739 3.06479C19.6687 2.35638 17.8395 1.99444 15.993 2.00006ZM18.6345 8.77827C17.7619 8.92771 16.8783 9.00307 15.993 9.00355C15.1078 9.00307 14.2241 8.92771 13.3515 8.77827C14.0916 5.98155 15.1666 4.33456 15.993 4.33456C16.8194 4.33456 17.8945 5.98155 18.6345 8.77827ZM19.7002 4.9427C21.0214 5.38177 22.2524 6.05599 23.3338 6.93285C22.588 7.46489 21.7695 7.88707 20.9036 8.18648C20.6232 7.06418 20.2196 5.97632 19.7002 4.9427ZM12.5135 14.8398C12.5518 13.5758 12.6688 12.3155 12.8636 11.0661C13.8969 11.2477 14.944 11.3387 15.993 11.338C17.0401 11.3383 18.0853 11.2473 19.1166 11.0661C19.3114 12.3155 19.4284 13.5758 19.4668 14.8398H12.5135ZM19.4726 17.1743C19.4342 18.4382 19.3173 19.6986 19.1224 20.948C17.0558 20.5854 14.9419 20.5854 12.8753 20.948C12.6766 19.6988 12.5557 18.4385 12.5135 17.1743H19.4726ZM11.0824 8.18648C10.2165 7.88707 9.39809 7.46489 8.6522 6.93285C9.73408 6.05806 10.965 5.38583 12.2858 4.94853C11.7668 5.98029 11.3632 7.06618 11.0824 8.18648ZM10.598 10.4895C10.3631 11.9288 10.2227 13.3821 10.1778 14.8398H4.37773C4.60107 12.5468 5.50467 10.373 6.97253 8.59735C8.06261 9.43279 9.28926 10.073 10.598 10.4895ZM10.1778 17.1743C10.2227 18.632 10.3631 20.0852 10.598 21.5246C9.29202 21.9404 8.06781 22.5789 6.97953 23.4121C5.51403 21.6363 4.60925 19.4652 4.38007 17.1743H10.1778ZM11.0824 23.8276C11.3622 24.949 11.765 26.0361 12.2835 27.069C10.9688 26.6283 9.74346 25.9563 8.66504 25.0847C9.40683 24.5527 10.2208 24.1293 11.0824 23.8276ZM13.3515 23.244C15.0997 22.9436 16.8863 22.9436 18.6345 23.244C17.8945 26.0325 16.8194 27.6795 15.993 27.6795C15.1666 27.6795 14.0916 26.0325 13.3515 23.2358V23.244ZM20.9036 23.8276C21.7666 24.1278 22.5822 24.55 23.3257 25.0812C22.2473 25.9528 21.0219 26.6248 19.7072 27.0655C20.2238 26.0335 20.6251 24.9476 20.9036 23.8276ZM21.388 21.5293C21.6231 20.0884 21.7635 18.6336 21.8083 17.1743H27.606C27.3771 19.4651 26.4728 21.6362 25.0077 23.4121C23.919 22.5788 22.6944 21.9402 21.388 21.5246V21.5293ZM21.8083 14.8398C21.7633 13.3821 21.6229 11.9288 21.388 10.4895C22.6968 10.073 23.9234 9.43279 25.0135 8.59735C26.4814 10.373 27.385 12.5468 27.6083 14.8398H21.8083Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      Español
                    </a>
                  </li>
                </ul>
              </section>

              <span
                id="mobileCurrencySelector"
                aria-controls="mobileCurrencySelector-drawer"
                aria-expanded="false"
                data-drawer-js=""
              >
                <div
                  className={`${c.bbc} ${c.rt} ${c.ok} ${c.ua} ${c.te} ${c.ut}`}
                >
                  <svg
                    className={`${c.qx} ${c.oz}`}
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.6667 14.6667H13.3333C11.8667 14.6667 10.6667 13.4667 10.6667 12C10.6667 10.5333 11.8667 9.33332 13.3333 9.33332H20C20.8 9.33332 21.3333 9.86666 21.3333 10.6667C21.3333 11.4667 21.8667 12 22.6667 12C23.4667 12 24 11.4667 24 10.6667C24 8.39999 22.2667 6.66666 20 6.66666H17.3333V3.99999C17.3333 3.19999 16.8 2.66666 16 2.66666C15.2 2.66666 14.6667 3.19999 14.6667 3.99999V6.66666H13.3333C10.4 6.66666 8 9.06666 8 12C8 14.9333 10.4 17.3333 13.3333 17.3333H18.6667C20.1333 17.3333 21.3333 18.5333 21.3333 20C21.3333 21.4667 20.1333 22.6667 18.6667 22.6667H12C11.2 22.6667 10.6667 22.1333 10.6667 21.3333C10.6667 20.5333 10.1333 20 9.33333 20C8.53333 20 8 20.5333 8 21.3333C8 23.6 9.73333 25.3333 12 25.3333H14.6667V28C14.6667 28.8 15.2 29.3333 16 29.3333C16.8 29.3333 17.3333 28.8 17.3333 28V25.3333H18.6667C21.6 25.3333 24 22.9333 24 20C24 17.0667 21.6 14.6667 18.6667 14.6667Z"
                      fill="currentColor"
                    ></path>
                  </svg>

                  <span id="selectedCurrency">Nigerian Naira</span>
                </div>
              </span>

              <section
                className={`${c.iy} ${c.fv} ${c.rt} ${c.sd} ${c.jf} ${c.bbo} ${c.bar} ${c.zq} ${c.vt} ${c.kr}`}
                style={{ transform: "translate( 100%, 0)" }}
                data-direction="right"
                tabIndex="-1"
                id="mobileCurrencySelector-drawer"
              >
                <div
                  id="mobileCurrencySelector-close"
                  className={`${c.ij} ${c.te} ${c.jc} ${c.jl}`}
                >
                  <svg
                    className={`${c.qx} ${c.oz}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>

                <h4 className={`${c.bgp} ${c.md}`}>Select Your Currency</h4>
                <ul className={`${c.rt} ${c.te}`}>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("AED")}
                  >
                    AED United Arab Emirates Dirham
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("AFN")}
                  >
                    AFN Afghan Afghani
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("ALL")}
                  >
                    ALL Albanian Lek
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("AMD")}
                  >
                    AMD Armenian Dram
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("ANG")}
                  >
                    ANG Netherlands Antillean Guilder
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("AOA")}
                  >
                    AOA Angolan Kwanza
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("ARS")}
                  >
                    ARS Argentine Peso
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("AUD")}
                  >
                    AUD Australian Dollar
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("AWG")}
                  >
                    AWG Aruban Florin
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("AZN")}
                  >
                    AZN Azerbaijani Manat
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("BAM")}
                  >
                    BAM Bosnia-Herzegovina Convertible Mark
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("BBD")}
                  >
                    BBD Barbadian Dollar
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("BDT")}
                  >
                    BDT Bangladeshi Taka
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("BGN")}
                  >
                    BGN Bulgarin Lv
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("BIF")}
                  >
                    BIF Burundian Franc
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("BMD")}
                  >
                    BMD Bermudan Dollar
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("BND")}
                  >
                    BND Brunei Dollar
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("BOB")}
                  >
                    BOB Bolivian Boliviano
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("BRL")}
                  >
                    BRL Brazilian Real
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("BSD")}
                  >
                    BSD Bahamian Dollar
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("BWP")}
                  >
                    BWP Botswanan Pula
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("BZD")}
                  >
                    BZD Belize Dollar
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("CAD")}
                  >
                    CAD Canadian Dollar
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("CDF")}
                  >
                    CDF Congolese Franc
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("CHF")}
                  >
                    CHF Swiss Franc
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("CLP")}
                  >
                    CLP Chilean Peso
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("CNY")}
                  >
                    CNY Chinese Yuan
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("C${c.OP}")}
                  >
                    COP Colombian Peso
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("CRC")}
                  >
                    CRC Costa Rican Colón
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("CVE")}
                  >
                    CVE Cape Verdean Escudo
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("CZK")}
                  >
                    CZK Czech Republic Koruna
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("DJF")}
                  >
                    DJF Djiboutian Franc
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("DKK")}
                  >
                    DKK Danish Krone
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("D${c.OP}")}
                  >
                    DOP Dominican Peso
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("DZD")}
                  >
                    DZD Algerian Dnar
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("EGP")}
                  >
                    EGP Egyptian Pound
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("ETB")}
                  >
                    ETB Ethiopian Birr
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("EUR")}
                  >
                    EUR Euro
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("FJD")}
                  >
                    FJD Fijian Dollar
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("FKP")}
                  >
                    FKP Falkland Islands Pound
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("GBP")}
                  >
                    GBP British Pound Sterling
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("GEL")}
                  >
                    GEL Georgian Lari
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("GIP")}
                  >
                    GIP Gibraltar Pound
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("GMD")}
                  >
                    GMD Gambian Dalasi
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("G${c.NF}")}
                  >
                    GNF Guinean Franc
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("GTQ")}
                  >
                    GTQ Guatemalan Quetzal
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("GYD")}
                  >
                    GYD Guyanaese Dollar
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("HKD")}
                  >
                    HKD Hong Kong Dollar
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("HNL")}
                  >
                    HNL Honduran Lempira
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("HTG")}
                  >
                    HTG Haitian Gourde
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("H${c.UF}")}
                  >
                    HUF Hungarian Forint
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("IDR")}
                  >
                    IDR Indonesian Rupiah
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("ILS")}
                  >
                    ILS Israeli New Sheqel
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("INR")}
                  >
                    INR Indian Rupee
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("ISK")}
                  >
                    ISK Icelandic Króna
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("JMD")}
                  >
                    JMD Jamaican Dollar
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("JPY")}
                  >
                    JPY Japanese Yen
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("KES")}
                  >
                    KES Kenyan Shilling
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("KGS")}
                  >
                    KGS Kyrgystani Som
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("KHR")}
                  >
                    KHR Cambodian Riel
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("KMF")}
                  >
                    KMF Comorian Franc
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("KRW")}
                  >
                    KRW South Korean Won
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("KYD")}
                  >
                    KYD Cayman Islands Dollar
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("KZT")}
                  >
                    KZT Kazakhstani Tenge
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("LAK")}
                  >
                    LAK Laotian Kip
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("LBP")}
                  >
                    LBP Lebanese Pound
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("LKR")}
                  >
                    LKR Sri Lankan Rupee
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("LRD")}
                  >
                    LRD Liberian Dollar
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("LSL")}
                  >
                    LSL Lesotho Loti
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("MAD")}
                  >
                    MAD Moroccan Dirham
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("MDL")}
                  >
                    MDL Moldovan Leu
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("MGA")}
                  >
                    MGA Malagasy Ariary
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("MKD")}
                  >
                    MKD Macedonian Denar
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("MNT")}
                  >
                    MNT Mongolian Tugrik
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("M${c.OP}")}
                  >
                    MOP Macanese Pataca
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("MUR")}
                  >
                    MUR Mauritian Rupee
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("MVR")}
                  >
                    MVR Maldivian Rufiyaa
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("MWK")}
                  >
                    MWK Malawian Kwacha
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("MXN")}
                  >
                    MXN Mexican Peso
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("MYR")}
                  >
                    MYR Malaysian Ringgit
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("MZN")}
                  >
                    MZN Mozambican Metical
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("NAD")}
                  >
                    NAD Namibian Dollar
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("NGN")}
                  >
                    NGN Nigerian Naira
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("NIO")}
                  >
                    NIO Nicaraguan Córdoba
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("N${c.OK}")}
                  >
                    NOK Norwegian Krone
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("NPR")}
                  >
                    NPR Nepalese Rupee
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("NZD")}
                  >
                    NZD New Zealand Dollar
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("OMR")}
                  >
                    OMR Omani Rial
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("PAB")}
                  >
                    PAB Panamanian Balboa
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("PEN")}
                  >
                    PEN Peruvian Nuevo Sol
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("PGK")}
                  >
                    PGK Papua New Guinean Kina
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("PHP")}
                  >
                    PHP Philippine Peso
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("PKR")}
                  >
                    PKR Pakistani Rupee
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("PLN")}
                  >
                    PLN Polish Zloty
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("PYG")}
                  >
                    PYG Paraguayan Guarani
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("QAR")}
                  >
                    QAR Qatari Rial
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("RON")}
                  >
                    RON Romanian Leu
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("RSD")}
                  >
                    RSD Serbian Dinar
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("${c.RU}B")}
                  >
                    RUB Russian Ruble
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("RWF")}
                  >
                    RWF Rwandan Franc
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("SAR")}
                  >
                    SAR Saudi Riyal
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("SBD")}
                  >
                    SBD Solomon Islands Dollar
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("SCR")}
                  >
                    SCR Seychellois Rupee
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("SEK")}
                  >
                    SEK Swedish Krona
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("SGD")}
                  >
                    SGD Singapore Dollar
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("SHP")}
                  >
                    SHP Saint Helena Pound
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("SLL")}
                  >
                    SLL Sierra Leonean Leone
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("S${c.OS}")}
                  >
                    SOS Somali Shilling
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("SRD")}
                  >
                    SRD Surinamese Dollar
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("SVC")}
                  >
                    SVC Salvadoran Colón
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("SZL")}
                  >
                    SZL Swazi Lilangeni
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("THB")}
                  >
                    THB Thai Baht
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("TJS")}
                  >
                    TJS Tajikistani Somoni
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("T${c.OP}")}
                  >
                    TOP Tongan Pa anga
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("TRY")}
                  >
                    TRY Turkish Lira
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("TTD")}
                  >
                    TTD Trinidad and Tobago Dollar
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("TWD")}
                  >
                    TWD New Taiwan Dollar
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("TZS")}
                  >
                    TZS Tanzanian Shilling
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("${c.UA}H")}
                  >
                    UAH Ukrainian Hryvnia
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("UGX")}
                  >
                    UGX Ugandan Shilling
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("USD")}
                  >
                    USD United States Dollar
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("UYU")}
                  >
                    UYU Uruguayan Peso
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("UZS")}
                  >
                    UZS Uzbekistan Som
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("VND")}
                  >
                    VND Vietnamese Dong
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("VUV")}
                  >
                    VUV Vanuatu Vatu
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("WST")}
                  >
                    WST Samoan Tala
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("XAF")}
                  >
                    XAF CFA Franc BEAC
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("XCD")}
                  >
                    XCD East Caribbean Dollar
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("XOF")}
                  >
                    XOF CFA Franc BCEAO
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("XPF")}
                  >
                    XPF CFP Franc
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("YER")}
                  >
                    YER Yemeni Rial
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("ZAR")}
                  >
                    ZAR South African Rand
                  </li>
                  <li
                    className={`${c.bbc} ${c.bar}`}
                    onClick={() => saveNewCurrency("ZMW")}
                  >
                    ZMW Zambian Kwacha
                  </li>
                </ul>
              </section>

              <div className={`${c.ob} ${c.rt}`}>
                <form method="post" action="https://ivisatravel.com/logout">
                  <button
                    className={`${c.ha} ${c.hc} ${c.hi} ${c.hn} ${c.hr}`}
                    type="submit"
                  >
                    Logout
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </header>
    </>
  );
}

export default PrivateHeader;
