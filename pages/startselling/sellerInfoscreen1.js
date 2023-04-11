import React from "react";
import CallToActions from "../../components/common/CallToActions";
import Seo from "../../components/common/Seo";
import DefaultHeader from "../../components/header/default-header";
import DefaultFooter from "../../components/footer/default";
import SearchBox  from "../../components/startSelling/sellerInfo1/listing-sidebar/components/SearchBox";
import Listings from "../../components/startSelling/sellerInfo1/listings";
import ListingSidebar from "../../components/startSelling/sellerInfo1/listing-sidebar";
import ListingPagination from "../../components/startSelling/sellerInfo1/listingPagination";

const sellerInfoscreen1= () => {
  return (
    <>
      <Seo pageTitle="Seller Info Screen" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

    

      <section className="pt-40 pb-40 bg-blue-2">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h1 className="text-30 fw-600">Seller Information</h1>
            </div>
            <div className="text-center justify-center mt-30" style={{ display: 'flex', alignItems: 'center' }}>
    <div className="mr-10 text-center justify-center text-20 fw-500 text-blue-1">Woodson And Co. Digital Store</div>
    <img className="mr-10" src="/img/startselling/check.png" width="22px" height="12px" alt="Check Icon" />
    <div className="fw-500 text-16 text-black">Verified</div>
</div>
            {/* End text-center */}
           
          </div>
          {/* End col-12 */}
        </div>
      </div>
    </section>
    <section className="pt-40 justify-content-center pb-20">
    <div className="container">
    <div className="row justify-content-center">
    <div className="col-xl-6 align-center">
    <div className="sidebar__item justify-center  -no-border">
    <h5 className="text-20 fw-500 mb-10">Search</h5>
    <SearchBox />
  </div>
  </div>
  </div>
  </div>
  </section>
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30 justify-between">
            <div className="col-xl-8">
              <div className="row  x-gap-10 y-gap-30">
                <Listings />
              </div>
              {/* End .row */}
              <ListingPagination />
            </div>
            {/* End .col */}

            <div className="col-xl-3">
              <ListingSidebar />
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

     

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default sellerInfoscreen1;