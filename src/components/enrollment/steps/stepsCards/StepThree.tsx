import React from "react";
import { Button } from "@/components/ui/button";
import { Security } from "@/icons";

const StepThree: React.FC = () => {
  return (
    <React.Fragment>
      <div className="bg-white rounded-lg mt-6 pt-6 px-4 pb-4 border border-light-gray-600">
        <div className="flex flex-col items-center gap-6">
          <div className="bg-light-red-300 rounded-3xl inline-flex items-center justify-center px-2 py-1 gap-1 mx-auto w-20 h-20">
            <Security width={32} height={32} />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-light-secondary text-lg font-semibold text-center">
              {"Enrollment failed"}
            </h2>
            <p className="text-light-gray text-sm font-normal text-center">
              {"The enrollment failed. Please ask the customer to enroll again or block?"}
            </p>
          </div>
          <Button className="!bg-light-secondary rounded-md !text-light-gray-90 font-medium w-full transition duration-300 ease-in-out hover:!bg-transparent  border-transparent hover:border-light-secondary border hover:!text-light-secondary">
           {" Send Enrollment Request"}
          </Button>
        </div>
      </div>
      <a
        href="#"
        className="py-2 px-3 text-light-gray font-medium mt-6 text-center block"
      >
       {" Reset"}
      </a>
    </React.Fragment>
  );
};

export default StepThree;
