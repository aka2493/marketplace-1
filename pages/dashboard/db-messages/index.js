import Seo from "../../../components/common/Seo";
import Sidebar from "../common/Sidebar";
import Header from "../../../components/header/dashboard-header";
import Footer from "../common/Footer";
import MessagingSupport from "./MessageSection";

const index = () => {
    return (
        <>
            <Seo pageTitle="Messages" />
            {/* End Page Title */}

            <div className="header-margin"></div>

            <Header />
            {/* End dashboard-header */}

            <div className="dashboard">
                <div className="dashboard__sidebar bg-white scroll-bar-1">
                    <Sidebar />
                    {/* End sidebar */}
                </div>
                {/* End dashboard__sidebar */}

                <div className="dashboard__main">
                    <div className="dashboard__content bg-light-2">
                        <div className="row y-gap-20 justify-between items-end pb-40 lg:pb-40 md:pb-32">
                            <div className="col-12">
                                <h1 className="text-30 lh-14 fw-600">Offers/Messages</h1>
                            </div>
                        </div>
                        <MessagingSupport />
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;
