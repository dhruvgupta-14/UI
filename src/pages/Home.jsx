import React, { useState } from "react";
import Layout from "../component/Layout";
import { Link } from "react-router-dom";

const Home = () => {
  const [year, setYear] = useState("");
  return (
    <div className="bg-blue-700 w-[100vw] h-[100vh] flex flex-col  items-center">
      <Layout
        heading={"Verify Your Age"}
        heading2={"Please Confirm Your Birth Year.This Data Will Not be Stored"}
        type={"text"}
        setYear={setYear}
        placeholder="Your Birth Year"
      ></Layout>
      <Link to="/email">
        <button
          className={`${
            year.length >= 4 ? "bg-green-500" : " bg-grey-100"
          } text-white-200 mt-[28px] rounded-xl px-4 py-2 w-[280px]`}
          disabled={year.length < 4}
        >
          Continue
        </button>
      </Link>
    </div>
  );
};

export default Home;
