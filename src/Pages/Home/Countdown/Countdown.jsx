import React from "react";

import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{ fontSize: "65px" }}
        className="grid lg:grid-cols-4 grid-cols-2 gap-4"
      >
        <div className="family-lucky flex flex-col bg-[#df9a18] p-4 ml-3 rounded-[30px] text-white">
          {days} <span className="text-3xl family-aleo">days</span>
        </div>
        <div className="family-lucky flex flex-col bg-[#df9a18] p-4 ml-3 rounded-[30px] text-white">
          {hours} <span className="text-3xl family-aleo">hours</span>
        </div>
        <div className="family-lucky flex flex-col bg-[#df9a18] p-4 ml-3 rounded-[30px] text-white">
          {minutes} <span className="text-3xl family-aleo">minutes</span>
        </div>
        <div className="family-lucky flex flex-col bg-[#df9a18] p-4 ml-3 rounded-[30px] text-white">
          {seconds} <span className="text-3xl family-aleo">seconds</span>
        </div>
      </div>
    </div>
  );
}

const Countdown = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 15975670); // 10 minutes timer
  return (
    <div className="bg-[#fcc044] py-24">
      <div className="container mx-auto flex justify-center items-center h-full flex-col lg:flex-row">
        <div className="lg:w-1/2 w-full px-7">
          <h6 className="family-grand text-[#d39013] text-[35px]">
            until first session
          </h6>
          <h2 className="family-aleo text-[40px] font-bold text-white">
            Don’t Miss the First Day <br />
            of Summer Camp!
          </h2>
        </div>
        <div className="lg:w-1/2 w-full px-7">
          <MyTimer expiryTimestamp={time} />
        </div>
      </div>
    </div>
  );
};

export default Countdown;
