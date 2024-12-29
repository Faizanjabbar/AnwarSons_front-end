import React from "react";
//  import jobForm from "./JobForm";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Jobs from "./components/Jobs/Jobs";
import Customers from "./components/Customers/Customers";
import Bills from "./components/Bills/Bills";
import Dashboard from "./components/Dashboard/Dashboard";
import CreateJob from "./components/CreateJob/CreateJob";
import CreateCustomer from "./components/CreateCustomer/CreateCustomer";



function App() {
  return (
    // <div>
    //   {/* <jobForm /> */}
    //   <Layout/>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/bills" element={<Bills />} />
          
        </Route>
        <Route path="/CreateJob" element={<CreateJob />} />
        <Route path="/CreateCustomer" element={<CreateCustomer/>} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
