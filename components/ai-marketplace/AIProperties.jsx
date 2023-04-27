import aimarketplaceData from "../../data/ai-marketplace";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";

const AIProperties = () => {
  return (
    <>
      {aimarketplaceData.map((item) => (
        <div className="col-12" key={item?.id}>
          <div className="border-top-light pt-30">
            <div className="row x-gap-20 y-gap-20">
              <div className="col-md-auto mt-10">
                <div className="relative d-flex">
                  <div className="cardImage w-250 md:w-1/1 rounded-4 border-light">
                    <div className="custom_inside-slider">
                      <Swiper
                        className="mySwiper"
                        modules={[Pagination, Navigation]}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={true}
                      >
                        {item?.slideImg?.map((slide, i) => (
                          <SwiperSlide key={i}>
                            <div className="ratio ratio-1:1">
                              <div className="cardImage__content">
                                <Image
                                  width={300}
                                  height={300}
                                  className="rounded-4 col-12 js-lazy"
                                  src={slide}
                               
                                  alt="image"
                                />
                              </div>
                              <div className="cardImage__wishlist">
                                <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                  <i className="icon-heart text-12"></i>
                                </button>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>

                    {/* End image */}
                  </div>
                  {/* End image ratio */}
                </div>
                {/* End relative */}
              </div>
              {/* End .col */}

              <div className="col-md">
                <div className="d-flex flex-column h-full justify-between">
                  <div>
                    <div className="row mt-2 x-gap-5 items-center">
                      <div className="col-auto">
                        <div className="text-14 text-light-1">
                          {item?.author}
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="size-3 rounded-full bg-light-1" />
                      </div>
                      <div className="col-auto">
                        <div className="text-14 text-light-1">{item?.feature}</div>
                      </div>
                    </div>
                    <h3 className="text-18 lh-16 fw-500 mt-5">
                      JASPER AI for Content Creators{" "}
                      <span className="text-14 ml-10 text-light-1">Ranked #1</span>
                    </h3>
                  </div>
                  <div className="mt-20">
                  <div className="d-flex items-center">
                    
                    <div className="text-14 fw-500">
                     {item?.description}
                    </div>
                  </div>
               
                </div>
                  <div className="col-lg-7 mt-20">
                    <div className="row y-gap-10">
                      
                      
                      <div className="col-sm-6">
                        <div className="d-flex items-center">
                          <i className="icon-menu-2" />
                          <div className="text-14 ml-10">
                            Boss mode
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="d-flex items-center">
                          <i className="icon-menu-2" />
                          <div className="text-14 ml-10">Jasper Chat</div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="d-flex items-center">
                          <i className="icon-menu-2" />
                          <div className="text-14 ml-10">SEO Integration</div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="d-flex items-center">
                          <i className="icon-menu-2" />
                          <div className="text-14 ml-10">Art</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-20">
                   
                    <div className="d-flex items-center">
                      <i className="icon-check text-10" />
                      <div className="text-14 fw-500 text-green-2 ml-10">
                        Free  Trial and Cancellation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End col-md */}

              <div className="col-md-auto text-right md:text-left">
                <div className="row x-gap-10 mt-1 y-gap-10 justify-end items-center md:justify-start">
                  <div className="col-auto">
                    <div className="text-14 lh-14 fw-500">Exceptional</div>
                    <div className="text-14 lh-14 text-light-1">
                      {item?.numberOfReviews} reviews
                    </div>
                  </div>
                  {/* End col */}
                  <div className="col-auto">
                    <div className="flex-center text-dark-1 fw-600 text-14 size-40 rounded-4 bg-yellow-1">
                      {item?.ratings}
                    </div>
                  </div>
                  {/* End col */}
                </div>
                {/* End .row */}

                <div className="text-22 lh-12 fw-600 mt-40 md:mt-20">
                  ${item?.price}
                </div>
                <div className="text-14 text-light-1 mt-5">{item?.subscription}</div>
                <Link
                  href={`/car/car-single/${item.id}`}
                  className="button h-50 px-24 bg-dark-1 -yellow-1 text-white mt-70"
                >
                  View Detail <div className="icon-arrow-top-right ml-15" />
                </Link>
              </div>
              {/* End col-md-auto */}
            </div>
            {/* End .row */}
          </div>
        </div>
      ))}
    </>
  );
};

export default AIProperties;
