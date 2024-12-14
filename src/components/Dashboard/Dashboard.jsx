import React from "react";
import dashboard from "./assets/dashboard.svg";
import dashicon from "./assets/dashicon.svg";

function Dashboard() {
  return (
    <div className="flex h-screen">
      <div className="w-1/6  bg-white border-r-2 border-slate-400 ">
        <div className="flex justify-center p-4 ">
          <img src={dashboard} alt="setting" className="w-9 h-9" />
          <h1 className="font-bold text-2xl text-slate-500 pl-1 ">Dashboard</h1>
        </div>
        <div className="flex justify-start m-2 hover:border-2 hover:rounded-xl hover:border-slate-400 hover:bg-slate-100">
          <img src={dashicon} alt="setting" className="p-2" />
          <button className="text-slate-500 text-lg ">Dashboard</button>
        </div>
        <div className="flex justify-start  m-2 hover:border-2 hover:rounded-xl hover:border-slate-400 hover:bg-slate-100">
          <img src={dashicon} alt="setting" className="p-2" />
          <button className="text-slate-500 text-lg">Jobs</button>
        </div>
        <div className="flex justify-start m-2 hover:border-2 hover:rounded-xl hover:border-slate-400 hover:bg-slate-100">
          <img src={dashicon} alt="setting" className="p-2" />
          <button className="text-slate-500 text-lg">Customers</button>
        </div>
        <div className="flex justify-start m-2 hover:border-2 hover:rounded-xl hover:border-slate-400 hover:bg-slate-100">
          <img src={dashicon} alt="setting" className="p-2" />
          <button className="text-slate-500 text-lg">Bills</button>
        </div>
      </div>

      <div className="w-5/6 bg-[#F8F9FF]">
         <div className="flex justify-between items-center   m-4">
          {/* Username Section */}
          <div className="">
            <h1 className="font-semibold text-2xl text-black pl-1">
              Hello Evano 👋🏼,
            </h1>
          </div>

          {/* Search Bar Section */}
          <div className="bg-white">
            <input
              type="search"
              placeholder="Search here"
              className="border-2 border-slate-200 rounded-md px-3 py-1 text-sm focus:outline-none "
            />
          </div>
        </div> 
      </div>
    </div>
  );
}

export default Dashboard;
