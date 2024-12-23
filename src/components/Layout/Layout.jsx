import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
// import Dashboard from "../Dashboard/Dashboard";




function Layout() {
  return (
    <>
    <div className="flex ">
      <div className="flex h-screen">
        <Sidebar />
      </div>
      <div className="w-5/6 mx-8 bg-[#F8F9FF]">
        <div>
          <Header />
          </div>
          
          
          <Outlet/>
        </div>
        
      </div>
      <div>
      
</div>
      

      </>
  );
}

export default Layout;
