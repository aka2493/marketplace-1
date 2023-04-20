
const Pricing = ({typevalue}) => {
  
    return (
      <>
        <div className="col-xl-8 col-lg-8 mt-30">
          <div className="py-15 px-20 rounded-4 mt-30 text-15 bg-green-1">
          List down Pricing for your AI Products.
          </div>
          {/* End register notify */}
          <div className="mb-6 xl:mb-8 mt-20">
          <span className="text-40 fw-600">2</span>
          {typevalue !== "AI models" ? <span className="text-20 fw-400">/3</span> : <span className="text-20 fw-400">/4</span>} 
      </div>
          <div className="row x-gap-20 y-gap-20 pt-20">
         <div className="col-md-12 d-flex align-items-center">
      <h6 className="text-18 fw-500 mt-10">Enter Procurement Cost
            </h6>
            </div> 
            <div className="mt-10 mb-20" style={{ gap: "20px" ,display:"flex"}}>
            <div className="col-md-4">
            <h2 className="text-16 fw-600">Monthly</h2>
            <div className="form-input mt-10">
              <input type="text" required />
               </div>
        </div>
          
          {/* End col-12 */}
     <div className="col-md-4">
          <h2 className="text-16 fw-600">Yearly</h2>
          <div className="form-input mt-10">
            <input type="text" required />
            </div>
         </div>
     </div>  
  <div className="col-md-12 d-flex align-items-center">
       <h6 className="text-18 fw-500 mt-10 mb-18">Enter Model Maintenance Cost
            </h6>
            </div> 
          <div className="mt-10" style={{ gap: "20px" ,display:"flex"}}>
          <div className="col-md-4">
          <h2 className="text-16 fw-600">Monthly</h2>
          <div className="form-input mt-10">
            <input type="text" required />
             </div>
      </div>
        
        {/* End col-12 */}
   <div className="col-md-4">
        <h2 className="text-16 fw-600">Yearly</h2>
        <div className="form-input mt-10">
          <input type="text" required />
          </div>
      </div>
 </div>  
      </div>
          {/* End .row */}
         {/* End col-12 */}
        </div>
       </>
    );
  };
  
  export default Pricing;
  