import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Listings from "./listings";
import Services from "./services"

const SellerInfoTabs = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (

    <Tabs
    className="tabs -underline-2 js-tabs"
    selectedIndex={tabIndex}
    onSelect={(index) => setTabIndex(index)}
  >
    <TabList className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20">
      <Tab className="col-auto">
        <button className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button">
   Listings
        </button>
      </Tab>

      <Tab className="col-auto">
        <button className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button">
       Services
        </button>
      </Tab>
      <Tab className="col-auto">
      <button className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button">
Our Work/Portfolio
      </button>
    </Tab>
      </TabList>

      <div className="tabs__content pt-30 js-tabs-content">
        <TabPanel className="-tab-item-1 is-tab-el-active">
        <Listings/> 
        </TabPanel>

        <TabPanel className="-tab-item-2">
         <Services/>
        </TabPanel>

       
      </div>
    </Tabs>
  );
};
export default SellerInfoTabs;