import Pagination from "../../common/Pagination";
import TabsSection from "../../../../components/template-detail/Tabs/tabPanel";
import MyBidsTableComponent from "./MyBids.component";
import MyOrdersTableComponent from "./MyOrders.component";
import WatchlistComponent from "./Watchlist.component";

const BuyingActivity = () => {
  return (
    <>
      <TabsSection tabLabels={[{ id: 1, label: 'My Bids' },
      { id: 2, label: 'My Orders' },
      { id: 3, label: 'Watching' },
      ]}
        tabPanelComponents={[{ id: 1, component: <MyBidsTableComponent /> },
        { id: 2, component: <MyOrdersTableComponent /> },
        { id: 3, component: <WatchlistComponent /> },
        ]} />
      <Pagination />
    </>
  );
};

export default BuyingActivity;
