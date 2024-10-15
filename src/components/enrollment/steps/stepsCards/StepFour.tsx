import { Success } from "@/icons";
import React from "react";

interface StepFourProps {
  onNext: () => void;
}

const StepFour: React.FC<StepFourProps> = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-lg mt-6 pt-6 px-4 pb-4 border border-light-gray-600 shadow-card-shadow">
        <div className="flex flex-col items-center gap-6">
          <div className="bg-light-green-100  rounded-9999 inline-flex items-center justify-center px-2 py-1 gap-1 mx-auto w-20 h-20">
            <Success width={32} height={32} />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-light-secondary text-lg font-semibold text-center">
              {"Enrolled Successfully 👍"}
            </h2>
            <p className="text-light-gray text-sm font-normal text-center">
              {"This person is Authenticated, you can proceed."}
            </p>
          </div>
        </div>
      </div>
      <div
        onClick={onNext}
        className="py-2 px-3 text-light-gray font-medium mt-6 text-center block cursor-pointer"
      >
        {"Reset"}
      </div>
    </div>
  );
};

export default StepFour;
