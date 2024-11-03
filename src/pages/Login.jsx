import { Link } from "react-router-dom";

function closeAlertModal() {
  document.getElementById("alert-modal-v2").classList.add("bbh");
}

function toggleDebugInfo() {
  const debugContent = document.getElementById("local-error-debug-content");
  debugContent.classList.toggle("bbh");
}

function Login() {
  return (
    <>
      <main id="content" className="bew">
        <div className="sl sm rr iw byx zh qy">
          <div className="wu bhn bhu bbh bkb">
            <img
              data-src="https://d3o7lrr6ovj0yv.cloudfront.net/img/login-lady-airport.webp"
              alt="Login"
              className="bx entered loaded"
              data-ll-status="loaded"
              src="https://d3o7lrr6ovj0yv.cloudfront.net/img/login-lady-airport.webp"
            />
          </div>
          <div className="wv qn bia y bmy">
            <div className="ja">
              <h4 className="mf bpr jx">Welcome back </h4>
              <p className="nc jw">Check your order status or log in below </p>
            </div>
            <form method="POST" onSubmit="handleLogin(event)">
              <div className="bap bjt zd">
                <input
                  type="hidden"
                  name="_token"
                  value=""
                  autoComplete="off"
                />
                <label for="email_login_input" className="tn">
                  Order Number or Email
                </label>
                <input
                  id="email_login_input"
                  name="email"
                  type="text"
                  inputmode="email"
                  autoComplete="email"
                  autocapitalize="off"
                  spellcheck="false"
                  autofocus=""
                  className="bvr v2-small md:v2-medium baz bel"
                  placeholder="1234567 or you@email.com"
                  required=""
                />
              </div>
              <div id="ta" className="bbh yq bio yx zd">
                <label for="password_login_input" className="tn">
                  Password
                </label>
                <div className="bbc bel vc">
                  <input
                    id="password_login_input"
                    type="password"
                    name="password"
                    className="bvr v2-small md:v2-medium bel"
                  />
                  <div
                    onClick="togglePasswordVisibility()"
                    className="bbc bgr bgv bfv vb vq bcn lm ls"
                  >
                    <span id="show_password">
                      <svg
                        className="jx bae bdo bbq"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        {/* Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)  */}
                        <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path>
                      </svg>
                    </span>
                    <span id="hide_password" className="bbh">
                      <svg
                        className="jx bae bdo bbq"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                      >
                        {/* Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)  */}
                        <path d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="bam zj bjq">
                  <a
                    id="tb"
                    href="https://ivisatravel.com/password/reset"
                    className="nn v2-link-blue"
                  >
                    Forgot Password{" "}
                  </a>
                </div>
                <div
                  id="magic_login_link"
                  onClick="requestMagicLoginEmail()"
                  className="nn v2-link-blue"
                >
                  Get a password free login link{" "}
                </div>
                <div className="baq">
                  <button
                    className="ts tt ua ue uj"
                    type="submit"
                    id="log_in_button"
                  >
                    Log in
                  </button>
                </div>
              </div>
              <div id="sy" className="zd biu">
                <button
                  className="ts tt ua ue uj"
                  type="submit"
                  id="continue_button"
                >
                  Continue
                </button>
              </div>
              <div id="td" className="bbh bx fu dy bbc bgp a zd">
                <div className="bey it">
                  <svg
                    className="jn bdo bbq"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    {/* Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) */}
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                  </svg>
                </div>
                <p id="tc" className="ml jx"></p>
              </div>
              <div id="sz" className="bbh bx fu fc bbc bgp a zd">
                <div className="bey it">
                  <svg
                    className="kg bdo bbq"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    {/* Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) */}
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                  </svg>
                </div>
                <p id="error_message" className="ml jx"></p>
              </div>
              <div className="ja ne">
                Don't have an account?
                <br className="rz" />
                <Link to="/register" className="nn v2-link-blue">
                  Sign up for free
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div
          id="alert-modal-v2"
          className="bbh va"
          style={{ zIndex: 10000 }}
          aria-labelledby="alert-modal"
          role="dialog"
          aria-modal="true"
        >
          <div className="va ve wl dw lo ls bbc bcv bgr bgv">
            <div className="bx fg fy bnq lm bel xu blt">
              <div className="xz yx bby bec bbc bey bgr bgv bv fc">
                <svg
                  className="kg bdu bbu"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  {/* Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) */}
                  <path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path>
                </svg>
              </div>
              <div className="ja zd">
                <h3 className="mb v2-text-gray-900" id="sw"></h3>
                <p className="jx mb" id="sv"></p>
                <p className="bbh tk iz baq" id="su"></p>
              </div>
              <button
                className="ts tt ua ue uj"
                data-handle="alert-modal-button"
                type="submit"
                id="sx"
                onClick="closeAlertModal()"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;
