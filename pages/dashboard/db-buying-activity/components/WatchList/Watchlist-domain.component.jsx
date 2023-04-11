const WatchlistDomainTabComponent = () => {

    const tableColumns = [{ id: 1, label: 'Name' },
    { id: 2, label: 'Current Top Bid' },
    { id: 3, label: 'Asking Price' },
    { id: 4, label: 'Bid End Date' },
    { id: 5, label: 'Action' },]

    return (<table className="table-3 -border-bottom col-12">
        <thead className="bg-light-2">
            <tr>
                {tableColumns.map((item) => <th key={item.id}>{item.label}</th>)}
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>abcloremlpsumxyabcd.com<br />Domain</td>
                <td>$60</td>
                <td>$120</td>
                <td>April 4, 2023</td>
                <td >
                    <span className="bg-red-2 rounded-full px-10 py-5"><i className="icon-trash text-12 text-red-3" /></span>
                    <span className="ml-5 text-red-1">Delete</span>
                </td>
            </tr>

            <tr>
                <td>abcloremlpsumxyabcd.com<br />Website</td>
                <td>$60</td>
                <td>$120</td>
                <td>April 4, 2023</td>
                <td >
                    <span className="bg-red-2 rounded-full px-10 py-5"><i className="icon-trash text-12 text-red-3" /></span>
                    <span className="ml-5 text-red-1">Delete</span>
                </td>
            </tr>
        </tbody>
    </table>)
}

export default WatchlistDomainTabComponent;