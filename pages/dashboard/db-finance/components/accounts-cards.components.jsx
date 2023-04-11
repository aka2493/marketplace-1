
const AccountCard = () => {
    return (<div>
        <div className="row justify-end">
            <div className="col-auto">
                <button className="btn h-50 px-30 bg-stebr-pink text-18 text-white">Add Account/Card</button>
            </div>
        </div>

        <section className="mt-30">
            <h4 className="text-18 fw-500 mb-20">My Cards</h4>
            <div className="row">
                <div className="col-md-4">
                    <div className="bg-white border-light rounded-8 px-20 py-20">
                        <div className="text-end"><span className="bg-red-3 rounded-full px-10 py-5"><i className="icon-close text-10 text-red-1" /></span></div>

                        <div className="fw-500 text-20 text-dark-1">7809<span className="ml-10">XXXX</span><span className="ml-10 mr-10">XXXX</span>9097</div>

                        <div> Expiry Date <span className="ml-10">XX/XX</span></div>
                        <div className="d-flex items-center justify-between"><div>ALISSA CORBETT</div>
                            <div className="fw-700 text-20">VISA</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="bg-white border-light rounded-8 px-20 py-20">
                        <div className="text-end"><span className="bg-red-3 rounded-full px-10 py-5"><i className="icon-close text-10 text-red-1" /></span></div>

                        <div className="fw-500 text-20 text-dark-1">7809<span className="ml-10">XXXX</span><span className="ml-10 mr-10">XXXX</span>9097</div>
                        <div> Expiry Date <span className="ml-10">XX/XX</span></div>
                        <div className="d-flex items-center justify-between"><div>ALISSA CORBETT</div>
                            <div className="fw-700 text-20">VISA</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="bg-white border-light rounded-8 px-20 py-20">
                        <div className="text-end"><span className="bg-red-3 rounded-full px-10 py-5"><i className="icon-close text-10 text-red-1" /></span></div>

                        <div className="fw-500 text-20 text-dark-1">7809<span className="ml-10">XXXX</span><span className="ml-10 mr-10">XXXX</span>9097</div>

                        <div> Expiry Date <span className="ml-10">XX/XX</span></div>
                        <div className="d-flex items-center justify-between"><div>ALISSA CORBETT</div>
                            <div className="fw-700 text-20">VISA</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-top-light mt-30 mb-30"></div>
        </section>
        <section >
            <h4 className="text-18 fw-500 mb-20">My Bank Accounts</h4>
            <div className="row">
                <div className="col-md-4">
                    <div className="bg-white border-light rounded-8 px-20 py-20">
                        <div className="text-end"><span className="bg-red-3 rounded-full px-10 py-5"><i className="icon-close text-10 text-red-1" /></span></div>
                        <div className="row">
                            <div className="col-6">Account Number</div>
                            <div className="col-6">XXXXXXXX2984</div>
                        </div>
                        <div className="row">
                            <div className="col-6">Routing Number</div>
                            <div className="col-6">XXXXXXXXXXX2984</div>
                        </div>

                        <div className="d-flex items-center justify-between mt-10">
                            <div className="fw-500 text-18">STEVEN JOSEPH</div>
                            <div className="fw-500 text-18">Savings</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="bg-white border-light rounded-8 px-20 py-20">
                        <div className="text-end"><span className="bg-red-3 rounded-full px-10 py-5"><i className="icon-close text-10 text-red-1" /></span></div>
                        <div className="row">
                            <div className="col-6">Account Number</div>
                            <div className="col-6">XXXXXXXX2984</div>
                        </div>
                        <div className="row">
                            <div className="col-6">Routing Number</div>
                            <div className="col-6">XXXXXXXXXXX2984</div>
                        </div>

                        <div className="d-flex items-center justify-between mt-10">
                            <div className="fw-500 text-18">STEVEN JOSEPH</div>
                            <div className="fw-500 text-18">Savings</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="bg-white border-light rounded-8 px-20 py-20">
                        <div className="text-end"><span className="bg-red-3 rounded-full px-10 py-5"><i className="icon-close text-10 text-red-1" /></span></div>
                        <div className="row">
                            <div className="col-6">Account Number</div>
                            <div className="col-6">XXXXXXXXX2984</div>
                        </div>
                        <div className="row">
                            <div className="col-6">Routing Number</div>
                            <div className="col-6">XXXXXXXXXXX2984</div>
                        </div>

                        <div className="d-flex items-center justify-between mt-10">
                            <div className="fw-500 text-18">STEVEN JOSEPH</div>
                            <div className="fw-500 text-18">Savings</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-top-light mt-30 mb-30"></div>
        </section>

        <section >
            <h4 className="text-18 fw-500 mb-20">My Paypal</h4>
            <div className="row">
                <div className="col-md-4">
                    <div className="bg-white border-light rounded-8 px-20 py-20">
                        <div className="text-end"><span className="bg-red-3 rounded-full px-10 py-5"><i className="icon-close text-10 text-red-1" /></span></div>
                        <div className="fw-700 text-20 text-blue-1">PayPal</div>
                        <div className="fw-500 text-20 lh-1">XXXXXXXXXXXXX2903</div>
                        <p>STEVEN JOSEPH</p>
                    </div>
                </div>
                <div className="col-auto">
                </div>
                <div className="col-auto">
                </div>
            </div>
        </section>

    </div>)
}

export default AccountCard;