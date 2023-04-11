import Seo from "../../../components/common/Seo";
import Header1 from "../../../components/header/header-1";
import DefaultFooter from "../../../components/footer/default";
import TopHeaderFilter from "../../../components/domains/TopHeaderFilter";
import Pagination from "../../../components/hotel-list/common/Pagination";
import Sidebar from "../../../components/hotel-list/hotel-list-v4/Sidebar";
import DomainListingCards from "../../../components/domains/FilterDomainCards";
import SearchBox from "../../../components/searchBox";

const index = () => {
  return (
    <>
      <Seo pageTitle="Hotel List v5" />

      <div className="header-margin"></div>


      <Header1 />
      <section className="section-bg pt-40 pb-40 relative z-5">
        <div className="section-bg__item col-12">
          <img
            src="/img/misc/bg-1.png"
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h1 className="text-30 fw-600 text-white">
                  Domains
                </h1>
              </div>
              <SearchBox placeholderText="Search any domain" classes="m-auto w-50 pt-20" />
            </div>
          </div>
        </div>
      </section>
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-3">
              <aside className="sidebar y-gap-40 xl:d-none">
                <Sidebar />
              </aside>

              <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="listingSidebar"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasLabel">
                    Filter Sidebar
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>

                <div className="offcanvas-body">
                  <aside className="sidebar y-gap-40  xl:d-block">
                    <Sidebar />
                  </aside>
                </div>
              </div>
            </div>

            <div className="col-xl-9 ">
              <TopHeaderFilter />
              <div className="mt-30"></div>
              <div className="row y-gap-30">
                <DomainListingCards />
              </div>
              <Pagination />
            </div>
          </div>
        </div>
      </section>

      <DefaultFooter />
    </>
  );
};

export default index;
