import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto my-14 flex gap-14 items-center">
      <div className="w-1/2">
        <img
          src="https://hello-summer.axiomthemes.com/wp-content/uploads/2017/11/img_4-copyright.png"
          alt=""
          className="rounded-[30px] w-full"
        />
      </div>
      <div className="w-1/2">
        <p className="family-grand text-[#dd5449] text-[35px]">our benefits</p>
        <h1 className="family-lucky text-[#422c18] text-[4.063em]">
          why choose us
        </h1>
        <p className="family-aleo text-[18px] text-[#746862]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore menim ad minim veniam,
          quis nostru.
        </p>
        <div className="flex items-center justify-between my-8">
          <div className="bg-[#fff8ef] px-14 py-8 rounded-[30px]">
            <img
              src="https://hello-summer.axiomthemes.com/wp-content/uploads/2017/11/icon_services_3.png"
              alt=""
            />
            <h2 className="text-[#422c18] text-xl text-center my-4 font-semibold">
              Diversity <br /> abounds
            </h2>
          </div>
          <div className="bg-[#fff8ef] px-14 py-8 rounded-[30px]">
            <img
              src="https://hello-summer.axiomthemes.com/wp-content/uploads/2017/11/icon_services_2.png"
              alt=""
            />
            <h2 className="text-[#422c18] text-xl text-center my-4 font-semibold">
              Natural <br /> all the way
            </h2>
          </div>
          <div className="bg-[#fff8ef] px-14 py-8 rounded-[30px]">
            <img
              src="https://hello-summer.axiomthemes.com/wp-content/uploads/2017/11/icon_services_1.png"
              alt=""
            />
            <h2 className="text-[#422c18] text-xl text-center my-4 font-semibold">
              Experienced <br /> and trustworthy
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
