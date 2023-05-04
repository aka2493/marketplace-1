
const PayPalPaymentCards = () => {
    return (<div class="card-holder">
        <div class="payment-card shadow-2 rounded-8">
            <div className="d-flex items-center justify-between">
                <div className="fw-700 text-20 text-blue-1">PAYPAL</div>
                <div>
                    <i className="icon-trash text-16 text-dark-1" />
                </div>
            </div>

            <div className="fw-700 text-18 text-dark-1 mt-30 lh-12">XXXX<span className="ml-10">XXXX</span><span className="ml-10 mr-10">XXXX</span>2903</div>
            <div className="fw-400 text-14">Card Number</div>
            <div className="row d-flex items-center mt-20">
                <div className="col-6">
                    <div className="fw-700 text-18 text-dark-1 lh-12">STEVEN JOSEPH</div>
                    <div className="fw-400 text-14">Card Holder Name</div>
                </div>
                <div className="col-6">
                    <div className="fw-700 text-18 text-dark-1 lh-12">PayPal</div>
                    <div className="fw-400 text-14">Type</div>
                </div>
            </div>
        </div>
    </div>)
}
export default PayPalPaymentCards;