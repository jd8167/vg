import { Link } from "react-router-dom";
import c from "../pages/external-two.module.css";

function PersonalDetails() {
  return (
    <>
      <div
        id="h1-tag-container"
        className={`${c.fu} ${c.bgp} ${c.bqg} ${c.beh} ${c.bbv} ${c.bpr}`}
      >
        <span>Hi John</span>
      </div>
      <div className={`${c.fu} ${c.ft} ${c.mt} ${c.nu}`}>
        <a
          className={`${c.bgz} ${c.beb} ${c["v2-space-x-8"]} ${c.ok} ${c.ua} ${c.mc} ${c.bsh} ${c.kh} ${c.bra} ${c.bri} ${c.bjl} ${c.rs}`}
          href="https://ivisatravel.com/account/settings"
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
          <span className={`${c.nq}`}>My account</span>
        </a>

        <div className={`${c.beh} ${c.kh} ${c.bra} ${c.bri}`}>
          <div
            className={`py-3 px-5 bg-white font-normal text-3xl ${c.bgk} ${c.xd} ${c.xq} ${c.bbx}`}
          >
            Personal Details
          </div>

          <form
            method="POST"
            action="https://ivisatravel.com/account/update"
            className={`${c.ob} ${c.btf}`}
          >
            <input
              type="hidden"
              name="_token"
              value="d5eee090ec2392cf00d5533ea51a460ec79cf2c0"
              autoComplete="off"
            />
            <div className={`${c.mf} ${c.bsf}`}>
              <label for="inputEmail" className={`${c.gv} ${c.oi}`}>
                Email
              </label>
              <input
                type="email"
                name="email"
                className={`${c.btz} ${c["v2-small"]} lg:v2-medium`}
                id="inputEmail"
                aria-describedby="emailHelp"
                value="realjohndoe8167@gmail.com"
              />
            </div>

            <div>
              <label for="inputLanguage" className={`${c.gv} ${c.oi}`}>
                Language
              </label>
              <select
                className={`${c.btz} ${c["v2-small"]} lg:v2-medium`}
                name="locale"
                id="inputLanguage"
              >
                <option value="en" selected="">
                  English
                </option>
                <option value="es">Español</option>
              </select>
            </div>

            <div className={`${c.ok} ${c.ud} ${c.ob} ${c.bth}`}>
              <button
                className={`${c.ha} ${c.hb} ${c.hj} ${c.hr}`}
                type="submit"
              >
                Save details
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PersonalDetails;
