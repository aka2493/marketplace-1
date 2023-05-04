import { useState } from "react";

const FilterTabs = () => {
  const [filterOption, setFilterOption] = useState("ai_products");

  const filterOptions = [
    { label: "AI products", value: "ai_products" },
    { label: "Domains", value: "domains" },
    { label: "Templates", value: "templates" },
    { label: "Software Code", value: "softwarecode" },
    { label: "Ecommerce", value: "ecommerce" },
    { label: "websites", value: "websites" },
   
  ];

  return (
    <div className="tabs__controls row x-gap-10 y-gap-10">
      {filterOptions.map((option) => (
        <div className="col-auto" key={option.value}>
          <button
            className={`tabs__button text-14 fw-500 px-20 py-10 rounded-4 bg-light-2 js-tabs-button ${
              filterOption === option.value ? "is-tab-el-active" : ""
            }`}
            onClick={() => setFilterOption(option.value)}
          >
            {option.label}
          </button>
        </div>
      ))}
    </div>
  );
};

export default FilterTabs;