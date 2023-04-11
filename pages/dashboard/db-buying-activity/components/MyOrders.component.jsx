const MyOrdersTableComponent = () => {

    const tableColumns = [{ id: 1, label: 'Order Id' },
    { id: 2, label: 'Name' },
    { id: 3, label: 'Purchased Price' },
    { id: 4, label: 'Ordered On' },
    { id: 5, label: 'Invoice' },
    { id: 6, label: 'Order Status' }]

    return (<table className="table-3 -border-bottom col-12">
        <thead className="bg-light-2">
            <tr>
                {tableColumns.map((item) => <th key={item.id}>{item.label}</th>)}
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>#123456</td>
                <td>abcloremlpsumxyabcd.com<br />Website</td>
                <td>$100</td>
                <td>April 4, 2023</td>
                <td>
                    <i className="icon-newsletter text-20 text-blue-1" />
                </td>
                <td >
                    <span className="mr-5">Track</span>
                    <span className="bg-blue-1 rounded-full px-10 py-5"><i className="icon-plus text-10 text-white" /></span>
                </td>
            </tr>

            <tr>
                <td>#123456</td>
                <td>abcloremlpsumxyabcd.com<br />Website</td>
                <td>$100</td>
                <td>April 4, 2023</td>
                <td>
                    <i className="icon-newsletter text-20 text-blue-1" />
                </td>
                <td >
                    <span className="mr-5">Track</span>
                    <span className="bg-blue-1 rounded-full px-10 py-5"><i className="icon-plus text-10 text-white" /></span>
                </td>
            </tr>

            <tr>
                <td>#123456</td>
                <td>abcloremlpsumxyabcd.com<br />Domain</td>
                <td>$100</td>
                <td>April 4, 2023</td>
                <td>
                    <i className="icon-newsletter text-20 text-blue-1" />
                </td>
                <td >
                    <span className="mr-5">Track</span>
                    <span className="bg-blue-1 rounded-full px-10 py-5"><i className="icon-plus text-10 text-white" /></span>
                </td>
              
            </tr>

            <tr>
                <td>#123456</td>
                <td>abcloremlpsumxyabcd.com<br />Website</td>
                <td>$100</td>
                <td>April 4, 2023</td>
                <td>
                    <i className="icon-newsletter text-20 text-blue-1" />
                </td>
                <td >
                    <span className="mr-5">Track</span>
                    <span className="bg-blue-1 rounded-full px-10 py-5"><i className="icon-plus text-10 text-white" /></span>
                </td>
            </tr>
        </tbody>
    </table>)
}

export default MyOrdersTableComponent;