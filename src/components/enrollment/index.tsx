import React from "react";
import Layout from "../Layout";
import Steps from "./steps";

const Enrollment: React.FC = () => {
  return (
    <Layout>
      <div className="w-full py-6 px-4 mt-3">
        <img
          src="/images/mailchimp.png"
          width={131}
          height={32}
          className="max-w-32 w-full mx-auto"
          alt="Mailchimp Logo"
        />
        <Steps />
      </div>
    </Layout>
  );
};

export default Enrollment;
