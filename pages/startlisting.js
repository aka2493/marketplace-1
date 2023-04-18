import dynamic from "next/dynamic";
import Image from "next/image";
import Slider from "react-slick";
import {useState} from "react";
import Seo from "../components/common/Seo";
// import DefaultHeader from "../components/header/default-header";
import Header1 from "../components/header/header-1";

import DefaultFooter from "../components/footer/default";
import Link from "next/link";
import LocationTopBar from "../components/common/LocationTopBar";

import CallToActions from "../components/startSelling/CallToActions";
import FilterTemplatesSection  from "../components/startSelling/FilterTemplatesSection";
import FilterSoftwareCodeSection  from "../components/startSelling/FilterSoftwareCodeSection";
import FilterDomainSection from "../components/startSelling/FilterDomainSection";
import FilterEcommerceSection from "../components/startSelling/FilterEcommerceSection";
import FilterAISection from "../components/startSelling/FilterAISection"; 

const StartListing = () => {
  const [selectedButton, setSelectedButton] = useState("button1");

  const handleButtonClick = (itemId) => {
    setSelectedButton(itemId);
  };
  

  var settings = {
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const catContent = [
    { id: "button1",
       catName: "Domains",
       img:"/img/startselling/display.png" },
    { id: "button2", icon: "icon-destination",img:"/img/startselling/display.png" ,catName: "Templates" },
    { id: "button3", icon: "icon-ski",img:"/img/startselling/display.png", catName: "Software Code" },
    { id: "button4", icon: "icon-home", img:"/img/startselling/display.png",catName: "Ecommerce" },
    { id: "button5", icon: "icon-car", img:"/img/startselling/display.png",catName: "AI Products" },
    { id: 6, icon: "icon-yatch",img:"/img/startselling/display.png", catName: " Plugins" },
    { id: 7, icon: "icon-tickets", img:"/img/startselling/display.png",catName: "Websites" },
  ];
  return (
    <>
      <Seo pageTitle="StartListing" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header1 />
      {/* End Header 1 */}

      <LocationTopBar />
      {/* End location top bar section */}

      <section className="layout-pb-md">
        <div className="container mb-10">
          
        <div className="col-auto">
        <h2 className="text-26 fw-600">What you want to sell?</h2>
        <p className=" sectionTitle__text mt-5 sm:mt-0">
     (Choose one)
      </p>
        
      </div>

          <div className="row x-gap-20 y-gap-20 items-center pt-20 mt-30 item_gap-x10">
          <Slider {...settings}>
          {catContent.map((item) => (
            <div className="col" key={item.id}>
              <button onClick={() =>handleButtonClick(item.id)} className={selectedButton === item.id ? "selected d-flex flex-column justify-center px-20 py-15 rounded-4 border text-white border-pink bg-pink text-16 lh-14 fw-500 col-12":"d-flex flex-column justify-center px-20 py-15 rounded-4 border-light text-16 lh-14 fw-500 col-12"}
              >
             
              <Image
              width={30}
              height={30}
              src={item.img}
              alt="image"
             className="mb-10"
            />
                {item.catName}
              </button>
            </div>
          ))}
          <div>
          
          </div>
        </Slider>
          </div>
          {/* End .row */}
          <div className="pt-20 mt-20 border-top-light" />
          {/* border separation */} 
          {selectedButton === "button1" &&
              <div>
                    <CallToActions/>
          <div className="pt-30 mt-20 border-top-light" />
          {/* border separation */}
          
        <div className="container">
        <div className="col-auto">
          <h2 className="text-22 fw-600 mt-20 mb-30">Select Listing Category</h2>
          <FilterDomainSection/>
          </div>
          <div className="col-auto">
          <h2 className="text-22 fw-600 mt-40">Enter Domain Details</h2>
          </div>
      <div className="container mt-30">
      <div className="row mb-10">
         <div className="col-md-6 mb-3 mb-md-0">
         <h6 className="mb-2">Domain Name</h6>
           <div className="form-input">
           <input type="text" required />
           <label className="lh-1 text-16 text-light-1">
          Enter Domain Name
           </label>
           </div>
           </div>
         <div className="col-md-6">
         <h6 className="mb-2 ">Domain Keyword</h6>
         <div className="form-input">
         <input type="text" required />
         <label className="lh-1 text-16 text-light-1">
        Enter Domain Keyword
         </label>
         </div>
         </div>
       </div>
     </div>
   </div>
   <div className="row justify-center mt-40">
   <div className="col-auto">
   <Link
   href="/startselling/addDomainproductdetails"
   className="button h-50 w-250 -outline-blue-1 text-blue-1"
 >
   Get Started 
 </Link>
 </div>
</div>
   </div>
   
          }
  {selectedButton === "button2" && 
   <div className="row y-gap-10 mt-6 x-gap-20">
   <h2 className="text-22 fw-600 mt-30 mb-20 ">Select Product Type</h2>
<FilterTemplatesSection/>
<div className="col-md-5 mt-40">
<h6 className="text-22 fw-600 mb-30">Enter Version&nbsp;(optional)</h6>
<div className="form-input">
<input  type="text" required />
<label className="lh-1 text-16 text-light-1">

</label>
</div>
</div> <div className="row justify-center mt-40">
<Link
         href="/startselling/addTemplateproductdetails"
         className="button h-50 w-250 -outline-blue-1 text-blue-1"
       >
         Get Started 
       </Link>
 </div>
</div>

}

{selectedButton === "button3" && 
   <div className="row y-gap-10 mt-6 x-gap-20">
   <h2 className="text-22 fw-600  mt-30 mb-20 ">Select Software/Code Type</h2>
<FilterSoftwareCodeSection/>
<div className="col-md-5 mt-40">
<h6 className="text-22 fw-600 mb-30">Enter Version&nbsp;(optional)</h6>
<div className="form-input">
<input  type="text" required />
<label className="lh-1 text-16 text-light-1">

</label>
</div>
</div>
<div className="row justify-center mt-40">
<Link
         href="/startselling/addSoftwarecodedetails"
         className="button h-50 w-250 -outline-blue-1 text-blue-1"
       >
         Get Started 
       </Link></div></div>
}
{selectedButton === "button4" && 
   <div className="row y-gap-10 mt-6 x-gap-20">
   <h2 className="text-22 fw-600  mt-30 mb-20 ">Select Ecommerce Category</h2>
<FilterEcommerceSection/>
<div className="col-md-5 mt-40">
<h6 className="text-22 fw-600 mb-30">Enter your Ecommerce Business Name</h6>
<div className="form-input">
<input  type="text" required />
<label className="lh-1 text-16 text-light-1">

</label>
</div>
</div>
<div className="row justify-center mt-40">
<Link
         href="/startselling/addecommerceproductdetails"
         className="button h-50 w-250 -outline-blue-1 text-blue-1"
       >
         Get Started 
       </Link></div></div>
}
{selectedButton === "button5" &&
<div className="row y-gap-10 mt-6 x-gap-20">
   <h2 className="text-22 fw-600 mt-30 mb-20 ">Select AI Product Details</h2>
<FilterAISection/>
<div className="col-md-4 mt-40">
<h6 className="text-22 fw-600 mb-30">Where is your product best Used?</h6>
<div className="form-input">
<input  type="text" required />

</div>
</div>
 <div className="row justify-center mt-40">
<Link
         href="/startselling/addAIproductdetails"
         className="button h-50 w-250 -outline-blue-1 text-blue-1"
       >
         Get Started 
       </Link>
 </div>
</div>
}
   </div>       
   </section>
    
  <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(StartListing), { ssr: false });
