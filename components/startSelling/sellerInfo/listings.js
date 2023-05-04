import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import sellerlistingData from "../../../data/sellerlistingData";
import SearchBox from "./../../common/SearchBox";
import Dropdown from "./../../common/Dropdown";
import ListingPagination from "./listingPagination"

const Listings = () => {
  const [categoryvalue, setcategoryvalue] = useState("Category");

  const handlecategoryvalueChange = (value) => {
    setcategoryvalue(value);
  };

  const dropdowns = [
    {
      title: "Categories",
      value: categoryvalue,
      options: ["Loreum Ipsum", "Loreum Ipsum", "Loreum Ipsum"],
      onChange: handlecategoryvalueChange,
    },
  ];

  return (
    <>
      <div className="row x-gap-10 y-gap-30">
        <h4 className="mt-10 text-22 fw-500">Listings</h4>
        <div className="d-flex items-center  mb-10 justify-between">
          <div className="row">
            <div className="sm:justify-center justify-content">
              {dropdowns.map((dropdown, index) => (
                <div key={index} className="col-lg-3 col-md-6">
                  <Dropdown key={index} {...dropdown} />
                </div>
              ))}
            </div>
          </div>
          <SearchBox />
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
        <ListingPagination/>
      </div>
      {/* End .row */}
    </>
  );
};

export default Listings;
