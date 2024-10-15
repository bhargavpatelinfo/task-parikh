import React from "react";
import Header from "./common/Header";

const Layout: React.FC = ({ children }) => {
  return (
    <main className="flex flex-col justify-center items-center max-w-320 w-full mx-auto bg-light-gray-500">
      <Header />
      {children}
    </main>
  );
};

export default Layout;
