import React from "react";
import Header from "./common/Header";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div className="bg-light-black-12 h-3 w-[95%] rounded-tl-10 rounded-tr-10 absolute top-0 left-0 right-0 mx-auto -mb-2 sm:hidden"></div>
      <main className="flex flex-col justify-center items-center max-w-full sm:max-w-320 w-full mx-auto bg-light-gray-500 pt-3 sm:pt-0 rounded-2xl sm:rounded-none mt-3 sm:mt-0 relative z-10">
        <Header />
        {children}
      </main>
    </>
  );
};

export default Layout;
