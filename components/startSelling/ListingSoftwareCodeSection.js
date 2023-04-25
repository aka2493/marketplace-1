import Link from "next/link"
import { useState } from "react";

const ListingSoftwareCodeSection = () => {
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
      options: ["Softwares", "Code"],
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
    <div className="row y-gap-10 mt-6 x-gap-20">
   <h2 className="text-22 fw-600  mt-30 mb-20 ">Select Software/Code Type</h2>
  <div className="row mb-10">
  <div className="d-flex flex-wrap   sm:justify-center justify-content">
      {dropdowns.map((dropdown, index) => (
        <div  className="col-lg-3 col-md-6 mb-4" key={index}>
          <div className="dropdown js-dropdown  js-amenities-active">
            <div
              className="dropdown_button d-flex  w-full items-center justify-center text-14 rounded-100 border-light py-30 px-60 h-34"
              data-bs-toggle="dropdown"
              data-bs-auto-close="true"
              aria-expanded="false"
              data-bs-offset="0,10"
            >
              <span className="js-dropdown-title">{dropdown.value}</span>
              <i className="icon icon-chevron-sm-down text-7 ml-10" />
            </div>
            {/* End dropdown__button */}

            <div className="toggle-element -dropdown js-click-dropdown dropdown-menu">
              <div className="text-15 y-gap-15 js-dropdown-list">
                {dropdown.options.map((item, index) => (
                  <div key={index}>
                    <button
                      className={`${
                        item === dropdown.value ? "text-blue-1 " : ""
                      }d-block js-dropdown-link`}
                      onClick={() => dropdown.onChange(item)}
                    >
                      {item}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            {/* End dropdown-menu */}
          </div>
          {/* End dropdown */}
        </div>
      ))}
</div>
      </div>
      {/* End .col-auto */}
      <div className="col-md-5 mt-40">
<h6 className="text-22 fw-600 mb-30">Enter Version&nbsp;(optional)</h6>
<div className="form-input">
<input  type="text" required />
<label className="lh-1 text-16 text-light-1">

</label>
</div>
</div>
<div className="row justify-center mt-40">
<Link
         href="/startselling/addSoftwarecodedetails"
         className="button h-50 w-250 -outline-blue-1 text-blue-1"
       >
         Get Started 
       </Link></div></div>
    </>
  );
};

export default ListingSoftwareCodeSection;
