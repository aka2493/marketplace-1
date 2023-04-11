import Link from "next/link";

const PricingCard = ({ showMultiplePricing = false, priceHeadingWithDisCode = true, auctionEnabled = true }) => {
  return (
    <div className="d-flex justify-end js-pin-content">
      <div className="w-360 lg:w-full d-flex flex-column items-center">
        <div className="px-30 py-30 rounded-4 border-light bg-white shadow-4">

          {priceHeadingWithDisCode ? <div>
            <span class="text-24 fw-600 text-dark-1 lh-12">$700.44</span>
            <span className="pl-5 text-16"><del>$999</del></span>
            <span className="pl-5 text-16">(10% off)</span>
          </div> : <div class="text-24 fw-600 text-dark-1 lh-12">
            Responsive HTML Template
          </div>}

          {auctionEnabled && <div className="d-flex items-center pt-20">
            <div className="size-40 flex-center bg-light-2 rounded-full">
              <i className="icon-heart text-16 text-green-2" />
            </div>
            <div className="lh-16 ml-10">
              <p className="text-18 fw-500 text-dark-1">Add to favourite</p>
              <p className="text-16">Ends in: 10 days</p>
            </div>
          </div>}


          <div className="row y-gap-20 pt-30">

            {!showMultiplePricing ? (auctionEnabled ? <div class="single-field d-flex pt-30">
              <div class="col-8">
                <input style={{ borderRadius: 'initial' }} class="col-12 bg-white h-60 border" type="text" placeholder="Enter your offer" required="" />
              </div>
              <div class="col-4">
                {/* <button type="submit" style={{ borderRadius: 'initial' }} class="button -md h-60 -blue-1 bg-yellow-1 text-dark-1">Buy</button> */}
              </div>
            </div> : null) : <div>
              <div className="border-top-light mb-10"></div>
              <h2 className="fw-600 text-18 mb-10">License Type</h2>

              <div className="row y-gap-10 items-center justify-between">
                <div className="col-auto">
                  <div className="form-checkbox d-flex items-center">
                    <input type="checkbox" />
                    <div className="form-checkbox__mark">
                      <div className="form-checkbox__icon icon-check" />
                    </div>
                    <div className="text-15 ml-10">Personal</div>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="text-18 text-dark-1 fw-600">$72.33</div>
                </div>
              </div>

              <div className="row y-gap-10 items-center justify-between">
                <div className="col-auto">
                  <div className="form-checkbox d-flex items-center">
                    <input type="checkbox" />
                    <div className="form-checkbox__mark">
                      <div className="form-checkbox__icon icon-check" />
                    </div>
                    <div className="text-15 ml-10">Commercial</div>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="text-18 text-dark-1 fw-600">$92.69</div>
                </div>
              </div>

              <div className="border-top-light mt-10 mb-10"></div>
              <div className="row y-gap-10 items-center justify-between">
                <div className="col-auto">
                  <div className="form-checkbox d-flex items-center">
                    <input type="checkbox" />
                    <div className="form-checkbox__mark">
                      <div className="form-checkbox__icon icon-check" />
                    </div>
                    <div className="text-15 ml-10">Extend support upto 2 months</div>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="text-18 text-dark-1 fw-600">$9</div>
                </div>
              </div>
              <div className="border-top-light mt-10 mb-10"></div>
            </div>
            }

            <div className="col-12">
              <Link
                href="/domains/domain-listing"
                className="button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-yellow-1 text-dark-1"
              >
                Offer
              </Link>

            </div>

            <div className="col-12">
              <Link
                href="/domains/domain-listing"
                className="button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-blue-1 text-white"
              >
                Add To Cart
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PricingCard;
