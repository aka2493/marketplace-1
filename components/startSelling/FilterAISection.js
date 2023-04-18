import { useState } from "react";
import Dropdown from "../common/Dropdown";

const FilterTemplatesSection = () => {
  const [typevalue, setTypevalue] = useState("Select AI Product");
 const [categoryvalue, setCategoryvalue] = useState("Category Type");

  const handleTypeChange = (value) => {
    setTypevalue(value);
  };

 const handlecategoryvalueChange = (value) => {
    setCategoryvalue(value);
  };

  
  const dropdowns = [
    {
      title: "Type of Value",
      value: typevalue,
      options: ["AI models", "AI Chatbots","AI Content Subscriptions","AI Apps","AI Business","AI Code"],
      onChange: handleTypeChange,
    },
    
    {
        title: "Type of Category",
        value: categoryvalue,
        options: ["Text AI","Voice AI","Visual AI","Interactive AI","Analytic AI","Functional AI"],
        onChange: handlecategoryvalueChange,
      },
  ];


  return (
    <>
    <div className="row mb-10">
    <div className="d-flex flex-wrap   sm:justify-center justify-content">
    
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

export default FilterTemplatesSection;
