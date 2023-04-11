const verifyMeta = () => {

    return (
      <>

      <div className="flex mb-6 flex-col items-center  justify-center">
      <h6 className="text-center fw-400 mb-40">Please use http or https in URL to verify.Add the new meta tag toy our site header and click 'Verify' </h6>
      <div className="d-flex  justify-center items-center">
      
      
      <label for="input" className="mr-10">Meta Tag</label>
     
      <div className="col-md-8">
      <input type="text" id="input" className="border px-4 py-4 pl-10" placeholder="&quot;stebrmarketplace-site-verification=gwy7njjhhjhhjh&quot;" name="apple"/>
      </div>
      
    </div>
    <h3 className="fw-500 text-25 mt-50 mb-10">Steps For Verification</h3>

    <ol className="list space-y-6 mb-12">
			  <li >Copy the meta tag below, and paste into your site's home page.It should go in the &lt;head&gt; section, before the first &lt;body&gt; section</li>
                <h6 className="fw-500 text-15 ml-4">Example:</h6>
				<h6 className="fw-500 mt-10 text-15 space-y-6 ml-20">&lt;html&gt;</h6>
				<h6 className="ml-50 mt-10 font-bold">&lt;head&gt;</h6>
				<h6 className="fw-500 mt-10 text-15 ml-70">&lt;meta name=&quot;StebrMarketplacesiteverification&quot;&gt;</h6>
                <h6 className="ml-50 mt-10 font-bold">&lt;head&gt;</h6>
              <li className="mt-6">Once you update Meta Tag in &quot;Meta Tag in&quot;head&quot;section.Proceed to <strong>Verify.</strong></li>
			  <h6 className="fw-400 text-16 ml-4">To stay verified,don't remove the meta tag,even after verification succeds</h6>
			</ol>
      </div>


</>
  );
};

export default verifyMeta;