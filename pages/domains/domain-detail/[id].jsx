import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ModalVideo from "react-modal-video";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import toursData from "../../../data/tours";
import Seo from "../../../components/common/Seo";
import Header1 from "../../../components/header/header-1";
import Overview from "../../../components/tour-single/Overview";
import TopBreadCrumb from "../../../components/tour-single/TopBreadCrumb";
import DefaultFooter from "../../../components/footer/default";
import Link from "next/link";
import Image from "next/image";
import DomainListingCards from "../../../components/domains/FilterDomainCards";
import RatingTag from "../../../components/domain-detail/RatingTag";
import PricingCard from "../../../components/domain-detail/PricingCard";
import SimilarDomains from "../../../components/domain-detail/SimilarDomains";
import SellerDetails from "../../../components/domain-detail/SellerDetails";
import PropertyHighlights from "../../../components/hotel-single/PropertyHighlights";

const DomainDetail = () => {
    const [isOpen, setOpen] = useState(false);
    const router = useRouter();
    const [tour, setTour] = useState({});
    const id = router.query.id;

    useEffect(() => {
        if (!id) <h1>Loading...</h1>;
        else setTour(toursData.find((item) => item.id == id));

        return () => { };
    }, [id]);

    return (
        <>
            <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="oqNZOOWF8qM"
                onClose={() => setOpen(false)}
            />

            <Seo pageTitle="Domain Detail" />
            {/* End Page Title */}

            <div className="header-margin"></div>
            {/* header top margin */}

            <Header1 />
            {/* End Header 1 */}

            <TopBreadCrumb />
            {/* End top breadcrumb */}

            <section className="pt-40">
                <div className="container">
                    <div className="row y-gap-20 justify-between items-end">
                        <div className="col-auto">
                            <h1 className="text-30 fw-600">carsnearme.com</h1>
                            <div className="row x-gap-20 y-gap-20 items-center pt-10">
                                <div className="col-auto">
                                    <div className="d-flex items-center">
                                        <div className="text-18 text-dark-1">
                                            keywords: <b>Cars near me</b>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-auto">
                                    <div className="row x-gap-10 items-center">
                                        <div className="col-auto">
                                            <div className="d-flex x-gap-5 items-center">
                                                <i className="icon-placeholder text-16 text-light-1"></i>
                                                <div className="text-18 text-dark-1">
                                                    Domain Age: <b>10 years</b>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-auto">
                            <div className="row x-gap-10 y-gap-10">
                                <div className="col-auto">
                                    <button className="button px-15 py-10 -blue-1">
                                        <i className="icon-share mr-10"></i>
                                        Share
                                    </button>
                                </div>

                                <div className="col-auto">
                                    <button className="button px-15 py-10 -blue-1 bg-light-2">
                                        <i className="icon-heart mr-10"></i>
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* End .col */}
                    </div>
                    {/* End .row */}
                </div>
                {/* End .container */}
            </section>
            {/* End gallery grid wrapper */}

            <section className="pt-40 js-pin-container">
                <div className="container">
                    <div className="row y-gap-30">
                        <div className="col-xl-8">
                            <div className="relative d-flex justify-center overflow-hidden js-section-slider">
                                <Swiper
                                    modules={[Navigation]}
                                    loop={true}
                                    navigation={{
                                        nextEl: ".js-img-next",
                                        prevEl: ".js-img-prev",
                                    }}
                                >
                                    {tour?.slideImg?.map((slide, i) => (
                                        <SwiperSlide key={i}>
                                            <Image
                                                width={451}
                                                height={450}
                                                priority
                                                src={slide}
                                                alt="image"
                                                style={{ height: "501px" }}
                                                className="rounded-4 col-12 cover object-cover"
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                <Gallery>
                                    {tour?.slideImg?.map((slide, i) => (
                                        <div
                                            className="absolute px-10 py-10 col-12 h-full d-flex justify-end items-end z-2 bottom-0 end-0"
                                            key={i}
                                        >
                                            <Item
                                                original={slide}
                                                thumbnail={slide}
                                                width={451}
                                                height={450}
                                            >
                                                {({ ref, open }) => (
                                                    <div
                                                        className="button -blue-1 px-24 py-15 bg-white text-dark-1 js-gallery"
                                                        ref={ref}
                                                        onClick={open}
                                                        role="button"
                                                    >
                                                        See All Photos
                                                    </div>
                                                )}
                                            </Item>
                                        </div>
                                    ))}
                                </Gallery>

                                <div className="absolute h-full col-11">
                                    <button className="section-slider-nav -prev flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none js-img-prev">
                                        <i className="icon icon-chevron-left text-12" />
                                    </button>
                                    <button className="section-slider-nav -next flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none js-img-next">
                                        <i className="icon icon-chevron-right text-12" />
                                    </button>
                                </div>
                                {/* End prev nav button wrapper */}
                            </div>

                            <div className="mt-40">
                                <PropertyHighlights />
                            </div>

                            <div className="border-top-light mt-40 mb-40"></div>

                            <Overview />
                        </div>

                        <div className="col-xl-4">
                            <PricingCard showMultiplePricing={false} auctionEnabled={true} priceHeadingWithDisCode={true} />
                            <SellerDetails />
                            <SimilarDomains />
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-30">
                <div className="container">
                    <div className="row y-gap-30">
                        <div className="col-12">
                            <RatingTag />
                        </div>
                    </div>
                </div>
            </section>

            <section className="layout-pt-md layout-pb-lg mt-50">
                <div className="container">
                    <div className="row y-gap-20 justify-between items-end">
                        <div className="col-auto">
                            <div className="sectionTitle -md">
                                <h2 className="sectionTitle__title">Most Popular Domains</h2>
                                <p className=" sectionTitle__text mt-5 sm:mt-0">
                                    Checkout other domains
                                </p>
                            </div>
                        </div>
                        {/* End .col */}

                        <div className="col-auto">
                            <Link
                                href="#"
                                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
                            >
                                More <div className="icon-arrow-top-right ml-15" />
                            </Link>
                        </div>
                        {/* End .col */}
                    </div>
                    {/* End .row */}

                    <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
                        <DomainListingCards divClass={'col-lg-3 col-xl-3 col-sm-6'} itemsCount={4} />
                    </div>
                    {/* End .row */}
                </div>
                {/* End .container */}
            </section>
            <DefaultFooter />
        </>
    );
};

export default dynamic(() => Promise.resolve(DomainDetail), {
    ssr: false,
});
