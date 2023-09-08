import React from "react";

const PostAJob = () => {
  return (
    <div className="container mx-auto mb-10 md:mb-16 lg:mb-28 p-3 md:p-6 lg:p-0">
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
