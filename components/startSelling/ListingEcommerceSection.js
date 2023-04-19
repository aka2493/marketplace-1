import Link from "next/link";
import { useState } from "react";
import Dropdown from "../common/Dropdown";

const ListingEcommerceSection = () => {
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
    <>
      <div className="row y-gap-10 mt-6 x-gap-20">
        <h2 className="text-22 fw-600  mt-30 mb-20 ">
          Select Ecommerce Category
        </h2>
        <div className="row mb-10">
          <div className="sm:justify-center justify-content">
            {dropdowns.map((dropdown, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <Dropdown key={index} {...dropdown} />
              </div>
            ))}
          </div>
        </div>

        <div className="col-auto">
          <h2 className="text-22 fw-600 mt-40">Enter Business Details</h2>
        </div>
        <div className="container mt-30">
          <div className="row mb-10">
            <div className="col-md-6 mb-3 mb-md-0">
              <h6 className="mb-2">Business Name</h6>
              <div className="form-input">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">
                  Enter your business name
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <h6 className="mb-2 ">Business Description</h6>
              <div className="form-input">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">
                  Enter your business description
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-center mt-40">
          <Link
            href="/startselling/addecommerceproductdetails"
            className="button h-50 w-250 -outline-blue-1 text-blue-1"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
};

export default ListingEcommerceSection;
