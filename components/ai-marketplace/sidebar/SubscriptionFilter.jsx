import { useState } from "react";

const SubscriptionFilter = () => {
  const [selected, setSelected] = useState(false);
  const options = [
    { label: "Weekly",count:"5" },
    { label: "Monthly",count:"6" },
    { label: "Quaterly" ,count:"8"},
    { label: "Yearly" ,count:"10"},
  ];
  return (
    <>
      <div className="row y-gap-10 items-center justify-between">
        <div className="col-auto">
          <div className="form-checkbox d-flex items-center">
            <input
              type="checkbox"
             
            />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
            <div className="text-15 ml-10">One Time Purchase</div>
          </div>
        </div>
        <div className="col-auto">
          <div className="text-15 text-light-1">20</div>
        </div>
      </div>
{/*End of one time purchase*/}
      <div className="row y-gap-10 items-center justify-between">
        <div className="col-auto">
          <div className="form-checkbox d-flex items-center">
            <input type="checkbox"
            id="subscription"
            checked={selected}
            onChange={(e) => setSelected(e.target.checked)} />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
            <div className="text-15 ml-10">Subscription</div>
          </div>
        </div>
        <div className="col-auto">
          <div className="text-15 text-light-1">20</div>
        </div>
      </div>
      {selected &&   <div>{options.map((option, index) => (
        <div className="row y-gap-10 ml-10 items-center justify-between">
        <div className="col-auto">
          <div className="form-checkbox d-flex items-center">
            <input type="checkbox"/>
          
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
            <div className="text-15 ml-10">{option.label}</div>
          </div>
        </div>
        <div className="col-auto">
          <div className="text-15 text-light-1">{option.count}</div>
        </div>
      </div>
        ))}</div> }

    </>
  );
};

export default SubscriptionFilter;
