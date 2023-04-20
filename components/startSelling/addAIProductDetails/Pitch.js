const PitchandSales= ({typevalue}) => {
  
    return (
      <>
        <div className="col-xl-8 col-lg-8 mt-30">
          <div className="py-15 px-20 rounded-4 mt-30 text-15 bg-green-1">
          Describe the Product and get in front of buyers looking for similar AI products by categorizing and mentioning the age
            
          </div>
          {/* End register notify */}
          <div className="mb-6 xl:mb-8 mt-20">
          <span className="text-40 fw-600">1</span>
          {typevalue !== "AI models" ? <span className="text-20 fw-400">/3</span> : <span className="text-20 fw-400">/4</span>} 
      </div>        
          <div className="row x-gap-20 y-gap-20 pt-10">
         <div className="col-md-12 d-flex align-items-center">      
            <h6 className="text-18 fw-500 mt-10 mb-22">Enter Product Name
            </h6>          
             </div> 
             <div className="form-input col-md-6">
             <input type="text" required />
             <label className="lh-1 mt-10 text-15  text-light-1">
          Product Name
             </label>
           </div>           
            {/* End col-12 */}
            
          <div className="col-md-12">
            <h2 className="text-18 fw-500 mt-10 mb-24">Product Description</h2>
              <div className="form-input">
                <textarea required rows={4} defaultValue={""} />
                <label className="lh-1 text-15 text-light-1">
           Share your knowledge about your product
                </label>
              </div>
            </div>
            {/* End col-12 */} 
            
            <div className="col-md-12">
            <h2 className="text-18 fw-500 mt-10 mb-24">Enter your Product Key Features</h2>
              <div className="form-input">
                <textarea required rows={4} defaultValue={""} />
                <label className="lh-1 text-15 text-light-1">
            What makes your product special?
                </label>
              </div>
            </div>
            {/*End col-12*/}
            <div className="col-md-12 d-flex align-items-center">      
            <h6 className="text-18 fw-500 mt-10 mb-22">Do you provide any type of support for your customers?
            </h6> 
            <h6 className="text-15 fw-normal text-light-1 ml-10 mt-10 mb-22">(optional)</h6>          
             </div> 
             <div className="form-input col-md-12">
             <input type="text" required />
             <label className="lh-1 mt-10 text-15 text-light-1">
       eg.email or phone support,online documentation, or tutorials
             </label>
           </div> 
          </div>
          {/* End .row */}
        </div>
       
        
        {/* End .col-xl-7 */}
  
   
        {/*  */}
      </>
    );
  };
  
  export default PitchandSales;
  