import { useState } from "react";

const MultiSelect = () => {

  const [selectedValues, setSelectedValues] = useState([]);

  const data = [
    { label: "photography", value: "Photography" },
    { label: "wordpress", value: "Wordpress" },
    { label: "arts", value: "Arts" },
    { label: "loreum1", value: "Loreum Ipsum" },
    { label: "loreum2", value: "Loreum" },
  ];

  return (
    <>
    <div className="col-auto">
    <div className="relative ">
      <button
        className="d-flex items-center px-15 py-5 lh-16 text-14 rounded-100 border-light"
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        aria-expanded="false"
        data-bs-offset="0,10"
      >
        {selectedValues.length === 0
          ? "Loreum Ipsum"
          : selectedValues.join(", ")}
        <i className="icon icon-chevron-sm-down text-7 ml-15" />
      </button>
      {/* End dropdown__button */}

      <div className="dropRating dropdown-menu dropdown-menu-bottom">
        <div className="px-20 py-20 rounded-4 bg-white border-light">
          <h5 className="text-15 fw-500 mb-15">Keywords</h5>
          <div className="sidebar-checkbox">
            {data.map((item) => (
              <div
                key={item.value}
                className="row y-gap-10 items-center justify-between"
              >
                <div className="col-auto">
                  <div className="form-checkbox d-flex items-center">
                    <input
                      type="checkbox"
                      name={item.value}
                      checked={selectedValues.includes(item.value)}
                      onChange={(e) => {
                        const { checked, name } = e.target;
                        setSelectedValues((prevValues) =>
                          checked
                            ? [...prevValues, name]
                            : prevValues.filter((value) => value !== name)
                        );
                      }}
                    />
                    <div className="form-checkbox__mark">
                      <div className="form-checkbox__icon icon-check" />
                    </div>
                    <div className="text-15 ml-10">{item.label}</div>
                  </div>
                </div>
                {/* End .col */}
                
              </div>
            ))}
          </div>
          {/* End sidebar-checkbox */}
          <button className="d-block text-14 fw-500 underline text-blue-1 mt-15">
            Show all 20
          </button>
        </div>
      </div>
      {/* End dropdown-menu */}
    </div>
    {/* End relative */}
  </div>
  {/* End .col-auto */}
  </>

  );
};

export default MultiSelect;