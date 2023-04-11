import React from "react";
import Image from "next/image";
import CallToActions from "../../components/common/CallToActions";
import Seo from "../../components/common/Seo";
import Header1 from "../../components/header/header-1";
import DefaultFooter from "../../components/footer/default";

import Listings from "../../components/startSelling/sellerInfo/listings";
import ListingSidebar from "../../components/startSelling/sellerInfo/listing-sidebar";
import ListingPagination from "../../components/startSelling/sellerInfo/listingPagination";
import RecentPost from "../../components/startSelling/sellerInfo/listing-sidebar/components/RecentPost"
const sellerInfoscreen= () => {
  return (
    <>
      <Seo pageTitle="Seller Info Screen" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header1 />
      {/* End Header 1 */}

      <section className="pt-30 pb-40 bg-blue-2">
      <div className="container">
        <div className="row ">
          <div className="col-12">
            <div className="text-center justify-center" >
              <h1 className="text-26 fw-600">Seller Information</h1>
            </div>
            
         
           
            <div className="justify-center  mt-10" style={{ display: 'flex', alignItems: 'center' }}>
    <div className="mr-10  justify-center text-20 fw-500 text-dark-4">Woodson And Co. Digital Store</div>
   
    <Image
    width={22}
    height={12}
    src="/img/startselling/check.png"
    alt="Check Icon"
    className="mr-10"
  />
    <div className="fw-500 text-16 text-black">Verified</div>
</div>
<div className="justify-center mt-10 mb-10" style={{ display: 'flex', alignItems: 'center' }}>

<Image
    width={120}
    height={120}
    src="/img/startselling/avatar.jpg"
    alt="avatar"
    className="text-center"
  />
</div>
<div className="d-flex justify-center mb-20">
<h2 className="text-20 fw-500 text-black lh-1 mr-10">Karry Woodson
</h2>

<Image
    width={20}
    height={20}
    src="/img/startselling/watch.svg"
    alt="watch"
    
  />
</div>
            {/* End text-center */}
           
            <div className="text-16  text-dark-4 mt-20 justify-center  text-center fw-500"  style={{ display: 'flex', alignItems: 'center' }} >Creative Saas and Software HTML5 Template.You can use Softdash as a better way to 
              present and promote your start-up mobile apps,saas applications,software and
               digital products.Users will love your site because it gives them a unique user experience&nbsp;(UX),&nbsp;clean,modern & beautiful design.
              </div>
           <RecentPost/>
                   
          </div>
          {/* End col-12 */}
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

export default sellerInfoscreen;