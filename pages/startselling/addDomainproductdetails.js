
import Seo from "../../components/common/Seo";
import Header11 from "../../components/header/header-11";
import DefaultFooter from "../../components/footer/default";
import Step from "../../components/startSelling/addDomainProductDetails/step";

const index = () => {
  return (
    <>
      <Seo pageTitle="Hotel Booking Page" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header11 />
      {/* End Header 1 */}

      <section className="pt-40 layout-pb-md">
        <div className="container">
          <Step />
        </div>
        {/* End container */}
      </section>
      {/* End stepper */}

    

      <DefaultFooter />
    </>
  );
};

export default index;
