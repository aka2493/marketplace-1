import Link from "next/link"
import UploadDragandDropImages from "../addTemplateProductDetails/uploadDragandDropImages";
import InputWithSuggestionsAndTags from "./InputWithSuggestions";

const CategoryDetails = () => {
  
  return (
    <>
      <div className="col-xl-8 col-lg-8 mt-30">
     
      <div className="mb-6 xl:mb-8 mt-20">
      <span className="text-40 fw-600">2</span>
      <span className="text-20 fw-400">/3</span>
    </div>
    <div className="row x-gap-20 y-gap-20 pt-10">
    
     
        <div className="col-md-12">
          <h2 className="text-18 fw-500 mb-20">Add categories</h2>
          <InputWithSuggestionsAndTags/>
        </div>

        {/* End col-12 */}
   


    <div className="col-md-12">
      <h2 className="text-18 fw-500 mt-10 mb-24">
        Enter Category Description
      </h2>
      <div className="form-input">
        <textarea required rows={4} defaultValue={""} />
       
      </div>
    </div>
    {/* End col-12 */}

    <span>
      <h2 className="text-18 fw-500 mt-10 mb-2">Cover Images</h2>
      <h6 className="text-15 fw-normal text-light-1 mb-30">
        Make sure all the images are of same size and format
      </h6>
      <UploadDragandDropImages/>
    </span>

   
    <div className="col-md-12">
      <h2 className="text-18 fw-500 mt-10">
      Category Link
      </h2>
      <div className="mt-10">
      <Link href="" className="text-blue-1 text-14 fw-500">https://www.nyandcompany.com/jeweled-button-chelsea-crewneck-cardigan/A-prod26660014/?An=102596&prodNo=0</Link>
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

export default CategoryDetails;
