import dynamic from "next/dynamic";
import Image from "next/image"
import Seo from "../../components/common/Seo";
import Header1 from "../../components/header/header-1";
import Overview from "../../components/ai-marketplace/ai-detail/Overview";
import TopBreadCrumb from "../../components/tour-single/TopBreadCrumb";
import DefaultFooter from "../../components/footer/default";
import AIDetailInfoTabs from "../../components/ai-marketplace/ai-detail/AIDetailInfoTabs";
import RatingTag from "../../components/ai-marketplace/ai-detail/RatingTag";

//import PropertyHighlights from "../../components/hotel-single/PropertyHighlights";

const AIDetail = () => {
    
return (
        <>
            <Seo pageTitle="AI Detail" />
            {/* End Page Title */}

            <div className="header-margin"></div>
            {/* header top margin */}

            <Header1 />
            {/* End Header 1 */}

            <TopBreadCrumb />
            {/* End top breadcrumb */}
     
        <div className="container px-30 bg-yellow-4 mt-10 py-30">
          <div className="row y-gap-30 justify-between items-end">
            <div className="col-xl-8">
            <div className="row y-gap-15 items-center md:justify-center md:text-center">
              <div className="col-lg-4">
                <div className="blogCard__image rounded-4">
                  <Image
                    width={100}
                    height={100}
                    className="cover w-100 img-fluid"
                    src="/img/ai-marketplace/jasper.png"
                    alt="image"
                  />
                </div>
              </div>
              <div className="col-lg-8">
              <div className="d-flex">
              <h3 className="text-26 text-dark-1 mt-10 md:mt-5">Jasper AI</h3>
             
              <div className="d-inline-block ml-10 mt-15">
              <i className="icon-star text-10 text-yellow-2"></i>
              <i className="icon-star text-10 text-yellow-2"></i>
              <i className="icon-star text-10 text-yellow-2"></i>
              <i className="icon-star text-10 text-yellow-2"></i>
           
            </div>
            </div>
              <div className="row mt-10">
                <div className="text-15 text-blue-1 col-auto">Listed By&nbsp;:&nbsp;Anna Watson</div>
                <div className="text-15 text-blue-1 col-auto">Version&nbsp;:&nbsp;4.8.0</div>
              </div>
              <div className="text-15 lh-16 mt-10 md:mt-5">
                Create amazing Art & Images,sales emails,marketing copy,Seo,love letters,captions,video scripts,blog posts
              </div>
           
            </div>
            
            </div>
            </div>
            <div class="col-xl-4  mb-80  d-flex justify-content-center text-center align-center">
            <button className="button text-center fw-400 text-14 bg-stebr-pink text-white mr-5 h-50 px-15 py-16">Save to Wishlist</button>
            <button className="button text-center fw-400 text-14 bg-dark-4 text-white h-50 px-15 py-16">Contact Seller</button>
          </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
  
               
       <AIDetailInfoTabs/>


           
          
            <DefaultFooter />
        </>
    );
};

export default dynamic(() => Promise.resolve(AIDetail), {
    ssr: false,
});
