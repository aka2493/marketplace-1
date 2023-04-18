

const PitchandSales= () => {
  
  return (
    <>
      <div className="col-xl-8 col-lg-8 mt-30">
        <div className="py-15 px-20 rounded-4 mt-30 text-15 bg-green-1">
        Describe Product and get in front of buyers looking for similar Ecommerce Business by categorizing and mentioniing the age
          
        </div>
        {/* End register notify */}
        <div className="mb-6 xl:mb-8 mt-20">
        <span className="text-40 fw-600">1</span>
        <span className="text-20 fw-400">/4</span>
    </div>
        
       
        <div className="row x-gap-20 y-gap-20 pt-10">
       <div className="col-md-12 d-flex align-items-center">
     <h6 className="text-18 fw-500 mt-10 mb-22">Enter your Business Description
          </h6>
         {/*  <h6 className="text-15 fw-normal text-light-1 ml-10 mt-10 mb-22">(ex.Canvas | The Multipurpose HTML5 Template)</h6>*/} 
           </div> 
           <div className="form-input col-md-8">
           <input type="text" required />
           <label className="lh-1 mt-10 text-16  text-light-1">
         Description
           </label>
         </div>
            
          {/* End col-12 */}

          

          <div className="col-md-12">
          <h2 className="text-18 fw-500 mt-10 mb-24">Enter key features</h2>
            <div className="form-input">
              <textarea required rows={5} defaultValue={""} />
              <label className="lh-1 text-16 text-light-1">
          Highlight what makes your item unique or a key selling point
              </label>
            </div>
          </div>
          {/* End col-12 */} 
          
      
          <div className="col-md-12">
          <h2 className="text-18 fw-500 mt-10 mb-24">Enter Product Reviews</h2>
            <div className="form-input">
              <textarea required rows={5} defaultValue={""} />
              <label className="lh-1 text-16 text-light-1">
          Highlight what makes your item unique or a key selling point
              </label>
            </div>
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
