import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import DefaultFooter from "../../components/footer/default";
import Header1 from "../../components/header/header-1";
import Hero1 from "../../components/home-page/searchComponent";
import BlockGuide from "../../components/block/BlockGuide";
import Categories from "../../components/home-page/Categories";
import WhyChoose from "../../components/home-page/WhyChoose";
import PopularProducts from "../../components/home-page/products";
import Blog3 from '../../components/home-page/Blog3';
import CallToActions from "../../components/common/CallToActions";
import FilterProducts from "../../components/home-page/BestSeller/FilterProducts";
import FilterTabs from "../../components/home-page/BestSeller/FilterTabs";

const Homepage = () => {
    return (
        <>
            <Seo pageTitle="Stebr, The largest software marketplace" />

            <Header1 />

            <Hero1 />
            <section
            className="layout-pt-md layout-pb-md"
            
          >
            <div className="container">
              <div className="row  justify-center text-center">
                <div className="col-auto">
                  <div className="sectionTitle -md">
                    <h2 className="sectionTitle__title">Popular Categories</h2>
                    <p className="sectionTitle__text mt-5 sm:mt-0">
                      Interdum et malesuada fames ac ante ipsum
                    </p>
                  </div>
                </div>
              </div>
              {/* End .row */}
    
              <div className="row x-gap-10 y-gap-10 pt-40 sm:pt-20 item_gap-x10">
                <Categories />
              </div>
              {/* End .row */}
            </div>
            {/* End .container */}
          </section>
          {/* End Hero 9 */}

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

            
      <section className="layout-pt-md layout-pb-lg">
      <div className="container">
        <div className="row y-gap-10 justify-between items-end">
          <div className="col-auto">
            <div className="sectionTitle -md">
              <h2 className="sectionTitle__title">Best Seller</h2>
              <p className=" sectionTitle__text mt-5 sm:mt-0">
                Interdum et malesuada fames ac ante ipsum
              </p>
            </div>
          </div>
          {/* End .col-auto */}

          <div className="col-auto tabs -pills-2 ">
            <FilterTabs />
          </div>
          {/* End .col-auto */}
        </div>
        {/* End .row */}

        <div className="relative overflow-hidden pt-40 sm:pt-20">
          <div className="row y-gap-30">
            <FilterProducts />
          </div>
        </div>
        {/* End relative */}
      </div>
    </section>
    {/* End Best Seller Hotels Sections */}

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



            <section className="layout-pt-md layout-pb-md bg-yellow-4">
            <div className="container">
              <div className="row justify-center text-center">
                <div className="col-auto">
                  <div className="sectionTitle -md">
                    <h2 className="sectionTitle__title">Why Choose Us</h2>
                    <p className=" sectionTitle__text mt-5 sm:mt-0">
                 Loreum Ipsum loreum ipsum loreum ipsum
                    </p>
                  </div>
                </div>
              </div>
              {/* End .row */}
    
              <div className="row y-gap-40 justify-between pt-50">
                <WhyChoose />
              </div>
              {/* End row */}
            </div>
            {/* End .container */}
          </section>
          {/* End Why choose Section */}


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

            <CallToActions />

            <DefaultFooter />
        </>
    );
};

export default dynamic(() => Promise.resolve(Homepage), { ssr: false });
