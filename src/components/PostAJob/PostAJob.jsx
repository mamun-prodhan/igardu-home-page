import React from "react";
import leftImage from "../../assets/left.svg";
import rightImage from "../../assets/right.svg";
import man2 from "../../assets/man2.png";
import man3 from "../../assets/man3.png";
import man4 from "../../assets/man4.png";
import man5 from "../../assets/man5.png";
import man6 from "../../assets/man6.png";

const PostAJob = () => {
  return (
    <div className="container mx-auto mb-10 md:mb-16 lg:mb-28 p-3 md:p-6 lg:p-0 relative">
      {/*  */}
      <img
        className="hidden lg:block absolute top-[50%] left-[10%] translate-x-[-50%] translate-y-[-50%]"
        src={leftImage}
        alt=""
      />
      <img
        className="hidden lg:block absolute top-[50%] right-[-10%] translate-x-[-50%] translate-y-[-50%]"
        src={rightImage}
        alt=""
      />
      <div className="absolute top-[10%] left-[20%] translate-x-[-50%] translate-y-[-50%] ps-1 md:ps-2 pt-1 md:pt-2 pe-4 md:pe-6 pb-1 md:pb-2  rounded-s-full bg-[#A5A4F7] bg-opacity-25">
        <img
          className="rounded-full border-2 border-[#FFF]"
          src={man2}
          alt=""
        />
      </div>
      <div className="absolute top-[70%] lg:top-[80%] right-[-2%] translate-x-[-50%] translate-y-[-50%] ps-1 md:ps-2 pt-4 md:pt-6 pe-1 md:pe-2 pb-1 md:pb-2  rounded-b-full bg-[#A5A4F7] bg-opacity-25">
        <img
          className="rounded-full border-2 border-[#FFF]"
          src={man3}
          alt=""
        />
      </div>
      <div className="absolute top-[-5%] md:top-[1%] left-[4%] translate-x-[-50%] translate-y-[-50%] ps-2 pt-2 pe-2 pb-6  rounded-t-full bg-[#A5A4F7] bg-opacity-20">
        <img
          className="rounded-full border-2 border-[#FFF]"
          src={man4}
          alt=""
        />
      </div>
      <img
        className="absolute top-[97%] left-[90%] translate-x-[-50%] translate-y-[-50%] rounded-full border-2 border-[#FFF]"
        src={man5}
        alt=""
      />
      <img
        className="absolute top-[80%] md:top-[90%] right-[80%] translate-x-[-50%] translate-y-[-50%] rounded-full border-2 border-[#FFF]"
        src={man6}
        alt=""
      />
      {/*  */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-[#29273E]">
        More then <br />
        <span className="text-[#5248AA]">100000</span> people engaged
      </h2>
      <p className="text-base md:text-lg text-center text-[#818186] mt-3 lg:mt-5">
        Do you know what could beat the exciting felling of having a new
        computer? <br /> Make you own making your own computer from scratch is
        not only fun to do <br /> but cheaper as well.
      </p>
      <div className="text-center mt-8 lg:mt-12">
        <button className="px-6 md:px-8 lg:px-14 py-2 md:py-3 lg:py-5 bg-[#5248AA] text-[#FFFFFF] border border-[#5248AA] hover:text-[#5248AA] hover:bg-[#FFF] duration-300 text-sm  md:text-base font-bold rounded-md">
          POST A JOB
        </button>
      </div>
    </div>
  );
};

export default PostAJob;
