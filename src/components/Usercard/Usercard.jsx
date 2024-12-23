import React from "react";
// import cardbg from "../../assets/cardbg.png";
import cardbg from "../../assets/cardbg.png";

function Usercard({ image, title, value, subtext }) {
  return (
    <div className="relative flex items-center space-x-4 p-4 border rounded-lg overflow-hidden">
      {/* Background image */}
      <img
        src={cardbg}
        alt="background"
        className="absolute inset-0 w-full h-full opacity-20 object-cover z-10"
      />
      
      {/* User content */}
      <div className="flex items-center justify-center rounded-full bg-green-100 z-10">
        {image}
      </div>
      <div className="z-10">
        <h4 className="text-sm font-medium text-gray-500">{title}</h4>
        <p className="text-xl font-semibold text-gray-900">{value}</p>
        <p className="text-sm font-medium">{subtext}</p>
      </div>
    </div>
  );
}

export default Usercard;
