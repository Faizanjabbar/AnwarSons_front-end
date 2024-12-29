import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

function CreateCustomer() {

//     const [customerdata, setCustomerdata] = useState({
//         id:"",
//         name: "",
//         email: "",
//         phone: "",
//         address: "",
//         createdat: "",
//         updatedat:"",

//  })


    const navigate = useNavigate();
    const handleCancel = () => {
        navigate("/Customers");
      };

    
    //   const handleChange = (e) => {
    //     const { id, name,email,phone,address,createdat,updatedat } = e.target;
    //     setCustomerdata({
    //       ...customerdata,
    //       [name]: value,
    //     });
    //   };
    
    
  return (

    <form>
    {/* Main div */}
    <div>
      <div className="font-bold text-2xl text-center text-gray-700 mx-auto">Customer Details</div>
      <div className="border-4 border-slate-500 rounded-lg p-6 shadow-lg w-1/2 mx-auto">
        <div className="flex justify-center items-center mb-4">
          <label className="border border-black border-r-0 w-28 p-2">ID</label>
          <input type="text" className="border border-black p-2 flex-1" />
        </div>
        <div className="flex justify-center items-center mb-4">
          <label className="border border-black border-r-0 w-28 p-2">Name</label>
          <input type="text" className="border border-black p-2 flex-1" />
        </div>
        <div className="flex justify-center items-center mb-4">
          <label className="border border-black border-r-0 w-28 p-2">Email</label>
          <input type="text" className="border border-black p-2 flex-1" />
        </div>
        <div className="flex justify-center items-center mb-4">
          <label className="border border-black border-r-0 w-28 p-2">Phone</label>
          <input type="text" className="border border-black p-2 flex-1" />
        </div>
        <div className="flex justify-center items-center mb-4">
          <label className="border border-black border-r-0 w-28 p-2">Address</label>
          <input type="text" className="border border-black p-2 flex-1" />
        </div>
        <div className="flex justify-center items-center mb-4">
          <label className="border border-black border-r-0 w-28 p-2">Created at</label>
          <input type="text" className="border border-black p-2 flex-1" />
        </div>
        <div className="flex justify-center items-center mb-4">
          <label className="border border-black border-r-0 w-28 p-2">Updated at</label>
          <input type="text" className="border border-black p-2 flex-1" />
                  </div>
                  <div className="flex justify-center items-center mb-4 gap-x-2">
          
                      <button type="submit" className='border-2 rounded-lg border-slate-500 p-1 text-lg font-bold hover hover:bg-slate-500 hover:text-white hover:font-semibold '>Submit</button>
                      <button type="submit" className='border-2 rounded-lg border-slate-500 p-1 text-lg font-bold hover hover:bg-slate-500 hover:text-white hover:font-semibold' onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  </form>
  
  )
}

export default CreateCustomer
