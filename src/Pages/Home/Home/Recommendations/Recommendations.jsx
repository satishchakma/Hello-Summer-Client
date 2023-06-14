import React from "react";
import { useContext } from "react";
import { isDarkModeContext } from "../../../../Day night toggle/DayNight";

const Recommendations = () => {
  const isDarkMode = useContext(isDarkModeContext);
  return (
    <div className="bg-[#fcc044] py-24">
      <div className="container mx-auto flex justify-center items-center h-full">
        <div className="w-1/2">
          <h6 className="family-grand text-[#d39013] text-[35px]">
            Our Best Recommendations
          </h6>
          <h2 className="family-aleo text-[40px] font-bold text-white">
            Find Packing Instructions
          </h2>
        </div>
        <div className="w-1/2 text-right">
          <button
            className={`family-aleo ${
              isDarkMode ? "text-black" : "text-red"
            }  text-xl font-semibold ease-in-out transition-colors py-4 px-8 delay-10000  bg-white rounded-xl hover:bg-[#d39013] hover:text-white`}
          >
            View the Packing List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
