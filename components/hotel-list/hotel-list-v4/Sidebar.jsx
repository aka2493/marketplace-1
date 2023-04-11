import DealsFilter from "../sidebar/DealsFilter";
import Map from "../sidebar/Map";
import SearchBox from "../sidebar/SearchBox";
import PopularFilters from "../sidebar/PopularFilters";
import AminitesFilter from "../sidebar/AminitesFilter";
import RatingsFilter from "../sidebar/RatingsFilter";
import GuestRatingFilters from "../sidebar/GuestRatingFilters";
import StyleFilter from "../sidebar/StyleFilter";
import NeighborhoddFilter from "../sidebar/NeighborhoddFilter";
import PirceSlider from "../sidebar/PirceSlider";

const Sidebar = () => {
  return (
    <>
      {/* <div className="sidebar__item -no-border position-relative">
        <Map />
      </div> */}
      {/* End find map */}

      <div className="sidebar__item pb-30 -no-border d-flex justify-between">
        <div> <h2 className="text-18 fw-700 mb-10">Filters</h2></div>
        <div><button className="button px-10 py-4 -dark-1 bg-blue-1 text-white w-100">Clear All</button></div>
      </div>

      <div className="sidebar__item pb-30">
        <h5 className="text-18 fw-500 mb-10">Length</h5>
        <div className="row x-gap-10 y-gap-30">
          <div className="col-12">
            <PirceSlider />
          </div>
        </div>
      </div>

      <div className="sidebar__item pb-30">
        <h5 className="text-18 fw-500 mb-10">Price</h5>
        <div className="row x-gap-10 y-gap-30">
          <div className="col-12">
            <PirceSlider />
          </div>
        </div>
      </div>

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Extensions</h5>
        <div className="sidebar-checkbox">
          <div className="row y-gap-5 items-center">
            <DealsFilter />
          </div>
        </div>
      </div>
      {/* End deals filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Listing Type</h5>
        <div className="sidebar-checkbox">
          <PopularFilters />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End popular filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Listing Promotion</h5>
        <div className="sidebar-checkbox">
          <StyleFilter />
        </div>
      </div>

      <div className="sidebar__item pb-0">
        <SearchBox />
      </div>
      {/* End search box */}

      <div className="sidebar__item -no-border">
        <h5 className="text-18 fw-500 mb-10">Categories</h5>
        <div className="sidebar-checkbox" style={{ height: '400px', overflowX: 'hidden', overflowY: 'scroll' }}>
          <AminitesFilter />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End Aminities filter */}

      {/* <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Star Rating</h5>
        <div className="row x-gap-10 y-gap-10 pt-10">
          <RatingsFilter />
        </div>
      </div> */}
      {/* End rating filter */}

      {/* <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Guest Rating</h5>
        <div className="sidebar-checkbox">
          <GuestRatingFilters />
        </div>
      </div> */}
      {/* End Guest Rating */}

      {/* <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Style</h5>
        <div className="sidebar-checkbox">
          <StyleFilter />
        </div>
      </div> */}
      {/* End style filter */}

      {/* <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Neighborhood</h5>
        <div className="sidebar-checkbox">
          <NeighborhoddFilter />
        </div>
      </div> */}
    </>
  );
};

export default Sidebar;
