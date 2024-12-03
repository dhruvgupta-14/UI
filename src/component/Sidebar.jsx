import React from "react";
import { Link } from "react-router-dom";
import image from   "../assets/UrbanMinimalist.jpeg"
import { BookUser, Home, ReceiptText, Settings, Users } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="h-[400px] w-[300px] md:h-[100vh] border-r-2  flex flex-col py-4 px-4 shadow-md shadow-grey-100">
      <div className="flex flex-row justify-between items-center mt-2">
        <Link> 
          <h1 className="text-white-200 flex  text-[14px] items-center bg-blue-700 py-2 px-4 rounded-xl">
            <span className="text-green-500 ">Webinar</span>.gg
          </h1>
        </Link>
        <img src={image} alt="" className="w-[36px] h-[40px] rounded-full"/>
      </div>
      <div className="mt-6 flex flex-col py-2 gap-y-3">
      <div className="text-grey-100 flex justify-between items-center mx-1 hover:bg-blue-300 p-2 rounded-lg hover:text-blue-500">
        <span>Home</span>
        <Home></Home>
      </div>
      <div  className="text-grey-100 flex justify-between items-center mx-1 hover:bg-blue-300 p-2 rounded-lg hover:text-blue-500">
        <span >Webinars</span>
        <Users></Users>
      </div>
      <div  className="text-grey-100 flex justify-between items-center mx-1 hover:bg-blue-300 p-2 rounded-lg hover:text-blue-500">
        <span >Billing</span>
        <ReceiptText></ReceiptText>
      </div>
      <div  className="text-grey-100 flex justify-between items-center mx-1 hover:bg-blue-300 p-2 rounded-lg hover:text-blue-500">
        <span >User Managemet</span>
        <BookUser></BookUser>
      </div>
      <div  className="text-grey-100 flex justify-between items-center mx-1 hover:bg-blue-300 p-2 rounded-lg hover:text-blue-500">
        <span >Settings</span>
        <Settings></Settings>
      </div>
      
      </div>

    </div>
  );
};

export default Sidebar;
