const CallToActions = () => {
    return (
      <section >
        <div className="container mb-80 mt-20">
          <div className="row  y-gap-10 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
              <h2 className="text-22 mt-30 font-wt-500">Do you want to participate in Auction?</h2>
                <p className="sectionTitle__text mt-5 sm:mt-0">
                  Learn more about selling on Free Domain Auctions
                </p>
              </div>
            </div>
            {/* End .col */}
  
            <div className="col-auto">
              <div className="row x-gap-20 y-gap-20">
                <div className="col-auto">
                  <button className="button px-40 h-60 -white bg-blue-1 text-white">
                    Yes
                    
                  </button>
                </div>
                {/* End col */}
                <div className="col-auto">
                  <button className="button px-40 h-60 -outline-blue-1 text-blue-1">
                    No
                  
                  </button>
                </div>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
    );
  };
  
  export default CallToActions;
  