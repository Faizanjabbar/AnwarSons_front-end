import React from "react";

import { Table } from "antd";
import { Pagination,Button } from "antd";



function RecordTable() {

 


  const dataSource = [
      {
          key: "1",
          customername: "zee",
          company: "Radiator",
          phone: "0300000000",
          email: "abc@gmail.com",
          country: "10 Downing Street",
          status:    <Button
          className="font-semibold bg-[#A6E7D8] text-[#18826A] border border-[#40C4A5] 
                     hover:bg-blue-500 hover:text-white"
        >
          Active
        </Button>
        
      },
    {
      key: "2",
      customername: "zee",
      company: "Radiator",
      phone: "0300000000",
      email: "abc@gmail.com",
      country: "10 Downing Street",
        status:    <Button
          className="font-semibold bg-[#A6E7D8] text-[#18826A] border border-[#40C4A5] 
                     hover:bg-blue-500 hover:text-white"
        >
          Active
        </Button>,
    },
    {
      key: "3",
      customername: "zee",
      company: "Radiator",
      phone: "0300000000",
      email: "abc@gmail.com",
      country: "10 Downing Street",
      status:    <Button
          className="font-semibold bg-[#A6E7D8] text-[#18826A] border border-[#40C4A5] 
                     hover:bg-blue-500 hover:text-white"
        >
          Active
        </Button>
    },
    {
      key: "4",
      customername: "zee",
      company: "Radiator",
      phone: "0300000000",
      email: "abc@gmail.com",
      country: "10 Downing Street",
      status:    <Button
          className="font-semibold bg-[#A6E7D8] text-[#18826A] border border-[#40C4A5] 
                     hover:bg-blue-500 hover:text-white"
        >
          Active
        </Button>
    },
    {
      key: "5",
      customername: "zee",
      company: "Radiator",
      phone: "0300000000",
      email: "abc@gmail.com",
      country: "10 Downing Street",
      status:    <Button
          className="font-semibold bg-[#A6E7D8] text-[#18826A] border border-[#40C4A5] 
                     hover:bg-blue-500 hover:text-white"
        >
          Active
        </Button>
    },
    {
      key: "6",
      customername: "zee",
      company: "Radiator",
      phone: "0300000000",
      email: "abc@gmail.com",
      country: "10 Downing Street",
      status:    <Button
          className="font-semibold bg-[#A6E7D8] text-[#18826A] border border-[#40C4A5] 
                     hover:bg-blue-500 hover:text-white"
        >
          Active
        </Button>
      },
      {
        key: "7",
        customername: "zee",
        company: "Radiator",
        phone: "0300000000",
        email: "abc@gmail.com",
        country: "10 Downing Street",
        status:    <Button
          className="font-semibold bg-[#A6E7D8] text-[#18826A] border border-[#40C4A5] 
                     hover:bg-blue-500 hover:text-white"
        >
          Active
        </Button>
      },
      {
        key: "8",
        customername: "zee",
        company: "Radiator",
        phone: "0300000000",
        email: "abc@gmail.com",
        country: "10 Downing Street",
        status:    <Button
          className="font-semibold bg-[#A6E7D8] text-[#18826A] border border-[#40C4A5] 
                     hover:bg-blue-500 hover:text-white"
        >
          Active
        </Button>
      },
      {
        key: "9",
        customername: "zee",
        company: "Radiator",
        phone: "0300000000",
        email: "abc@gmail.com",
        country: "10 Downing Street",
        status:    <Button
          className="font-semibold bg-[#A6E7D8] text-[#18826A] border border-[#40C4A5] 
                     hover:bg-blue-500 hover:text-white"
        >
          Active
        </Button>
      },
      {
        key: "10",
        customername: "zee",
        company: "Radiator",
        phone: "0300000000",
        email: "abc@gmail.com",
        country: "10 Downing Street",
        status:    <Button
          className="font-semibold bg-[#A6E7D8] text-[#18826A] border border-[#40C4A5] 
                     hover:bg-blue-500 hover:text-white"
        >
          Active
        </Button>
      },
      {
        key: "11",
        customername: "zee",
        company: "Radiator",
        phone: "0300000000",
        email: "abc@gmail.com",
        country: "10 Downing Street",
        status:    <Button
          className="font-semibold bg-[#A6E7D8] text-[#18826A] border border-[#40C4A5] 
                     hover:bg-blue-500 hover:text-white"
        >
          Active
        </Button>
      },
      {
        key: "12",
        customername: "zee",
        company: "Radiator",
        phone: "0300000000",
        email: "abc@gmail.com",
        country: "10 Downing Street",
        status:    <Button
          className="font-semibold bg-[#A6E7D8] text-[#18826A] border border-[#40C4A5] 
                     hover:bg-blue-500 hover:text-white"
        >
          Active
        </Button>
      },
      {
        key: "13",
        customername: "zee",
        company: "Radiator",
        phone: "0300000000",
        email: "abc@gmail.com",
        country: "10 Downing Street",
        status:    <Button
          className="font-semibold bg-[#A6E7D8] text-[#18826A] border border-[#40C4A5] 
                     hover:bg-blue-500 hover:text-white"
        >
          Active
        </Button>
      },
  ];

  const columns = [
    {
      title: "Customer Name",
      dataIndex: "customername",
      key: "1",
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "2",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "3",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "4",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "5",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "6",
    },
  ];

    
    
    
  <Pagination defaultCurrent={1}  total={50}  />;
  return (
    <div>
          <Table
              dataSource={dataSource}
              columns={columns}
              pagination={{pageSize: 4}}
           
          />
    </div>
  );
}

export default RecordTable;
