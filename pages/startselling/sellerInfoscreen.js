import React from "react";
import Image from "next/image";
import CallToActions from "../../components/common/CallToActions";
import Seo from "../../components/common/Seo";
import Header1 from "../../components/header/header-1";
import DefaultFooter from "../../components/footer/default";

import ListingSidebar from "../../components/startSelling/sellerInfo/listing-sidebar";
import SellerInfoTabs from "../../components/startSelling/sellerInfo/sellerInfoTabs";
import ListingPagination from "../../components/startSelling/sellerInfo/listingPagination";

const sellerInfoscreen = () => {
  const socialContent = [
    { id: 1, icon: "icon-facebook", link: "https://facebok.com/" },
    { id: 2, icon: "icon-twitter", link: "https://twitter.com/" },
    { id: 3, icon: "icon-instagram", link: "https://instagram.com/" },
    { id: 4, icon: "icon-linkedin", link: "https://linkedin.com/" },
  ];

  return (
    <>
      <Seo pageTitle="Seller Info Screen" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header1 />
      {/* End Header 1 */}

      <section className="pt-30 pb-40 bg-blue-2">
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <div className="text-center justify-center">
                <h1 className="text-26 fw-600">Seller Information</h1>
              </div>

              <div
                className="justify-center  mt-10"
                style={{ display: "flex", alignItems: "center" }}
              >
                <div className="mr-10  justify-center text-20 fw-500 text-dark-4">
                  Woodson And Co. Digital Store
                </div>

                <Image
                  width={22}
                  height={12}
                  src="/img/startselling/check.png"
                  alt="Check Icon"
                  className="mr-10"
                />
                <div className="fw-500 text-16 text-black">Verified</div>
              </div>
              <div classname="container">
                <div className="row justify-center ml-40 align-center mt-10 px-10">
                  <div className="col-md-5">
                    <div className="d-flex mt-30 align-items-center">
                      <h2 className="text-20 fw-500 text-black  lh-1 mr-10">
                        Karry Woodson
                      </h2>

                      <Image
                        width={20}
                        height={20}
                        src="/img/startselling/watch.svg"
                        alt="watch"
                      />
                    </div>
                    <div
                      className="mt-20 mb-10"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Image
                        width={160}
                        height={120}
                        src="/img/startselling/avatar.jpg"
                        alt="avatar"
                        className="text-center"
                      />

                      <div className="flex flex-wrap">
                        <div className="d-flex ml-40 mt-0">
                          <i className="icon-globe mr-10 mt-1" />
                          <div className="text-14 fw-500">
                            Manchester,United Kingdom
                          </div>
                        </div>
                        <div className="d-flex ml-40 mt-20">
                          <Image
                            className="mr-10"
                            src="/img/dashboard/sidebar/map.svg"
                            width={22}
                            height={12}
                            alt="image"
                          />
                          <div className="text-14 fw-500">www.carsme.com</div>
                        </div>
                        <div className="ml-40 mt-20">
                          {socialContent.map((item) => (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              key={item.id}
                              style={{
                                marginRight:
                                  sellerInfoscreen !== socialContent.length - 1
                                    ? "10px"
                                    : 0,
                              }}
                            >
                              <i className={`${item.icon} text-14 ml-8`} />
                            </a>
                          ))}
                        </div>
                        <button className="h-30 mt-10 ml-40 px-20 -dark-1 bg-dark-4 text-white">
                          Message
                        </button>
                        <button className="h-30 mt-10 ml-20 px-20 -dark-1 bg-dark-4 text-white">
                          Hire Me
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-7 text-14 align-center  justify-left-text-center"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    Creative Saas and Software HTML5 Template.You can use
                    Softdash as a better way to present and promote your
                    start-up mobile apps,saas applications,software and digital
                    products.Users will love your site because it gives them a
                    unique user experience&nbsp;(UX),&nbsp;clean,modern &
                    beautiful design.
                  </div>
                </div>
              </div>
            </div>
            {/* End col-12 */}
          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30 justify-between">
            <div className="col-xl-8">
              <div className="row x-gap-10 y-gap-30">
                <SellerInfoTabs />
              </div>
              {/* End .row */}
              <ListingPagination />
            </div>
            {/* End .col */}

            <div className="col-xl-3">
              <ListingSidebar />
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default sellerInfoscreen;
