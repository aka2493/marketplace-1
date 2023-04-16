
import Seo from "../../../components/common/Seo"
import Sidebar from "../common/Sidebar";
import Header from "../../../components/header/dashboard-header";
import Footer from "../common/Footer";

import ServerBlock from "../db-servers/MyServers/ServerBlock"


const index = () => {
  return (
    <>
      <Seo pageTitle="Booking History" />

      <div className="header-margin"></div>

      <Header />

      <div className="dashboard">
        <div className="dashboard__sidebar bg-white scroll-bar-1">
          <Sidebar />
        </div>

        <div className="dashboard__main">
          <div className="dashboard__content bg-blue-2">
            <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
              <div className="col-12">
                <h1 className="text-30 lh-14 fw-600">Servers</h1>
        
              </div>
            </div>

            <div className="py-30 px-30 rounded-4 bg-white shadow-3">
              <ServerBlock />
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
