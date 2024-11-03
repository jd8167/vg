import { Link } from "react-router-dom";
import c from "./account.module.css";
import e from "./external-two.module.css";

function AccountSettings() {
  return (
    <>
      <main>
        <div id="h1-tag-container" className={c.heading}>
          <h1>My Account</h1>
        </div>
        <section
          className={`${e.on} ${e.ft} ${e.fu} ${e.nu} ${e.btd} ${e.mt}}`}
        >
          <section
            className={`${e.kd} ${e.yw} ${e.wu} ${e.xq} ${e.bil} ${e.bjo} ${e.bfw} ${e.bgc} ${e.wh} ${e.mj} last-of-type:v2-mb-0 md:last-of-type:v2-mb-24 lg:last-of-type:v2-mb-32 ${e.bsh} ${e.bai} ${e.te}`}
          >
            <Link
              className={`${e.ok} ${e.ts} ${e.cd} ${e.ty}`}
              to="/account"
              data-handle="My Orders"
            >
              <svg
                className={`${e.btt} ${e.mf} ${e.beh} ${e.rc} ${e.pc}`}
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="gl-solid-receipt">
                  <path
                    id="Vector"
                    d="M40 4H8C6.8 4 6 4.8 6 6V42C6 43.2 6.8 44 8 44C8.4 44 8.8 43.8 9.2 43.6L13.4 40.6L17.6 43.6C18.4 44.2 19.2 44.2 20 43.6L24.2 40.6L28.4 43.6C29.2 44.2 30 44.2 30.8 43.6L35 40.6L39.2 43.6C39.6 43.8 40 44 40.4 44C41.6 44 42.4 43.2 42.4 42V6C42 4.8 41.2 4 40 4ZM32 32H16C14.8 32 14 31.2 14 30C14 28.8 14.8 28 16 28H32C33.2 28 34 28.8 34 30C34 31.2 33.2 32 32 32ZM32 24H16C14.8 24 14 23.2 14 22C14 20.8 14.8 20 16 20H32C33.2 20 34 20.8 34 22C34 23.2 33.2 24 32 24ZM32 16H20C18.8 16 18 15.2 18 14C18 12.8 18.8 12 20 12H32C33.2 12 34 12.8 34 14C34 15.2 33.2 16 32 16Z"
                    fill="#0B3947"
                  ></path>
                </g>
              </svg>

              <svg
                className={`${e.op} ${e["b-t-n"]} ${e.mf} ${e.beh} ${e.rh} ${e.pf}`}
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="gl-solid-receipt">
                  <path
                    id="Vector"
                    d="M40 4H8C6.8 4 6 4.8 6 6V42C6 43.2 6.8 44 8 44C8.4 44 8.8 43.8 9.2 43.6L13.4 40.6L17.6 43.6C18.4 44.2 19.2 44.2 20 43.6L24.2 40.6L28.4 43.6C29.2 44.2 30 44.2 30.8 43.6L35 40.6L39.2 43.6C39.6 43.8 40 44 40.4 44C41.6 44 42.4 43.2 42.4 42V6C42 4.8 41.2 4 40 4ZM32 32H16C14.8 32 14 31.2 14 30C14 28.8 14.8 28 16 28H32C33.2 28 34 28.8 34 30C34 31.2 33.2 32 32 32ZM32 24H16C14.8 24 14 23.2 14 22C14 20.8 14.8 20 16 20H32C33.2 20 34 20.8 34 22C34 23.2 33.2 24 32 24ZM32 16H20C18.8 16 18 15.2 18 14C18 12.8 18.8 12 20 12H32C33.2 12 34 12.8 34 14C34 15.2 33.2 16 32 16Z"
                    fill="#0B3947"
                  ></path>
                </g>
              </svg>

              <div className={`${e.mx} ${e.bsr}`}>
                <h3 className={`${e.bhj} ${e.fk} ${e.beh} ${e.mh} ${e.bsm}`}>
                  My Orders
                </h3>
                <span className={`${e.bhs} ${e.bun} ${e.beg}`}>
                  View your orders and travel documents.
                </span>
              </div>
            </Link>
          </section>

          <section
            className={`${e.kd} ${e.yw} ${e.wu} ${e.xq} ${e.bil} ${e.bjo} ${e.bfw} ${e.bgc} ${e.wh} ${e.mj} last-of-type:v2-mb-0 md:last-of-type:v2-mb-24 lg:last-of-type:v2-mb-32 ${e.bsh} ${e.bai} ${e.te}`}
          >
            <Link
              className={`${e.ok} ${e.ts} ${e.cd} ${e.ty}`}
              to="/account/payment-method"
              data-handle="Payment Methods"
            >
              <svg
                className={`${e.btt} ${e.mf} ${e.beh} ${e.rc} ${e.pc}`}
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

              <svg
                className={`${e.op} ${e["b-t-n"]} ${e.mf} ${e.beh} ${e.rh} ${e.pf}`}
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

              <div className={`${e.mx} ${e.bsr}`}>
                <h3 className={`${e.bhj} ${e.fk} ${e.beh} ${e.mh} ${e.bsm}`}>
                  Payment Methods
                </h3>
                <span className={`${e.bhs} ${e.bun} ${e.beg}`}>
                  Manage your payment methods.
                </span>
              </div>
            </Link>
          </section>

          <section
            className={`${e.kd} ${e.yw} ${e.wu} ${e.xq} ${e.bil} ${e.bjo} ${e.bfw} ${e.bgc} ${e.wh} ${e.mj} last-of-type:v2-mb-0 md:last-of-type:v2-mb-24 lg:last-of-type:v2-mb-32 ${e.bsh} ${e.bai} ${e.te}`}
          >
            <Link
              className={`${e.ok} ${e.ts} ${e.cd} ${e.ty}`}
              href="/account/settings/subscription"
              data-handle="iVisa+"
            >
              <svg
                className={`${e.btt} ${e.mf} ${e.beh} ${e.rc} ${e.pc}`}
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="gl-solid-premium">
                  <path
                    id="Vector"
                    d="M41.7991 34.4L36.3991 25C39.9991 18.2 37.5991 9.8 30.7991 6.00001C23.9991 2.40001 15.5991 4.80001 11.7991 11.6C9.5991 15.8 9.5991 20.8 11.7991 24.8L6.3991 34.2C5.7991 35.2 6.1991 36.4 7.1991 37C7.3991 37.2 7.7991 37.2 8.1991 37.2H13.9991L16.9991 42.2C17.1991 42.4 17.1991 42.6 17.3991 42.6C17.7991 43 18.1991 43.2 18.7991 43.2C18.9991 43.2 18.9991 43.2 19.1991 43.2C19.7991 43.2 20.3991 42.8 20.5991 42.2L24.3991 35.6L28.1991 42.2C28.5991 42.8 28.9991 43 29.5991 43.2H29.7991C30.3991 43.2 30.7991 43 31.1991 42.6C31.3991 42.4 31.3991 42.4 31.5991 42.2L34.5991 37.2H40.3991C41.5991 37.2 42.3991 36.4 42.3991 35.2C41.9991 35.2 41.9991 34.8 41.7991 34.4ZM18.3991 37.6L16.5991 34.6C16.1991 34 15.5991 33.6 14.9991 33.6H11.5991L14.3991 28.6C16.3991 30.4 18.7991 31.8 21.5991 32.2L18.3991 37.6ZM32.9991 33.6C32.3991 33.6 31.5991 34 31.3991 34.6L29.5991 37.6L26.5991 32.4C29.1991 31.8 31.7991 30.6 33.7991 28.8L36.5991 33.8L32.9991 33.6Z"
                    fill="#0B3947"
                  ></path>
                </g>
              </svg>

              <svg
                className={`${e.op} ${e["b-t-n"]} ${e.mf} ${e.beh} ${e.rh} ${e.pf}`}
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="gl-solid-premium">
                  <path
                    id="Vector"
                    d="M41.7991 34.4L36.3991 25C39.9991 18.2 37.5991 9.8 30.7991 6.00001C23.9991 2.40001 15.5991 4.80001 11.7991 11.6C9.5991 15.8 9.5991 20.8 11.7991 24.8L6.3991 34.2C5.7991 35.2 6.1991 36.4 7.1991 37C7.3991 37.2 7.7991 37.2 8.1991 37.2H13.9991L16.9991 42.2C17.1991 42.4 17.1991 42.6 17.3991 42.6C17.7991 43 18.1991 43.2 18.7991 43.2C18.9991 43.2 18.9991 43.2 19.1991 43.2C19.7991 43.2 20.3991 42.8 20.5991 42.2L24.3991 35.6L28.1991 42.2C28.5991 42.8 28.9991 43 29.5991 43.2H29.7991C30.3991 43.2 30.7991 43 31.1991 42.6C31.3991 42.4 31.3991 42.4 31.5991 42.2L34.5991 37.2H40.3991C41.5991 37.2 42.3991 36.4 42.3991 35.2C41.9991 35.2 41.9991 34.8 41.7991 34.4ZM18.3991 37.6L16.5991 34.6C16.1991 34 15.5991 33.6 14.9991 33.6H11.5991L14.3991 28.6C16.3991 30.4 18.7991 31.8 21.5991 32.2L18.3991 37.6ZM32.9991 33.6C32.3991 33.6 31.5991 34 31.3991 34.6L29.5991 37.6L26.5991 32.4C29.1991 31.8 31.7991 30.6 33.7991 28.8L36.5991 33.8L32.9991 33.6Z"
                    fill="#0B3947"
                  ></path>
                </g>
              </svg>

              <div className={`${e.mx} ${e.bsr}`}>
                <h3 className={`${e.bhj} ${e.fk} ${e.beh} ${e.mh} ${e.bsm}`}>
                  iVisa+
                </h3>
                <span className={`${e.bhs} ${e.bun} ${e.beg}`}>
                  Upgrade your travel experience.
                </span>
              </div>
            </Link>
          </section>

          <section
            className={`${e.kd} ${e.yw} ${e.wu} ${e.xq} ${e.bil} ${e.bjo} ${e.bfw} ${e.bgc} ${e.wh} ${e.mj} last-of-type:v2-mb-0 md:last-of-type:v2-mb-24 lg:last-of-type:v2-mb-32 ${e.bsh} ${e.bai} ${e.te}`}
          >
            <Link
              className={`${e.ok} ${e.ts} ${e.cd} ${e.ty}`}
              to="/account/settings/personal-details"
              data-handle="Personal Details"
            >
              <svg
                className={`${e.btt} ${e.mf} ${e.beh} ${e.rc} ${e.pc}`}
                viewBox="0 0 48 48"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.5598 17.4C10.5598 15.3313 11.3689 13.3473 12.8092 11.8845C14.2495 10.4218 16.2029 9.59998 18.2398 9.59998C20.2767 9.59998 22.2301 10.4218 23.6704 11.8845C25.1107 13.3473 25.9198 15.3313 25.9198 17.4C25.9198 19.4687 25.1107 21.4526 23.6704 22.9154C22.2301 24.3782 20.2767 25.2 18.2398 25.2C16.2029 25.2 14.2495 24.3782 12.8092 22.9154C11.3689 21.4526 10.5598 19.4687 10.5598 17.4ZM4.7998 38.9901C4.7998 32.9878 9.5878 28.125 15.4978 28.125H20.9818C26.8918 28.125 31.6798 32.9878 31.6798 38.9901C31.6798 39.9895 30.8818 40.8 29.8978 40.8H6.5818C5.5978 40.8 4.7998 39.9895 4.7998 38.9901ZM41.3578 40.8H33.0838C33.4078 40.2272 33.5998 39.5629 33.5998 38.85V38.3625C33.5998 34.6636 31.9738 31.3425 29.4118 29.1122C29.5558 29.1061 29.6938 29.1 29.8378 29.1H33.5218C38.8678 29.1 43.1998 33.4997 43.1998 38.9292C43.1998 39.9651 42.3718 40.8 41.3578 40.8ZM30.7198 25.2C28.8598 25.2 27.1798 24.4322 25.9618 23.1951C27.1438 21.5742 27.8398 19.5694 27.8398 17.4C27.8398 15.7669 27.4438 14.2251 26.7418 12.8723C27.8578 12.0436 29.2318 11.55 30.7198 11.55C34.4338 11.55 37.4398 14.6029 37.4398 18.375C37.4398 22.147 34.4338 25.2 30.7198 25.2Z"></path>
              </svg>

              <svg
                className={`${e.op} ${e["b-t-n"]} ${e.mf} ${e.beh} ${e.rh} ${e.pf}`}
                viewBox="0 0 48 48"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.5598 17.4C10.5598 15.3313 11.3689 13.3473 12.8092 11.8845C14.2495 10.4218 16.2029 9.59998 18.2398 9.59998C20.2767 9.59998 22.2301 10.4218 23.6704 11.8845C25.1107 13.3473 25.9198 15.3313 25.9198 17.4C25.9198 19.4687 25.1107 21.4526 23.6704 22.9154C22.2301 24.3782 20.2767 25.2 18.2398 25.2C16.2029 25.2 14.2495 24.3782 12.8092 22.9154C11.3689 21.4526 10.5598 19.4687 10.5598 17.4ZM4.7998 38.9901C4.7998 32.9878 9.5878 28.125 15.4978 28.125H20.9818C26.8918 28.125 31.6798 32.9878 31.6798 38.9901C31.6798 39.9895 30.8818 40.8 29.8978 40.8H6.5818C5.5978 40.8 4.7998 39.9895 4.7998 38.9901ZM41.3578 40.8H33.0838C33.4078 40.2272 33.5998 39.5629 33.5998 38.85V38.3625C33.5998 34.6636 31.9738 31.3425 29.4118 29.1122C29.5558 29.1061 29.6938 29.1 29.8378 29.1H33.5218C38.8678 29.1 43.1998 33.4997 43.1998 38.9292C43.1998 39.9651 42.3718 40.8 41.3578 40.8ZM30.7198 25.2C28.8598 25.2 27.1798 24.4322 25.9618 23.1951C27.1438 21.5742 27.8398 19.5694 27.8398 17.4C27.8398 15.7669 27.4438 14.2251 26.7418 12.8723C27.8578 12.0436 29.2318 11.55 30.7198 11.55C34.4338 11.55 37.4398 14.6029 37.4398 18.375C37.4398 22.147 34.4338 25.2 30.7198 25.2Z"></path>
              </svg>

              <div className={`${e.mx} ${e.bsr}`}>
                <h3 className={`${e.bhj} ${e.fk} ${e.beh} ${e.mh} ${e.bsm}`}>
                  Personal Details
                </h3>
                <span className={`${e.bhs} ${e.bun} ${e.beg}`}>
                  Update your Email &amp; language settings.
                </span>
              </div>
            </Link>
          </section>

          <section
            className={`${e.kd} ${e.yw} ${e.wu} ${e.xq} ${e.bil} ${e.bjo} ${e.bfw} ${e.bgc} ${e.wh} ${e.mj} last-of-type:v2-mb-0 md:last-of-type:v2-mb-24 lg:last-of-type:v2-mb-32 ${e.bsh} ${e.bai} ${e.te}`}
          >
            <Link
              className={`${e.ok} ${e.ts} ${e.cd} ${e.ty}`}
              href="/account/settings/security"
              data-handle="Security &amp; Privacy"
            >
              <svg
                className={`${e.btt} ${e.mf} ${e.beh} ${e.rc} ${e.pc}`}
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

              <svg
                className={`${e.op} ${e["b-t-n"]} ${e.mf} ${e.beh} ${e.rh} ${e.pf}`}
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

              <div className={`${e.mx} ${e.bsr}`}>
                <h3 className={`${e.bhj} ${e.fk} ${e.beh} ${e.mh} ${e.bsm}`}>
                  Security &amp; Privacy
                </h3>
                <span className={`${e.bhs} ${e.bun} ${e.beg}`}>
                  Update your password.
                </span>
              </div>
            </Link>
          </section>

          <section
            className={`${e.kd} ${e.yw} ${e.wu} ${e.xq} ${e.bil} ${e.bjo} ${e.bfw} ${e.bgc} ${e.wh} ${e.mj} last-of-type:v2-mb-0 md:last-of-type:v2-mb-24 lg:last-of-type:v2-mb-32 ${e.bsh} ${e.bai} ${e.te}`}
          >
            <Link
              className={`${e.ok} ${e.ts} ${e.cd} ${e.ty}`}
              to="/account/referral"
              data-handle="Referrals"
            >
              <svg
                className={`${e.btt} ${e.mf} ${e.beh} ${e.rc} ${e.pc}`}
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="gl-solid-announcement">
                  <path
                    id="Vector"
                    d="M40 3.80005C38.8 3.80005 38 4.60005 38 5.80005V7.00005C34.6 11.2 29.4 13.8 24 13.8H12C8.6 13.8 6 16.4 6 19.8V23.8C6 27.2 8.6 29.8 12 29.8H13L8.2 41C7.8 42 8.2 43.2 9.2 43.6C9.4 43.8 9.8 43.8 10 43.8H18C18.8 43.8 19.6 43.4 19.8 42.6L25.2 29.8C30.2 30.2 34.8 32.6001 38 36.4001V37.6C38 38.8 38.8 39.6 40 39.6C41.2 39.6 42 38.8 42 37.6V5.60005C42 4.80005 41.2 3.80005 40 3.80005ZM12 25.8C10.8 25.8 10 25 10 23.8V19.8C10 18.6 10.8 17.8 12 17.8H14V25.8H12ZM16.6 39.8H13L17.2 29.8H20.8L16.6 39.8Z"
                    fill="#0B3947"
                  ></path>
                </g>
              </svg>

              <svg
                className={`${e.op} ${e["b-t-n"]} ${e.mf} ${e.beh} ${e.rh} ${e.pf}`}
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="gl-solid-announcement">
                  <path
                    id="Vector"
                    d="M40 3.80005C38.8 3.80005 38 4.60005 38 5.80005V7.00005C34.6 11.2 29.4 13.8 24 13.8H12C8.6 13.8 6 16.4 6 19.8V23.8C6 27.2 8.6 29.8 12 29.8H13L8.2 41C7.8 42 8.2 43.2 9.2 43.6C9.4 43.8 9.8 43.8 10 43.8H18C18.8 43.8 19.6 43.4 19.8 42.6L25.2 29.8C30.2 30.2 34.8 32.6001 38 36.4001V37.6C38 38.8 38.8 39.6 40 39.6C41.2 39.6 42 38.8 42 37.6V5.60005C42 4.80005 41.2 3.80005 40 3.80005ZM12 25.8C10.8 25.8 10 25 10 23.8V19.8C10 18.6 10.8 17.8 12 17.8H14V25.8H12ZM16.6 39.8H13L17.2 29.8H20.8L16.6 39.8Z"
                    fill="#0B3947"
                  ></path>
                </g>
              </svg>

              <div className={`${e.mx} ${e.bsr}`}>
                <h3 className={`${e.bhj} ${e.fk} ${e.beh} ${e.mh} ${e.bsm}`}>
                  Referrals
                </h3>
                <span className={`${e.bhs} ${e.bun} ${e.beg}`}>
                  Give 20% off and get $20
                </span>
              </div>
            </Link>
          </section>
        </section>
      </main>
    </>
  );
}

export default AccountSettings;
