// import { HashLink } from "react-router-hash-link"
import ApplicationLanding from "./application/ApplicationLanding";
import { useLocation } from "react-router-dom";
import SecondStep from "./application/SecondStep";
import StepThreeA from "./application/StepThreeA";
import StepThreeC from "./application/StepThreeC";
import StepThreeE from "./application/StepThreeE";
import StepFour from "./application/StepFour";
import ReviewApplication from "./application/ReviewApplication";
import { useImmer } from "use-immer";

const global_fields = {
  nationality_code: "",
  currency: "",
  destination_country_code: "",
  visa_processing_speed: null,
  arrival_date: "",
  email: "",
  travelers: [
    {
      first_name: "",
      last_name: "",
      dob: { day: "", month: "", year: "" },
      nationality_country: "",
      birth_country: "",
      home_country: null,
      passport_issued_country: null,
      passport_num: null,
      passport_issued_date: { day: "", month: "", year: "" },
      passport_expiration_date: { day: "", month: "", year: "" },
    },
  ],
  quoted_total: null,
  order_id: null,
  current_step: "step_2",
  time_zone: null,
  primary_product_id: null,
};

function MultiStepForm() {
  const { hash, state } = useLocation();
  const [userVisaInfo, setUserVisaInfo] = useImmer(global_fields);
  console.log(userVisaInfo);

  return (
    <>
      {!hash && <ApplicationLanding />}
      {/* {location.hash.includes("step_1") && <SecondStep />} */}
      <SecondStep
        isCurrentStep={hash.includes("step_1")}
        heading={state?.form_heading}
        hasHash={hash}
        updateVisaApplicationDetails={setUserVisaInfo}
        visaApplicationDetails={userVisaInfo}
      />
      <StepThreeA
        isCurrentStep={hash.slice(-1) === "2"}
        updateVisaApplicationDetails={setUserVisaInfo}
        visaApplicationDetails={userVisaInfo}
        heading={state?.form_heading}
      />
      <StepThreeC
        isCurrentStep={hash.includes("step_2b")}
        heading={state?.form_heading}
        updateVisaApplicationDetails={setUserVisaInfo}
        visaApplicationDetails={userVisaInfo}
      />
      <StepThreeE
        isCurrentStep={hash.includes("step_2c")}
        heading={state?.form_heading}
      />
      <StepFour
        isCurrentStep={hash.includes("step_3")}
        heading={state?.form_heading}
      />
      <ReviewApplication
        isCurrentStep={hash.includes("review")}
        // heading={state?.form_heading}
      />
    </>
  );
}

export default MultiStepForm;
