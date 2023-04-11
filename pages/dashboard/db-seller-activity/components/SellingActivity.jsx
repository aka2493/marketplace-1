import TabsSection from "../../../../components/template-detail/Tabs/tabPanel";
import CustomerOrderTabComponent from "./customerOrder.component";
import AuctionStatusTabComponent from "./auctionStatus.component";
import ListingStatusTabComponent from "./listingStatus.component";

const SellingActivity = () => {
  return (
    <TabsSection tabLabels={['Listing Status', 'Auction Status', 'Customer Orders']}
      tabPanelComponents={[<ListingStatusTabComponent />,
      <AuctionStatusTabComponent />, <CustomerOrderTabComponent />]} />
  );
};

export default SellingActivity;
