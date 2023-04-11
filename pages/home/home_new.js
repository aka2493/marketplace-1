import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import DefaultFooter from "../../components/footer/default";
import Header1 from "../../components/header/header-1";
import Hero1 from "../../components/home-page/searchComponent";
import BlockGuide from "../../components/block/BlockGuide";
import TourCategories from "../../components/home-page/TourCategories";
import PopularProducts from "../../components/home-page/products";
import Blog3 from '../../components/home-page/Blog3';

const Homepage = () => {
    return (
        <>
            <Seo pageTitle="Home-1" />

            <Header1 />

            <Hero1 />

            <section className="layout-pt-md layout-pb-md">
                <div className="container">
                    <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
                        <TourCategories />
                    </div>
                </div>
            </section>

            <section className="layout-pt-md layout-pb-md">
                <div className="container">
                    <div className="row justify-center text-center">
                        <div className="col-auto">
                            <div className="sectionTitle -md">
                                <h2 className="sectionTitle__title">
                                    How Auction Works?
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row y-gap-20 justify-between pt-40">
                        <BlockGuide />
                    </div>
                </div>
            </section>

            <section className="layout-pt-md layout-pb-md">
                <div className="container">
                    <div className="row y-gap-20 justify-between items-end">
                        <div className="col-auto">
                            <div className="sectionTitle -md">
                                <h2 className="sectionTitle__title">Our Popular Products</h2>
                                <p className=" sectionTitle__text mt-5 sm:mt-0">
                                    Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
                                </p>
                            </div>
                        </div>

                        <div className="col-auto md:d-none">
                            <a
                                href="#"
                                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
                            >
                                View All
                                <div className="icon-arrow-top-right ml-15" />
                            </a>
                        </div>
                    </div>

                    <div className="relative overflow-hidden pt-40 sm:pt-20 js-section-slider item_gap-x30">
                        <PopularProducts />
                    </div>
                </div>
            </section>



            <section className="layout-pt-lg layout-pb-md" data-aos="fade-up">
                <div className="container">
                    <div className="row y-gap-20 justify-between items-end">
                        <div className="col-auto">
                            <div className="sectionTitle -md">
                                <h2 className="sectionTitle__title">Our Blog</h2>
                                <p className=" sectionTitle__text mt-5 sm:mt-0">
                                    These popular destinations have a lot to offer.
                                </p>
                            </div>
                        </div>

                        <div className="col-auto md:d-none">
                            <a
                                href="#"
                                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
                            >
                                View All
                                <div className="icon-arrow-top-right ml-15" />
                            </a>
                        </div>
                    </div>

                    <div className="row y-gap-30 pt-40">
                        <Blog3 />
                    </div>

                </div>
            </section>

            <DefaultFooter />
        </>
    );
};

export default dynamic(() => Promise.resolve(Homepage), { ssr: false });
