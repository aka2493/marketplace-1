import ProductSearch from "./common/ProductSearch";
import CategorySearch from "./common/CategorySearch";

const MainFilterSearchBox = () => {
 
  return (
    <>
      <div className="mainSearch -col-2 border-light bg-white px-15 py-15 lg:px-20 lg:pt-5 lg:pb-20 rounded-4 mt-30" style={{margin: '0 auto'}}>
        <div className="button-grid items-center d-flex justify-content-between align-items-center">
     
            <CategorySearch />
          <ProductSearch/>
             
          <div className="button-item">
            <button className="mainSearch__submit button -dark-1 py-20 px-35  rounded-4 bg-yellow-1 text-dark-1">
              <i className="icon-search text-20 mr-10" />
              Search
            </button>
          </div>
          {/* End search button_item */}
        </div>
      </div>
    </>
  );
};

export default MainFilterSearchBox;
