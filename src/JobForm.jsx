import React from "react";
import { useState } from "react";
import axios from "axios";

function JobForm() {

  const [jobData, setJobData] = useState({
    name: "",
    description: "",
    date:"2023-10-10",
  });

  const handleChange = (e) => {
    const { name, value, } = e.target;
    setJobData({
      ...jobData,
      [name]: value,
    });
  };

  const handleSubmit=async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/jobs/jobs', jobData);
      console.log("Job created successfully:", response.data);
    } catch (error) {
      console.error("Error creating job:", error);
    }
    }
      console.log(jobData);
  return (
    <form className="flex items-center justify-center h-80" onSubmit={handleSubmit}>
      <div className="p-2 border-2 border-slate-400  ">
        <div>
          <label className="flex justify-center font-bold">Job Form</label>
        </div>
        <div className="p-1 ">
          <label className="text-black">Name</label>
          <input type="text" className="border border-slate-300 ml-12" 
            id="name"  // Updated id to "name"
          name="name"  // Updated name to "name"
          value={jobData.name}
          onChange={handleChange}
          required

          />
        </div>
        <div className="p-1">
          <label className="text-black">Description</label>
          <input className="border border-slate-300 ml-3" type="text"
          id="description"
          name="description"
          value={jobData.description}
          onChange={handleChange}
          required

          />
        </div>
        {/* <div className="p-1">
          <label className="text-black">Date</label>
          <input className="border border-slate-300 ml-3" type="text"
          id="date"
          name="date"
          value={jobData.date}
          onChange={handleChange}
          required

          />
        </div> */}
        <div className="flex justify-center">
          <button className="m-2 p-1 w-1/3 border border-slate-300" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default JobForm;
