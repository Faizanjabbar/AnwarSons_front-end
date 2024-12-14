import React from 'react'
import dashboard from "../../assets/dashboard.svg";
import dashicon from "../../assets/dashicon.svg";
import job from "../../assets/job.svg";
import customer from "../../assets/customer.svg";
import bills from "../../assets/bills.svg";

export default function Sidebar() {
  return (
    
        
          <div className="bg-white border-r-2 border-slate-400  ">
        <div className="flex justify-center p-4 ">
          <img src={dashboard} alt="setting" className="w-9 h-9" />
          <h1 className="font-bold text-2xl text-slate-500 pl-1 ">Dashboard</h1>
        </div>
        <div className="flex justify-start m-2 hover:border-2 hover:rounded-xl hover:border-slate-400 hover:bg-slate-100">
          <img src={dashicon} alt="setting" className="p-2" />
          <button className="text-slate-500 text-lg ">Dashboard</button>
        </div>
        <div className="flex justify-start  m-2 hover:border-2 hover:rounded-xl hover:border-slate-400 hover:bg-slate-100">
          <img src={job} alt="setting" className="p-2" />
          <button className="text-slate-500 text-lg">Jobs</button>
        </div>
        <div className="flex justify-start m-2 hover:border-2 hover:rounded-xl hover:border-slate-400 hover:bg-slate-100">
          <img src={customer} alt="setting" className="p-2" />
          <button className="text-slate-500 text-lg">Customers</button>
        </div>
        <div className="flex justify-start m-2 hover:border-2 hover:rounded-xl hover:border-slate-400 hover:bg-slate-100">
          <img src={bills} alt="setting" className="p-2" />
          <button className="text-slate-500 text-lg">Bills</button>
        </div>
      </div> 




    
  )
}
