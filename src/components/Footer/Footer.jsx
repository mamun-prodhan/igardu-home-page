import React from "react";
import FooterItem from "../FooterItem/FooterItem";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import logo from "../../assets/logo.svg";

const Footer = () => {
  const datas = [
    {
      item1: "About us",
      item2: "Contact us",
      item3: "How it works",
    },
    {
      item1: "Complaints about a member ",
      item2: "Secure contacts",
      item3: "Terms of use",
    },
    {
      item1: "Privacy notice",
      item2: "Guaranteed T&Cs",
      item3: "Sitemap",
    },
    {
      item1: "Post a job",
      item2: "Trade sign up",
      item3: "Find trades",
    },
  ];

  return (
    <div className=" bg-[#29273E] pt-56 pb-28 px-24 relative">
      {/*  */}
      <div className="container m-auto bg-[#5248AA] py-12 px-36 rounded-[10px] flex items-center gap-40 absolute lg:top-[-1%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <div className="flex-1">
          <h2 className="text-4xl mb-3 text-[#F8FAF7] font-bold">
            We are here to help
          </h2>
          <p className="text-lg mb-3 text-[#F8FAF7] text-justify">
            Reach out today for expert guidance and personalized solutions. We
            are here to help you achieve your goals.
          </p>
          <button className="px-10 py-4 border border-[#FFF] rounded-lg text-base font-bold text-[#FFF] hover:text-[#5248AA] hover:bg-[#FFF] duration-300">
            CONTACT US
          </button>
        </div>
        <div className="flex-1">
          <img className="mx-auto" src={logo} alt="logo" />
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col md:flex-row items-center justify-between text-lg text-[#FFF] mb-28">
        {datas.map((data, index) => (
          <FooterItem data={data} key={index}></FooterItem>
        ))}
      </div>
      <div className="flex gap-9 mb-8">
        <p className="text-lg font-bold text-[#FFF]">Follow us</p>
        <div className="flex gap-4">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
        </div>
      </div>
      <hr className="h-[1px] bg-[#888798]" />
      <p className="text-[#FFF] font-semibold text-center my-4">
        <span className="me-3">&copy;</span> 2023 Igardu - All rights reserved
      </p>
      <hr className="h-[1px] bg-[#888798]" />
    </div>
  );
};

export default Footer;
