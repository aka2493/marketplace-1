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
import TopBreadCrumb from "../../../components/tour-single/TopBreadCrumb";
import DefaultFooter from "../../../components/footer/default";
import Link from "next/link";
import Image from "next/image";
import PricingCard from "../../../components/domain-detail/PricingCard";
import SellerDetails from "../../../components/domain-detail/SellerDetails";
import FilterTemplateCards from "../../../components/templates/FilterTemplateCards";
import ProductSpecs from "../../../components/software-detail/product-detail";
import TabsSection from "../../../components/common2/Tabs/tabPanel";
import TemplateDescription from "../../../components/software-detail/template-description";
import TemplateComments from "../../../components/software-detail/template-comments";
import TemplateLoginCredSection from "../../../components/software-detail/template-login-cred";
import CustomisationCard from "../../../components/software-detail/customisation-card";

const SoftwareDetail = () => {
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
                            <h1 className="text-30 fw-600">Live Event One Page Responsive HTML Software</h1>
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

                            <div className="row x-gap-40 y-gap-40">
                                <div className="col-12">
                                    <div className="pt-30">
                                    <TabsSection tabLabels={[{ id: 1, label: 'Description' },
                                        { id: 2, label: 'Login Credentials' },
                                        { id: 3, label: 'Comments' },
                                        ]}
                                            tabPanelComponents={[{ id: 1, component: <TemplateDescription /> },
                                            { id: 2, component: <TemplateLoginCredSection /> },
                                            { id: 3, component: <TemplateComments /> },
                                            ]} />
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <PricingCard showMultiplePricing={true} priceHeadingWithDisCode={false} />
                            <SellerDetails />
                            <CustomisationCard />
                            <ProductSpecs />
                        </div>
                    </div>
                </div>
            </section>

            <section className="layout-pt-md mt-50">
                <div className="container">
                    <div className="row y-gap-20 justify-between items-end">
                        <div className="col-auto">
                            <div className="sectionTitle -md">
                                <h2 className="sectionTitle__title">More from Sweety James</h2>
                            </div>
                        </div>

                        <div className="col-auto">
                            <Link
                                href="#"
                                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
                            >
                                More <div className="icon-arrow-top-right ml-15" />
                            </Link>
                        </div>
                    </div>

                    <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
                        <FilterTemplateCards itemsCount={4} />
                    </div>
                </div>
            </section>

            <section className="layout-pt-md layout-pb-lg">
                <div className="container">
                    <div className="row y-gap-20 justify-between items-end">
                        <div className="col-auto">
                            <div className="sectionTitle -md">
                                <h2 className="sectionTitle__title">You May Also Like</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
                        <FilterTemplateCards itemsCount={4} />
                    </div>
                </div>
            </section>
            <DefaultFooter />
        </>
    );
};

export default dynamic(() => Promise.resolve(SoftwareDetail), {
    ssr: false,
});
