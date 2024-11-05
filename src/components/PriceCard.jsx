/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function PriceCard({ heading }) {
  const navigate = useNavigate(-1);
  return (
    <div className="dr ew fq bnv bnw" style={{ top: "7rem" }}>
      <div className="jy bpx dr ew">
        <div>
          <div>
            <div className="xc bty bac bth btl bte btm gx">
              <div className="jt pp pw ia bac">
                <ul className="vu ow oy ns">
                  <li className="bdk">Australia Visitor Visa</li>
                </ul>
                <p className="bdm nf rq">1 Traveler</p>
              </div>
              <div>
                <div className="jt pw bdi ql ia">
                  <span className="ns">+ Government fees</span>
                  <span className="bac nf rq">₦ 224926.00</span>
                </div>
              </div>
            </div>
            <div className="wl bac">
              <div className="jt pw bcm">
                <span>Total</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="bdm jt pw">
                <span>for all travelers</span>
                <span>(Includes taxes and fees)</span>
              </div>
            </div>
          </div>
          <div className="v2-space-y-24 jg">
            <HashLink
              to={"#step=step_2c"}
              state={{ form_heading: heading }}
              className="cg ch cn cs cx dq btnContinue"
              id="btnContinueSidebar"
            >
              <span className="">Save and continue</span>
            </HashLink>
            <div>
              <div className="bac bdm">
                <div className="jt pr">
                  <div className="js">
                    <svg
                      className="me kg "
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.8 16.4983C13.2852 16.4983 14.7096 15.8926 15.7598 14.8144C16.81 13.7363 17.4 12.2739 17.4 10.7492C17.4 9.22439 16.81 7.76207 15.7598 6.68389C14.7096 5.60571 13.2852 5 11.8 5C10.3148 5 8.89041 5.60571 7.8402 6.68389C6.79 7.76207 6.2 9.22439 6.2 10.7492C6.2 12.2739 6.79 13.7363 7.8402 14.8144C8.89041 15.8926 10.3148 16.4983 11.8 16.4983ZM9.80062 18.6543C5.49125 18.6543 2 22.2385 2 26.6626C2 27.3993 2.58188 27.9966 3.29938 27.9966H20.3006C20.3794 27.9966 20.4538 27.9876 20.5325 27.9742C17.1944 25.4993 16.1663 21.6411 16.0219 18.9821C15.3175 18.7665 14.5737 18.6543 13.8037 18.6543H9.80062ZM23.3106 15.1374L18.0606 17.2933C17.6625 17.4595 17.4 17.8548 17.4 18.2949C17.4 21.1381 18.5331 25.8766 23.2975 27.9158C23.5556 28.0281 23.8487 28.0281 24.1069 27.9158C28.8669 25.8766 30 21.1381 30 18.2949C30 17.8548 29.7375 17.4595 29.3394 17.2933L24.0894 15.1374C23.84 15.0341 23.56 15.0341 23.3106 15.1374ZM27.8738 19.0136C27.7031 21.2908 26.6838 24.2552 23.7 25.7374V17.2978L27.8738 19.0136Z"></path>
                    </svg>
                  </div>
                  <strong className="bdl il">Your info is safe with us!</strong>
                </div>
                <div className="ih">
                  {" "}
                  for more details see{" "}
                  <span className="bds v2-link-blue">
                    how we keep your data safe
                  </span>
                </div>
              </div>
            </div>
            <div
              className="zw bcr jt v2-space-x-8 pr or bey btnPrevious"
              id="btnPreviousSidebar"
              onClick={() => navigate(-1)}
            >
              <div className="js">
                <svg
                  className="mj kj "
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.29299 8.73519C2.90234 9.15821 2.90234 9.84518 3.29299 10.2682L8.29326 15.6827C8.68391 16.1058 9.31832 16.1058 9.70897 15.6827C10.0996 15.2597 10.0996 14.5728 9.70897 14.1497L6.41191 10.5829H15.9999C16.5531 10.5829 17 10.099 17 9.5C17 8.90101 16.5531 8.41709 15.9999 8.41709H6.41503L9.70584 4.85025C10.0965 4.42724 10.0965 3.74027 9.70584 3.31726C9.3152 2.89425 8.68079 2.89425 8.29014 3.31726L3.28986 8.73181L3.29299 8.73519Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <span>Previous</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="dw do vj ng eb bac wl bli wy bqd"
        style={{
          zIndex: 1000,
          boxShadow: "rgba(17, 18, 17, 0.18) 0px 0px 16px 0px",
        }}
      >
        <div className="jt pk pw pr">
          <div className="jt pr pw ng hr">
            <div className="bcu">Total</div>
            <div className="bcv">Calculated at checkout</div>
          </div>
          <HashLink
            to={"#step=step_2c"}
            state={{ form_heading: heading }}
            className="cg ch co cu cx dq btnContinue"
            id="btnContinueUnderSectionMobile"
          >
            <span className="">Continue</span>
          </HashLink>
        </div>
      </div>
    </div>
  );
}

export default PriceCard;
