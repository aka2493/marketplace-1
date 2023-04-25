import PaymentCards from "../../../../components/common2/paymentCard/cards";
import PayPalPaymentCards from "../../../../components/common2/paymentCard/paypalCard";
import BankAccountCard from "../../../../components/common2/paymentCard/bankAccountCard";

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
                    <PaymentCards cardType={'VISA'} holderName={'ALISSA CORBETT'} />
                </div>
                <div className="col-md-4">
                    <PaymentCards cardType={'VISA'} holderName={'ALISSA CORBETT'} />
                </div>
                <div className="col-md-4">
                    <PaymentCards cardType={'VISA'} holderName={'STEVEN JOSEPH'} cardNumber={''} />
                </div>
            </div>
            <div className="border-top-light mt-30 mb-30"></div>
        </section>
        <section >
            <h4 className="text-18 fw-500 mb-20">My Bank Accounts</h4>
            <div className="row">
                <div className="col-md-4">
                    <BankAccountCard cardType={'Savings'} holderName={'ALISSA CORBETT'} />
                </div>
                <div className="col-md-4">
                    <BankAccountCard cardType={'Savings'} holderName={'ALISSA CORBETT'} />
                </div>
                <div className="col-md-4">
                    <BankAccountCard cardType={'Savings'} holderName={'ALISSA CORBETT'} />
                </div>
            </div>
            <div className="border-top-light mt-30 mb-30"></div>
        </section>

        <section >
            <h4 className="text-18 fw-500 mb-20">My Paypal</h4>
            <div className="row">
                <div className="col-md-4">
                    <PayPalPaymentCards />
                </div>
                <div className="col-md-4">

                </div>
                <div className="col-md-4">
                </div>
            </div>
        </section>

    </div>)
}

export default AccountCard;