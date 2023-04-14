
   
import { useState } from "react";
import SearchBox from "../../../../components/searchBox";
import DeploymentDetails from "../Deployment/DeploymentDetails";

const DeploymentBlock = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(!showComponent);
  };

  return (
    <div>
      {!showComponent && (
        <div className="d-flex justify-between items-center mb-20">
          <div className="col-md-4">
            <SearchBox />
          </div>
          <div className="d-flex">
            <span
              className="bg-green-3 rounded-full px-10 cursor-pointer"
              onClick={handleClick}
            >
              <i className="icon-plus text-10 text-white" />
            </span>
            <span className="ml-10 fw-500 text-blue-1">
              Create Deployment Plan
            </span>
          </div>
        </div>
      )}
      {showComponent && <div><DeploymentDetails /></div>}
    </div>
  );
};

export default DeploymentBlock;












