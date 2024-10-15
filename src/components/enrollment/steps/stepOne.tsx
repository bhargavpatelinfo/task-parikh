import React from "react";

import { Button } from "@/components/ui/button";
import { Question } from "@/icons";

const StepOne: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="bg-light-red-300 rounded-30 inline-flex items-center justify-center px-2 py-1 gap-1 mx-auto">
        <Question width={14} height={14} />
        <span className="text-light-red font-medium">Unenrolled</span>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-light-secondary text-lg font-semibold text-center">
          Enrollment required
        </h2>
        <p className="text-light-gray text-sm font-normal text-center">
          To enroll this person, please Send Enrollment Request.
        </p>
      </div>
      <Button variant={"default"}>Next</Button>
    </div>
  );
};

export default StepOne;
