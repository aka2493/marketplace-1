

const ScoreandEfficiency = () => {
   
  return (
    <>
      <div className="col-xl-8 col-lg-8 mt-30">
      <div className="py-15 px-20 rounded-4 mt-30 text-15 bg-green-1">
     Describe the Efficiency and adoption rate for your AI product
      </div>
        {/* End register notify */}
        <div className="mb-6 xl:mb-8 mt-20">
        <span className="text-40 fw-600">3</span>
        <span className="text-20 fw-400">/4</span>
    </div>
      
    <div className="row x-gap-20 y-gap-20 pt-20">
    <div className="col-md-12">
    <h6 className="text-18 fw-500 mt-10">User Adoption Rate
          </h6>
          </div>
          <div className="form-input col-md-6">
          <input type="text" required />
       
        </div>
          <div className="col-md-12">
    <h6 className="text-18 fw-500 mt-10">Net Promoter Score
          </h6>
          </div>
          <div className="form-input col-md-6">
          <input type="text" required />
        
        </div>
      
    <div className="col-md-12">
    <h6 className="text-18 fw-500 mt-10">Model Efficiency
          </h6>
          </div> 
   <div className="mt-10" style={{ gap: "10px" ,display:"flex"}}>
           <div className="col-md-4">
           <h2 className="text-16 fw-500">Interference Time</h2>
           <div className="form-input mt-10">
             <input type="text" required />
             
           </div>
         </div>
         
         {/* End col-12 */}
   
         <div className="col-md-4">
         <h2 className="text-16 fw-500">Throughput</h2>
         <div className="form-input mt-10">
           <input type="text" required />
         </div>
     
       </div>
       <div className="col-md-4">
       <h2 className="text-16 fw-500">Resource Usage</h2>
       <div className="form-input mt-10">
         <input type="text" required />
         </div>
   </div>
          
       </div>  
       <div className="col-md-12">
       <h6 className="text-18 fw-500 mt-10">Precision Rate
             </h6>
             </div>
             <div className="form-input col-md-6">
             <input type="text" required />
           
           </div>
           <div className="col-md-12">
           <h6 className="text-18 fw-500 mt-10">Reviews and Ratings
                 </h6>
                 </div>
                 <div className="form-input col-md-6">
                 <input type="text" required />
               
               </div>
      </div>
        {/* End .row */}
      </div>
      {/* End .col-xl-7 */}

 
      {/*  */}
    </>
  );
};

export default ScoreandEfficiency;
