import NewSearchBox from "./NewSearch";

const index = () => {
  return (
    <section className="masthead -type-1 z-5">
      <div className="masthead__bg">
        {/* <img alt="image" src="/img/masthead/1/bg.webp" className="js-lazy" /> */}
      </div>
      <div className="container">
        <div className="row justify-center">
          <div className="col-auto">
            <div className="text-center">
              <h1
                className="text-60 lg:text-40 md:text-30 text-dark-1"
                data-aos="fade-up"
              >
                Why to code again? Choose from turnkey software code
              </h1>
            </div>
            {/* End hero title */}

            <div
              className="tabs -underline mt-60 js-tabs"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <NewSearchBox />
            </div>

            <div
              className="text-dark-1 mt-30 md:mt-10 row text-18 d-flex x-gap-30 y-gap-20 justify-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="col-auto">#AirBnb React Software</div>
              <div className="col-auto">#E-commerce MERN Stack</div>
              <div className="col-auto">#Financial Module for Brokers (PHP based)</div>
              <div className="col-auto">#Uber like Taxi app for riders (ReactJS)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
