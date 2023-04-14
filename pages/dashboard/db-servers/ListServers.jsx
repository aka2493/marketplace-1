
import TabsSection from "../../../components/template-detail/Tabs/tabPanel"
import ServerBlock from "../db-servers/MyServers/ServerBlock"
import DeploymentBlock from "../db-servers/Deployment/DeploymentBlock"

const BuyingActivity = () => {
  return (
    <>
      <TabsSection tabLabels={[{ id: 1, label: 'My Servers' },
      { id: 2, label: 'Deployment' }
      
     
      ]}
        tabPanelComponents={[{ id: 1, component: <ServerBlock /> },
        { id: 1, component: <DeploymentBlock /> }
      
        ]} />
    
    </>
  );
};

export default BuyingActivity;
