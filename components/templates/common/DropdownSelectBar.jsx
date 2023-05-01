import { useState } from "react";

const DropdownSelectBar = () => {
  const [priceValue, setPriceValue] = useState("I'm Looking For");
  const [amenitiesValue, setAmenitiesValue] = useState("Select Category");
  const [styleValue, setStyleValue] = useState("Technology/Platform");

  const handlePriceValueChange = (value) => {
    setPriceValue(value);
  };

  const handleAmenitesValueChange = (value) => {
    setAmenitiesValue(value);
  };

  const handleStyleChange = (value) => {
    setStyleValue(value);
  };

  const dropdowns = [
    {
      title: "I'm Looking For",
      value: priceValue,
      options: ["Less than $500", "$500 - $1000", "$1000 - $2000", "$2000+"],
      onChange: handlePriceValueChange,
    },
    {
      title: "Select Category",
      value: amenitiesValue,
      options: ["Swimming pool", "Laundry", "Outdoor spaces", "Security"],
      onChange: handleAmenitesValueChange,
    },
    {
      title: "Technology/Platform",
      value: styleValue,
      options: ["Modern", "Bohemian", "Minimalist", "Contemporary"],
      onChange: handleStyleChange,
    },
  ];

  // for neighborhood code

  const [selectedValues, setSelectedValues] = useState([]);

  return (
    <>

      {dropdowns.map((dropdown, index) => (
        <div className="col-auto" key={index}>
          <div className="dropdown js-dropdown js-amenities-active">
            <div
              className="dropdown__button d-flex items-center text-14 rounded-100 border-light px-15 h-34"
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
                      className={`${item === dropdown.value ? "text-blue-1 " : ""
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
    </>
  );
};

export default DropdownSelectBar;
