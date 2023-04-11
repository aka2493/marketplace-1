
const SimilarDomains = ({ }) => {
  return (
    <div className="d-flex justify-end js-pin-content mt-20">
      <div className="w-360 lg:w-full d-flex flex-column">
        <div className="px-30 py-30 rounded-4 border-light bg-white shadow-4">
          <div className="text-24 fw-600 text-dark-1 border-bottom-light">
            Similar Domains
          </div>

          <div className="d-flex items-center pt-20">
            <div className="size-40 flex-center bg-light-2 rounded-full text-14 fw-600">
              {/* <i className="icon-heart text-16 text-green-2" /> */}
              CL
            </div>
            <div className="text-14 lh-16 ml-10">
              Twitter.com.
            </div>
          </div>
          <div className="d-flex items-center pt-20">
            <div className="size-40 flex-center bg-light-2 rounded-full text-14 fw-600">
              CL
            </div>
            <div className="text-14 lh-16 ml-10">
              YouTube.com.
            </div>
          </div>
          <div className="d-flex items-center pt-20">
            <div className="size-40 flex-center bg-light-2 rounded-full text-14 fw-600">
              CL
            </div>
            <div className="text-14 lh-16 ml-10">
              Google.com.
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default SimilarDomains;
