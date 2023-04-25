
const BankAccountCard = ({ cardType, holderName }) => {
    return (<div class="card-holder">
        <div class="payment-card shadow-2 rounded-8">
            <div className="mt-10 d-flex items-center justify-between">
                <div className="fw-700 text-18 text-dark-1 lh-12">
                    7809<span className="ml-10">XXXX</span><span className="ml-10 mr-10">XXXX</span>9097
                </div>
                <div>
                    <i className="icon-trash text-16 text-dark-1" />
                </div>
            </div>
            <div className="fw-400 text-14">Account Number</div>
            <div className="fw-700 text-18 text-dark-1 mt-20 lh-12">7809<span className="ml-10">XXXX</span><span className="ml-10 mr-10">XXXX</span>9097</div>
            <div className="fw-400 text-14">Routing Number</div>
            <div className="row d-flex items-center mt-20">
                <div className="col-6">
                    <div className="fw-700 text-18 text-dark-1 lh-12">{holderName}</div>
                    <div className="fw-400 text-14">Card Holder Name</div>
                </div>
                <div className="col-6">
                    <div className="fw-700 text-18 text-dark-1 lh-12">{cardType}</div>
                    <div className="fw-400 text-14">Type</div>
                </div>
            </div>
        </div>
    </div>)
}
export default BankAccountCard;