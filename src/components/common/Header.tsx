import React from "react";
import { Button } from "../ui/button";
import { Dots, Thumb } from "@/icons";

const Header: React.FC = () => {
  const handleToggle = () => {
    console.log("Toggle clicked!");
  };

  return (
    <header className="w-full py-3 px-4 bg-white">
      <div className="flex items-center justify-between">
        <div />
        <div className="flex items-center gap-5 py-1">
          <Thumb width={18} height={20} />
          <h2 className="text-13 font-bold leading-4 text-light-primary dark:text-dark-gray-200 font-sf-pro">
            Passkey Authenticator
          </h2>
        </div>
        <Button
          onClick={handleToggle}
          className="border border-light-gray-300 dark:border-dark-gray-300 rounded-md w-6 h-6 flex items-center justify-center p-0 dark:bg-transparent"
        >
          <Dots
            width={14}
            height={14}
            className="text-light-gray-800 dark:text-dark-gray-200"
          />
        </Button>
      </div>
    </header>
  );
};

export default Header;
