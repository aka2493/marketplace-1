import Image from "next/image";
import Link from "next/link";
import sellerlistingData from "../../../../../data/sellerlistingData";


const RecentPost = () => {
  return (
    <>
    <div className="ml-20 px-10 border bg-light-4 rounded">
        <h5 className="text-20 fw-600 text-dark-4 mb-10 ml-10">Testimonial</h5>
          <div className="d-flex items-center mb-10">
            <Image
              width={200}
              height={200}
              className="rounded-8"
              src="/img/startselling/avatar.jpg"
              alt="image"
            />

            <div className="ml-15">
            <div className="d-flex mb-20">
            <h2 className="text-26  fw-500 text-black lh-1 mr-10">Karry Woodson
            </h2>
            <img src="/img/startselling/watch.svg" width="20px" height="20px"/>
            </div>
       <div className="d-flex mb-15">
            <img src="/img/startselling/check.png" width="22px" height="12px"/>
            <h6 className="fw-500 ml-10 text-16 text-black">Verified</h6>
            </div>
              <div className="text-14 fw-500  text-white lh-1">Creative Saas and Software HTML5 Template.You can use Softdash as a better way to 
              present and promote your start-up mobile apps,saas applications,software and
               digital products.Users will love your site because it gives them a unique user experience&nbsp;(UX),&nbsp;clean,modern & beautiful design.
              </div>
              <button
              
            className="h-40 mt-20 px-24 -dark-1 bg-dark-4 text-white"
           
          >
          <img className="mr-10" src="/img/startselling/chat.svg" width="15px" height="15px"/>  Chat with seller 
          </button>
            </div>
          </div>
        
      </div>
    
    </>
  );
};

export default RecentPost;
