const ListingStatusTabComponent = () => {

    const tableColumns = [{ id: 1, label: 'Name' },
    { id: 2, label: 'Price' },
    { id: 3, label: 'Listed Date' },
    { id: 4, label: 'Status' },
    { id: 5, label: 'Actions' },]

    return (<table className="table-3 -border-bottom col-12">
        <thead className="bg-light-2">
            <tr>
                {tableColumns.map((item) => <th key={item.id}>{item.label}</th>)}
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>abcloremlpsumxyabcd.com<br />Domain</td>
                <td>$60.00</td>
                <td>April 4, 2023</td>
                <td className="text-stebr-pink">Approved</td>
                <td >
                    <span className="bg-red-2 rounded-full px-10 py-5"><i className="icon-trash text-12 text-red-3" /></span>
                    <span className="ml-5 bg-blue-1 rounded-full px-10 py-5"><i className="icon-edit text-12 text-white" /></span>
                </td>
            </tr>

            <tr>
                <td>abcloremlpsumxyabcd.com<br />Website</td>
                <td>$60.00</td>
                <td>April 4, 2023</td>
                <td className="text-green-2">Declined</td>
                <td >
                    <span className="bg-red-2 rounded-full px-10 py-5"><i className="icon-trash text-12 text-red-3" /></span>
                    <span className="ml-5 bg-blue-1 rounded-full px-10 py-5"><i className="icon-edit text-12 text-white" /></span>
                </td>
            </tr>
            <tr>
                <td>abcloremlpsumxyabcd.com<br />Website</td>
                <td>$60.00</td>
                <td>April 4, 2023</td>
                <td className="text-stebr-pink">Approved</td>
                <td >
                    <span className="bg-red-2 rounded-full px-10 py-5"><i className="icon-trash text-12 text-red-3" /></span>
                    <span className="ml-5 bg-blue-1 rounded-full px-10 py-5"><i className="icon-edit text-12 text-white" /></span>
                </td>
            </tr>
            <tr>
                <td>abcloremlpsumxyabcd.com<br />Website</td>
                <td>$60.00</td>
                <td>April 4, 2023</td>
                <td className="text-green-2">Declined</td>
                <td >
                    <span className="bg-red-2 rounded-full px-10 py-5"><i className="icon-trash text-12 text-red-3" /></span>
                    <span className="ml-5 bg-blue-1 rounded-full px-10 py-5"><i className="icon-edit text-12 text-white" /></span>
                </td>
            </tr>
        </tbody>
    </table>)
}

export default ListingStatusTabComponent;