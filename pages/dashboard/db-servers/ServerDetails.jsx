import{useState } from "react"
import Image from "next/image"
import ServerNetworkSelect from "../db-servers/ServerNetworkSelect";
import ServerChart from "../db-servers/ServerChart";

const ServerDetails = ({ server, onCloseClick }) => {
  const [tableData, setTableData] = useState([
    {  serverName: "ubuntu-2cpu-4gb-sg-sin1", hostName: "ubuntu-2cpu-4gb-sg-sin1", IP: "95.111.90.5",UUID:"OOCC9ed-bc52-49o-8ert-45ou" },
    
  ]);
  
  const [tableData1, setTableData1] = useState([
    {  Cpu: "2 cores", Memory: "4GB", Storage: "80GB",Location:"SG-SIN1" },
    
  ]);
  const [tableData2, setTableData2] = useState([
    {  Direction: "In", Maximum: "2.9 kbps", Average: "482 bps",Current:"398 bps",Total:"4.9 MIb" },
    {  Direction: "Out", Maximum: "2.9 kbps", Average: "482 bps",Current:"398 bps",Total:"4.9 MIb" },
  ]);

    return(
        <div className="rounded-4 bg-white shadow-3">
      
      
      <table className="table-3  -border-bottom col-12">
        <thead className="bg-light-2 items-center">
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
      <h5 className="text-16 fw-500 mt-30 ml-20">Configuration</h5>
     <h5 className="text-14 fw-500 mt-10 mb-30 text-light-4 ml-20">Loreum Ipsum is a Dummy Text</h5>
     <table className="table-3 -border-bottom px-30 col-12">
     <thead className="bg-light-2 items-center">
       <tr>
         <th>CPU</th>
         <th>MEMORY</th>
         <th>STORAGE</th>
         <th>LOCATION</th>
       <th>SETTING</th>
       </tr>
      
     </thead>

     <tbody>
     
     {tableData1.map((item) => (
    <tr className="items-center">
       <td>{item.Cpu}</td>
       <td>{item.Memory}</td>
       <td>{item.Storage}</td>
       <td>{item.Location}</td>
       <td> <button className="h-40 px-35 border-blue-1  bg-white text-dark-4" >
       Resize Server
     </button></td>
       </tr>
     ))}
    
     </tbody>
   </table>
 

   <div className="d-flex justify-between items-center">
   <span>
     <h5 className="text-16 fw-500 mt-30 ml-20">Statistics</h5>
     <h5 className="text-14 fw-500 mt-10 mb-30 text-light-4 ml-20">Loreum Ipsum is a Dummy Text</h5>
     </span>
     <ServerNetworkSelect/>
   </div>
   {/* End .d-flex */}

   <div className="pt-30">
     <ServerChart />
   </div>
{/* End .col */}
   
<table className="table-3   mt-20 -border-bottom col-12">
        <thead className="bg-light-2 items-center">
          <tr>
            <th>Direction</th>
            <th>Maximum</th>
            <th>Average</th>
            <th>Current</th>
            <th>Total</th>
          
          </tr>
         
        </thead>
        <tbody>
        
        {tableData2.map((item) => (
       <tr>
          <td>{item.Direction}</td>
          <td>{item.Maximum}</td>
          <td>{item.Average}</td>
          <td>{item.Current}</td>
          <td>{item.Total}</td>
          </tr>
        ))}
       
        </tbody>
      </table>
   <button className="h-40 px-35 mt-40 ml-20 -dark-1 bg-pink text-white" onClick={onCloseClick}>
      Close
    </button>
      
    
      
      </div>
    )
  };
  
  export default ServerDetails;