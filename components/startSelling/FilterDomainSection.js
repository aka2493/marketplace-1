import { useState } from "react";
import Dropdown from "../common/Dropdown";

const FilterDomainSection = () => {
  const [categoryvalue, setcategoryvalue] = useState("Category");
  
  const handlecategoryvalueChange = (value) => {
    setcategoryvalue(value);
    console.log(value,"aka")
  };

  const dropdowns = [
    {
      title: "Categories",
      value: categoryvalue,
      options: ["Automobiles","Arts and Culture","Beauty and Cosmetics","Business and Startups","Cloud Servers and Security","Fashion","Digital Marketing","Entertainment","Education"],
      onChange: handlecategoryvalueChange,
    },
    
  ];

  return (
    <>
    <div className="row mb-10">
    <div className="sm:justify-center justify-content">
    
      {dropdowns.map((dropdown, index) => (
        <div key={index} className="col-lg-3 col-md-6 mb-4">
        <Dropdown key={index} {...dropdown} />
        </div>
      ))}
   
    </div>
  </div>
    </>
  );
};

export default FilterDomainSection;
