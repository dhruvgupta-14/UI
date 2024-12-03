import React from "react";
import Sidebar from "../component/Sidebar";
import Card from "../component/Card";
import MeetingSchedule from "../component/MeetingSchedule";
import { Calendar, Plus, Videotape } from "lucide-react";

const User = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar></Sidebar>
      <div>
        <div className="bg-black h-[15vh] w-[80vw]"></div>
        <div className="ml-10 flex">
          <Card></Card>
          <div className="flex flex-col gap-2 mt-7 ml-9">
            <p className="text-[12px] font-normal">Monday,3 December</p>
            <h1 className="text-blue-500 font-bold text-[28px] flex gap-2 items-center">
              Good Morning,Robert!{" "}
              <img
                src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/waving-hand.png"
                alt=""
                className="h-10 w-10"
              />{" "}
            </h1>
            <div className="mt-3 flex">
              <MeetingSchedule></MeetingSchedule>
              <div className="ml-[72px] px-8 py-8 justify-between flex flex-col shadow-md shadow-gray-300 rounded-md w-[220px] h-[144px] text-blue-700">
                <div className="flex justify-between items-center  ">
                  <Calendar className="bg-green-500 border rounded-md p-2 h-10 w-10"></Calendar>
                  <Plus className="bg-green-500 border rounded-md p-2 h-10 w-10 "></Plus>
                </div>
                <div className="mt-4">
                  <Videotape className="bg-green-500 border rounded-md p-2 h-10 w-10"></Videotape>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
