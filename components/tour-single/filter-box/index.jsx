import GuestSearch from "./GuestSearch";
import DateSearch from "./DateSearch";
import Link from "next/link";

const index = () => {
  return (
    <>
      <div className="col-12">
        <div className="searchMenu-date px-20 py-10 border-light rounded-4 -right js-form-dd js-calendar">
          <div>
            <h4 className="text-15 fw-500 ls-2 lh-16">Date</h4>
            <DateSearch />
          </div>
        </div>
      </div>

      <div className="col-12">
        <GuestSearch />
      </div>

      <div className="col-12">
        <Link
          href="/domains/domain-listing"
          className="button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-blue-1 text-white"
        >
          Buy Now
        </Link>
      </div>
    </>
  );
};

export default index;
