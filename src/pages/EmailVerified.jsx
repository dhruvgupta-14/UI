import React, { useState } from "react";
import Layout from "../component/Layout";
import { Link } from "react-router-dom";

const EmailVerified = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="bg-blue-700 w-[100vw] h-[100vh] flex flex-col  items-center">
      <Layout
        heading={"Let's Get Started"}
        type="email"
        setEmail={setEmail}
        placeholder="Your email"
      ></Layout>
      <Link>
      <button className={`${email?"bg-green-500":" bg-grey-100"} text-white-200 mt-[28px] rounded-xl px-4 py-2 w-[280px]` } disabled={!email}>Continue</button>
      </Link>
    </div>
  );
};

export default EmailVerified;
