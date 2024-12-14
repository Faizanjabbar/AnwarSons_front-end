import React from "react";
import search from "../../assets/search.svg";

export default function Header() {
  return (
    <div className="flex justify-between items-center m-2">
      {/* Username Section */}
      <div className="">
        <h1 className="font-semibold text-2xl text-black ">Hello Evano 👋🏼,</h1>
      </div>

      {/* Search Section */}
      <div className="relative bg-white">
        <img
          src={search}
          alt="search"
          className="absolute top-1/2 left-3 transform -translate-y-1/2 w-4 h-4"
        />
        <input
          type="search"
          placeholder="Search here"
          className="border-2 border-slate-300 rounded-md pl-10 pr-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}
