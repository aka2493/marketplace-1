import React, { useState } from "react";

import PitchandSales from "./PitchandSales";
import TrafficandRevenue from "./TrafficandRevenue";
import VerifyOwnership from "./VerifyOwnership";
import Promote from "./Promote"


const Index = () => {

  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    {
      title: "Pitch and Sales",
      stepNo: "1",
      stepBar: (
        <>
          <div className="col d-none d-sm-block">
            <div className="w-full h-1 bg-border "></div>
          </div>
        </>
      ),
      content: <PitchandSales />,
    },
    {
      title: "Traffic and Revenue",
      stepNo: "2",
      stepBar: (
        <>
          <div className="col d-none d-sm-block">
            <div className="w-full h-1 bg-border"></div>
          </div>
        </>
      ),
      content: <TrafficandRevenue/>,
    },
    {
      title: "Promote",
      stepNo: "3",
      stepBar: (
        <>
          <div className="col d-none d-sm-block">
            <div className="w-full h-1 bg-border"></div>
          </div>
        </>
      ),
      content: <Promote />,
    },
    {
      title: "Verify Ownership",
      stepNo: "4",
      stepBar: "",
      content: <VerifyOwnership />,
    },
  ];

  const renderStep = () => {
    const { content } = steps[currentStep];
    return <>{content}</>;
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
   
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const isLastStep = currentStep === steps.length - 1;
  
  return (
    <>
      <div className="row x-gap-20 y-gap-30 items-center">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="col-auto">
              <div
                className="d-flex items-center cursor-pointer transition"
                onClick={() => setCurrentStep(index)}
              >
                <div
                  className={
                    currentStep === index
                      ? "active size-40 rounded-full flex-center bg-blue-1"
                      : "size-40 rounded-full flex-center bg-blue-1-05 text-blue-1 fw-500"
                  }
                >
                  {currentStep === index ? (
                    <>
                      <i className="icon-check text-16 text-white"></i>
                    </>
                  ) : (
                    <>
                      <span>{step.stepNo}</span>
                    </>
                  )}
                </div>

                <div className={ currentStep === index ?"text-20 text-blue-1 fw-600 ml-10":"text-20 fw-100 ml-10"}> {step.title}</div>
              </div>
            </div>
            {/* End .col */}

            {step.stepBar}
          </React.Fragment>
        ))}
      </div>
      {/* End stepper header part */}
<div className="row">{renderStep()}</div>
      {/* End main content */}
     
      <div className="row x-gap-20 y-gap-20 pt-40">
        <div className="col-auto">
          <button
            className="button h-60 px-24 -blue-1 bg-light-2"
            disabled={currentStep === 0}
            onClick={previousStep}
          >
            Previous
          </button>
        </div>
        {/* End prvious btn */}

        {isLastStep  ?(
          <div className="col-auto">
          <button
            className="button h-60 px-24 -dark-1 bg-blue-1 text-white"
     
          >
            Submit<div className="icon-arrow-top-right ml-15" />
          </button>
          </div>
          ):(
          <div className="col-auto">
            <button
              className="button h-60 px-24 -dark-1 bg-blue-1 text-white"
             
              onClick={nextStep}
            >
              Next <div className="icon-arrow-top-right ml-15" />
            </button>
  
          </div>
          )} 
        {/* End next btn */}
      </div>
      {/* End stepper button */}
  
    </>
  );
};

export default Index;
