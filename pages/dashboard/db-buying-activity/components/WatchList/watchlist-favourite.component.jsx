const WatchlistFavouriteTabComponent = () => {

    const tableColumns = [
        { id: 1, label: 'Name' },
        { id: 2, label: 'Asking Price' },
        { id: 3, label: 'Seller Name' },
        { id: 4, label: 'Action' },]

    return (<table className="table-3 -border-bottom col-12">
        <thead className="bg-light-2">
            <tr>
                {tableColumns.map((item) => <th key={item.id}>{item.label}</th>)}
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>abcloremlpsumxyabcd.com<br />Domain</td>
                <td>$120</td>
               
                <td className="fw-500">James</td>
                <td >
                    <span className="bg-red-2 rounded-full px-10 py-5"><i className="icon-trash text-12 text-red-3" /></span>
                    <span className="ml-5 text-red-1">Delete</span>
                </td>
            </tr>

            <tr>
                <td>abcloremlpsumxyabcd.com<br />Website</td>
                <td>$120</td>
                <td className="fw-500">Steve James</td>
                <td >
                    <span className="bg-red-2 rounded-full px-10 py-5"><i className="icon-trash text-12 text-red-3" /></span>
                    <span className="ml-5 text-red-1">Delete</span>
                </td>
            </tr>
        </tbody>
    </table>)
}

export default WatchlistFavouriteTabComponent;