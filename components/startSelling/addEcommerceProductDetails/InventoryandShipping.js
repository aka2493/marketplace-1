import Image from "next/image";
import { useState } from "react";
import UploadDragandDropImages from "./../addTemplateProductDetails/uploadDragandDropImages";
import { Checkbox } from "@nextui-org/react";

const InventoryandShipping = () => {
  const [selected, setSelected] = useState(false);

  const options = [
    { label: "Instant Delivery (within few minutes)" },
    { label: "Same Day Delivery (within few hours)" },
    { label: "Standard Delivery (0-15 days) " },
  ];

  return (
    <>
      <div className="col-xl-8 col-lg-8 mt-30">
        <div className="py-15 px-20 rounded-4 mt-30 text-15 bg-green-1">
          Describe Product and get in front of buyers looking for similar
          Ecommerce Business by categorizing and mentioniing the age
        </div>
        <div className="mb-6 xl:mb-8 mt-20">
          <span className="text-40 fw-600">4</span>
          <span className="text-20 fw-400">/4</span>
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

          <div className="pt-10 mt-30 border-top-light" />
          {/* border separation */}
          <h6 className="text-20  fw-500">Delivery</h6>
          <h6 className="text-18 fw-500 mb-10">
            How will you deliver this product?
          </h6>

          <div className="row y-gap-10 items-center justify-between">
            <div className="col-auto">
              <div>
                <Checkbox color="success"
                isSelected={selected}
                onChange={setSelected}>
                  <label className="text-16">
                    Instant Delivery&nbsp;(size up to 25Mb)
                  </label>
                </Checkbox>
              </div>
            </div>
            {/* End .col */}
          </div>
          {selected && <UploadDragandDropImages selected={selected}/>}

          <div className="row y-gap-10 items-center justify-between">
            <div className="col-auto">
              <div >
                <Checkbox color="success">
                  <label className="text-16">
                    Via Cloud like Cloud Drive,Drop
                    Box&nbsp;(sizes&nbsp;&gt;&nbsp;24Mb)
                  </label>
                </Checkbox>
              </div>
            </div>
            {/* End .col */}
          </div>

          <div className="row y-gap-10 items-center justify-between">
          <div className="col-auto">
            <div>
              <Checkbox color="success">
                <label className="text-16">
                Email or Messaging Service
                </label>
              </Checkbox>
            </div>
          </div>
          {/* End .col */}
        </div>
          <h2 className="text-18 mt-20 fw-500">
            Estimated Delivery Timeframes
          </h2>
          {options.map((option, index) => (
            <div
              className="row y-gap-10 items-center justify-between"
              key={index}
            >
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
