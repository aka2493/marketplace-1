
import UploadDragandDropFile from "./../addTemplateProductDetails/UploadDragDropFile"
import UploadDragandDropImages from "./../addTemplateProductDetails/uploadDragandDropImages";

const Files= () => {
   

  return (
    <>
      <div className="col-xl-8 col-lg-8 mt-30">
        <div className="py-15 px-20 rounded-4 mt-30 text-15 bg-green-1">
       Upload Screenshots and After Purchase Deliverables for Your Ecommerce Business
          
        </div>
        {/* End register notify */}
        <div className="mb-6 xl:mb-8 mt-20">
        <span className="text-40 fw-600">2</span>
        <span className="text-20 fw-400">/4</span>
    </div>
       
       
        <div className="row x-gap-20 y-gap-20 pt-10">
    
          <span>
          <h2 className="text-18 fw-500 mt-10 mb-2">Product Images</h2>
          <h6 className="text-15 fw-normal text-light-1 mb-30">Make sure all the images are of same size and format</h6> 
          </span>
          
          {/* End col-12 */} 
          
    <UploadDragandDropImages/>

      



          </div>
         
        </div>
        {/* End .row */}
       
     
      
      {/* End .col-xl-7 */}

 
      {/*  */}
    </>
  );
};

export default Files;
