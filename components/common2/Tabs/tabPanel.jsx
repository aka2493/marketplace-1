import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const TabsSection = ({ tabLabels = [], tabPanelComponents = [] }) => {
    const [tabIndex, setTabIndex] = useState(0);
    

    return (
        <Tabs
            className="tabs -underline-2 js-tabs"
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
        >
            <TabList className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20">
                {tabLabels.map((tabLabel, index) => <Tab key={`${tabLabel.id}-${index}`} className="col-auto">
                    <button className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button">
                        {tabLabel.label}
                    </button>
                </Tab>)}
            </TabList>

            <div className="tabs__content pt-30 js-tabs-content">
                {tabPanelComponents.map((tabContent, index) => <TabPanel key={`${tabContent.id}-${index}`} className={`-tab-item-${index} is-tab-el-active`}>
                    {tabContent.component}
                </TabPanel>)}
            </div>
        </Tabs>
    );
};

export default TabsSection;
