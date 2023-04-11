import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import PasswordInfo from "./PasswordInfo";
import LocationInfo from "./LocationInfo";
import PersonalInfo from "./PersonalInfo";

const Index = () => {
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
            Personal Information
          </button>
        </Tab>

        <Tab className="col-auto">
          <button className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button">
            Location Information
          </button>
        </Tab>

        <Tab className="col-auto">
          <button className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button">
            Change Password
          </button>
        </Tab>
      </TabList>
      {/* End tablist */}

      <div className="tabs__content pt-30 js-tabs-content">
        <TabPanel className="-tab-item-1 is-tab-el-active">
          <PersonalInfo />
        </TabPanel>
        {/* End personal info tab content */}

        <TabPanel className="-tab-item-2">
          <LocationInfo />
        </TabPanel>
        {/* End Location info tab content */}

        <TabPanel className="-tab-item-3">
          <PasswordInfo />
        </TabPanel>
        {/* End Password info tab content */}
      </div>
    </Tabs>
  );
};

export default Index;
