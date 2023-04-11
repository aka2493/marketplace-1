const PasswordSecurity = () => {
    return (<div>
        <h4 className="fw-500 text-20 mb-20">Change Passowrd</h4>

        <div className="row">
            <div className="col-4">
                <div className="single-field">
                    <input class="col-12 bg-white h-50 border" placeholder="Old Password" type="text" />
                </div>
            </div>
            <div className="col-4">
                <div className="single-field">
                    <input class="col-12 bg-white h-50 border" placeholder="New Password" type="text" />
                </div>
            </div>
            <div className="col-4">
                <div className="single-field">
                    <input class="col-12 bg-white h-50 border" placeholder="Confirm New Password" type="text" />
                </div>
            </div>
        </div>

        <div className="border-top-light mt-30 mb-30"></div>

        <div className="fw-500 text-18 d-flex items-center">Two-Factor authentication
            <div class="form-check form-switch ml-10">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
            </div>
        </div>
        <p className="text-18 text-dark-1 fw-400 lh-15 mt-20">Please download an Authenticator app such as 2FA Authenticator to your smartphone. Once activated, the app will generate a code that will be needed to unlock your account.</p>
        <p className="text-18 text-dark-1 fw-400 lh-15 mt-40">While optional, using 2FA Authentication can increase the security of your account. Learn how to setup</p>
        <p className="text-28 text-blue-1 fw-500 lh-16 mt-10">2FA Authenticator or Install 2FA Authenticator</p>

        <div className="d-flex pt-40 justify-center">
            <button
                type="submit"
                className="button h-50 px-80 -dark-1 bg-blue-1 text-white"
            >
                Save
            </button>
        </div>
    </div>)
}
export default PasswordSecurity;