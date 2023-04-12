import TabsSection from "../../../../components/template-detail/Tabs/tabPanel";
import CustomerOrderTabComponent from "./customerOrder.component";
import AuctionStatusTabComponent from "./auctionStatus.component";
import ListingStatusTabComponent from "./listingStatus.component";

const SellingActivity = () => {
  return (
    <TabsSection tabLabels={[{ id: 1, label: 'Listing Status' },
    { id: 2, label: 'Auction Status' },
    { id: 3, label: 'Customer Orders' },
    ]}
      tabPanelComponents={[{ id: 1, component: <ListingStatusTabComponent /> },
      { id: 2, component: <AuctionStatusTabComponent /> },
      { id: 3, component: <CustomerOrderTabComponent /> },
      ]} />
  );
};

export default SellingActivity;
