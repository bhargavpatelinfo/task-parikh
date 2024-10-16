import React from "react";
import { Button } from "@/components/ui/button";
import { CircleHelp } from "lucide-react";
import CommonStepCard from "@/components/common/CommonStepCard";

interface StepOneProps {
  onNext: () => void;
}

const StepOne: React.FC<StepOneProps> = ({ onNext }) => {
  return (
    <div className="bg-white rounded-lg mt-6 pt-6 px-4 pb-4 border border-light-gray-600 shadow-card-shadow">
      <div className="flex flex-col items-center gap-6">
        <CommonStepCard
          Icon={CircleHelp}
          IconSize={14}
          statusText="Unenrolled"
          statusClassName="bg-light-red-300 rounded-30 inline-flex items-center justify-center px-2 py-1 gap-1 mx-auto"
          statusColor="text-light-red"
          statusTextClassName="text-light-red font-medium text-xs"
          title="Enrollment required"
          body="To enroll this person, please Send Enrollment Request."
        />
        <Button onClick={onNext} variant="black">
          {"Send Enrollment Request"}
        </Button>
      </div>
    </div>
  );
};

export default StepOne;
