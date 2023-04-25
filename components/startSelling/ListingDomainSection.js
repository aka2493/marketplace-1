import Link from "next/link"
import { useState } from "react";
import Dropdown from "../common/Dropdown";
import CallToActions from "./CallToActions";

const ListingDomainSection = () => {
  const [categoryvalue, setcategoryvalue] = useState("Category");

  const handlecategoryvalueChange = (value) => {
    setcategoryvalue(value);
   
  };

  const dropdowns = [
    {
      title: "Categories",
      value: categoryvalue,
      options: [
        "Automobiles",
        "Arts and Culture",
        "Beauty and Cosmetics",
        "Business and Startups",
        "Cloud Servers and Security",
        "Fashion",
        "Digital Marketing",
        "Entertainment",
        "Education",
      ],
      onChange: handlecategoryvalueChange,
    },
  ];

  return (
    <div>
                    <CallToActions/>
          <div className="pt-30 mt-20 border-top-light" />
          {/* border separation */}
          
        <div className="container">
        <div className="col-auto">
          <h2 className="text-22 fw-600 mt-20 mb-30">Select Listing Category</h2>
            <div className="row mb-10">
              <div className="sm:justify-center justify-content">
                {dropdowns.map((dropdown, index) => (
                  <div key={index} className="col-lg-3 col-md-6 mb-4">
                    <Dropdown key={index} {...dropdown} />
                  </div>
                ))}
              </div>
            </div>
            </div>
            <div className="col-auto">
            <h2 className="text-22 fw-600 mt-40">Enter Domain Details</h2>
            </div>
        <div className="container mt-30">
        <div className="row mb-10">
           <div className="col-md-6 mb-3 mb-md-0">
           <h6 className="mb-2">Domain Name</h6>
             <div className="form-input">
             <input type="text" required />
             <label className="lh-1 text-16 text-light-1">
            Enter Domain Name
             </label>
             </div>
             </div>
           <div className="col-md-6">
           <h6 className="mb-2 ">Domain Keyword</h6>
           <div className="form-input">
           <input type="text" required />
           <label className="lh-1 text-16 text-light-1">
          Enter Domain Keyword
           </label>
           </div>
           </div>
         </div>
       </div>
     </div>
     <div className="row justify-center mt-40">
     <div className="col-auto">
     <Link
     href="/startselling/addDomainproductdetails"
     className="button h-50 w-250 -outline-blue-1 text-blue-1"
   >
     Get Started 
   </Link>
   </div>
  </div>
     </div>
  
  );
};

export default ListingDomainSection;
