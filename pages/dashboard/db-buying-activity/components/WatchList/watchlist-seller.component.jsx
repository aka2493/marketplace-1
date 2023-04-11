const WatchlistSellerTabComponent = () => {

    const tableColumns = [
        { id: 1, label: 'Seller Name' },
        { id: 2, label: 'Member Since' },
        { id: 3, label: 'Action' },
        { id: 4, label: 'Listing' }]

    return (<table className="table-3 -border-bottom col-12">
        <thead className="bg-light-2">
            <tr>
                {tableColumns.map((item) => <th key={item.id}>{item.label}</th>)}
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John Smith</td>
                <td>April 4, 2023</td>
                <td >
                    <span className="bg-red-2 rounded-full px-10 py-5"><i className="icon-trash text-12 text-red-3" /></span>
                    <span className="ml-5 text-red-1">Delete</span>
                </td>
                <td className="text-blue-1 text-18 fw-500">View all Listing</td>
            </tr>

            <tr>
                <td>John Smith</td>
                <td>April 4, 2023</td>
                <td >
                    <span className="bg-red-2 rounded-full px-10 py-5"><i className="icon-trash text-12 text-red-3" /></span>
                    <span className="ml-5 text-red-1">Delete</span>
                </td>
                <td className="text-blue-1 text-18 fw-500">View all Listing</td>
            </tr>
        </tbody>
    </table>)
}

export default WatchlistSellerTabComponent;