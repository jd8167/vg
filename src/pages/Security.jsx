import { Link } from "react-router-dom";
import c from "./external-two.module.css";

function Security() {
  return (
    <>
      <div
        id="h1-tag-container"
        className={`${c.fu} ${c.bgp} ${c.bqg} ${c.beh} ${c.bbv} ${c.bpr}`}
      >
        <span>Hi John</span>
      </div>
      <div className={`${c.fu} ${c.ft} ${c.mt} ${c.nu} ${c.btk}`}>
        <div className={`${c.kh} ${c.mc} ${c.bsh} ${c.bri} ${c.rs}`}>
          <Link
            className={`${c.bmj} ${c.ok} ${c.bhe} ${c.beb} {c["v2-space-x-8"]} {c.ua} ${c.kh} ${c.bra} ${c.bri}`}
            to="/account/settings"
          >
            <svg
              className={`${c.beb} ${c.qp} ${c.os}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.29299 8.73519C2.90234 9.15821 2.90234 9.84518 3.29299 10.2682L8.29326 15.6827C8.68391 16.1058 9.31832 16.1058 9.70897 15.6827C10.0996 15.2597 10.0996 14.5728 9.70897 14.1497L6.41191 10.5829H15.9999C16.5531 10.5829 17 10.099 17 9.5C17 8.90101 16.5531 8.41709 15.9999 8.41709H6.41503L9.70584 4.85025C10.0965 4.42724 10.0965 3.74027 9.70584 3.31726C9.3152 2.89425 8.68079 2.89425 8.29014 3.31726L3.28986 8.73181L3.29299 8.73519Z"
                fill="currentColor"
              ></path>
            </svg>
            <span>My account</span>
          </Link>

          <Link
            className={`${c.op} ${c.bmh} ${c.bgz} ${c.beb} {c["v2-space-x-8"]} ${c.ua} ${c.kh} ${c.bra} ${c.bri} ${c.bjl}`}
            to="/account/settings"
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
            <span>My account</span>
          </Link>
        </div>

        <div className={`${c.beh} ${c.kh} ${c.bra} ${c.bri}`}>
          <div>
            <div className={`${c.bgk} ${c.xd} ${c.xq} ${c.bbx}`}>
              Security &amp; Privacy
            </div>
            <form method="POST" action="/account/update" className="ob btf">
              <input
                type="hidden"
                name="_token"
                value="0a4ec2c15fcb967c2ac1bf3dfbf4745dca433157"
                autoComplete="off"
              />
              <div className={`${c.mf} ${c.bsf}`}>
                <label className={`${c.gv} ${c.oi}`}>Password</label>
                <div className={`${c.ok} ${c.rt} ${c.ik}`}>
                  <input
                    id="new_password"
                    type="password"
                    name="password"
                    className={`${c.btz} ${c["v2-small"]}`}
                    placeholder="New Password"
                  />
                  <div
                    onClick={() =>
                      togglePasswordVisibility(
                        "new_password",
                        "show_password",
                        "hide_password"
                      )
                    }
                    className={`${c.ok} ${c.ua} ${c.ue} ${c.te} ${c.ij} ${c.iy} ${c.pv} ${c.bfw} ${c.bgc}`}
                  >
                    <span id="show_password">
                      <svg
                        className={`${c.beh} ${c.nm} ${c.qw} ${c.oy}`}
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        {/* Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)  */}
                        <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path>
                      </svg>
                    </span>
                    <span id="hide_password" className={`${c.hidden} ${c.op}`}>
                      <svg
                        className={`${c.beh} ${c.nm} ${c.qw} ${c.oy}`}
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
              </div>

              <div className="mb-4">
                <label className={`${c.gv} ${c.oi}`}>Repeat Password</label>
                <div className={`${c.ok} ${c.rt} ${c.ik}`}>
                  <input
                    id="password_repeat"
                    type="password"
                    name="password_confirmation"
                    className={`${c.btz} ${c["v2-small"]}`}
                    placeholder="Password"
                  />
                  <div
                    onClick={() =>
                      togglePasswordVisibility(
                        "password_repeat",
                        "eye_show",
                        "eye_hide"
                      )
                    }
                    className={`${c.ok} ${c.ua} ${c.ue} ${c.te} ${c.ij} ${c.iy} ${c.pv} ${c.bfw} ${c.bgc}`}
                  >
                    <span id="eye_show">
                      <svg
                        className={`${c.beh} ${c.nm} ${c.qw} ${c.oy}`}
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        {/* Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)  */}
                        <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path>
                      </svg>
                    </span>
                    <span id="eye_hide" className={`${c.hidden} ${c.op}`}>
                      <svg
                        className={`${c.beh} ${c.nm} ${c.qw} ${c.oy}`}
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
              </div>

              <div className={`${c.ok} ${c.ud} ${c.ob} ${c.bth}`}>
                <button
                  className={`${c.ha} ${c.hb} ${c.hj} {c.hr}`}
                  data-handle="updatePasswordBtn"
                  type="submit"
                >
                  Save password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Security;
