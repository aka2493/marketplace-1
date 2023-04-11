import Slider from "react-slick";
import {useState} from "react";
import GeneralInfo  from "./GeneralInfo";

const Categories = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (itemId) => {
    setSelectedButton(itemId);
  };
  var settings = {
    dots: true,
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
    { id: "button1", content:<GeneralInfo/> ,icon: "icon-globe", catName: "Domains" },
    { id: "button2", icon: "icon-destination", catName: "Templates" },
    { id: "button3", icon: "icon-ski", catName: "Software Code" },
    { id: 4, icon: "icon-home", catName: "Themes" },
    { id: 5, icon: "icon-car", catName: "Businesses" },
    { id: 6, icon: "icon-yatch", catName: " Plugins" },
    { id: 7, icon: "icon-tickets", catName: "Websites" },
  ];
  return (
    <Slider {...settings}>
      {catContent.map((item) => (
        <div className="col" key={item.id}>
          <button onClick={() =>handleButtonClick(item.id)} className="d-flex flex-column justify-center px-20 py-15 rounded-4 border-light text-16 lh-14 fw-500 col-12">
           
          <i className={`${item.icon} text-25 mb-10`} />
            {item.catName}
          </button>
        </div>
      ))}
    
    </Slider>
  );
};

export default Categories;
