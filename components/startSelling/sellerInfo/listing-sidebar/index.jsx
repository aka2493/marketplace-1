import Image from "next/image"
import Categories from "./components/Categories";
import RecentPost from "./components/RecentPost";
import SearchBox from "../../../../components/common/SearchBox";
import Tags from "./components/Tags";

const index = () => {
  const socialContent = [
    { id: 1, icon: "icon-facebook", link: "https://facebok.com/" },
    { id: 2, icon: "icon-twitter", link: "https://twitter.com/" },
    { id: 3, icon: "icon-instagram", link: "https://instagram.com/" },
    { id: 4, icon: "icon-linkedin", link: "https://linkedin.com/" },
  ];

  return (
    
    <div className="sidebar -blog">
    <div className="sidebar__item -no-border">
    <h5 className="text-20 fw-500 mb-20">Seller's Details</h5>
    <h6 className="text-16 fw-500">Location</h6>
    <div className="d-flex mt-10">
  
    <i className="icon-globe mr-10 mt-1" />
      <div className="text-14 fw-500">Manchester,United Kingdom</div>
      </div>
      <h6 className="text-16 fw-500 mt-20">Website</h6>
    <div className="d-flex mt-10">
  
    <img className="mr-10" src="/img/dashboard/sidebar/map.svg" width="22px" height="12px"/>
      <div className="text-14 fw-500">www.carsme.com</div>
      </div>

      <h6 className="text-16 fw-500 mt-20">Other Links</h6>
     
      {socialContent.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
          style={{ marginRight: index !== socialContent.length - 1 ? '10px' : 0 }}
        >
          <i className={`${item.icon} text-14`} />
        </a>
      ))}
      <div className="mt-10">
      <button
              
      className="h-40  px-24 -dark-1 bg-dark-4 text-white"
     
    >
    <img className="mr-10" src="/img/startselling/chat.svg" width="15px" height="15px"/>  Chat with seller 
    </button>
    </div>
  </div>
  {/* End RecentPost */}
      
      <div className="sidebar__item">
        <h5 className="text-20 fw-500 mb-10">Categories</h5>
        <div className="y-gap-5">
          <Categories />
        </div>
      </div>
      {/* End .Categories */}

     

     
    </div>
  );
};

export default index;
