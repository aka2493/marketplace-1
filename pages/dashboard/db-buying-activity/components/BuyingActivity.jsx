import Pagination from "../../common/Pagination";
import TabsSection from "../../../../components/template-detail/Tabs/tabPanel";
import MyBidsTableComponent from "./MyBids.component";
import MyOrdersTableComponent from "./MyOrders.component";
import WatchlistDomainTabComponent from "./WatchList/Watchlist-domain.component";
import WatchlistFavouriteTabComponent from "./WatchList/watchlist-favourite.component";
import WatchlistSellerTabComponent from "./WatchList/watchlist-seller.component";

const BuyingActivity = () => {
  return (
    <>
      <TabsSection tabLabels={[{ id: 1, label: 'My Bids' },
      { id: 2, label: 'My Orders' },
      { id: 3, label: 'Domains/Websites' },
      { id: 4, label: 'Favourites' },
      { id: 5, label: 'Sellers' },
      ]}
        tabPanelComponents={[{ id: 1, component: <MyBidsTableComponent /> },
        { id: 2, component: <MyOrdersTableComponent /> },
        { id: 3, component: <WatchlistDomainTabComponent />},
        { id: 4, component: <WatchlistFavouriteTabComponent />},
        { id: 5, component: <WatchlistSellerTabComponent /> },
        ]} />
      <Pagination />
    </>
  );
};

export default BuyingActivity;
