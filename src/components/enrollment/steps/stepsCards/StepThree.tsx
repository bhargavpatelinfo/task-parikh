import React from "react";
import { Button } from "@/components/ui/button";
import { ShieldOff } from "lucide-react";
import CommonStepCard from "@/components/common/CommonStepCard";

interface StepThreeProps {
  onNext: () => void;
}

const StepThree: React.FC<StepThreeProps> = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-lg mt-6 pt-6 px-4 pb-4 border border-light-gray-600 shadow-card-shadow">
        <div className="flex flex-col items-center gap-6">
          <CommonStepCard
            Icon={ShieldOff}
            IconSize={32}
            statusClassName="bg-light-red-300 rounded-3xl inline-flex items-center justify-center px-2 py-1 gap-1 mx-auto w-20 h-20"
            statusColor="text-light-red-400"
            title="Enrollment failed"
            body="The enrollment failed. Please ask the customer to enroll again or block?"
          />
          <Button onClick={onNext} variant="black">
            {"Send Enrollment Request"}
          </Button>
        </div>
      </div>
      <a
        href="#"
        className="py-2 px-3 text-light-gray font-medium mt-6 text-center block"
      >
        {" Reset"}
      </a>
    </div>
  );
};

export default StepThree;
