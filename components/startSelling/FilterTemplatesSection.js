import { useState } from "react";
import Dropdown from "../common/Dropdown";

const FilterTemplatesSection = () => {
  const [sellingvalue, setsellingvalue] = useState("I am selling");
  const [categoryvalue, setcategoryvalue] = useState("Category");
  const [Technologyvalue, setTechnologyvalue] = useState("Technology/Platform");

  const handlesellingvalueChange = (value) => {
    setsellingvalue(value);
  };

  const handlecategoryvalueChange = (value) => {
    setcategoryvalue(value);
  };

  const handleTechnologyvalueChange = (value) => {
    setTechnologyvalue(value);
  };

  const dropdowns = [
    {
      title: "Type of Place",
      value: sellingvalue,
      options: ["Templates", "Themes"],
      onChange: handlesellingvalueChange,
    },
    {
      title: "Price",
      value: categoryvalue,
      options: ["Business","Arts"],
      onChange: handlecategoryvalueChange,
    },
    {
      title: "Amenities",
      value: Technologyvalue,
      options: ["Shopify","Wordpress"],
      onChange: handleTechnologyvalueChange,
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
