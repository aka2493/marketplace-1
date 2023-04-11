const MyBidsTableComponent = () => {

    const tableColumns = [{ id: 1, label: 'Name' },
    { id: 2, label: 'My Last Bid' },
    { id: 3, label: 'Current Top Bid' },
    { id: 4, label: 'Bid Status' },
    { id: 5, label: 'Asking Price' },
    { id: 6, label: 'Days Left' }]

    return (<table className="table-3 -border-bottom col-12">
        <thead className="bg-light-2">
            <tr>
                {tableColumns.map((item) => <th key={item.id}>{item.label}</th>)}
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>abcloremlpsumxyabcd.com<br />domain</td>
                <td>$60</td>
                <td>$100</td>
                <td>
                    <span className="text-center text-14 fw-500 text-stebr-pink">
                        Losing
                    </span>
                </td>
                <td className="fw-500">$200</td>
                <td>22 Days</td>
                {/* <td>
          <ActionsButton />
        </td> */}
            </tr>

            <tr>
                <td>abcloremlpsumxyabcd.com<br />domain</td>
                <td>$60</td>
                <td>$100</td>
                <td>
                    <span className="text-center text-14 fw-500 text-green-2">
                        Winning
                    </span>
                </td>
                <td className="fw-500">$200</td>
                <td>22 Days</td>
            </tr>

            <tr>
                <td>abcloremlpsumxyabcd.com<br />domain</td>
                <td>$60</td>
                <td>$100</td>
                <td>
                    <span className="text-center text-14 fw-500 text-stebr-pink">
                        Lost
                    </span>
                </td>
                <td className="fw-500">$200</td>
                <td>22 Days</td>
            </tr>

            <tr>
                <td>abcloremlpsumxyabcd.com<br />domain</td>
                <td>$60</td>
                <td>$100</td>
                <td>
                    <span className="text-center text-14 fw-500 text-green-2">
                        Won
                    </span>
                </td>
                <td className="fw-500">$200</td>
                <td>22 Days</td>
            </tr>

            <tr>
                <td>abcloremlpsumxyabcd.com<br />domain</td>
                <td>$60</td>
                <td>$100</td>
                <td>
                    <span className="text-center text-14 fw-500 text-stebr-pink">
                        Losing
                    </span>
                </td>
                <td className="fw-500">$200</td>
                <td>22 Days</td>
            </tr>
        </tbody>
    </table>)
}

export default MyBidsTableComponent;