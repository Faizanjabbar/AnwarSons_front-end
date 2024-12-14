import React from "react";

function Usercard({ image, title, value, subtext }) {
  return (
    <div className="flex items-center space-x-4 bg-white p-4">
      <div className="flex items-center justify-center  rounded-full bg-green-100">
        {image}
      </div>
      <div>
        <h4 className="text-sm font-medium text-gray-500">{title}</h4>
        <p className="text-xl font-semibold text-gray-900">{value}</p>
        <p className="text-sm font-medium">{subtext}</p>
      </div>
    </div>
  );
}

export default Usercard;
