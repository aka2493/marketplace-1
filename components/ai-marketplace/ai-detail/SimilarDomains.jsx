const SimilarDomains = ({}) => {
  return (
    <div className="d-flex justify-end js-pin-content mt-20 mb-20">
      <div className="w-360 lg:w-full d-flex flex-column">
        <div className="px-30 py-30 rounded-4 border-light bg-white shadow-4">
          <div className="text-24 fw-600  text-dark-1 border-bottom-light">
            Highlights
          </div>
          <div className="col-12">
            <ul className="list-disc text-15 mt-20">
              <li>Generate months of social media content in minutes</li>
              <li>Generate fresh ad creative that&apos;s designed to convert.</li>
              <li>Write SEO-Optimized blog posts 10X faster with Jasper</li>
              <li>
                {" "}
                Spice up your email messages for sales, marketing, & support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarDomains;
