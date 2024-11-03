// import "./reg.css";
function closeAlertModal() {
  document.getElementById("alert-modal-v2").classNameList.add("op");
}

function toggleDebugInfo() {
  const debugContent = document.getElementById("local-error-debug-content");
  debugContent.classList.toggle("op");
}

function Register() {
  return (
    <>
      <main id="content" className="bew">
        <div className="sl sm rr iw byx zh qy">
          <div className="wu bhn bhu bbh bkb">
            <picture>
              <source
                srcset="https://d3o7lrr6ovj0yv.cloudfront.net/img/v2/register-couple-lg.webp"
                media="(min-width: 1536px)"
              />
              <source
                srcset="https://d3o7lrr6ovj0yv.cloudfront.net/img/v2/register-couple-md.webp"
                media="(min-width: 1200px)"
              />
              <img
                src="https://d3o7lrr6ovj0yv.cloudfront.net/img/srcset_blank.webp"
                alt="happy travelers"
              />
            </picture>
          </div>
          <div className="wv qn bia y bmy">
            <div className="ja">
              <h4 className="mf bpr jx">Register</h4>
            </div>

            <form
              method="POST"
              action="https://ivisatravel.com/register"
              aria-label="Register"
            >
              <div className="bap bjt zd">
                <input
                  type="hidden"
                  name="_token"
                  value="7afb8486c02adeb6b4cda9cad1070ea2b62b6e87"
                  autoComplete="off"
                />
              </div>
              <div className="mf bsf">
                <label for="first_name" className="tn">
                  First Name
                </label>

                <div>
                  <input
                    id="first_name"
                    type="text"
                    className="bvr v2-small md:v2-medium baz bel"
                    name="first_name"
                    value=""
                    required=""
                    autofocus=""
                  />
                </div>
              </div>

              <div className="mf bsf">
                <label for="last_name" className="tn">
                  Last Name
                </label>

                <div>
                  <input
                    id="last_name"
                    type="text"
                    className=" bvr v2-small md:v2-medium baz bel"
                    name="last_name"
                    value=""
                    required=""
                  />
                </div>
              </div>

              <div className="mf bsf">
                <label for="email" className="tn">
                  E-Mail Address
                </label>

                <div>
                  <input
                    id="email"
                    type="email"
                    className=" bvr v2-small md:v2-medium baz bel"
                    name="email"
                    value=""
                    required=""
                  />
                </div>
              </div>

              <div className="mf bsf">
                <label for="password" className="tn">
                  Password
                </label>

                <div>
                  <input
                    id="password"
                    type="password"
                    className=" bvr v2-small md:v2-medium baz bel"
                    name="password"
                    required=""
                  />
                </div>
              </div>

              <div className="mf bsf">
                <label for="password-confirm" className="tn">
                  Confirm Password
                </label>

                <div>
                  <input
                    id="password-confirm"
                    type="password"
                    className="bvr v2-small md:v2-medium baz bel"
                    name="password_confirmation"
                    required=""
                  />
                </div>
              </div>

              {/* <div className="mf bsf">
                <div
                  className="recaptcha-container g-recaptcha"
                  id="g-recaptcha"
                  data-theme="light"
                  data-sitekey="6Lep8gwTAAAAAJO690LS1Yy7ZyLW4OMEQW2w5UVr"
                >
                  <div>
                    <iframe
                      src="https://www.google.com/recaptcha/api/fallback?k=6Lep8gwTAAAAAJO690LS1Yy7ZyLW4OMEQW2w5UVr&amp;hl=en&amp;v=EGbODne6buzpTnWrrBprcfAY&amp;t=41898"
                      frameborder="0"
                      scrolling="no"
                      style={{ width: "302px", height: "422px" }}
                    ></iframe>
                    <div
                      style={{
                        margin: "-4px 0px 0px",
                        padding: "0px",
                        background: "rgb(249, 249, 249)",
                        border: "1px solid rgb(193, 193, 193)",
                        borderRadius: "3px",
                        height: "60px",
                        width: "300px",
                      }}
                    >
                      <textarea
                        id="g-recaptcha-response"
                        name="g-recaptcha-response"
                        className="g-recaptcha-response"
                        style={{
                          width: "250px",
                          height: "40px",
                          border: "1px solid rgb(193, 193, 193)",
                          margin: "10px 25px",
                          padding: "0px",
                          resize: "none",
                          display: "block",
                        }}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="hp-travel-destination" aria-hidden="true">
                <label for="hp-travel-destination" tabIndex="-1">
                  Favorite Travel Destination
                </label>
                <input
                  id="hp-travel-destination"
                  type="text"
                  name="hp-travel-destination"
                  autoComplete="off"
                  tabIndex="-1"
                  className="qf"
                />

                <input
                  id="timezone"
                  type="text"
                  name="timezone"
                  autoComplete="off"
                  tabIndex="-1"
                  className="qf"
                />
              </div>

              <div className="baq">
                <button
                  className="ts tt ua ue uj"
                  data-handle="register-submit-btn"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* <div
          id="alert-modal-v2"
          className="op ii"
          style={{ zIndex: 10000 }}
          aria-labelledby="alert-modal"
          role="dialog"
          aria-modal="true"
        >
          <div className="ii im jt yg bfy bgc ok qd ua ue">
            <div className="wh zq bai di bfw rt lc bl">
              <div className="lh mf pg rk ok sh ua ue wf zm">
                <svg
                  className="beq rc pc"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
                  <path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path>
                </svg>
              </div>

              <div className="bdk ml">
                <h3 className="bgl v2-text-gray-900" id="ge"></h3>
                <p className="beh bgl" id="gd"></p>
                <p className="op gs bdj ny" id="gc"></p>
              </div>
              <button
                className="ha hb hi hm hr"
                data-handle="alert-modal-button"
                type="submit"
                id="gf"
                onClick="closeAlertModal()"
              >
                Close
              </button>
            </div>
          </div>
        </div> */}
      </main>
    </>
  );
}

export default Register;
