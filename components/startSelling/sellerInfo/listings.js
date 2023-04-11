import Image from "next/image";
import Link from "next/link";
import sellerlistingData from "../../../data/sellerlistingData";

import { hotelsData } from "../../../data/hotels";
import isTextMatched from "../../../utils/isTextMatched";
import SearchBox from "./../../common/SearchBox"

const Listings = () => {
  return (
    <>
   
       <div className="row x-gap-10 y-gap-30">
      
       <div className="d-flex items-center justify-between">
       <h4 className="text-dark-1  text-20 fw-600">Listings</h4>
       <SearchBox/>
       </div>
      {sellerlistingData.slice(0, 9).map((item) => (
        <div className="col-lg-4 col-sm-6" key={item.id}>
          <Link
            href={`/blog/blog-details/${item.id}`}
            className="blogCard -type-1 d-block "
          >
            <div className="blogCard__image">
              <div className="rounded-8">
                <Image
                  width={200} 
                  height={200}
                  object-fit="cover"
                  className="cover w-100 custom-img img-fluid"
                  src={item.img}
                  alt="image"
                />
              </div>
            </div>
            <div className="pt-20">
              <h4 className="text-dark-1 text-18 fw-500">{item.title}</h4>
              <div className="text-light-1 text-15 lh-14 mt-5">
                {item.date}
              </div>
            </div>
          </Link>
        </div>
      ))}
     
    </div>
    {/* End .row */}

    </>
  );
};

export default Listings;
