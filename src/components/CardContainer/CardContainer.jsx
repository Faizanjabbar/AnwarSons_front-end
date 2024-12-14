import React from "react";
import Usercard from "../Usercard/Usercard";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";

function CardContainer() {
  return (
    <div className="flex space-x-4 bg-white p-2  rounded-xl justify-between ">
      <Usercard
        image={<img src={icon1} alt="icon" />}
        title="Total Customers"
        value="5423"
        subtext="this month"
        
          />
            <Usercard
        image={<img src={icon2} alt="icon" />}
        title="Total Jobs"
        value="1893"
        subtext="this month"
        
          />
            <Usercard
        image={<img src={icon3} alt="icon" />}
        title="Total Jobs"
        value="189"
        subtext="Active"
        
      />
    </div>
  );
}

export default CardContainer;
