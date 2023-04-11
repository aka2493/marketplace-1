import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import isTextMatched from "../../utils/isTextMatched";
import { hotelsData } from "../../data/hotels";
import Slider from "react-slick";


const PopularProducts = () => {
    var itemSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    function ArrowSlick(props) {
        let className =
          props.type === "next"
            ? "slick_arrow-between slick_arrow -next arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-next"
            : "slick_arrow-between slick_arrow -prev arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-prev";
        className += " arrow";
        const char =
          props.type === "next" ? (
            <>
              <i className="icon icon-chevron-right text-12"></i>
            </>
          ) : (
            <>
              <span className="icon icon-chevron-left text-12"></span>
            </>
          );
        return (
          <button className={className} onClick={props.onClick}>
            {char}
          </button>
        );
      }
      
    return (
        <>
            <Swiper
                spaceBetween={30}
                modules={[Navigation, Pagination]}
                navigation={{
                    nextEl: ".js-hotels-next",
                    prevEl: ".js-hotels-prev",
                }}
                pagination={{
                    el: ".js-hotels-pag",
                    clickable: true,
                }}
                breakpoints={{
                    540: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 22,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                }}
            >
                {hotelsData.slice(0, 8).map((item) => (
                    <SwiperSlide key={item?.id}>
                        <Link
                            href={`/hotel/hotel-single-v1/${item.id}`}
                            className="hotelsCard -type-1 hover-inside-slider"
                            data-aos="fade"
                            data-aos-delay={item.delayAnimation}
                        >
                            <div className="hotelsCard__image">
                                <div className="cardImage inside-slider">
                                    <Slider
                                        {...itemSettings}
                                        arrows={true}
                                        nextArrow={<ArrowSlick type="next" />}
                                        prevArrow={<ArrowSlick type="prev" />}
                                    >
                                        {item?.slideImg?.map((slide, i) => (
                                            <div className="cardImage ratio ratio-1:1" key={i}>
                                                <div className="cardImage__content ">
                                                    <Image
                                                        width={300}
                                                        height={300}
                                                        className="rounded-4 col-12 js-lazy"
                                                        src={slide}
                                                        alt="image"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>

                                {/* <div className="cardImage ratio ratio-1:1">
                                    <div className="cardImage__content">
                                        <div className="cardImage-slider rounded-4 overflow-hidden custom_inside-slider">
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
                                                        <Image
                                                            width={300}
                                                            height={300}
                                                            className="rounded-4 col-12 js-lazy"
                                                            src={slide}
                                                            alt="image"
                                                        />
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                        </div>
                                    </div>
                                </div> */}

                                <div className="cardImage__wishlist">
                                    <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                        <i className="icon-heart text-12" />
                                    </button>
                                </div>

                                <div className="cardImage__leftBadge">
                                    <div
                                        className={`py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase ${isTextMatched(item?.tag, "breakfast included")
                                            ? "bg-dark-1 text-white"
                                            : ""
                                            } ${isTextMatched(item?.tag, "Editor choice")
                                                ? "bg-blue-1 text-white"
                                                : ""
                                            } 
                    ${isTextMatched(item?.tag, "featured")
                                                ? "bg-brown-1 text-white"
                                                : ""
                                            } 
                     ${isTextMatched(item?.tag, "premium")
                                                ? "bg-yellow-1 text-dark-1"
                                                : ""
                                            }`}
                                    >
                                        {item?.tag}
                                    </div>
                                </div>
                            </div>
                            <div className="hotelsCard__content mt-10">
                                <div className="d-flex items-center pt-20">
                                    <div className="size-40 flex-center bg-light-2 rounded-full text-14 fw-600">
                                        SJ
                                    </div>
                                    <div className="text-18 lh-16 text-dark-1 ml-10">
                                        Sweety Jamess
                                    </div>
                                    <div className="d-flex ml-40">
                                        <i className="icon-clock text-18 text-stebr-pink mr-10"></i>
                                        <div className="text-15 lh-15 text-light-1">
                                            12:32:24
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex items-center mt-20 justify-between">
                                    <div className="text-16 text-dark-1 fw-500">
                                        Avada | Responsive
                                    </div>
                                    <div class="d-flex x-gap-5 items-center">
                                        <span className="text-blue-1 text-16 fw-600">${item?.price}.00</span>
                                    </div>
                                </div>

                                <div className="d-flex items-center mt-5 justify-between">
                                    <div className="text-16 text-dark-1 fw-500">
                                        Multi-Purpose
                                    </div>
                                    <div class="d-flex x-gap-5 items-center">
                                        <div class="icon-star text-15 text-yellow-1">
                                        </div><div class="icon-star text-15 text-yellow-1">
                                        </div><div class="icon-star text-15 text-yellow-1">
                                        </div><div class="icon-star text-15 text-yellow-1">
                                        </div><div class="icon-star text-15 text-yellow-1">
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-20 d-flex">
                                    <div >
                                        <button className="button px-28 fw-500 text-15 border-light -blue-1 h-34 text-light-1">View Details</button>
                                    </div>
                                    <div ><button className="button px-28 fw-500 text-15 border-dark-1 -blue-1 h-34 text-dark-1 ml-15">Add to Cart</button></div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="d-flex x-gap-15 items-center justify-center sm:justify-start pt-40 sm:pt-20">
                <div className="col-auto">
                    <button className="d-flex items-center text-24 arrow-left-hover js-hotels-prev">
                        <i className="icon icon-arrow-left" />
                    </button>
                </div>

                <div className="col-auto">
                    <div className="pagination -dots text-border js-hotels-pag" />
                </div>

                <div className="col-auto">
                    <button className="d-flex items-center text-24 arrow-right-hover js-hotels-next">
                        <i className="icon icon-arrow-right" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default PopularProducts;
