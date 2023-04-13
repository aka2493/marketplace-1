import{useState } from "react"
import Image from "next/image"


const ServerDetails = ({ server, onCloseClick }) => {
  const [tableData, setTableData] = useState([
    {  serverName: "ubuntu-2cpu-4gb-sg-sin1", hostName: "ubuntu-2cpu-4gb-sg-sin1", IP: "95.111.90.5",UUID:"OOCC9ed-bc52-49o-8ert-45ou" },
    
  ]);
  
    return(
        <div className="rounded-4 bg-white shadow-3">
      
      
      <table className="table-3 -border-bottom col-12">
        <thead className="bg-light-2 item-center">
          <tr>
            <th>Server Name</th>
            <th>Host Name</th>
            <th>IP</th>
            <th>UUID</th>
          
          </tr>
         
        </thead>
        <tbody>
        
        {tableData.map((item) => (
       <tr>
          <td>{item.serverName}</td>
          <td>{item.hostName}</td>
          <td>{item.IP}</td>
          <td>{item.UUID}</td>
          </tr>
        ))}
       
        </tbody>
      </table>
      <h5 className="text-16 fw-500 mt-20 ml-20">Configuration</h5>
     
      <button className="h-40 px-35 mt-40 ml-20 -dark-1 bg-pink text-white" onClick={onCloseClick}>
      Close
    </button>
      
    
      
      </div>
    )
  };
  
  export default ServerDetails;