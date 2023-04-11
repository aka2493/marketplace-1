import { Switch } from "@nextui-org/react";
import {useState} from "react"
import UploadDragDropFile from "../addTemplateProductDetails/UploadDragDropFile"


const TrafficandRevenue = () => {

	const handleUpload= (file) =>{
		console.log(`Uploading file: ${file}`,file);
	}
	
    const getCurrentMonthYear = () => {
        const now = new Date();
        return { month: now.getMonth(), year: now.getFullYear() };
        };
        const getLastMonthsYears = (count) => {
        const result= [];
        let { month, year } = getCurrentMonthYear();
        for (let i = 0; i < count; i++) {
        if (month === 0) {
        month = 11;
        year--;
        } else {
        month--;
        }
        result.push({ month, year });
        }
        return result;
        };
        const [currentMonthYear, setCurrentMonthYear] = useState(
            getCurrentMonthYear()
          );
    
          const last6MonthsYears = getLastMonthsYears(6);
        

    return (
      <>

      <div className="col-xl-8  col-lg-8  mt-30">
      <div className="py-15 px-20 rounded-4 mt-30 text-15 bg-green-1">
      Describe your Traffic and Revenue and get in front of buyers looking for similar domains by categorizing and mentioniing the age
        
      </div>
      {/* End register notify */}
      <div className="mb-6 xl:mb-8 mt-20">
      <span className="text-40 fw-600">2</span>
      <span className="text-20 fw-400">/4</span>
  </div>
      
      <div className="row x-gap-20 y-gap-20 pt-10">
     
        <div className="col-8 d-flex items-center justify-between">
        <h2 className="text-18 text-light-1 fw-500  mb-23">Do you have Revenue in last six months?</h2>
        <Switch  size="xs" initialChecked />
        </div>
        <div className="col-4"/>
        {/* End col-12 */}
        <div className="col-xs-12 w-auto">
        
        <h2 className="text-20 fw-500 mt-20 mb-24">
        Monthly Unique Visits and Page Views for Traffic
             </h2>
             <table className="border w-4/5 border-gray-300 mb-6 w-full">
             <thead>
               <tr className="bg-gray-200 text-gray-700">
                 <th className="py-4 px-10 uppercase font-semibold text-pink-600"></th>
                 {last6MonthsYears.map(({ month, year }) => (
                   <th key={`${year}-${month}`} className="py-2 px-2 fw-500 uppercase font-semibold align-center text-pink-600 justify-center text-center">
                     {new Intl.DateTimeFormat("default", { month: "short", year: "numeric" }).format(new Date(year, month))}
                   </th>
                 ))}
                
               </tr>
             </thead>
             <tbody>
               <tr className="bg-gray-100">
                 <td className="py-2 px-4 border text-center border-gray-300 text-left fw-500  font-semibold text-pink">Unique Visits</td>
             
                 {last6MonthsYears.map(({ month, year }) => (
                   <td key={`${year}-${month}`} className="py-2 px-2 border border-gray-300">
                     <input type="text" className="border border-gray-500 focus:border-blue-500 w-full rounded-lg py-2 px-2" onChange={(e) => console.log("Unique Visits:", e.target.value)} />
                   </td>
                 ))}
               
                 
               </tr>
               <tr className="bg-gray-100">
                 <td className="py-2 px-4 border text-center  border-gray-300 text-left font-semibold text-pink fw-500">Page Views</td>
                 {last6MonthsYears.map(({ month, year }) => (
                   <td key={`${year}-${month}`} className="py-2 px-2 border border-gray-300">
                     <input type="text" className="border border-gray-500 focus:border-blue-500 w-full rounded-lg w-full py-2 px-2" onChange={(e) => console.log("Page Views:", e.target.value)} />
                   </td>
                 ))}
                 
               </tr>
             </tbody>
           </table>
           </div>
           <div className="col-12">
           <h2 className="text-20 fw-500 mt-40 mb-24">
           Monthly Unique Visits and Page Views for Revenue
                </h2>
                <table className="border border-gray-300 mb-6 w-full">
                <thead>
                  <tr className="bg-gray-200 text-gray-700">
                    <th className="py-4 px-10 uppercase font-semibold text-pink-600"></th>
                    {last6MonthsYears.map(({ month, year }) => (
                      <th key={`${year}-${month}`} className="py-2 px-2 fw-500 uppercase font-semibold align-center text-pink-600 justify-center text-center">
                        {new Intl.DateTimeFormat("default", { month: "short", year: "numeric" }).format(new Date(year, month))}
                      </th>
                    ))}
                   
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-100">
                    <td className="py-2 px-4 border text-center border-gray-300 text-left fw-500  font-semibold text-pink">Unique Visits</td>
                
                    {last6MonthsYears.map(({ month, year }) => (
                      <td key={`${year}-${month}`} className="py-2 px-2 border border-gray-300">
                        <input type="text" className="border border-gray-500 focus:border-blue-500 w-full rounded-lg py-2 px-2" onChange={(e) => console.log("Unique Visits:", e.target.value)} />
                      </td>
                    ))}
                  
                    
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="py-2 px-4 border text-center  border-gray-300 text-left font-semibold text-pink fw-500">Page Views</td>
                    {last6MonthsYears.map(({ month, year }) => (
                      <td key={`${year}-${month}`} className="py-2 px-2 border border-gray-300">
                        <input type="text" className="border border-gray-500 focus:border-blue-500 w-full rounded-lg w-full py-2 px-2" onChange={(e) => console.log("Page Views:", e.target.value)} />
                      </td>
                    ))}
                    
                  </tr>
                </tbody>
              </table>
           </div>
      

              <h2 className="text-20 fw-500 mt-40 mb-24">
       Visits and Views and Proof's
                </h2>

              <UploadDragDropFile/>
      
      </div>
      {/* End .row */}
    </div>
    {/* End .col-xl-7 */}

   
    {/*  */}

</>
  );
};

export default TrafficandRevenue;
