import React from "react";
import image from "../../assets/Rectangle.svg";

const FindGreatWork = () => {
  return (
    <div className="container m-auto flex flex-col md:flex-row">
      <div className="flex-1">
        <img src={image} alt="" />
      </div>
      <div className="flex-1">
        <div>
          <p className="text-xl text-[#5248AA] mb-6">FOR SECURITY GUARD</p>
          <h2 className="text-5xl text-[#29273E] font-bold mb-3">
            Find great work
          </h2>
          <p className="text-lg text-[#818186]">
            Whether just starting out or looking to improve or grow your
            <br />
            business, our expert advice can help you on the road to success.
          </p>
        </div>
        <hr className="h-[2px] my-11 bg-[#5248AA]" />
        <div className="text-base mb-11 flex flex-row justify-between gap-10">
          <p>Find opportunities for every stage of your career </p>
          <p>Control when and where you work </p>
          <p>Explore different ways to earn </p>
        </div>
        <button className="px-10 py-4 border border-[#5248AA] rounded-lg text-base font-bold text-[#5248AA] hover:text-[#FFFFFF] hover:bg-[#5248AA] duration-300">
          FIND OPPORTUNITIES
        </button>
      </div>
    </div>
  );
};

export default FindGreatWork;
