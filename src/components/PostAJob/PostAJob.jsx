import React from "react";

const PostAJob = () => {
  return (
    <div className="container mx-auto mb-28">
      <h2 className="text-5xl text-center font-bold text-[#29273E]">
        More then <br />
        <span className="text-[#5248AA]">100000</span> people engaged
      </h2>
      <p className="text-lg text-center text-[#818186] mt-5">
        Do you know what could beat the exciting felling of having a new
        computer? <br /> Make you own making your own computer from scratch is
        not only fun to do <br /> but cheaper as well.
      </p>
      <div className="text-center mt-12">
        <button className="px-14 py-5 bg-[#5248AA] text-[#FFFFFF] border border-[#5248AA] hover:text-[#5248AA] hover:bg-[#FFF] duration-300 text-base font-bold rounded-md">
          POST A JOB
        </button>
      </div>
    </div>
  );
};

export default PostAJob;
