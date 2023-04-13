import { useState } from "react";
import Image from "next/image";
import SearchBox from "../../../components/searchBox";
import ServerDetails from "./ServerDetails";

const MyBidsTableComponent = () => {
  const [tableData, setTableData] = useState([
    { id: 1, serverName: "ubuntu-2cpu-4gb-sg-sin1", status: "Stopped", software: "ubuntu" },
    { id: 2, serverName: "ubuntu-2cpu-4gb-sg-sin2", status: "Stopped", software: "ubuntu" },
    { id: 3, serverName: 'ubuntu-2cpu-4gb-sg-sin3', status: 'Stopped', software: 'ubuntu' },
    { id: 4, serverName: 'ubuntu-2cpu-4gb-sg-sin4', status: 'Stopped', software: 'ubuntu' },
  ]);

  const [showDetails, setShowDetails] = useState(false);
  const [selectedServer, setSelectedServer] = useState(null);

  const handleButtonClick = (server) => {
    setSelectedServer(server);
    setShowDetails(true);
  };

  const handleCloseClick = () => {
    setShowDetails(false);
  };

  
  const handleStartClick = (id) => {
    const newData = tableData.map((item) => {
      if (item.id === id) {
        if (item.status === 'Stopped') {
          return { ...item, status: 'Started' };
        } else {
          return { ...item, status: 'Stopped' };
        }
      }
      return item;
    });
    setTableData(newData);
  };
  return (
    <div>
    {!showDetails &&(
      <div className="col-md-4 mb-20">
        <SearchBox />
      </div>)}
      <div>
        {!showDetails && (
          <table className="table-3 -border-bottom col-12">
            <thead className="bg-light-2 item-center">
              <tr>
              <th>Server Name</th>
              <th>Status</th>
              <th>Software</th>
              <th>Actions</th>
              <th>Server Details</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item) => (
                <TableRow key={item.id} item={item}  onStartClick={handleStartClick} onButtonClick={handleButtonClick} />
              ))}
            </tbody>
          </table>
        )}
        {showDetails && (
          <ServerDetails server={selectedServer} onCloseClick={handleCloseClick} />
        )}
      </div>
    </div>
  );
};

const TableRow = ({ item, onButtonClick,onStartClick }) => {
  const handleButtonClick = () => {
    onButtonClick(item);
  };
  const handleStartClick = () => {
    onStartClick(item.id);
  };

  return (
    <tr className="align-middle">
      <td>{item.serverName}</td>
      <td>
        <span className={`text-14 fw-500 ${item.status === "Started" ? "text-success" : "text-stebr-pink"}`}>
          {item.status}
        </span>
      </td>
      <td>{item.software}</td>
          
      <td className="fw-500">      
      {item.status === "Started" ?
                
      <button
      className="h-40 px-24 -dark-1 bg-dark-4 text-white"
      onClick={handleStartClick}
    >
      <Image className="mr-4" src="/img/startselling/power.svg" width={20} height={20} alt="image" />
      Stop
    </button>
    
: <button
className="h-40 px-24 -dark-1 bg-dark-4 text-white"
onClick={handleStartClick}
>
<Image className="mr-4" src="/img/startselling/power.svg" width={20} height={20} alt="image" />
Start
</button>}
    </td>
      
      <td className="fw-500">
        <button className="h-40 px-35 -dark-1 bg-pink text-white" onClick={handleButtonClick}>
          View
        </button>
      </td>
    </tr>
  );
};


export default MyBidsTableComponent;





