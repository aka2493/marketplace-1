import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import TabsSection from '../../template-detail/Tabs/tabPanel';


const BankAccountForm = () => {

    const handleAccountSubmit = (event) => {
        event.preventDefault();
        // handle form submission logic here
    };

    return (<><div className='text-center'>
        <img src="/img/payment/card.jpg" alt="card_image" style={{ height: '250px' }} />
    </div><form className="row y-gap-20 pt-20 pb-20" onSubmit={handleAccountSubmit}>

            <div className="col-12">
                <div className="form-input">
                    <input type="text" id="cardNumber" required />
                    <label htmlFor="cardNumber" className="lh-1 text-16 text-light-1">
                        Enter Card Number
                    </label>
                </div>
            </div>
            <div className="col-12">
                <div className="form-input">
                    <input type="text" id="holderName" required />
                    <label htmlFor="holderName" className="lh-1 text-16 text-light-1">
                        Name on Card
                    </label>
                </div>
            </div>
            <div className="col-12">
                <div className="form-input">
                    <input type="text" id="expiry" required />
                    <label htmlFor="expiry" className="lh-1 text-16 text-light-1">
                        Expiry Date (MM/YY)
                    </label>
                </div>
            </div>
            <div className="col-12">
                <div className="form-input">
                    <input type="text" id="cvv" required />
                    <label htmlFor="cvv" className="lh-1 text-16 text-light-1">
                        CVV
                    </label>
                </div>
            </div>

            <div className="col-auto mt-30">
                <button
                    type="submit"
                    className="button px-24 h-50 -dark-1 bg-blue-1 text-white"
                >
                    Verify Card
                </button>
            </div>
        </form></>)
}
const CardForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle form submission logic here
    };

    return (

        <>
            <div className='text-center'>
                <img src="/img/payment/bank_account.jpg" alt="bank_image" style={{ height: '250px' }} />
            </div>
            <form className="row y-gap-20 pt-20 pb-20" onSubmit={handleSubmit}>

                <div className="col-12">
                    <div className="form-input">
                        <input type="text" id="routingNumber" required />
                        <label htmlFor="routingNumber" className="lh-1 text-16 text-light-1">
                            Enter Routing Number
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-input">
                        <input type="text" id="accountNumber" required />
                        <label htmlFor="accountNumber" className="lh-1 text-16 text-light-1">
                            Enter Account Number
                        </label>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-input">
                        <input type="text" id="holderName" required />
                        <label htmlFor="holderName" className="lh-1 text-16 text-light-1">
                            Account Holder Name
                        </label>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-input">
                        <select id="accountType" className="form-select dropdown__button d-flex items-center rounded-4 border-light px-15 h-60 text-14">
                            <option value="" disabled defaultValue>
                                Account Type
                            </option>
                            <option value="credit">
                                Credit
                            </option>
                            <option value="debit">Debit</option>
                        </select>
                    </div>
                </div>
                <div className="col-auto mt-30">
                    <button
                        type="submit"
                        className="button px-24 h-50 -dark-1 bg-blue-1 text-white"
                    >
                        Verify Account
                    </button>
                </div>
            </form></>
    )
}

const AddCard = ({ open, onClose = () => { } }) => {

    const handleClose = () => onClose();

    return (<Modal show={open} onHide={handleClose} size="md" centered backdrop="false">
        <Modal.Header>
            <Modal.Title className='text-dark-1 fw-600 text-32'>Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <TabsSection tabLabels={[{ id: 1, label: 'Credit/Debit Card' },
                { id: 2, label: 'Bank Account' },
                ]}
                    tabPanelComponents={[{ id: 1, component: <BankAccountForm handleSubmit={handleClose} /> },
                    { id: 2, component: <CardForm handleSubmit={handleClose} /> },
                    ]} />
            </div>
        </Modal.Body>
    </Modal>)
}

export default AddCard;