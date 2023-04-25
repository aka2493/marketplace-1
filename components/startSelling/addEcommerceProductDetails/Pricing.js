import { useState } from "react";
import { Checkbox } from "@nextui-org/react";
import Dropdown from "../../common/Dropdown";

const Pricing = () => {
  const [selected, setSelected] = useState(false);
  const [subscriptionselect, subscriptionsetSelected] = useState(false);
  const [subscriptionoption, setsubscriptionoption] = useState("Subscription");

  const handleSubscriptionvalueChange = (value) => {
    setsubscriptionoption(value);
  };

  const dropdowns = [
    {
      title: "Subsciption Options",
      value:subscriptionoption,
      options: ["Weekly", "Monthly", "Quaterly","Yearly"],
      onChange: handleSubscriptionvalueChange,
    },
  ];
  return (
    <>
      <div className="col-xl-8 col-lg-8 mt-30">
        <div className="mb-6 xl:mb-8 mt-20">
          <span className="text-40 fw-600">2</span>
          <span className="text-20 fw-400">/4</span>
        </div>
        <div className="row x-gap-20 y-gap-20 pt-10">
        <h2 className="text-20 fw-500 mt-10 mb-10">Regular Pricing</h2>
        <div
        className="mt-10 mb-20 price"
        style={{ gap: "20px", display: "flex" }}
      >
        <div className="col-md-6">
          <h2 className="text-18 fw-500">Actual Price</h2>
          <div className="form-input mt-10">
            <input type="text" required />
          </div>
        </div>

        <div className="col-md-6">
          <h2 className="text-18 fw-500">Discount Price&nbsp;(optional)</h2>
          <div className="form-input mt-10">
            <input type="text" required />
          </div>
        </div>
      </div>
<div className="mb-10">
        <Checkbox
        isSelected={subscriptionselect}
        color="success"
        onChange={subscriptionsetSelected}
      >
        <label className="text-18 fw-500">
         Do you have Subscription Plans?
        </label>
      </Checkbox>
      </div>
      {subscriptionselect &&(
        <div>
          <h2 className="text-20 fw-500 mt-10 mb-30">Subscription</h2>
          <div className="col-md-12">
            <h2 className="text-18 fw-500 mb-20">Select Subscription Plans</h2>
            <div className="mt-30 mb-40">
            {dropdowns.map((dropdown, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <Dropdown key={index} {...dropdown} />
              </div>
            ))}
            </div>
          </div>

          {/* End col-12 */}
          <div
            className="mt-10 mb-20 price"
            style={{ gap: "20px", display: "flex" }}
          >
            <div className="col-md-6">
              <h2 className="text-18 fw-500">Actual Price</h2>
              <div className="form-input mt-10">
                <input type="text" required />
              </div>
            </div>

            <div className="col-md-6">
              <h2 className="text-18 fw-500">Discount Price&nbsp;(optional)</h2>
              <div className="form-input mt-10">
                <input type="text" required />
              </div>
            </div>
          </div>
  
          <div className="pt-10 mt-40 border-top-light" />
          {/* border separation */}

          
          </div>  )}
          <div className="col-md-12">
       
              <Checkbox
                isSelected={selected}
                color="success"
                onChange={setSelected}
              >
                <label className="text-18 fw-500">
                  Are you offering a deal?
                </label>
              </Checkbox>
        
          </div>
          {/* End col-12 */}
          {selected && (
            <div className="col-md-12">
              <h2 className="text-18 fw-500 mt-10">Deal URL</h2>
              <div className="form-input mt-10">
                <input type="text" required />
              </div>
            </div>
          )}
        </div>
        {/* End .row */}
      </div>

      {/* End .col-xl-7 */}

      {/*  */}
    </>
  );
};

export default Pricing;
