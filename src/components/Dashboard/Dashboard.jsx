import React from 'react'

 import Jobs from "../Jobs/Jobs";
// import Customers from "../Customers/Customers"; 
// import Bills from "../Bills/Bills";
//  import RecordTable from "../RecordTable/RecordTable";
import CardContainer from "../CardContainer/CardContainer";




function Dashboard() {
  return (
    <>
      <div>
        <CardContainer />
        <Jobs/>
    {/* <RecordTable/> */}
      {/* 
      <Customers />
      <Bills/> */}
    
        
      </div>
      
    </>
  )
}

export default Dashboard
