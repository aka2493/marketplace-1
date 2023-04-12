
const data = [
    {
        title: "Total Earned",
        amount: "$10000.49",
        description: "Total pending",
        icon: "/img/dashboard/icons/1.svg",
    },
    {
        title: "Pending Clearance",
        amount: "$14,200",
        description: "Total earnings",
        icon: "/img/dashboard/icons/2.svg",
    },
    {
        title: "In-store Purchases",
        amount: "$8,100",
        description: "Total hotel bookings",
        icon: "/img/dashboard/icons/3.svg",
    },
    {
        title: "Total Withdrawn",
        amount: "22,786",
        description: "Total bookable services",
        icon: "/img/dashboard/icons/4.svg",
    },
];

const PaymentActivityComponent = () => {

    const tableColumns = [{ id: 1, label: 'Date' },
    { id: 2, label: 'Particulars' },
    { id: 3, label: 'Cash In' },
    { id: 4, label: 'Cash Out' },
    { id: 5, label: 'Balance' }]

    return (
        <div>
            <div className="row mb-40">
                <div className="col-md-6">
                    <div className="fw-500 text-18">Available Balance</div>
                    <div className="fw-700 text-20 text-green-2 pt-10">$4000.85</div>
                </div>
                <div className="col-md-6">
                    <div className="fw-500 text-18">Cash Out</div>
                    <div className="single-field row d-flex pt-10">
                        <div className="col-8">
                            <input style={{ borderRadius: 'initial' }} className="col-12 bg-white h-50 border" type="text" placeholder="Enter amount" required="" />
                        </div>
                        <div className="col-4">
                            <button type="button" style={{ borderRadius: 'initial' }} className="button px-40 h-50 w-100 -blue-1 bg-green-2 text-white">Request</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row y-gap-30">
                {data.map((item, index) => (
                    <div key={index} className="col-xl-3 col-md-6">
                        <div className="py-30 px-30 rounded-4 bg-light-2 shadow-3">
                            <div className="row y-gap-20 justify-between items-center">
                                <div className="col-auto">
                                    <div className="fw-500 lh-14">{item.title}</div>
                                    <div className="text-26 lh-16 fw-600 mt-5">{item.amount}</div>
                                </div>
                                <div className="col-auto">
                                    <img src={item.icon} alt="icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <h4 className="text-18 fw-500 mb-10 mt-20">Recent Payment Activity</h4>

            <table className="table-3 -border-bottom col-12">
                <thead className="bg-light-2">
                    <tr>
                        {tableColumns.map((item) => <th key={item.id}>{item.label}</th>)}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>April 4, 2023</td>
                        <td>In-store purchase Order #7763456</td>
                        <td className="text-green-2">$400</td>
                        <td className="text-red-1">-</td>
                        <td>
                            $1600
                        </td>
                    </tr>

                    <tr>
                        <td>April 4, 2023</td>
                        <td>Cleared Payment for Order #348765</td>
                        <td className="text-green-2">-</td>
                        <td className="text-red-1">$2000</td>
                        <td>
                            $1600
                        </td>
                    </tr>

                    <tr>
                        <td>April 15, 2023</td>
                        <td>Cleared Payment for Order #348765 In-store purchase Order #3463456</td>
                        <td className="text-green-2">-</td>
                        <td className="text-red-1">$2000</td>
                        <td>
                            $1600
                        </td>
                    </tr>

                    <tr>
                        <td>April 4, 2023</td>
                        <td>In-store purchase Order #7763456</td>
                        <td className="text-green-2">$400</td>
                        <td className="text-red-1">-</td>
                        <td>
                            $1600
                        </td>
                    </tr>
                    <tr>
                        <td>April 24, 2023</td>
                        <td>Cleared Payment for Order #348765</td>
                        <td className="text-green-2">-</td>
                        <td className="text-red-1">$2000</td>
                        <td>
                            $1600
                        </td>
                    </tr>
                    <tr>
                        <td>April 14, 2023</td>
                        <td>Cleared Payment for Order #348765 In-store purchase Order #7763456</td>
                        <td className="text-green-2">-</td>
                        <td className="text-red-1">$2000</td>
                        <td>
                            $1600
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>)
}

export default PaymentActivityComponent;