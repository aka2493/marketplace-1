import Image from "next/image";

const InventoryandShipping = () => {
  const options = [
    { label: "Compute the shipping cost using the shipping methods"  },
    { label: "The item ships free"},
    { label: "Specify a shipping fee for this product" },
   
  ];
  return (
    <>
      <div className="col-xl-8 col-lg-8 mt-30">
        <div className="py-15 px-20 rounded-4 mt-30 text-15 bg-green-1">
          Describe Product and get in front of buyers looking for similar
          Ecommerce Business by categorizing and mentioniing the age
        </div>
        <div className="mb-6 xl:mb-8 mt-20">
          <span className="text-40 fw-600">3</span>
          <span className="text-20 fw-400">/3</span>
        </div>

        <div className="row x-gap-20 y-gap-20 pt-10">
          <h6 className="text-20 fw-500 mt-10 mb-22">Inventory</h6>

          <div className="row">
            <div
              className="mt-10 price"
              style={{ gap: "20px", display: "flex" }}
            >
              <div className="col-md-6">
                <h2 className="text-16 fw-500">Quantity</h2>
                <div className="form-input mt-10">
                  <input type="text" required />
                </div>
              </div>

              {/* End col-12 */}

              <div className="col-md-6">
                <h2 className="text-16 fw-500">Low Inventory</h2>
                <div className="form-input mt-10">
                  <input type="text" required />
                </div>
                <div className="col-md-12 mt-10">
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <Image
                      width={18}
                      height={18}
                      src="/img/startselling/info.svg"
                      alt="icon"
                      style={{ marginRight: "5px" }}
                    />
                    <p className="text-14">
                      Once this quantity is attained, a notification for low
                      stock will be shown.
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* End col-12 */}
          <h6 className="text-20 fw-500 mt-10 mb-22">
            Options for Colors and Sizes
          </h6>
          <div
            className="mt-10  price"
            style={{ gap: "20px", display: "flex" }}
          >
            <div className="dropdown col-md-6 js-dropdown js-price-1-active">
              <select className="form-select dropdown__button d-flex items-center rounded-4 border-light px-15 h-50 text-14">
                <option value="1" defaultValue>
                  Pink
                </option>
                <option value="2">Blue</option>
                <option value="3">Orange</option>
                <option value="4">Green</option>
                <option value="5">Yellow</option>
              </select>
            </div>
            <div className="dropdown col-md-6 js-dropdown js-price-1-active">
              <select className="form-select dropdown__button d-flex items-center rounded-4 border-light px-15 h-50 text-14">
                <option value="1" defaultValue>
                  S
                </option>
                <option value="2">M</option>
                <option value="3">XL</option>
                <option value="4">XXl</option>
                <option value="5">XS</option>
              </select>
            </div>
          </div>
          <div className="pt-10 mt-30 border-top-light" />
          {/* border separation */}
          <h6 className="text-20  fw-500">Shipping</h6>
          <h6 className="text-18 fw-500">
            Weight and Dimensions of the Product
          </h6>
          <div className="border mt-20 mb-20" style={{ padding: "36px" }}>
            <div className="row">
              <div className="col-md-4">
                <h2 className="text-16 fw-600 mt-10 mb-20">
                  Weight&nbsp;(in Lbs)
                </h2>
                <div className="form-input">
                  <input type="text" required />
                </div>
              </div>
              {/* End col-12 */}
            </div>
            <h2 className="text-16 fw-600 justify-center text-center align-content-center mt-20 mb-20">
              Dimensions
            </h2>
            <div
              className="mt-10 price"
              style={{ gap: "20px", display: "flex" }}
            >
              <div className="col-md-4">
                <h2 className="text-16 fw-500">Length&nbsp;(in.)</h2>
                <div className="form-input mt-10">
                  <input type="text" required />
                </div>
              </div>

              {/* End col-12 */}

              <div className="col-md-4">
                <h2 className="text-16 fw-500">Width&nbsp;(in.)</h2>
                <div className="form-input mt-10">
                  <input type="text" required />
                </div>
              </div>

              <div className="col-md-4">
                <h2 className="text-16 fw-500">Height&nbsp;(in.)</h2>
                <div className="form-input mt-10">
                  <input type="text" required />
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-16 fw-500">What method would you like to use to calculate the shipping fee?</h2>
          {options.map((option, index) => (
            <div className="row y-gap-10 items-center justify-between" key={index}>
              <div className="col-auto">
                <div className="form-radio">
                  <div className="radio d-flex items-center">
                    <input type="radio" name="rating" value={option.value} />
                    <div className="radio__mark">
                      <div className="radio__icon" />
                    </div>
                    <div className="ml-10">{option.label}</div>
                  </div>
                </div>
              </div>
              {/* End .col */}
    
            </div>
          ))}


        </div>
        {/* End .row */}
      </div>

      {/* End .col-xl-7 */}

      {/*  */}
    </>
  );
};

export default InventoryandShipping;
