import Pagination from "../../common/Pagination";
import TabsSection from "../../../../components/template-detail/Tabs/tabPanel";
import MyBidsTableComponent from "./MyBids.component";
import MyOrdersTableComponent from "./MyOrders.component";
import WatchlistComponent from "./Watchlist.component";

const BuyingActivity = () => {
  return (
    <>
      <TabsSection tabLabels={['My Bids', 'My Orders', 'Watching']}
        tabPanelComponents={[<MyBidsTableComponent />,
        <MyOrdersTableComponent />, <WatchlistComponent />]} />
      <Pagination />
    </>
  );
};

export default BuyingActivity;
