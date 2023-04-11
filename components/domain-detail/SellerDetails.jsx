import Link from "next/link";

const SellerDetails = ({ }) => {
  return (
    <div className="d-flex justify-end js-pin-content mt-20">
      <div className="w-360 lg:w-full d-flex flex-column items-center">
        <div className="px-30 py-30 rounded-4 border-light bg-white shadow-4">
          <div className="text-24 fw-600 text-dark-1">
            Seller Details
          </div>
          <div className="d-flex items-center pt-20">
            <div className="size-40 flex-center bg-light-2 rounded-full">
              <i className="icon-heart text-16 text-green-2" />
            </div>
            <div className="lh-16 ml-10">
              <p className="text-18 fw-500 text-dark-1">Lorina Doe</p>
              <p className="text-16">Member since: Jun 10, 2009</p>

            </div>
          </div>

          <div className="row y-gap-20 pt-30">
            <div className="col-12">
              <Link
                href="/domains/domain-listing"
                className="button -dark-1 py-15 px-35 h-60 col-12 border-dark-1 rounded-4 text-dark-1"
              >
                Click To Reveal Contact Info
              </Link>
            </div>
            <div className="col-12">
              <button class="d-flex items-center text-blue-1"><i class="icon-location text-16 mr-10"></i>Location, UK</button>
            </div>
          </div>

          <div className="row y-gap-20 pt-10">
            <div className="col-auto">
              <button className="button text-center fw-400 text-14 bg-blue-1 text-white h-50 px-15 py-16">View All Listings</button>
            </div>
            <div className="col-auto">
              <button className="button fw-400 text-14 border-dark-1 text-center text-dark-1 h-50 px-30 py-16">
                <i className="icon-eye mr-10"></i>
                Watch</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDetails;
