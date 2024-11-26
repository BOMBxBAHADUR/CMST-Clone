import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Services = () => {
  return (
    <div className="bg-[#f7f9f7] w-screen h-screen mt-[1.1rem]">
      <div className="flex items-center">
        <button className="mt-3 ml-20 text-xs font-semibold text-white px-3 py-2.5 bg-blue-600 rounded-md">
          Add Services
        </button>
        <i className="absolute fa-solid fa-magnifying-glass text-gray-500 ml-[83rem] mt-3"></i>
        <input
          className="text-sm mt-3 py-3 mr-14 ml-[50rem] pl-3 w-1/4 border border-gray-400 rounded-md outline-blue-500"
          placeholder="Search"
        />
      </div>
      <button className="p-3 active:bg-gray-400 mt-2 -ml-[80rem] font-semibold text-sm relative">
        <span
          className="underline underline-offset-[15px] text-gray-900"
          style={{ textDecorationColor: "blue" }}
        >
          SERVICES
        </span>
      </button>
      <hr className="w-[83%] ml-[5rem]" />
      <div className="mt-3 border ml-[5rem] bg-white text-sm font-medium mr-44">
        <div className="bg-[#f7f9f7] p-4 pb-3 flex gap-44">
          <i className="fa-regular fa-square text-gray-400 text-xl -mr-32"></i>
          <i className="fa-solid fa-arrow-up -mr-[9.6rem] mt-[0.4rem]"></i>
          <p className="text-gray-600">Service</p>
          <i className="fa-solid fa-arrow-up -mr-[9.6rem] mt-[0.4rem]"></i>
          <p className="text-gray-600">Price</p>
          <i className="fa-solid fa-arrow-up -mr-[9.6rem] mt-[0.4rem]"></i>
          <p className="text-gray-600">Description</p>
          <i className="fa-solid fa-arrow-down -mr-[9.6rem] mt-[0.4rem]"></i>
          <p className="text-gray-600">Created Date</p>
          <i className="fa-solid fa-arrow-up -mr-[9.6rem] mt-[0.4rem]"></i>
          <p className="text-gray-600 -mr-16">Actions</p>
        </div>
        <div className="flex justify-center mb-2">
          <p className="font-normal"> No data available</p>
        </div>
      </div>
      <div className="flex border ml-[5rem] mr-44 bg-white mt-[0.03rem] p-4">
        <p className="text-xs text-gray-500 ml-[60rem]">
          Rows per page:
          <select className="outline-none ml-6">
            <option>5</option>
            <option>10</option>
            <option>25</option>
            <option>All</option>
          </select>
          <i className="fa-solid fa-minus text-[0.4rem] text-gray-400 ml-10"></i>
          <i className="fa-solid fa-chevron-left text-[0.5rem] text-gray-400 ml-10"></i>
          <i className="fa-solid fa-chevron-right text-[0.5rem] text-gray-400 ml-6"></i>
        </p>
      </div>
    </div>
  );
};

export default Services;
