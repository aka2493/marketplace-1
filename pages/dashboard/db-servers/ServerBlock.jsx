import{useState } from "react"
import Image from "next/image"

const MyBidsTableComponent = () => {
    const [tableData, setTableData] = useState([
      { id: 1, serverName: 'ubuntu-2cpu-4gb-sg-sin1', status: 'Stopped', software: 'ubuntu' },
      { id: 2, serverName: 'ubuntu-2cpu-4gb-sg-sin2', status: 'Stopped', software: 'ubuntu' },
      { id: 3, serverName: 'ubuntu-2cpu-4gb-sg-sin3', status: 'Stopped', software: 'ubuntu' },
      { id: 4, serverName: 'ubuntu-2cpu-4gb-sg-sin4', status: 'Stopped', software: 'ubuntu' },
    ]);
  
    const handleStartClick = (id) => {
      const newData = tableData.map((item) => {
        if (item.id === id) {
          return { ...item, status: 'Started' };
        }
        return item;
      });
      setTableData(newData);
    };
  
    return (
      <table className="table-3 -border-bottom col-12">
        <thead className="bg-light-2">
          <tr>
            <th>Server Name</th>
            <th>Status</th>
            <th>Software</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr className="align-middle" key={item.id}>
              <td>{item.serverName}</td>
              <td>
                <span className={`text-14 fw-500 ${item.status === 'Started' ? 'text-success' : 'text-stebr-pink'}`}>
                  {item.status}
                </span>
              </td>
              <td>{item.software}</td>
              <td className="fw-500">
                <button
                  className="h-40 px-24 -dark-1 bg-dark-4 text-white"
                  onClick={() => handleStartClick(item.id)}
                >
                  <Image src="/img/startselling/power.svg" width={20} height={20} alt="image" />
                  Start
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default MyBidsTableComponent;