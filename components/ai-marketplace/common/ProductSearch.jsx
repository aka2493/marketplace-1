import { useState,useEffect,useRef } from "react";

const ProductSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [filteredResults, setFilteredResults] = useState([]);
  const inputRef = useRef(null);

  const locationSearchContent = [
    {
      id: 1,
      name: "JasperAI",
     
    },
    {
      id: 2,
      name: "ALexa",
     
    },
    {
      id: 3,
      name: "GPT-3",
    
    },
    {
      id: 4,
      name: "BERT",
     
    },
    {
      id: 5,
      name: "Transformer",
     
    },
    {
      id: 6,
      name: "YOLO",
     
    },
  ];

  const handleOptionClick = (item) => {
    setSearchValue(item.name);
    setSelectedItem(item);
    setFilteredResults([]);
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    const results = locationSearchContent.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredResults(results);
  };

  useEffect(() => {
    inputRef.current.addEventListener("click", () => {
      setFilteredResults(locationSearchContent);
    });
  }, []);
  return (
    <>
      <div className="searchMenu-loc px-30 lg:py-20 lg:px-0 js-form-dd js-liverSearch">
        <div
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          data-bs-offset="0,22"
        >
     
          <div className="text-15 text-light-1 ls-2 lh-16">
            <input
              type="search"
              placeholder="Look for AI products"
              className="js-search js-dd-focus"
              value={searchValue}
              onChange={handleInputChange}
              ref={inputRef}
            />
          </div>
        </div>
        {/* End location Field */}

        <div className="shadow-2 dropdown-menu min-width-400">
          <div className="bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4">
            <ul className="y-gap-5 js-results">
            {filteredResults.map((item) => (
              <li
                className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1"
                key={item.id}
                role="button"
                onClick={() => handleOptionClick(item)}
              >
                <div className="d-flex">
                  <div className="ml-4">
                    <div className="text-15 lh-12 fw-500 js-search-option-target">
                      {item.name}
                    </div>
                  </div>
                </div>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSearch;
