import React from "react";
import img from "../../assets/images/footer.png";
import img1 from "../../assets/images/icon.png";
import img2 from "../../assets/images/cc.png";
import img3 from "../../assets/images/Group 15.png";
import "./footer.css";
const Footer = ({services, help, about, bottom}) => {
  return (
    <>
      <div className="bg-[#0D2612] w-full pt-[70px]">
        <div className="container footer">
          <div className="flex flex-col gap-3 then">
            <img
              className="w-[98px] h-[62px] object-contain"
              src={img}
              alt=""
            />
            <p className="lg:text-[20px] md:text-[19px] sm:text-[18px] text-[#EBE2F4] w-[200px]  leading-7">
              START YOUR GAME WITH THE BEST
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-3 md:gap-[100px] sm:gap-[70px] gap-[20px] lg:gap-[130px] sm:grid-cols-2 grid-cols-1 lg:ml-[-100px]">
            <div className="flex flex-col gap-[19px]">
              <p className="lg:text-[22px] md:text-[20px] sm-text-[18px] text-[18px] font-[500] text-[#fff]">
                Services
              </p>
              {
                services?.map((text, inx) => (
                <p id={inx} className="text-[15px] lg:text-[17px] sm:text-[16px] text-[#fff]">
                  {text}
                </p>
                ))
              }
            </div>
            <div className="flex flex-col gap-[19px] col">
              <p className="lg:text-[22px] md:text-[20px] sm-text-[18px] text-[18px] font-[500] text-[#fff]">
                Help
              </p>
              {
                help?.map((text, inx) => (
                <p id={inx} className="text-[15px] lg:text-[17px] sm:text-[16px] text-[#fff]">
                  {text}
                </p>
                ))
              }
            </div>
            <div className="flex flex-col gap-[19px] col">
              <p className="lg:text-[22px] md:text-[20px] sm-text-[18px] text-[18px] font-[500] text-[#fff]">
                About Us
              </p>
              {
                about?.map((text, inx) => (
                <p id={inx} className="text-[15px] lg:text-[17px] sm:text-[16px] text-[#fff]">
                  {text}
                </p>
                ))
              }
            </div>
          </div>
        </div>
        <div className="container mt-6 pb-10">
          <img className=" mb-10" src={img1} alt="" />
          <hr />
          <div className="flex items-center justify-between mt-[25px] desc">
            <img src={img2} alt="" />
            <div className="flex gap-4 items-center">
              <img src={img3} alt="" />
              <p className="text-[16px] text-[#fff]">Help Center</p>
            </div>
            {
                bottom?.map((text, inx) => (
                <p id={inx} className="text-[16px] text-[#fff]">
                  {text}
                </p>
                ))
              }
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
