import CommonStepCard from "@/components/common/CommonStepCard";
import { Correct } from "@/icons";
import { Clock } from "lucide-react";
import React from "react";

interface StepTwoProps {
  onNext: () => void;
}

const StepTwo: React.FC<StepTwoProps> = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-lg mt-6 pt-6 px-4 pb-4 border border-light-gray-600 shadow-card-shadow">
        <div className="flex flex-col items-center gap-6">
          <CommonStepCard
            Icon={<Clock />}
            IconSize={14}
            statusText="Waiting to be completed"
            statusClassName="bg-light-lightBlue rounded-30 inline-flex items-center justify-center px-2 py-1 gap-1 mx-auto"
            statusColor="text-light-blue"
            statusTextClassName="text-light-blue font-medium text-xs"
            title="Enrollment requested"
            body="Please wait until the customer complete the process."
          />
        </div>
        <div className="bg-light-gray-600 h-1 w-full mt-6 mb-4" />
        <div className="flex flex-col items-start mt-4">
          <div className="relative mb-3">
            <div className="absolute w-1 bg-light-gray-700/20 h-5 left-6.5 top-25"></div>
            <div className="flex items-start">
              <div className="pt-1">
                <Correct width={14} height={14} />
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
                <div
                  className={
                    "border-1.5 h-3 w-3 animate-rotate border-blue-500 border-t-gray-200 rounded-full"
                  }
                ></div>
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
    </div>
  );
};

export default StepTwo;
