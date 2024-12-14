import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import CardContainer from "../CardContainer/CardContainer";
import Customers from "../Customers/Customers";
import RecordTable from "../RecordTable/RecordTable";

function Layout() {
  return (
    <div className="flex ">
      <div className="flex h-screen">
        <Sidebar />
      </div>
      <div className="w-5/6 mx-8 bg-[#F8F9FF]">
        <Header />
        <CardContainer />
        <Customers />
    <RecordTable/>
        
      </div>
      
      
      
    </div>
  );
}

export default Layout;
