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

import ListingTemplateSection  from "../components/startSelling/ListingTemplateSection";
import ListingSoftwareCodeSection  from "../components/startSelling/ListingSoftwareCodeSection";
import ListingDomainSection from "../components/startSelling/ListingDomainSection";
import ListingEcommerceSection from "../components/startSelling/ListingEcommerceSection";
import ListingAISection from "../components/startSelling/ListingAISection";

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
    { id: "button1",catName: "Domains",img:"/img/startselling/display.png" },
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
         <ListingDomainSection/>
   
          }
  {selectedButton === "button2" && 
  <ListingTemplateSection/>
}

{selectedButton === "button3" && 
<ListingSoftwareCodeSection/>
}

{selectedButton === "button4" && 
   <ListingEcommerceSection/>
}
{selectedButton === "button5" &&
<ListingAISection/>
}
   </div>       
   </section>
    
  <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(StartListing), { ssr: false });
