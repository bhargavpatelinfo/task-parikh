import React from "react";
import { Clock, Correct } from "@/icons";

interface StepTwoProps {
  onNext: () => void;
}

const StepTwo: React.FC<StepTwoProps> = ({ onNext }) => {
  return (
    <React.Fragment>
      <div className="bg-white rounded-lg mt-6 pt-6 px-4 pb-4 border border-light-gray-600">
        <div className="flex flex-col items-center gap-6">
          <div className="bg-light-lightBlue rounded-30 inline-flex items-center justify-center px-2 py-1 gap-1 mx-auto">
            <Clock width={14} height={14} />
            <span className="text-light-blue font-medium text-xs">
              {"Waiting to be completed"}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-light-secondary text-lg font-semibold text-center">
              {"Enrollment requested"}
            </h2>
            <p className="text-light-gray text-sm font-normal text-center">
              {"Please wait until the customer complete the process."}
            </p>
          </div>
        </div>
        <div className="bg-light-gray-600 h-1 w-full mt-6 mb-4" />
        <div className="flex flex-col items-start mt-4">
          <div className="relative mb-3">
            <div className="absolute w-1 bg-light-gray-700/20 h-5 left-1 top-6"></div>
            <div className="flex items-start">
              <div className="pt-1">
                <Correct width={11} height={11} />
              </div>
              <div className="ml-2">
                <h3 className="text-light-secondary font-medium text-sm">
                  {"Sent via SMS to +420774654789"}
                </h3>
                <p className="text-xs text-light-gray font-medium">
                  {" a minute ago"}
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="flex items-start">
              <div className="pt-1">
                <Correct width={11} height={11} />
              </div>
              <div className="ml-2">
                <h3 className="text-light-secondary font-medium text-sm">
                  {"Clicked the link in the text message"}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={onNext}
        className="py-2 px-3 text-light-gray font-medium mt-6 text-center block cursor-pointer"
      >
        {"Reset"}
      </div>
    </React.Fragment>
  );
};

export default StepTwo;
