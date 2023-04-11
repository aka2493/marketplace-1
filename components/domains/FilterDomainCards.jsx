import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { hotelsData } from "../../data/hotels";
import isTextMatched from "../../utils/isTextMatched";

const DomainListingCards = ({ itemsCount = 8, divClass = "col-lg-4 col-xl-4 col-sm-6" }) => {
  var itemSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // custom navigation
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
      {hotelsData.slice(0, itemsCount).map((item) => (
        <div
          className={divClass}
          key={item?.id}
          data-aos="fade"
          data-aos-delay={item.delayAnimation}
        >
          <Link
            href={`/domains/domain-detail/${item.id}`}
            className="hotelsCard -type-1 hover-inside-slider"
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

                <div className="cardImage__wishlist">
                  <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                    <i className="icon-heart text-12" />
                  </button>
                </div>

                <div className="cardImage__leftBadge">
                  <div
                    className={`py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase ${isTextMatched(item?.tag, "Editor choice")
                      ? "bg-dark-1 text-white"
                      : ""
                      } ${isTextMatched(item?.tag, "featured")
                        ? "bg-stebr-pink text-white"
                        : ""
                      } 
                    } ${isTextMatched(item?.tag, "-25% today")
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
            </div>
            <div className="hotelsCard__content mt-10">
              <div className="d-flex items-center lh-14 mb-5">
                <div className="text-20 text-dark-1 lh-16 fw-500">
                  {item?.title}
                </div>
                {/* <div className="size-10 bg-stebr-pink rounded-full ml-10 mr-10" />
                <div className="text-18 text-dark-1 lh-16 fw-500">Technology</div> */}
              </div>

              <p className="text-light-1 lh-14 text-14 mt-5">
                Keyword: {item?.keyword}
              </p>

              <div className="mt-5">
                <div className="fw-500">
                  Price{" "}
                  <span className="text-blue-1">${item?.price}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default DomainListingCards;
