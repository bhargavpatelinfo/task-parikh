// src/enrollment/steps/index.tsx
import React from "react";
import StepOne from "./stepOne";

const Steps: React.FC = () => {
  return (
    <div className="bg-white rounded-lg mt-6 pt-6 px-4 pb-4 border border-light-gray-600">
      <StepOne />
    </div>
  );
};

export default Steps;
