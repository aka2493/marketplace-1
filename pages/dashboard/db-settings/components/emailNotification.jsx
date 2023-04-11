const checkboxes = [
    { label: "Notify me for all messages" },
    { label: "Notify me when a bid or offer is placed on my listing" },
    { label: "Notify me when admin has paid my redeem request amount" },
    { label: "Notify me when seller has accepted/rejectedmy placed bid or offer" },
    { label: "Notify me when buyer has purchased my listing" },
    { label: "Notify me when sellers transfers file to me" },
    { label: "Notify me when buyer has given a Feedback to me" },
    { label: "Notify me if any dispute is raised for the listing" },
];

const EmailNotification = () => {
    return (<div>
        <h4 className="fw-500 text-20">Manage mails for new updates in free Domain Auctions</h4>
        <div className="mt-10">
            <div className="row y-gap-10 items-center" >
                {checkboxes.map((checkbox, index) => (
                    <div className="col-6" key={index}>
                        <div className="form-checkbox d-flex items-center">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon icon-check" />
                            </div>
                            <div className="text-15 ml-10">{checkbox.label}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
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
export default EmailNotification;