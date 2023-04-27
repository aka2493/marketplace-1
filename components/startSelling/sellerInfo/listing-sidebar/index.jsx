import Image from "next/image"
import Categories from "./components/Categories";


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
