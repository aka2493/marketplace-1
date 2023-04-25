import Link from "next/link"
import { useState } from "react";
import Dropdown from "../common/Dropdown";

const ListingAISection = () => {
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
    <div className="row y-gap-10 mt-6 x-gap-20">
   <h2 className="text-22 fw-600 mt-30 mb-20 ">Select AI Product Details</h2>
    <div className="row mb-10">
    <div className="d-flex flex-wrap   sm:justify-center justify-content">
    
      {dropdowns.map((dropdown, index) => (
        <div key={index} className="col-lg-3 col-md-6 mb-4">
        <Dropdown key={index} {...dropdown} />
        </div>
      ))}
   
    </div>
  </div>
  <div className="col-md-4 mt-40">
<h6 className="text-22 fw-600 mb-30">Where is your product best Used?</h6>
<div className="form-input">
<input  type="text" required />

</div>
</div>
 <div className="row justify-center mt-40">
<Link
         href={{pathname:"/startselling/addAIproductdetails",
         query: { typevalue: typevalue },}}
         className="button h-50 w-250 -outline-blue-1 text-blue-1"
        
       >
         Get Started 
       </Link>
 </div>
</div>
    </>
  );
};

export default ListingAISection;