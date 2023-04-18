
import ThumbnailUploader from "./ThumbnailUploader"
import UploadDragandDropFile from "./UploadDragDropFile"
import UploadDragandDropImages from "./uploadDragandDropImages";

const Files= () => {
   

  return (
    <>
      <div className="col-xl-8 col-lg-8 mt-30">
        <div className="py-15 px-20 rounded-4 mt-30 text-15 bg-green-1">
       Upload Thumbnails,&nbsp;Screenshots and after Purchase Deliverables for Your Template & Plugins
          
        </div>
        {/* End register notify */}
        <div className="mb-6 xl:mb-8 mt-20">
        <span className="text-40 fw-600">2</span>
        <span className="text-20 fw-400">/4</span>
    </div>
       
       
        <div className="row x-gap-20 y-gap-20 pt-10">
    
        <div className="col-md-8">
        <span>
        <h2 className="text-18 fw-500 mt-10 mb-2">Thumbnail</h2>
      <h6 className="text-15 fw-normal  text-light-1">Upload Thumbnail in JPEG or PNG&nbsp;(80x80px) format</h6> 
        </span>
        </div>

          <ThumbnailUploader/>
          <span>
          <h2 className="text-18 fw-500 mt-10 mb-2">Screenshots</h2>
          <h6 className="text-15 fw-normal text-light-1 mb-30">Make sure all the images are of same size and format</h6> 
          </span>
          
          {/* End col-12 */} 
          
    <UploadDragandDropImages/>

              <span>
          <h2 className="text-18 fw-500 mt-30 mb-20">After Purchase Deliverable Template/Plugin/Theme</h2>
          <h6 className="text-15 fw-normal col-md-8 text-light-1 mb-30">The maximum file size allowed is 3GB-please ensure compression has been optimized before uploading</h6> 
          </span>

          <UploadDragandDropFile/>  



          </div>
         
        </div>
        {/* End .row */}
       
     
      
      {/* End .col-xl-7 */}

 
      {/*  */}
    </>
  );
};

export default Files;
