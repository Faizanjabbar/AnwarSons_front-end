import React from "react";
import search from "../../assets/search.svg";
// import Dropdown from "../Dropdown/Dropdown";
import RecordTable from "../RecordTable/RecordTable";

import { useNavigate } from "react-router-dom";

import { Select, Space } from "antd";

function Customers() {

  const navigate = useNavigate();


  //handlechange for antd Select

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div>
      <div className="bg-slate-200 flex justify-between items-center p-2 ">
        <div className="px-2">
          <h1 className="text-black text-2xl font-semibold">All Customers</h1>
          <h3 className="text-[#24C49F] font-medium">Active Members</h3>
        </div>
        <div className="flex">
          {/* Search Section */}
          <div className="relative">
            <img
              src={search}
              alt="search"
              className="absolute top-1/2 left-3 transform -translate-y-1/2 w-4 h-4"
            />
            <input
              type="search"
              placeholder="Search here"
              className="  bg-[#F8F9FF] border border-gray-300 rounded-md pl-10 pr-3 py-1 my-0.5 mr-1 text-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Code for dropdown */}

          <div className="flex items-center justify-center ">
            {/* <Dropdown /> */}
            <Space wrap>
              <Select
                defaultValue="Select"
                style={{
                  width: 100,
                  height: 34,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "Yiminghe",
                    label: "yiminghe",
                  },
                  {
                    value: "disabled",
                    label: "Disabled",
                    disabled: true,
                  },
                ]}
              />
            </Space>
          </div>
          <div>
            <button className="flex bg-[#F8F9FF]  border border-slate-300 rounded-md ml-1 items-center justify-center p-1  text-md  my-0.5" onClick={() => navigate("/CreateCustomer")}>Create Customer</button>
          </div>
        </div>
      </div>

      <div>
        <RecordTable />
      </div>
    </div>
  );
}

export default Customers;
