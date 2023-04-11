import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import DefaultFooter from "../../../components/footer/default";
import Header11 from "../../../components/header/header-11";
import FilterTemplateCards from "../../../components/templates/FilterTemplateCards";
import MainFilterSearchBox from "../../../components/templates/MainFilterSearchBox";
import DropdownSelelctBar from "../../../components/templates/common/DropdownSelelctBar";
import TopHeaderFilter from "../../../components/templates/TopHeaderFilter";
import Pagination from "../../../components/hotel-list/common/Pagination";
import PriceSlider from "../../../components/templates/PriceSlider";
import SearchBox from "../../../components/searchBox";


const templates = () => {
    return (
        <>
            <Seo pageTitle="Templates Listing" />
            <div className="header-margin"></div>
            <Header11 />

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
                                    Templates/Plugins
                                </h1>
                            </div>
                            <SearchBox placeholderText="Search any template/theme" classes="m-auto w-50 pt-20" />
                        </div>
                    </div>
                </div>
            </section>


            <section className="layout-pt-md layout-pb-lg">
                <div className="container">
                    <div className="row y-gap-20 justify-between items-center">
                        <div className="col-auto col-md-12">
                            <div className="row x-gap-20 y-gap-10 items-center">
                                <div className="col-auto">
                                    <div className="text-18 fw-500">Filters</div>
                                </div>

                                <div className="col-auto">
                                    <div className="row x-gap-15 y-gap-15">
                                        <DropdownSelelctBar />
                                    </div>
                                </div>

                                <div className="col-auto">
                                    <div className="text-18 fw-500">Price Range</div>
                                </div>
                                <div className="col-auto">
                                    {/* <PriceSlider /> */}
                                    <div className="row x-gap-10 items-center">
                                        <div className="col-auto col-4">
                                            <input className="border rounded-100 text-14 border-light px-15 h-34" type="text" placeholder="Min($)" />
                                        </div>
                                        <div className="col-auto col-4">
                                            <input className="border rounded-100 text-14 border-light px-15 h-34" type="text" placeholder="Max($)" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-auto d-flex">
                                    <div className="mr-5"><button className="button px-10 py-4 -dark-1 bg-blue-1 text-white w-100">Apply</button></div>
                                    <div><button className="button px-10 py-4 border-light text-black w-100">Reset</button></div>
                                </div>
                            </div>
                        </div>

                        <TopHeaderFilter />

                        <div className="border-top-light mt-30 mb-30"></div>

                        <div className="row y-gap-30">
                            <FilterTemplateCards />
                        </div>
                        <Pagination />
                    </div>
                </div>
            </section>

            <DefaultFooter />
        </>
    );
};

export default dynamic(() => Promise.resolve(templates), { ssr: false });
