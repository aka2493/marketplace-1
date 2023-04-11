import { useState } from "react";

const Dropdown = ({ title, value, options, onChange }) => {
  const [dropdownValue, setDropdownValue] = useState(value);

  const handleDropdownChange = (value) => {
    setDropdownValue(value);
    onChange(value);
  };

  return (
   
      <div className="dropdown js-dropdown  js-amenities-active">
        <div
          className="dropdown_button d-flex  w-full items-center justify-center text-14 rounded-100 border-light py-30 px-60 h-34"
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          aria-expanded="false"
          data-bs-offset="0,10"
        >
          <span className="js-dropdown-title">{dropdownValue}</span>
          <i className="icon icon-chevron-sm-down text-7 ml-10" />
        </div>

        <div className="toggle-element -dropdown js-click-dropdown dropdown-menu">
          <div className="text-15 y-gap-15 js-dropdown-list">
            {options.map((option, index) => (
              <div key={index}>
                <button
                  className={`${
                    option === dropdownValue ? "text-blue-1 " : ""
                  }d-block js-dropdown-link`}
                  onClick={() => handleDropdownChange(option)}
                >
                  {option}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
   
  );
};

export default Dropdown;