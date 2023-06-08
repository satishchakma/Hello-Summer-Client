import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#422c18]">
      <div className="container mx-auto grid grid-cols-4 py-24 gap-5">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="text-white text-center flex flex-col gap-7 items-center">
          <img
            src="https://hello-summer.axiomthemes.com/wp-content/uploads/2017/11/icon-1.png"
            alt=""
          />
          <h2 className="family-aleo text-3xl ">About Us</h2>
          <p className="text-[#a8a09b]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt
          </p>
        </div>
        <div className="text-white text-center flex flex-col gap-7 items-center">
          <img
            src="https://hello-summer.axiomthemes.com/wp-content/uploads/2017/11/icon-2.png"
            alt=""
          />
          <h2 className="family-aleo text-3xl ">Address</h2>
          <p className="text-[#a8a09b]">
            Address: 123, Hello Summer Way, <br /> Palmyra, VA 22233 Postal
            <br /> mail: P.O.Box 123, Palmyra, VA 22333
          </p>
        </div>
        <div className="text-white text-center flex flex-col gap-7 items-center">
          <img
            src="https://hello-summer.axiomthemes.com/wp-content/uploads/2017/11/icon-3.png"
            alt=""
          />
          <h2 className="family-aleo text-3xl ">Contacts</h2>
          <p className="text-[#a8a09b]">
            Office hours: 9:00am – 5:00pm <br />
            <span className="text-[#fcc044]">Telephone: (123) 456-78-90</span>
            <br />
            <span className="text-[#fcc044]"> Email: info@example.com</span>
          </p>
        </div>
      </div>
      <p className="text-center text-white pb-8">
        copyright @PHero All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
