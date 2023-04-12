import Link from "next/link";
import {useState} from "react"
import { useForm } from "react-hook-form";
import Image from "next/image"


const PitchandSales= () => {
  const [categoryValue, setcategoryValue] = useState("Select Listing Category");
  const handlecategoryvalueChange = (value) => {
    setcategoryValue(value);
  };

  const options = ["Business","Art","Food","Fashion","Entertainment"]
    
  return (
    <>
   
      <div className="col-xl-8 col-lg-8 mt-30">
      <div className="py-15 px-20 rounded-4 mt-30 text-15 bg-green-1">
      Describe your Product and get in front of buyers looking for similar domains by categorizing and mentioniing the age
        
      </div>
      
        {/* End register notify */}
        <div className="mb-6 xl:mb-8 mt-20">
        <span className="text-40 fw-600">1</span>
        <span className="text-20 fw-400">/4</span>
    </div>
        <div className="row x-gap-20 y-gap-20 pt-10">
       
          <div className="col-auto">
            <div className="dropdown js-dropdown js-amenities-active">
              <div
                className="drop_pitch d-flex items-center text-14 rounded-80 border-light px-15 h-34"
                data-bs-toggle="dropdown"
                data-bs-auto-close="true"
                aria-expanded="false"
                data-bs-offset="0,10"
              >
                <h2 className="text-16 fw-500 text-light-1">{categoryValue}</h2>
                <i className="icon icon-chevron-sm-down text-7" />
              </div>
              {/* End dropdown__button */}
  
              <div className="toggle-element -dropdown js-click-dropdown dropdown-menu">
                <div className="text-15 y-gap-15 js-dropdown-list">

                {options.map((item, index) => (
                  <div key={index}>
                      <button className={`${
                        item === categoryValue? "text-blue-1 " : ""
                      }d-block js-dropdown-link`}
                      onClick={() => handlecategoryvalueChange(item)}
                      >
                  {item}
                      </button>
                      </div>
                      ))}
                
                </div>
              </div>
              {/* End dropdown-menu */}
            </div>
            {/* End dropdown */}
          </div>
      
          <div className="col-md-12">
          <h2 className="text-18 fw-500 mt-10 mb-24">Enter Description Heading</h2>
            <div className="form-input">
            
              <input  required type="text" name="heading"  />
              <label className="lh-1 text-16 text-light-1">Description Heading</label>
            </div>
           
          </div>
     

          <div className="col-12">
          <h2 className="text-18 fw-500 mt-10 mb-24">Enter Description</h2>
            <div className="form-input">
              <textarea required type="text" name="text"  rows={5} defaultValue={""} />
              <label className="lh-1 text-16 text-light-1">
            Brief Your product
              </label>
            </div>
          </div>
          {/* End col-12 */}
          <h2 className="text-18 fw-500 mt-10 mb-18">No.of Days for Auction(max 7 days)</h2>
          <div className="col-md-8">
          <div className="form-input ">
            <input type="text" name="days"  required />
            <label className="lh-1 text-16 text-light-1">
            Enter No. of days
            </label>
          </div>
          <div className="col-md-12 mt-20">
          <span style={{display: 'flex', alignItems: 'center'}}>
					
          <Image
          width={18}
          height={18}
          src="/img/startselling/info.svg"
          alt="image"
          style={{marginRight: '5px'}}
        />
          <p className="text-14">If the current bid is closer to Buy Now price,10% will reflect</p>
				</span>
          
        </div>
          </div>
  
        {/* End col-12 */}

        <h2 className="text-18 fw-500 mt-10 mb-18">Starting Bid Price</h2>
        <div className="col-md-8">
        <div className="form-input ">
          <input type="text" required  />
          <label className="lh-1 text-16 text-light-1">
          Enter Starting Bid Price
          </label>
        </div>
        <div className="col-md-12 mt-20">
        <span style={{display: 'flex', alignItems: 'center'}}>
        
        <Image
        width={18}
        height={18}
        src="/img/startselling/info.svg"
        alt="icon"
        style={{marginRight: '5px'}}
       
      />
        <p className="text-14">If the current bid is closer to Buy Now price,10% will reflect</p>
      </span>
      </div>
        </div>
        <h2 className="text-18 fw-500 mt-10 mb-18">Buy now Price</h2>
          <div className="col-md-8">
          <div className="form-input">
            <input type="text" required  />
            <label className="lh-1 text-16 text-light-1">
            Enter Buy Now Price
            </label>
          </div>
          <div className="col-md-12 mt-20 mb-20">
          <span style={{display: 'flex', alignItems: 'center'}}>
      
        <Image
        width={18}
        height={18}
        src="/img/startselling/info.svg"
        alt="image"
        style={{marginRight: '5px'}}
      />
        <p className="text-14 ">If the current bid is closer to Buy Now price,10% will reflect</p>
          </span>
        </div>
          </div>
         
        </div>


       
 
      </div>
     
  
   
    </>
  );
};

export default PitchandSales;
