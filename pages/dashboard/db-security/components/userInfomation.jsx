import AvatarUploader from "./avatarUploader";

const UserInformationTab = () => {
  return (
    <form className="col-xl-9">
      <div className="row x-gap-20 y-gap-20">
        <div className="row items-center">
          <div className="col-auto"><img src="/img/avatars/4.png" alt="image" className="size-100 rounded-full" /></div>
          <div className="col-md">
            <div className="d-flex items-center">
              <div className=""><button className="button px-40 fw-500 text-18 bg-blue-1 -blue-1 h-40 text-white">Upload New Picture</button></div>
              <div className=""><button className="button px-30 fw-500 text-18 border-blue-1 h-40 text-blue-1 ml-15">Delete</button></div>
              <div className="ml-15">
                <span className="bg-blue-2 rounded-full px-10 py-5"><i className="icon-edit text-10 text-blue-1" /></span>
                <span className="ml-10 text-blue-1 fw-500 text-16">Edit</span>
              </div>
            </div>
          </div>
          <div className="col-auto">
            Registered On : 27 March , 2022
          </div>
        </div>


        <div className="col-md-6">
          <div className="form-input ">
            <input type="text" required />
            <label className="lh-1 text-16 text-light-1">Full Name</label>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-input ">
            <input type="text" required />
            <label className="lh-1 text-16 text-light-1">Company/Agency Name</label>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-input ">
            <input type="text" required />
            <label className="lh-1 text-16 text-light-1">Contact Number</label>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-input ">
            <input type="text" required />
            <label className="lh-1 text-16 text-light-1">Your Email</label>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-input ">
            <input type="text" required />
            <label className="lh-1 text-16 text-light-1">Location</label>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-input ">
            <input type="text" required />
            <label className="lh-1 text-16 text-light-1">Portfolio Website</label>
          </div>
        </div>

        <div className="col-12">
          <div className="form-input ">
            <textarea required rows={5} defaultValue={""} />
            <label className="lh-1 text-16 text-light-1">
              About Yourself
            </label>
          </div>
        </div>


        <div className="col-12">
          <h4 className="fw-500 text-16 lh-1 text-light-1 mb-10">Business Verification <span className="text-yellow-1 ml-5">(Business: Not Verified)</span></h4>
          <div className="border-light d-flex px-10 py-20">
            <AvatarUploader />
          </div>
        </div>

        <div className="col-12">
          <h4 className="fw-500 text-16 lh-1 text-light-1 mb-10">Identify Verification <span className="text-yellow-1 ml-5">(Identity: Not Verified)</span></h4>
          <div className="border-light d-flex px-10 py-20">
            <AvatarUploader />
          </div>
        </div>

        <div className="col-12">
          <h4 className="fw-500 text-16 lh-1 text-dark-1 mb-20 text-center">Online Presence</h4>
          {/* <div className="border-top-light mt-30 mb-30"></div> */}

          <div className="row x-gap-20 y-gap-20 mt-30 justify-center ml-120 mr-120">
            <div className="col-auto">
              <div className="d-flex items-center border-light rounded-100 py-5 px-10 text-14 lh-14">
                <div className="rounded-100 px-10 py-5 bg-light-1 text-white"><i className={`icon-facebook text-14`} /></div>
                <div className="ml-5">Dribble</div>
                <div className="ml-30 text-white rounded-100 py-5 bg-light-1 px-20">Link</div>
              </div>
            </div>
            <div className="col-auto">
              <div className="d-flex items-center border-light rounded-100 py-5 px-10 text-14 lh-14">
                <div className="rounded-100 px-10 py-5 bg-light-1 text-white"><i className={`icon-twitter text-14`} /></div>
                <div className="ml-5">Twitter</div>
                <div className="ml-30 text-white rounded-100 py-5 bg-light-1 px-20">Link</div>
              </div>

            </div>
            <div className="col-auto">
              <div className="d-flex items-center border-light rounded-100 py-5 px-10 text-14 lh-14">
                <div className="rounded-100 px-10 py-5 bg-light-1 text-white"><i className={`icon-facebook text-14`} /></div>
                <div className="ml-5">Facebook</div>
                <div className="ml-30 text-white rounded-100 py-5 bg-light-1 px-20">Link</div>
              </div>
            </div>
            <div className="col-auto">
              <div className="d-flex items-center border-light rounded-100 py-5 px-10 text-14 lh-14">
                <div className="rounded-100 px-10 py-5 bg-light-1 text-white"><i className={`icon-linkedin text-14`} /></div>
                <div className="ml-5">LinkedIn</div>
                <div className="ml-30 text-white rounded-100 py-5 bg-light-1 px-20">Link</div>
              </div>
            </div>
            <div className="col-auto">
              <div className="d-flex items-center border-light rounded-100 py-5 px-10 text-14 lh-14">
                <div className="rounded-100 px-10 py-5 bg-light-1 text-white"><i className={`icon-instagram text-14`} /></div>
                <div className="ml-5">Pinterest</div>
                <div className="ml-30 text-white rounded-100 py-5 bg-light-1 px-20">Link</div>
              </div>
            </div>
          </div>

        </div>

        <div className="col-12 mt-40">
          <div className="d-flex justify-center">
            <button
              type="submit"
              className="button h-50 px-80 -dark-1 bg-blue-1 text-white"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UserInformationTab;
