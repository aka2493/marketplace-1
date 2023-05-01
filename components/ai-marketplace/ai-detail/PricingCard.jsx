import Link from "next/link";

const PricingCard = () => {
  return (
    <>
    <h3 className="text-22 fw-500 mb-30">Pricing</h3>
    <div className="d-flex">
    
    
      <div className=" w-360 d-flex flex-column items-center" style={{marginRight: "20px"}}>
        <div className="px-30 py-30 rounded-4 border-light bg-white shadow-4">
        <div className="text-24 fw-600 text-center text-dark-1 lh-12">
        Boss Mode
      </div>
      <p className="text-16 text-center border-bottom-light mt-10">For Individuals and Small Teams</p>
      <p className="text-14  text-dark-1 mt-20  text-center  lh-12">
      The most popular option for professionals who want to use automations and write long-form.
    </p>
      
            
            <div className="text-20 fw-600 text-dark-1 text-center mt-20">$60&nbsp;/Montlhy</div>
    
            <div className="col-12 mt-20">
            <Link
              href="/domains/domain-listing"
              className="button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-yellow-1 text-dark-1"
            >
              Free Trial
            </Link>

          </div>

          <h2 className="fw-500 text-18 mt-30 mb-20">Quick Look at the features</h2>

          <div className="d-flex items-center">
          <i className="icon-check text-10" />
          <div className="text-14 fw-500 text-green-2 ml-10">
        Jasper Chat
          </div>
        </div>
        <div className="d-flex items-center">
        <i className="icon-check text-10" />
        <div className="text-14 fw-500 text-green-2 ml-10">
    Browser Extension
        </div>
      </div>
      <div className="d-flex items-center">
      <i className="icon-check text-10" />
      <div className="text-14 fw-500 text-green-2 ml-10">
50+ AI templates
      </div>
    </div>

    
        </div>

      </div>



      <div className="w-360  d-flex flex-column items-center">
        <div className="px-30 py-30 rounded-4 border-light bg-white shadow-4">
        <div className="text-24 fw-600 text-center text-dark-1 lh-12">
        Business 
      </div>
      <p className="text-16 text-center border-bottom-light mt-10">For growing teams and businesses</p>
      <p className="text-14  text-dark-1 mt-20  text-center  lh-12">
      The AI built for teams with the ability to learn your brand voice, and the support you need to scale.
    </p>
      
            
            <div className="text-20 fw-600 text-dark-1 text-center mt-20">$60&nbsp;/Montlhy</div>
    
            <div className="col-12 mt-20">
            <Link
              href="/domains/domain-listing"
              className="button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-yellow-1 text-dark-1"
            >
              Free Trial
            </Link>

          </div>

          <h2 className="fw-500 text-18 mt-30 mb-20">Quick Look at the features</h2>

          <div className="d-flex items-center">
          <i className="icon-check text-10" />
          <div className="text-14 fw-500 text-green-2 ml-10">
          Collaborate with more than 5 users
          </div>
        </div>
        <div className="d-flex items-center">
        <i className="icon-check text-10" />
        <div className="text-14 fw-500 text-green-2 ml-10">
        Tailored AI Brand Voice
        </div>
      </div>
      <div className="d-flex items-center">
      <i className="icon-check text-10" />
      <div className="text-14 fw-500 text-green-2 ml-10">
50+ AI templates
      </div>
    </div>

    
        </div>

      </div>
      </div>
      </>
  );
};

export default PricingCard;
