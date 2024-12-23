import React from "react";
import search from "../../assets/search.svg";
// import Dropdown from "../Dropdown/Dropdown";
import RecordTable from "../RecordTable/RecordTable";
import { Select, Space } from "antd";

function Bills() {
  //handlechange for antd Select

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div>
      <div className="bg-slate-200 flex justify-between items-center p-2 ">
        <div className="px-2">
          <h1 className="text-black text-2xl font-semibold">All Bills</h1>
          <h3 className="text-[#24C49F] font-medium">Active Bills</h3>
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
              className="border bg-[#F8F9FF] border-gray-300 rounded-md pl-10 pr-3 py-1 text-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Code for dropdown */}

          <div className="flex items-center justify-center">
            {/* <Dropdown /> */}

            <Space wrap>
              <Select
                defaultValue="Select"
                style={{
                  width: 100,
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
        </div>
      </div>

      <div>
        <RecordTable />
      </div>
    </div>
  );
}

export default Bills;
