import React, { useState } from "react";
import StepOne from "./stepsCards/StepOne";
import StepTwo from "./stepsCards/StepTwo";
import StepThree from "./stepsCards/StepThree";
import StepFour from "./stepsCards/StepFour";
import StepFive from "./stepsCards/StepFive";
import StepSix from "./stepsCards/StepSix";

const Steps: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;
  const handleNextStep = () => {
    if (currentStep === totalSteps) {
      setCurrentStep(1);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div>
      {currentStep === 1 && <StepOne onNext={handleNextStep} />}
      {currentStep === 2 && <StepTwo onNext={handleNextStep} />}
      {currentStep === 3 && <StepThree onNext={handleNextStep} />}
      {currentStep === 4 && <StepFour onNext={handleNextStep} />}
      {currentStep === 5 && <StepFive onNext={handleNextStep} />}
      {currentStep === 6 && <StepSix onNext={handleNextStep} />}
    </div>
  );
};

export default Steps;
