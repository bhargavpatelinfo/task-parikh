import React from "react";
import { Button } from "@/components/ui/button";
import CommonStepCard from "@/components/common/CommonStepCard";

interface StepSixProps {
  onNext: () => void;
}

const StepSix: React.FC<StepSixProps> = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-lg mt-6 pt-6 px-4 pb-4 border border-light-gray-600 shadow-card-shadow">
        <div className="flex flex-col items-center gap-4">
          <CommonStepCard
            statusColor="text-light-red-400"
            title="Select a Customer"
            body="This phone number is associated with multiple customer records, please determine which one is correct."
          />
          <div className="w-full ">
            <div className="p-3 flex flex-col gap-1">
              <span className="text-light-black-100 font-medium text-sm">
                {"Alice Johnson"}
              </span>
              <span className="text-light-gray text-sm font-normal">
                {"Osage Dr, 80354"}
              </span>
            </div>
            <div className="p-3 flex flex-col gap-1 w-full">
              <span className="text-light-black-100 font-medium text-sm">
                {"Bob Marley"}
              </span>
              <span className="text-light-gray text-sm font-normal">
                {"Jamaica, 38194"}
              </span>
            </div>
            <div className="p-3 flex flex-col gap-1">
              <span className="text-light-black-100 font-medium text-sm">
                {"Charlie Brown"}
              </span>
              <span className="text-light-gray text-sm font-normal">
                {"Pine St, 48481"}
              </span>
            </div>
          </div>
          <Button onClick={onNext} variant="blackOutline">
            {"None are correct"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StepSix;
