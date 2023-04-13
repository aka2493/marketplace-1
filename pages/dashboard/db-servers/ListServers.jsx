import Pagination from "../common/Pagination";
import TabsSection from "../../../components/template-detail/Tabs/tabPanel"
import SearchBox from ".././../../components/common/SearchBox"
import ServerBlock from "../db-servers/ServerBlock";
const BuyingActivity = () => {
  return (
    <>
      <TabsSection tabLabels={[{ id: 1, label: 'My Servers' },
     
      ]}
        tabPanelComponents={[{ id: 1, component: <ServerBlock /> },
        
        ]} />
      <Pagination />
    </>
  );
};

export default BuyingActivity;
