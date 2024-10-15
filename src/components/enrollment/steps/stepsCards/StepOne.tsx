import React from "react";
import { Button } from "@/components/ui/button";
import { Question } from "@/icons";

interface StepOneProps {
  onNext: () => void;
}

const StepOne: React.FC<StepOneProps> = ({ onNext }) => {
  return (
    <div className="bg-white rounded-lg mt-6 pt-6 px-4 pb-4 border border-light-gray-600">
      <div className="flex flex-col items-center gap-6">
        <div className="bg-light-red-300 rounded-30 inline-flex items-center justify-center px-2 py-1 gap-1 mx-auto">
          <Question width={14} height={14} />
          <span className="text-light-red font-medium text-xs">{"Unenrolled"}</span>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-light-secondary text-lg font-semibold text-center">
            {"Enrollment required"}
          </h2>
          <p className="text-light-gray text-sm font-normal text-center">
            {"To enroll this person, please Send Enrollment Request."}
          </p>
        </div>
        <Button onClick={onNext} className="!bg-light-secondary rounded-md !text-light-gray-90 font-medium w-full transition duration-300 ease-in-out hover:!bg-transparent border-transparent hover:border-light-secondary border hover:!text-light-secondary">
          {"Send Enrollment Request"}
        </Button>
      </div>
    </div>
  );
};

export default StepOne;
