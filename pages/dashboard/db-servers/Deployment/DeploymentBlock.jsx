   
import { useState } from "react";
import SearchBox from "../../../../components/searchBox";
import DeploymentDetails from "../Deployment/DeploymentDetails";

const DeploymentBlock = (showservers) => {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(!showComponent);
  };
  const tableData = [
    { id: 1, serverName: "ubuntu-2cpu-4gb-sg-sin1", status: "Deployed" },
    { id: 2, serverName: "ubuntu-2cpu-4gb-sg-sin2", status: "Saved" },
    { id: 3, serverName: 'ubuntu-2cpu-4gb-sg-sin3', status: 'Deployed' },
    { id: 4, serverName: 'ubuntu-2cpu-4gb-sg-sin4', status: 'Saved' },
  ];
  return (
    <div>
      {!showComponent ? (<div>
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
          <div>
          <table className="table-3  -border-bottom col-12">
        <thead className="bg-light-2 item-center">
          <tr>
          <th >Servers</th>
          <th >Status</th>
          <th >Action</th>       
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key ={item.id} className="align-middle">
      <td >{item.serverName}</td>
      <td  className={`${item.status === 'Deployed'?"text-green-2":"text-pink"}`}>{item.status}</td>
     
      <td   className="fw-500">
        <button className={`h-40 px-35 ${item.status === 'Deployed' ? 'disabled text-light-4 border bg-light-5' : 'bg-dark-4 text-white'}`}>
          Deploy
        </button>
      </td>
    </tr>
          ))}
        </tbody>
      </table>
       </div>
       </div>
      ):(<div><DeploymentDetails /></div>)}
    
    </div>
  );
};

export default DeploymentBlock;












