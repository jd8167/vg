// import { HashLink } from "react-router-hash-link"
import ApplicationLanding from "./application/ApplicationLanding";
import { useLocation } from "react-router-dom";
import SecondStep from "./application/SecondStep";
import StepThreeA from "./application/StepThreeA";
import StepThreeC from "./application/StepThreeC";
import StepThreeE from "./application/StepThreeE";
import StepFour from "./application/StepFour";
import ReviewApplication from "./application/ReviewApplication";

function MultiStepForm() {
  const { hash, state } = useLocation();

  console.log(hash, state);
  return (
    <>
      {!hash && <ApplicationLanding />}
      {/* {location.hash.includes("step_1") && <SecondStep />} */}
      <SecondStep
        isCurrentStep={hash.includes("step_1")}
        heading={state?.form_heading}
        hasHash={hash}
      />
      <StepThreeA
        isCurrentStep={hash.includes("step_2")}
        heading={state?.form_heading}
      />
      <StepThreeC
        isCurrentStep={hash.includes("step_2b")}
        heading={state?.form_heading}
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
