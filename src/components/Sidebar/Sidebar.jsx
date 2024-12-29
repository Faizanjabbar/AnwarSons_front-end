import React from 'react'
import dashboard from "../../assets/dashboard.svg";
import dashicon from "../../assets/dashicon.svg";
import job from "../../assets/job.svg";
import customer from "../../assets/customer.svg";
import bills from "../../assets/bills.svg";
import { useNavigate } from 'react-router-dom';
import sidebarbg from "../../assets/sidebarbg.png";



export default function Sidebar() {

  const navigate = useNavigate();


  return (
    
        <>
      <div className="relative border-r-2 border-slate-400  ">
         {/* Background image */}
              <img
                src={sidebarbg}
                alt="background"
                className="absolute inset-0 w-full h-full opacity-30 object-cover z-10"
              />
        <div className="flex justify-center p-4 z-10 ">
          <img src={dashboard} alt="setting" className="w-9 h-9 z-10" />
          <h1 className="font-bold text-2xl text-slate-500 pl-1 z-10 ">Dashboard</h1>
        </div>
        <div className="flex justify-start z-10 m-2 hover:border-2 hover:rounded-xl hover:border-slate-400 hover:bg-slate-100">
          <img src={dashicon} alt="setting" className="p-2 z-10" />
          <button className="text-slate-500 text-lg z-10" onClick={() => navigate("/")} >Dashboard</button>
        </div>
        <div className="flex justify-start z-10  m-2 hover:border-2 hover:rounded-xl hover:border-slate-400 hover:bg-slate-100">
          <img src={job} alt="setting" className="p-2 z-10" />
          <button className="text-slate-500 text-lg z-10" onClick={() => navigate("/jobs")}>Jobs</button>
        </div>
        <div className="flex justify-start m-2 z-10 hover:border-2 hover:rounded-xl hover:border-slate-400 hover:bg-slate-100">
          <img src={customer} alt="setting" className="p-2" />
          <button className="text-slate-500 text-lg z-10" onClick={() => navigate("/customers")}>Customers</button>
        </div>
        <div className="flex justify-start m-2 hover:border-2 hover:rounded-xl hover:border-slate-400 hover:bg-slate-100">
          <img src={bills} alt="setting" className="p-2 z-10" />
          <button className="text-slate-500 text-lg z-10" onClick={() => navigate("/bills")} >Bills</button>
        </div>
        
      </div> 

      

</>


    
  )
}
