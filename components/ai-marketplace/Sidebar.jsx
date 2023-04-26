import AIFilters from "./sidebar/AIFilters";
import PriceSlider from "./sidebar/PriceSlider";
import RatingsFilter from "./sidebar/RatingFilters";
import SubscriptionFilter from "./sidebar/SubscriptionFilter";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar__item pb-40 mt-10  -no-border d-flex justify-between">
        <div>
          {" "}
          <h2 className="text-18 fw-600 text-blue-1  mb-10">Filters</h2>
        </div>
        <div>
          <button className="button px-10 py-4 -dark-1 bg-blue-1 text-white w-100">
            Clear All
          </button>
        </div>
      </div>

      <div className="sidebar__item pb-30">
        <h5 className="text-18 fw-500 mb-10">Price</h5>
        <div className="row x-gap-10 y-gap-30">
          <div className="col-12">
            <PriceSlider />
          </div>
        </div>
      </div>
      {/* End Price filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Subscription Plans</h5>
        <div className="sidebar-checkbox">
          <SubscriptionFilter />
        </div>
        {/* End Sidebar-checkbox */}
      </div>

      <div className="sidebar__item">
      <h5 className="text-18 fw-500 mb-10">Star Rating</h5>
      <div className="row x-gap-10 y-gap-10 pt-10">
        <RatingsFilter />
      </div>
    </div> 
      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Types of AI Apps</h5>
        <div className="sidebar-checkbox">
          <AIFilters />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
    
     
       
    </>
  );
};

export default Sidebar;
