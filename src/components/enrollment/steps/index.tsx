import React, { useState } from "react";
import StepOne from "./stepsCards/StepOne";
import StepTwo from "./stepsCards/StepTwo";
import StepThree from "./stepsCards/StepThree";
import StepFour from "./stepsCards/StepFour";

const Steps: React.FC = () => {
  const [step,setStep] = useState()
  return (
    <React.Fragment>
      <StepOne />
      <StepTwo />
      <StepThree />
      <StepFour />
    </React.Fragment>
  );
};

export default Steps;
