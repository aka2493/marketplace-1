import TabsSection from "../../../../components/template-detail/Tabs/tabPanel";
import WatchlistDomainTabComponent from "./WatchList/Watchlist-domain.component";
import WatchlistFavouriteTabComponent from "./WatchList/watchlist-favourite.component";
import WatchlistSellerTabComponent from "./WatchList/watchlist-seller.component";

const WatchlistComponent = () => {

    return (<TabsSection tabLabels={['Domains/Websites', 'Favourites', 'Sellers']}
        tabPanelComponents={[<WatchlistDomainTabComponent />,
        <WatchlistFavouriteTabComponent />, <WatchlistSellerTabComponent />]} />)
}

export default WatchlistComponent;