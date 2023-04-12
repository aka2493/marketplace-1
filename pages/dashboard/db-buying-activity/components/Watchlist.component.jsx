import TabsSection from "../../../../components/template-detail/Tabs/tabPanel";
import WatchlistDomainTabComponent from "./WatchList/Watchlist-domain.component";
import WatchlistFavouriteTabComponent from "./WatchList/watchlist-favourite.component";
import WatchlistSellerTabComponent from "./WatchList/watchlist-seller.component";

const WatchlistComponent = () => {

    return (<TabsSection
        tabLabels={[{ id: 1, label: 'Domains/Websites' },
        { id: 2, label: 'Favourites' },
        { id: 3, label: 'Sellers' }]}
        tabPanelComponents={[{ id: 1, component: <WatchlistDomainTabComponent /> },
        { id: 2, component: <WatchlistFavouriteTabComponent /> },
        { id: 3, component: <WatchlistSellerTabComponent /> },
        ]} />)
}

export default WatchlistComponent;