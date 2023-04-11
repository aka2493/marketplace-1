import Link from "next/link";
import {useState } from "react";
import { Switch } from "@nextui-org/react";
import { Checkbox, Spacer } from "@nextui-org/react";

const PriceandComments= () => {
    const [selected, setSelected] = useState(false);
  return (
    <>
      <div className="col-xl-8 col-lg-8 mt-30">
        <div className="py-15 px-20 rounded-4 mt-30 text-15 bg-green-1">
        <strong className="text-pink">Important</strong>&nbsp;:&nbsp;Set the price for your items independently and not discuss your pricing decisions with other authors.The item price will include your author fee and your initial term of item support(if you offer it).
        <div className="mt-10">See our {" "}<Link href="" className="text-blue-1 fw-500">Author Terms</Link>{" "}and  {" "}<Link href="" className="text-blue-1 fw-500">Item Support</Link>{" "} breakdown if you want to know more.</div>
          
        </div>
        {/* End register notify */}
        <div className="mb-6 xl:mb-8 mt-20">
        <span className="text-40 fw-600">4</span>
        <span className="text-20 fw-400">/4</span>
    </div>
      
       
        <div className="row x-gap-20 y-gap-20 pt-10">
       
          <div className="col-md-12 d-flex align-items-center">
     
          <h6 className="text-20 fw-500 mt-10 mb-22">Set Your Price
          </h6>
           <h6 className="text-18 fw-500  ml-10 mt-10 mb-22">(US$)</h6> 
           </div> 
           <div className="row">
           <div className="mt-10 mb-40 price" style={{ gap: "10px" ,display:"flex"}}>
           <div className="col-md-4">
           <h2 className="text-16 fw-500">Regular Price</h2>
           <div className="form-input mt-10">
             <input type="text" required />
             <label className="lh-1 text-16 text-light-1">Enter price</label>
           </div>
           <div className="col-md-12 mt-10">
         <span style={{display: 'flex', alignItems: 'center'}}>
                   <img src="/img/startselling/info.svg" width={18} height={18} alt="icon" style={{marginRight: '5px'}} />
         <p className="text-14">If the current bid is closer to Buy Now price,10% will reflect</p>
               </span>
         
       </div>
         </div>
         
         {/* End col-12 */}
   
         <div className="col-md-4">
         <h2 className="text-16 fw-500">Commercial Price</h2>
         <div className="form-input mt-10">
           <input type="text" required />
           <label className="lh-1 text-16 text-light-1">
            Enter price
           </label>
         </div>
         <div className="col-md-12 mt-10">
         <span style={{display: 'flex', alignItems: 'center'}}>
                   <img src="/img/startselling/info.svg" width={18} height={18} alt="icon" style={{marginRight: '5px'}} />
         <p className="text-14">If the current bid is closer to Buy Now price,10% will reflect</p>
               </span>
         
       </div>
       </div>
       <div className="col-md-4">
       <h2 className="text-16 fw-500">Extended Commercial Price</h2>
       <div className="form-input mt-10">
         <input type="text" required />
         <label className="lh-1 text-16 absolute text-light-1">
         Enter price
         </label>
       </div>
       <div className="col-md-12 mt-10">
       <span style={{display: 'flex', alignItems: 'center'}}>
                 <img src="/img/startselling/info.svg" width={18} height={18} alt="icon" style={{marginRight: '5px'}} />
       <p className="text-14">If the current bid is closer to Buy Now price,10% will reflect</p>
             </span>
       
     </div>
     </div>
          
       </div> 
       </div> 
          {/* End col-12 */}

          <div className="d-flex items-center justify-between">
          <h2 className="text-18 text-pink fw-500 mt-10 mb-23">Extended Support</h2>
          <Switch  size="xs" />
          </div>
          <div className="pt-10 mt-20 border-top-light" />
          {/* border separation */}
          <div className="d-flex items-center justify-between">
          <h2 className="text-18 text-pink fw-500 mt-10 mb-23">Are you willing to work with Traderlo for Customization Services</h2>
          <Switch  size="xs" initialChecked />
          </div>

          <h2 className="text-18 fw-500 mt-10 mb-18">Expected Hourly Rate&nbsp;($)?</h2>
          <div className="col-md-4">
          <div className="form-input ">
            <input type="text" required />
            <label className="lh-1 text-16 text-light-1">
            Enter  Price
            </label>
          </div>
         
          </div>

          <div className="col-md-12">
          <h2 className="text-18 fw-500 mt-10 mb-24">Message to the Traderlo Reviewer</h2>
            <div className="form-input">
              <textarea required rows={5} defaultValue={""} />
              <label className="lh-1 text-16 text-light-1">
      Enter Your Comments
              </label>
            </div>
          </div>
          {/* End col-12 */} 
         
<div className="mt-30">
      <Checkbox isSelected={selected}  color="success" onChange={setSelected}>
  <label className="text-15"> Any images,sounds,videocode,flash,or ther assets that are not my own work,have been approximately licensed for use in the preview or main download.Other than these items,this work is entirely my own and I have full rights to sell it on Themeforest.</label>
      </Checkbox>
      </div>
      
        </div>
        {/* End .row */}
      </div>
     
      
      {/* End .col-xl-7 */}

 
      {/*  */}
    </>
  );
};

export default PriceandComments;
