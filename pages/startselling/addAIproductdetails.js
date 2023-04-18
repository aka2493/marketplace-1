
import Seo from "../../components/common/Seo";
import Header1 from "../../components/header/header-1";
import DefaultFooter from "../../components/footer/default";
import Step from "../../components/startSelling/addAIProductDetails/step";

const index = () => {
  return (
    <>
      <Seo pageTitle="List your Domain" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header1 />
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
