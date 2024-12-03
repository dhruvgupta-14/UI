import React from "react";
const Layout = (props) => {
  function changeHandler(e){
    if(props.type=="text") props.setYear(e.target.value)
    if(props.type=="email") props.setEmail(e.target.value)
  }
  return (
    <div className=" flex flex-col  items-center">
      <h1 className="text-white-200 text-5xl mt-[80px] flex  items-center">
        <span className="text-green-500 ">Webinar</span>.gg
      </h1>
      <div className="mt-[72px] flex flex-col items-center">
        <h1 className="text-white-200 text-3xl font-bold">{props.heading}</h1>
        <div className="flex flex-col items-center mt-[40px]">
          {props.heading2 && (
            <p className="text-grey-100  text-[12px] sm:text-[16px] md:text-[20px]">
              {props.heading2}
            </p>
          )}
          <input
            type={props.type}
            placeholder={props.placeholder}
            className="bg-gray-500 text-white-200 mt-[12px] rounded-xl px-4 py-2 w-[280px] placeholder:text-grey-100"
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
