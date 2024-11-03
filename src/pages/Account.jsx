// import "./reg.css";
import { Link } from "react-router-dom";
import c from "./account.module.css";

function Account() {
  return (
    <>
      <main>
        <div id="h1-tag-container" className={c.heading}>
          <h1>My Orders</h1>
        </div>

        <div className="fu">
          <div className={c.accountLink}>
            <Link
              to="/account/settings"
              className=" bud  ok bjl"
              data-handle="myAccountLink"
            >
              <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.29299 8.73519C2.90234 9.15821 2.90234 9.84518 3.29299 10.2682L8.29326 15.6827C8.68391 16.1058 9.31832 16.1058 9.70897 15.6827C10.0996 15.2597 10.0996 14.5728 9.70897 14.1497L6.41191 10.5829H15.9999C16.5531 10.5829 17 10.099 17 9.5C17 8.90101 16.5531 8.41709 15.9999 8.41709H6.41503L9.70584 4.85025C10.0965 4.42724 10.0965 3.74027 9.70584 3.31726C9.3152 2.89425 8.68079 2.89425 8.29014 3.31726L3.28986 8.73181L3.29299 8.73519Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="nf">My account</span>
            </Link>
          </div>

          <div className={c.emptyContent}>
            <svg
              //   className="bed mf rm pi"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="protected-file">
                <g id="Group 34597">
                  <path
                    id="Vector"
                    d="M52.5926 23.6L33.0833 4H16.3611C14.1436 4 12.0169 4.885 10.4489 6.4603C8.8809 8.03561 8 10.1722 8 12.4V51.6C8 53.8278 8.8809 55.9644 10.4489 57.5397C12.0169 59.115 14.1436 60 16.3611 60H44.2315C46.449 60 48.5757 59.115 50.1437 57.5397C51.7117 55.9644 52.5926 53.8278 52.5926 51.6V23.6Z"
                    fill="#D5E1E2"
                  ></path>
                  <path
                    id="Vector_2"
                    d="M52.5943 23.7037H38.5203C37.0272 23.7037 35.5953 23.1106 34.5395 22.0548C33.4837 20.9991 32.8906 19.5671 32.8906 18.0741V4L52.5943 23.7037Z"
                    fill="#79949B"
                  ></path>
                  <g id="Vector_3">
                    <path
                      d="M22.1717 48.5928H30.468C31.2014 48.5928 31.9048 48.2978 32.4234 47.7727C32.9421 47.2476 33.2334 46.5354 33.2334 45.7928C33.2334 45.0502 32.9421 44.338 32.4234 43.8129C31.9048 43.2878 31.2014 42.9928 30.468 42.9928H22.1717C21.4382 42.9928 20.7348 43.2878 20.2162 43.8129C19.6976 44.338 19.4062 45.0502 19.4062 45.7928C19.4062 46.5354 19.6976 47.2476 20.2162 47.7727C20.7348 48.2978 21.4382 48.5928 22.1717 48.5928Z"
                      fill="#B0C1C5"
                    ></path>
                    <path
                      d="M22.1717 37.3928H33.2334C33.9669 37.3928 34.6702 37.0978 35.1889 36.5727C35.7075 36.0476 35.9988 35.3354 35.9988 34.5928C35.9988 33.8502 35.7075 33.138 35.1889 32.6129C34.6702 32.0878 33.9669 31.7928 33.2334 31.7928H22.1717C21.4382 31.7928 20.7348 32.0878 20.2162 32.6129C19.6976 33.138 19.4062 33.8502 19.4062 34.5928C19.4062 35.3354 19.6976 36.0476 20.2162 36.5727C20.7348 37.0978 21.4382 37.3928 22.1717 37.3928Z"
                      fill="#B0C1C5"
                    ></path>
                    <path
                      d="M22.1717 26.1928H24.9371C25.6706 26.1928 26.374 25.8978 26.8926 25.3727C27.4112 24.8476 27.7025 24.1354 27.7025 23.3928C27.7025 22.6502 27.4112 21.938 26.8926 21.4129C26.374 20.8878 25.6706 20.5928 24.9371 20.5928H22.1717C21.4382 20.5928 20.7348 20.8878 20.2162 21.4129C19.6976 21.938 19.4062 22.6502 19.4062 23.3928C19.4062 24.1354 19.6976 24.8476 20.2162 25.3727C20.7348 25.8978 21.4382 26.1928 22.1717 26.1928Z"
                      fill="#B0C1C5"
                    ></path>
                  </g>
                  <path
                    id="Vector_4"
                    d="M38.5203 23.7037H52.5943L32.8906 4V18.0741C32.8906 19.5671 33.4837 20.9991 34.5395 22.0548C35.5953 23.1106 37.0272 23.7037 38.5203 23.7037Z"
                    fill="#B0C1C5"
                  ></path>
                </g>
                <path
                  id="Vector_5"
                  d="M44.3603 41.5134L44.3603 41.5134L44.3583 41.5158C41.7972 44.7379 42.3767 49.4424 45.5134 52.0012L45.5133 52.0013L45.5167 52.0039C48.1828 54.1045 51.9545 54.1495 54.6681 52.139L57.4664 54.9373C57.8833 55.3542 58.5205 55.3542 58.9373 54.9373C59.3542 54.5205 59.3542 53.8833 58.9373 53.4664L56.1397 50.6688C58.5429 47.4566 58.0099 42.8735 54.8457 40.3583C51.6237 37.7972 46.9191 38.3767 44.3603 41.5134ZM50.2207 51.5575C47.2461 51.5575 44.8838 49.1953 44.8838 46.2207C44.8838 43.2461 47.2461 40.8838 50.2207 40.8838C53.1953 40.8838 55.5575 43.2461 55.5575 46.2207C55.5575 49.1953 53.1953 51.5575 50.2207 51.5575Z"
                  fill="#79949B"
                  stroke="#79949B"
                  strokeWidth="0.5"
                ></path>
              </g>
            </svg>

            <h2>You have no orders in progress</h2>
            <p className="bho bul bef mj bsh bdk">
              You haven't started an application for any upcoming trips.{" "}
            </p>
            <div className={c.btt}>
              <Link to="/" tabIndex="-1">
                Start an application
              </Link>
            </div>
          </div>
        </div>

        {/* <div
          id="alert-modal-v2"
          className="op ii"
          style={{zIndex:10000}}
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

export default Account;
