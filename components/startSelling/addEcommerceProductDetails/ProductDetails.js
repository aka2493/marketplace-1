import Link from "next/link";
import UploadDragandDropImages from "./../addTemplateProductDetails/uploadDragandDropImages";

const ProductDetails = () => {
  return (
    <>
      <div className="col-xl-8 col-lg-8 mt-30">
        <div className="py-15 px-20 rounded-4 mt-30 text-15 bg-green-1">
          Describe Product and get in front of buyers looking for similar
          Ecommerce Business by categorizing and mentioniing the age
        </div>
        {/* End register notify */}
        <div className="mb-6 xl:mb-8 mt-20">
          <span className="text-40 fw-600">1</span>
          <span className="text-20 fw-400">/4</span>
        </div>

        <div className="row x-gap-20 y-gap-20 pt-10">
          <div className="row">
            <div
              className="mt-10 mb-20 price"
              style={{ gap: "20px", display: "flex" }}
            >
              <div className="col-md-6">
                <h2 className="text-18 fw-500">Product Name</h2>
                <div className="form-input mt-10">
                  <input type="text" required />
                </div>
              </div>

              {/* End col-12 */}

              <div className="col-md-6">
                <h2 className="text-18 fw-500">Brand</h2>
                <div className="form-input mt-10">
                  <input type="text" required />
                </div>
              </div>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-md-12">
            <h2 className="text-18 fw-500 mt-10 mb-24">
              Enter Product Description
            </h2>
            <div className="form-input">
              <textarea required rows={5} defaultValue={""} />
              <label className="lh-1 text-16 text-light-1">
                Highlight what makes your product unique or a key selling point
              </label>
            </div>
          </div>
          {/* End col-12 */}
         
          {/* End col-12 */}

      
          <span>
            <h2 className="text-18 fw-500 mb-2">Product Images</h2>
            <h6 className="text-15 fw-normal text-light-1 mb-30">
              Make sure all the images are of same size and format
            </h6>
          </span>

          <UploadDragandDropImages />
          <div className="col-md-12">
            <h2 className="text-18 fw-500 mt-10">
            Product Link
            </h2>
          <div className="mt-10">
            <Link href="" className="text-blue-1 text-14 fw-500">https://www.nyandcompany.com/jeweled-button-chelsea-crewneck-cardigan/A-prod26660014/?An=102596&prodNo=0</Link>
            </div>
            </div>
        </div>
        {/* End .row */}
      </div>
      {/* End .col-xl-8 */}

      {/*  */}
    </>
  );
};

export default ProductDetails;
