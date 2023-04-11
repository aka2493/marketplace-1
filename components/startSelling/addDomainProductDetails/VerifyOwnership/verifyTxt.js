const verifyTxt = () => {


	

    return (
      <>

      <div className="flex mb-6 flex-col items-center  justify-center">
      <h6 className="text-center fw-400 mb-40">Please add the following TXT records to DNS zone editor on your website host and click &apos;Verify&apos;.The verification process may take from 10 mins to 24 hours&apos;</h6>
      <div className="d-flex  justify-center items-center">
      
      
      <label for="input" className="mr-10">Txt record</label>
     
      <div className="col-md-8">
      <input type="text" id="input" className="border px-4 py-4 pl-10" placeholder="stebrmarketplace-site-verification=gwy7njjhhjhhjh" name="apple"/>
      </div>
      
    </div>
    <h3 className="fw-500 text-25 mt-50 mb-10">Steps For Verification</h3>

    <ol className="list space-y-3 text-15 mb-12" type="1">
      <li>Copy the above generated TXT record.</li>
              <li>Visit your domain registrar or host and sign in.</li>
              <li>Navigate to domain&apos;s DNS records.</li>
              <li>Select TXT, when asked for record type.</li>
              <li>Please enter @, in the given fields (name/host/alias).</li>
              <li>If required please enter your domain in this field, eg: yourdomain.com.</li>
              <li>Paste the copied verification TXT record in the value/answer/destination field.</li>
              <li>In the Time to Live (TTL) field, please enter 86400 or you can opt for default.</li>
              <li>Save the record and click on verify.</li>
    </ol>
      </div>
</>
  );
};

export default verifyTxt;