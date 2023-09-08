import React from "react";
import image from "../../assets/Rectangle.svg";

const FindGreatWork = () => {
  return (
    <div className="container m-auto flex flex-col md:flex-row gap-10 p-3 md:p-6 mb-56 items-center">
      <div className="flex-1">
        <img
          className="bg-[#5248AA] pt-12 px-2  rounded-t-[50%]"
          src={image}
          alt=""
        />
      </div>
      <div className="flex-1">
        <div>
          <p className="text-base md:text-lg lg:text-xl text-[#5248AA] mb-3 md:mb-6">
            FOR SECURITY GUARD
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#29273E] font-bold mb-3">
            Find great work
          </h2>
          <p className="text-base md:text-lg text-[#818186]">
            Whether just starting out or looking to improve or grow your
            <br />
            business, our expert advice can help you on the road to success.
          </p>
        </div>
        <hr className="h-[2px] my-6 md:my-8 lg:my-11 bg-[#5248AA]" />
        <div className="text-sm md:text-base mb-6 md:mb-8 lg:mb-11 flex flex-row justify-between gap-3 lg:gap-10">
          <p>Find opportunities for every stage of your career </p>
          <p>Control when and where you work </p>
          <p>Explore different ways to earn </p>
        </div>
        <button className="px-5 lg:px-10 py-3 lg:py-4 border border-[#5248AA] rounded-lg text-sm lg:text-base font-bold text-[#5248AA] hover:text-[#FFFFFF] hover:bg-[#5248AA] duration-300">
          FIND OPPORTUNITIES
        </button>
      </div>
    </div>
  );
};

export default FindGreatWork;
