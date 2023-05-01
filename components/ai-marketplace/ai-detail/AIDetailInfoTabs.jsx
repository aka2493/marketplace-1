import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Overview from "./Overview";
import SimilarDomains from "./SimilarDomains";
import PricingCard from "./PricingCard";
import ReviewProgress from "./ReviewProgress"
import Reviews from "./Reviews";

const AIDetailInfoTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <section className="pt-40  layout-pt-md layout-pb-lg js-pin-container">
            <div className="container">
    <Tabs 
      className="tabs -underline-2 js-tabs"
      selectedIndex={tabIndex}
      onSelect={(index) => setTabIndex(index)}
    >
      <TabList className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20">
        <Tab className="col-auto">
          <button className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button">
            Overview
          </button>
        </Tab>

        <Tab className="col-auto">
          <button className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button">
            Pricing
          </button>
        </Tab>
        <Tab className="col-auto">
          <button className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button">
          Reviews
          </button>
        </Tab>
      </TabList>

      <div className="tabs__content pt-30 js-tabs-content">
        <TabPanel className="-tab-item-1 is-tab-el-active">
          
              <div className="row y-gap-30">
                <div className="col-xl-8">
                  <div className="mt-10">
                    <Overview />
                  </div>
                </div>

                <div className="col-xl-4">
                  <SimilarDomains />
                </div>
              </div>
      
        </TabPanel>

        <TabPanel className="-tab-item-2">
        <div className="row y-gap-30">
        <div className="col-xl-8">
        <PricingCard/>
        </div></div></TabPanel>

        <TabPanel className="-tab-item-3">
        <div className="row y-gap-30">
        <div className="col-xl-8">
        <Reviews/>
        </div>
        <div className="col-xl-4"><ReviewProgress/></div>
        </div></TabPanel>
      </div>
    </Tabs>
    </div>
          </section>
  );
};
export default AIDetailInfoTabs;
