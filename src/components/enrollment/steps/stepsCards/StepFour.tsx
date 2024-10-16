import CommonStepCard from "@/components/common/CommonStepCard";
import { CircleCheckBig } from "lucide-react";
import React from "react";

interface StepFourProps {
  onNext: () => void;
}

const StepFour: React.FC<StepFourProps> = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-lg mt-6 pt-6 px-4 pb-4 border border-light-gray-600 shadow-card-shadow">
        <div className="flex flex-col items-center gap-6">
           <CommonStepCard
            Icon={CircleCheckBig}
            IconSize={32}
            statusClassName="bg-light-green-100  rounded-9999 inline-flex items-center justify-center px-2 py-1 gap-1 mx-auto w-20 h-20"
            statusColor="text-light-green-200"
            title="Enrolled Successfully 👍"
            body="This person is Authenticated, you can proceed."
          />
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
