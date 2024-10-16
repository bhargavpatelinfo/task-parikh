import React from "react";
import { Button } from "../ui/button";
import { Ellipsis, Fingerprint } from "lucide-react";

const Header: React.FC = () => {
  const handleToggle = () => {
    console.log("Toggle clicked!");
  };

  return (
    <header className="w-full py-3 px-4 bg-white hidden sm:block">
      <div className="flex items-center justify-between">
        <div />
        <div className="flex items-center gap-5 py-1">
          <Fingerprint size={18} className="text-light-blue-300 h-5" />
          <h2 className="text-13 font-bold leading-4 text-light-primary dark:text-dark-gray-200 font-sf-pro">
            Passkey Authenticator
          </h2>
        </div>
        <Button
          onClick={handleToggle}
          className="border border-light-gray-300 dark:border-dark-gray-300 rounded-md w-6 h-6 flex items-center justify-center p-0 dark:bg-transparent"
        >
          <Ellipsis size={14} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
